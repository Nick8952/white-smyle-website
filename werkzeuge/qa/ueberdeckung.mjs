// Überdeckungsprüfung: findet sichtbaren Text, der von einem anderen Element verdeckt wird (z. B. eine absolut positionierte
// Farbfläche über der Infoleiste, 24.09.2026). Der Viewport wird auf die volle Seitenhöhe gesetzt, damit jede Stelle ohne Scrollen
// geprüft werden kann; fixierte/klebende Elemente (Kopfzeile, Einwilligungsbanner) werden ignoriert, die Einwilligung ist vorab gesetzt.
// Aufruf: node werkzeuge/qa/ueberdeckung.mjs  (Vorschau-Server: npm run vorschau:pages)  ·  SEITEN=/,/preise/  BREITEN=1024,1440
import { readdirSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { BASE, browserStarten, warten } from "./chrome.mjs";

const alleSeiten = () => ["/", ...readdirSync("data/seiten").filter((f) => f.endsWith(".json")).map((f) => JSON.parse(readFileSync(`data/seiten/${f}`, "utf8")).slug).filter((s) => s !== "start").map((s) => `/${s}/`)];
const seiten = process.env.SEITEN ? process.env.SEITEN.split(",") : alleSeiten();
const breiten = (process.env.BREITEN ?? "360,768,1024,1280,1440").split(",").map(Number);

const browser = await browserStarten();
const befunde = [];
for (const breite of breiten) {
  for (const seite of seiten) {
    // Pro Seite ein frischer Tab: ein seitenhoher Viewport der Vorseite verlangsamt sonst die nächste Navigation
    const p = await browser.newPage();
    await p.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await p.evaluateOnNewDocument(() => {
      try { localStorage.setItem("white-smyle-einwilligung", JSON.stringify({ version: 1, zeitpunkt: new Date().toISOString(), kategorien: { medien: false } })); } catch {}
    });
    await p.setViewport({ width: breite, height: 900 });
    try {
      await p.goto(BASE + seite, { waitUntil: "load", timeout: 60000 });
    } catch (err) {
      befunde.push({ breite, seite, text: "–", grund: `Seite lädt nicht: ${err.message}` });
      await p.close();
      continue;
    }
    // Warten, bis die Seitenhöhe stabil ist (client-seitig nachgeladene Teile, z. B. Einwilligungs-Einstellungen nach der Hydration),
    // dann den Viewport auf die volle Höhe setzen und erneut prüfen, bis Viewport und Seite übereinstimmen.
    let hoehe = 0;
    for (let i = 0; i < 10; i++) {
      await warten(250);
      const neu = await p.evaluate(() => document.documentElement.scrollHeight);
      if (neu === hoehe) break;
      hoehe = neu;
    }
    for (let i = 0; i < 4; i++) {
      await p.setViewport({ width: breite, height: Math.min(hoehe, 30000) });
      await warten(250);
      const neu = await p.evaluate(() => document.documentElement.scrollHeight);
      if (neu <= hoehe) break;
      hoehe = neu;
    }
    const gefunden = await p.evaluate(() => {
      const fixiert = (el) => { for (let e = el; e && e !== document.body; e = e.parentElement) { const pos = getComputedStyle(e).position; if (pos === "fixed" || pos === "sticky") return true; } return false; };
      const sichtbar = (el) => { const s = getComputedStyle(el); return s.visibility !== "hidden" && s.display !== "none" && Number(s.opacity) > 0.05 && !el.closest("[aria-hidden='true'], .nur-sr, dialog:not([open]), details:not([open]) > :not(summary)"); };
      const treffer = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.textContent.trim().length > 1 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT) });
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        const el = n.parentElement;
        if (!el || !sichtbar(el) || fixiert(el)) continue;
        const r = document.createRange(); r.selectNodeContents(n);
        for (const rect of r.getClientRects()) {
          if (rect.width < 4 || rect.height < 4) continue;
          // Prüfpunkte: Mitte sowie 10 % vom linken/rechten Rand der Textzeile
          for (const x of [rect.left + rect.width * 0.1, rect.left + rect.width / 2, rect.right - rect.width * 0.1]) {
            const y = rect.top + rect.height / 2;
            if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight) { treffer.push({ text: n.textContent.trim().slice(0, 40), grund: `ausserhalb des Viewports (x=${Math.round(x)}, y=${Math.round(y)}, Viewport ${innerWidth}×${innerHeight}, Seite ${document.documentElement.scrollHeight})` }); break; }
            const hit = document.elementFromPoint(x, y);
            if (!hit || hit === el || el.contains(hit) || hit.contains(el) || fixiert(hit)) continue;
            treffer.push({ text: n.textContent.trim().slice(0, 40), grund: `verdeckt von <${hit.tagName.toLowerCase()} class="${String(hit.className).slice(0, 60)}">` });
            break;
          }
        }
      }
      return treffer;
    });
    for (const b of gefunden) befunde.push({ breite, seite, ...b });
    console.log(`${breite} ${seite} ${gefunden.length ? gefunden.map((b) => `«${b.text}» ${b.grund}`).join(" | ") : "ok"}`);
    await p.close();
  }
}
await browser.close();
mkdirSync("pruefung", { recursive: true });
writeFileSync("pruefung/ueberdeckung.json", JSON.stringify(befunde, null, 2));
console.log(`\n${befunde.length} verdeckte Textstellen → pruefung/ueberdeckung.json`);
for (const b of befunde.slice(0, 40)) console.log(`  ${b.breite} ${b.seite} «${b.text}» ${b.grund}`);
process.exit(befunde.length ? 1 : 0);
