// Funktionsprüfungen: Einwilligung (Zustände, Anfragen, Speicher), Tastatur-Navigation, mobiles Menü, reduzierte Bewegung,
// mailto-Formular mit fiktiven Daten (kein Versand), Downloads. Löst keine Buchung aus und ruft keine Fremdseiten auf, ausser
// nach ausdrücklicher Test-Einwilligung die Google-Maps-Einbettung.
import { writeFileSync, mkdirSync } from "node:fs";
import { BASE, browserStarten, externeAnfragen, warten } from "./chrome.mjs";
const SCHLUESSEL = "white-smyle-einwilligung";
const ergebnisse = [];
const ok = (name, cond, detail = "") => { ergebnisse.push({ name, ok: !!cond, detail }); console.log(`${cond ? "✓" : "✗"} ${name}${detail ? " · " + detail : ""}`); };
const browser = await browserStarten();
async function frisch({ breite = 1440, reduziert = false } = {}) {
  const ctx = await browser.createBrowserContext();
  const page = await ctx.newPage();
  await page.setViewport({ width: breite, height: 900 });
  if (reduziert) await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  return { ctx, page, extern: externeAnfragen(page) };
}
const klick = async (page, text) => { const h = await page.evaluateHandle((t) => [...document.querySelectorAll("button,a,summary")].find((b) => b.textContent.trim() === t), text); const el = h.asElement(); if (!el) throw new Error("Element fehlt: " + text); await el.click(); };
const speicher = (page) => page.evaluate((k) => { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; }, SCHLUESSEL);
const bannerSichtbar = (page) => page.evaluate(() => !!document.querySelector('[role="region"] button') && [...document.querySelectorAll("button")].some((b) => b.textContent.trim() === "Alle akzeptieren" && b.getClientRects().length > 0));
const google = (extern) => extern.filter((e) => /google|gstatic|youtube|ytimg/.test(e));

