// Viewport-Screenshots in Scrollschritten (realistisch für Sticky-Kopfzeile und Scroll-Animationen).
// Aufruf: node werkzeuge/qa/screenshots.mjs  ·  SEITEN=/,/preise/  BREITEN=360,768,1440  FRAMES=6  REDUZIERT=1  EINWILLIGUNG=ja
import { mkdirSync } from "node:fs";
import { BASE, browserStarten, warten } from "./chrome.mjs";
const seiten = (process.env.SEITEN ?? "/,/dentalhygiene/,/preise/,/kontakt/,/ratgeber/mundgeruch/").split(",");
const breiten = (process.env.BREITEN ?? "360,768,1440").split(",").map(Number);
const maxFrames = Number(process.env.FRAMES ?? 6);
mkdirSync("pruefung/screenshots", { recursive: true });
const browser = await browserStarten();
const page = await browser.newPage();
if (process.env.REDUZIERT === "1") await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
for (const b of breiten) {
  const h = b < 700 ? 780 : 900;
  await page.setViewport({ width: b, height: h });
  for (const s of seiten) {
    await page.goto(BASE + s, { waitUntil: "networkidle0" });
    if (process.env.EINWILLIGUNG === "ja") { await page.evaluate(() => { localStorage.setItem("white-smyle-einwilligung", JSON.stringify({ version: 1, zeitpunkt: new Date().toISOString(), medien: true })); location.reload(); }); await page.waitForNetworkIdle(); }
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    const frames = Math.min(maxFrames, Math.ceil(total / h));
    for (let i = 0; i < frames; i++) { await page.evaluate((y) => window.scrollTo(0, y), i * h); await warten(600); await page.screenshot({ path: `pruefung/screenshots/${s.replaceAll("/", "_") || "_"}-${b}-${i}.png` }); }
    console.log(`${b} ${s} ${frames} Bilder`);
  }
}
await browser.close();