// 1) Erstbesuch ohne Entscheidung
{
  const { ctx, page, extern } = await frisch();
  await page.goto(BASE + "/kontakt/", { waitUntil: "networkidle0" }); await warten(500);
  ok("Erstbesuch: keine externen Anfragen", extern.length === 0, extern.join(","));
  ok("Erstbesuch: Banner sichtbar", await bannerSichtbar(page));
  ok("Erstbesuch: kein Speicher, keine Cookies", (await speicher(page)) === null && (await page.evaluate(() => document.cookie)) === "");
  ok("Erstbesuch: keine Karte (iframe)", (await page.$("iframe")) === null);
  // 2) Alle akzeptieren
  await klick(page, "Alle akzeptieren"); await warten(1500);
  const sp = await speicher(page);
  ok("Alle akzeptieren: Banner weg", !(await bannerSichtbar(page)));
  ok("Alle akzeptieren: gespeichert medien=true, Version", sp?.kategorien?.medien === true && typeof sp.version === "number", JSON.stringify(sp));
  ok("Alle akzeptieren: Google-Maps-iframe geladen", !!(await page.$('iframe[src*="google"]')));
  ok("Alle akzeptieren: Anfragen an Google erst jetzt", google(extern).length > 0, google(extern).slice(0, 2).join(","));
  // 3) Neu laden
  extern.length = 0;
  await page.reload({ waitUntil: "networkidle0" }); await warten(500);
  ok("Neu laden: kein Banner, Karte bleibt", !(await bannerSichtbar(page)) && !!(await page.$('iframe[src*="google"]')));
  // 4) Widerruf über Einstellungsseite
  await page.goto(BASE + "/datenschutz-einstellungen/", { waitUntil: "networkidle0" }); await warten(300);
  await klick(page, "Einwilligung widerrufen"); await warten(300);
  const nachWiderruf = await speicher(page);
  ok("Widerruf: Speicher gelöscht oder medien=false", nachWiderruf === null || nachWiderruf.kategorien?.medien === false, JSON.stringify(nachWiderruf));
  extern.length = 0;
  await page.goto(BASE + "/kontakt/", { waitUntil: "networkidle0" }); await warten(500);
  ok("Nach Widerruf: keine Karte, keine Google-Anfragen", (await page.$("iframe")) === null && google(extern).length === 0, google(extern).join(","));
  await ctx.close();
}
// 5) Nur notwendige + Einmal laden
{
  const { ctx, page, extern } = await frisch();
  await page.goto(BASE + "/kontakt/", { waitUntil: "networkidle0" });
  await klick(page, "Nur notwendige"); await warten(500);
  const sp = await speicher(page);
  ok("Nur notwendige: medien=false gespeichert", sp?.kategorien?.medien === false, JSON.stringify(sp));
  ok("Nur notwendige: keine Karte, keine Google-Anfragen", (await page.$("iframe")) === null && google(extern).length === 0);
  const platzhalter = await page.evaluate(() => [...document.querySelectorAll("button")].map((b) => b.textContent.trim()).filter((t) => /Karte laden|Einmal laden/.test(t)));
  ok("Nur notwendige: Zwei-Klick-Platzhalter vorhanden", platzhalter.length >= 1, platzhalter.join(" / "));
  if (platzhalter.includes("Einmal laden")) {
    await klick(page, "Einmal laden"); await warten(1500);
    ok("Einmal laden: Karte erscheint, Entscheidung bleibt medien=false", !!(await page.$('iframe[src*="google"]')) && (await speicher(page))?.kategorien?.medien === false);
  }
  await ctx.close();
}
// 6) Einstellungen-Dialog
{
  const { ctx, page } = await frisch();
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await klick(page, "Einstellungen"); await warten(300);
  ok("Einstellungen: Dialog offen (Fokus im Dialog)", await page.evaluate(() => !!document.querySelector("dialog[open]") && document.activeElement?.closest("dialog") !== null));
  const cb = await page.$('dialog[open] input[type="checkbox"]:not([disabled])');
  ok("Einstellungen: Medien-Schalter vorhanden", !!cb);
  await klick(page, "Auswahl speichern"); await warten(300);
  const sp = await speicher(page);
  ok("Einstellungen speichern (ohne Haken): medien=false, Dialog zu", sp?.kategorien?.medien === false && !(await page.$("dialog[open]")), JSON.stringify(sp));
  await ctx.close();
}
// 7) Tastatur: Skip-Link, Dropdown, Escape
{
  const { ctx, page } = await frisch();
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  await page.keyboard.press("Tab");
  ok("Tastatur: erster Tab = Skip-Link", await page.evaluate(() => document.activeElement?.textContent?.trim() === "Zum Inhalt springen"));
  let gefunden = false;
  for (let i = 0; i < 8 && !gefunden; i++) { await page.keyboard.press("Tab"); gefunden = await page.evaluate(() => document.activeElement?.getAttribute("aria-expanded") !== null && document.activeElement?.tagName === "BUTTON"); }
  ok("Tastatur: Menüknopf mit aria-expanded erreichbar", gefunden);
  await page.keyboard.press("Enter"); await warten(150);
  ok("Tastatur: Enter öffnet Untermenü", await page.evaluate(() => document.activeElement?.getAttribute("aria-expanded") === "true"));
  await page.keyboard.press("ArrowDown"); await warten(100);
  ok("Tastatur: Pfeil nach unten fokussiert ersten Eintrag", await page.evaluate(() => document.activeElement?.tagName === "A" && !!document.activeElement.closest(".nav-untermenue")));
  await page.keyboard.press("Escape"); await warten(150);
  ok("Tastatur: Escape schliesst und gibt Fokus zurück", await page.evaluate(() => document.activeElement?.tagName === "BUTTON" && document.activeElement.getAttribute("aria-expanded") === "false"));
  const fokusSichtbar = await page.evaluate(() => { const st = getComputedStyle(document.activeElement, ":focus-visible"); return st.outlineStyle !== "none" || st.boxShadow !== "none"; });
  ok("Tastatur: Fokusring sichtbar", fokusSichtbar);
  await ctx.close();
}
// 8) Mobiles Menü
{
  const { ctx, page } = await frisch({ breite: 360 });
  await page.goto(BASE + "/preise/", { waitUntil: "networkidle0" });
  const knopf = await page.$("header button.lg\\:hidden");
  ok("Mobil: Menüknopf vorhanden (≥44px)", !!knopf && (await knopf.boundingBox()).height >= 44);
  await knopf.click(); await warten(300);
  ok("Mobil: Menü-Dialog offen, aktive Gruppe aufgeklappt", await page.evaluate(() => !!document.querySelector("dialog[open]") && !!document.querySelector("dialog[open] details[open]")));
  const kleine = await page.evaluate(() => [...document.querySelectorAll("dialog[open] a, dialog[open] summary, dialog[open] button")].filter((e) => e.getBoundingClientRect().height > 0 && e.getBoundingClientRect().height < 44).length);
  ok("Mobil: alle Menüziele ≥44px hoch", kleine === 0, `${kleine} zu klein`);
  await page.keyboard.press("Escape"); await warten(200);
  ok("Mobil: Escape schliesst Menü", !(await page.$("dialog[open]")));
  await ctx.close();
}
// 9) Bewegung
{
  const { ctx, page } = await frisch({ reduziert: true });
  await page.goto(BASE + "/", { waitUntil: "networkidle0" });
  ok("Reduzierte Bewegung: keine Animationen", await page.evaluate(() => { const a = document.querySelector(".auftauchen"); const h = document.querySelector(".hero-auftritt > *"); return getComputedStyle(a).animationName === "none" && getComputedStyle(h).animationName === "none"; }));
  await ctx.close();
  const n = await frisch();
  await n.page.goto(BASE + "/", { waitUntil: "networkidle0" });
  ok("Normale Bewegung: Scroll-Timeline aktiv", await n.page.evaluate(() => /view/.test(getComputedStyle(document.querySelector(".auftauchen")).animationTimeline)));
  await n.ctx.close();
}
// 10) mailto-Formular mit fiktiven Daten (kein Versand)
{
  const { ctx, page } = await frisch();
  const cdp = await page.createCDPSession();
  await cdp.send("Page.enable");
  const navigationen = [];
  cdp.on("Page.frameRequestedNavigation", (e) => navigationen.push(e.url));
  cdp.on("Page.frameScheduledNavigation", (e) => navigationen.push(e.url));
  await page.goto(BASE + "/kontakt/", { waitUntil: "networkidle0" });
  const form = await page.$('form[action^="mailto:"]');
  ok("Formular: action=mailto, method=get (No-JS-Fallback)", !!form && (await page.evaluate((f) => f.method === "get", form)));
  const felder = await page.evaluate(() => [...document.querySelectorAll('form[action^="mailto:"] input, form[action^="mailto:"] select, form[action^="mailto:"] textarea')].map((e) => `${e.tagName.toLowerCase()}:${e.name}:${e.type || ""}`));
  ok("Formular: nur organisatorische Felder, kein Upload", felder.length > 0 && !felder.some((f) => /file|gesund|diagnose|symptom|versich/i.test(f)), felder.join(" "));
  await page.type('form[action^="mailto:"] input[name="Name"]', "Testperson Fiktiv");
  await page.type('form[action^="mailto:"] input[name="Rueckrufnummer"]', "000 000 00 00");
  await page.type('form[action^="mailto:"] textarea', "Fiktive Testanfrage der QA. Bitte ignorieren.");
  await page.evaluate(() => document.querySelector('form[action^="mailto:"] button[type="submit"]').click()); await warten(800);
  const mailto = navigationen.find((u) => u.startsWith("mailto:")) ?? "";
  ok("Formular: Absenden erzeugt mailto:-Aufruf", mailto.startsWith("mailto:kontakt@whitesmyle.ch"), decodeURIComponent(mailto).slice(0, 160).replaceAll("\n", " "));
  ok("Formular: nichts gespeichert, URL unverändert", (await page.evaluate(() => Object.keys(localStorage).length + Object.keys(sessionStorage).length)) === 0 && page.url().split("?")[0] === BASE + "/kontakt/" && !page.url().includes("Name="));
  await ctx.close();
}
// 11) Downloads und 404
{
  const { ctx, page } = await frisch();
  for (const d of ["/downloads/artikel_quartiers_echo.pdf", "/downloads/mundgeruch_praevention.pdf"]) {
    const r = await page.goto(BASE + d);
    ok(`Download ${d}`, r.status() === 200 && /pdf/.test(r.headers()["content-type"] ?? ""), r.headers()["content-type"]);
  }
  const r = await page.goto(BASE + "/gibt-es-nicht/", { waitUntil: "networkidle0" });
  ok("404: Status 404 mit gestalteter Seite", r.status() === 404 && (await page.evaluate(() => !!document.querySelector("h1") && !!document.querySelector("header") && document.querySelector("meta[name=robots]")?.content.includes("noindex"))));
  await ctx.close();
}
await browser.close();
mkdirSync("pruefung", { recursive: true });
writeFileSync("pruefung/funktionen.json", JSON.stringify(ergebnisse, null, 1));
console.log(`\n${ergebnisse.filter((e) => e.ok).length}/${ergebnisse.length} bestanden → pruefung/funktionen.json`);
process.exitCode = ergebnisse.every((e) => e.ok) ? 0 : 1;
