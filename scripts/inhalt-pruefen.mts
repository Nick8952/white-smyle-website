/**
 * Prüft die lokalen Inhaltsdateien (data/) auf Vollständigkeit – läuft ohne Sanity.
 *   npm run inhalt:pruefen
 * Meldet fehlende Bilder/Alt-Texte, doppelte Slugs/_keys/Anker, unbekannte Bausteine, fehlende Dateien, unzulässige
 * Linkziele, interne Links auf nicht vorhandene Seiten, Referenzen auf unbekannte IDs, Preis-Plausibilität
 * (Kombipreis vs. Einzelpreise, Aktion vs. Preisliste) und – als Warnung – medizinische Inhalte ohne Quellenangabe.
 */
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const DATA = path.resolve(process.cwd(), "data");
const PUBLIC = path.resolve(process.cwd(), "public");
type Roh = Record<string, unknown>;
const json = async <T,>(p: string): Promise<T> => JSON.parse(await readFile(path.join(DATA, p), "utf8")) as T;
const fehler: string[] = [];
const warnungen: string[] = [];
const bilder = await json<Record<string, unknown>>("bilder.json");
const BAUSTEINE = new Set(["textBaustein", "spaltenBaustein", "hinweisBaustein", "leistungenBaustein", "kombinationenBaustein", "preistafelBaustein", "aktionBaustein", "ablaufBaustein", "faqBaustein", "vergleichBaustein", "stufenBaustein", "teamBaustein", "kundenmeinungenBaustein", "galerieBaustein", "bildBaustein", "fallbeispieleBaustein", "aufrufBaustein", "fragebogenBaustein", "fragebogenListeBaustein", "karteBaustein", "videoBaustein", "downloadsBaustein", "kontaktBaustein", "rechtstextBaustein", "zahlungsartenBaustein", "ratgeberListeBaustein", "medienstimmenBaustein", "linkkartenBaustein", "kennzahlenBaustein", "datenschutzEinstellungenBaustein"]);
const linkErlaubt = (z: string) => /^\/(?!\/)/.test(z) || /^(https?:\/\/[^\s]+|mailto:[^\s]+|tel:\+?[\d\s()-]+)$/.test(z);
const kennung = /^[a-z0-9-]+$/;
const GEDANKENSTRICHE = /[—]/;

function bildPruefen(ref: { bild?: string; alt?: string } | undefined, ort: string) {
  if (!ref) return;
  if (!ref.bild || !bilder[ref.bild]) fehler.push(`${ort}: Bild «${ref.bild}» fehlt in bilder.json`);
  if (typeof ref.alt !== "string" || !ref.alt.trim()) fehler.push(`${ort}: Alt-Text fehlt`);
}
const interneLinks: [string, string][] = [];
const linkSammeln = (ziel: unknown, ort: string) => {
  if (typeof ziel !== "string") return;
  if (!linkErlaubt(ziel)) fehler.push(`${ort}: unzulässiges Linkziel «${ziel}»`);
  if (ziel.startsWith("/")) interneLinks.push([ziel, ort]);
};
function richTextPruefen(inhalt: unknown, ort: string) {
  for (const block of (inhalt as { _type?: string; markDefs?: { href?: string }[]; children?: { text?: string }[] }[]) ?? []) {
    for (const m of block.markDefs ?? []) linkSammeln(m.href, ort);
    for (const c of block.children ?? []) if (typeof c.text === "string" && GEDANKENSTRICHE.test(c.text)) fehler.push(`${ort}: Geviertstrich im Text («${c.text.slice(0, 40)}…»)`);
  }
}
const textPruefen = (t: unknown, ort: string) => { if (typeof t === "string" && GEDANKENSTRICHE.test(t)) fehler.push(`${ort}: Geviertstrich «—» im Text`); };

const e = await json<Roh>("einstellungen.json");
for (const k of ["marke", "rechtstraeger", "verantwortlich", "telefon", "mobil", "email", "buchungUrl", "shopUrl", "routenlink", "kartenEinbettung"]) if (!e[k]) fehler.push(`Einstellungen: ${k} fehlt`);
bildPruefen(e.seoBild as never, "Einstellungen SEO-Bild");
{
  const ZEIT = /^([01]\d|2[0-3]):[0-5]\d$/;
  const zk = new Set<string>();
  for (const z of (e.oeffnungszeiten as Roh[]) ?? []) {
    if (!z._key || zk.has(z._key as string)) fehler.push(`Öffnungszeiten: _key fehlt oder doppelt`);
    zk.add(z._key as string);
    const intervalle = (z.intervalle as { _key?: string; von?: string; bis?: string }[] | undefined) ?? [];
    for (const i of intervalle) if (!i._key || !ZEIT.test(i.von ?? "") || !ZEIT.test(i.bis ?? "")) fehler.push(`Öffnungszeiten ${z._key}: Zeitspanne ungültig (HH:MM, _key)`);
    if (!z.nachVereinbarung && (((z.wochentage as unknown[])?.length ?? 0) > 0) !== intervalle.length > 0) fehler.push(`Öffnungszeiten ${z._key}: «wochentage» und «intervalle» gehören zusammen`);
  }
}
const t = await json<Roh>("texte.json");
for (const g of (t.navigation as Roh[]) ?? []) { linkSammeln(g.ziel, `Navigation ${g.titel}`); for (const k of (g.kinder as Roh[]) ?? []) linkSammeln(k.ziel, `Navigation ${g.titel} › ${k.titel}`); }
linkSammeln((t.navigationKnopf as Roh)?.ziel, "Navigation Knopf");
for (const g of (t.footerLinks as Roh[]) ?? []) for (const l of (g.links as Roh[]) ?? []) linkSammeln(l.ziel, `Footer ${g.titel}`);
for (const l of (t.rechtslinks as Roh[]) ?? []) linkSammeln(l.ziel, "Rechtslinks");
for (const gruppe of ["ui", "einwilligung", "formular"]) for (const [k, v] of Object.entries((t[gruppe] as Roh) ?? {})) { if (v === "" || v === undefined) fehler.push(`texte.json: ${gruppe}.${k} leer`); textPruefen(v, `texte.json ${gruppe}.${k}`); }

const leistungen = await json<Roh[]>("leistungen.json");
const lid = new Set<string>();
for (const l of leistungen) {
  const ort = `Leistung ${l.id}`;
  if (!l.id || lid.has(l.id as string)) fehler.push(`${ort}: ID fehlt oder doppelt`); lid.add(l.id as string);
  if (!l.titel || !l.kurztitel || !l.kurzbeschreibung) fehler.push(`${ort}: Titel/Kurztitel/Kurzbeschreibung fehlt`);
  if (!["dentalhygiene", "bleaching"].includes(l.kategorie as string)) fehler.push(`${ort}: Kategorie ungültig`);
  if (!["fix", "ab", "anfrage"].includes(l.preisArt as string)) fehler.push(`${ort}: preisArt ungültig`);
  if (l.preisArt !== "anfrage" && !Number.isInteger(l.preisChf)) fehler.push(`${ort}: preisChf fehlt oder nicht ganzzahlig`);
  if (l.preisArt === "anfrage" && l.preisChf !== undefined) fehler.push(`${ort}: preisArt «anfrage» darf keinen Preis haben`);
  if (l.seite) linkSammeln(l.seite, ort);
  if (!l.quelle) warnungen.push(`${ort}: keine Quellenangabe (medizinischer Inhalt)`);
  bildPruefen(l.bild as never, ort);
  for (const k of ["kurzbeschreibung", "dauer", "preisHinweis"]) textPruefen(l[k], ort);
}
const kombis = await json<Roh[]>("kombinationen.json");
const kid = new Set<string>();
for (const k of kombis) {
  const ort = `Kombination ${k.id}`;
  if (!k.id || kid.has(k.id as string)) fehler.push(`${ort}: ID fehlt oder doppelt`); kid.add(k.id as string);
  const teile = (k.leistungen as string[]) ?? [];
  if (teile.length < 2) fehler.push(`${ort}: mindestens zwei Leistungen`);
  let summe = 0; let alleFix = true;
  for (const id of teile) { const l = leistungen.find((x) => x.id === id); if (!l) { fehler.push(`${ort}: Leistung «${id}» existiert nicht`); continue; } if (l.preisArt === "fix" && Number.isInteger(l.preisChf)) summe += l.preisChf as number; else alleFix = false; }
  if (!Number.isInteger(k.preisChf)) fehler.push(`${ort}: preisChf fehlt`);
  else if (alleFix && (k.preisChf as number) > summe) warnungen.push(`${ort}: Kombipreis ${k.preisChf} ist höher als die Einzelpreise (${summe})`);
  if (!k.quelle) warnungen.push(`${ort}: keine Quellenangabe`);
  bildPruefen(k.bild as never, ort);
}
const aktionen = await json<Roh[]>("aktionen.json");
for (const a of aktionen) {
  const ort = `Aktion ${a.id}`;
  if (!["aktiv-bestaetigt", "gueltigkeit-ungeklaert", "geplant", "abgelaufen"].includes(a.status as string)) fehler.push(`${ort}: Status ungültig`);
  if (!Number.isInteger(a.aktionspreisChf) || !Number.isInteger(a.vergleichspreisChf)) fehler.push(`${ort}: Preise fehlen`);
  if ((a.aktionspreisChf as number) >= (a.vergleichspreisChf as number)) fehler.push(`${ort}: Aktionspreis nicht unter dem Vergleichspreis`);
  if (a.leistung) { const l = leistungen.find((x) => x.id === a.leistung); if (!l) fehler.push(`${ort}: Leistung «${a.leistung}» existiert nicht`); else if (l.preisChf !== a.vergleichspreisChf) fehler.push(`${ort}: Vergleichspreis ${a.vergleichspreisChf} ≠ Listenpreis ${l.preisChf} der Leistung`); }
  const komb = a.kombination as Roh | undefined;
  if (komb) { const k = kombis.find((x) => x.id === komb.kombination); if (!k) fehler.push(`${ort}: Kombination «${komb.kombination}» existiert nicht`); else if (k.preisChf !== komb.vergleichspreisChf) fehler.push(`${ort}: Kombi-Vergleichspreis ${komb.vergleichspreisChf} ≠ Listenpreis ${k.preisChf}`); }
  if (!a.quelle) warnungen.push(`${ort}: keine Quellenangabe`);
}
const team = await json<Roh[]>("team.json");
for (const p of team) { const ort = `Team ${p.id}`; if (!p.vorname || !p.nachname || !p.funktion) fehler.push(`${ort}: Name/Funktion fehlt`); bildPruefen(p.bild as never, ort); }
const meinungen = await json<Roh[]>("kundenmeinungen.json");
const mid = new Set<string>();
for (const m of meinungen) { const ort = `Kundenmeinung ${m.id}`; if (!m.id || mid.has(m.id as string)) fehler.push(`${ort}: ID fehlt oder doppelt`); mid.add(m.id as string); if (!m.name || !m.text || !m.quelle) fehler.push(`${ort}: Name/Text/Quelle fehlt`); if (m.sterne !== undefined && (!Number.isInteger(m.sterne) || (m.sterne as number) < 1 || (m.sterne as number) > 5)) fehler.push(`${ort}: Sterne ungültig`); }
const fragebogen = await json<Roh[]>("fragebogen.json");
for (const f of fragebogen) { const ort = `Fragebogen ${f.id}`; if (!f.titel || !f.slug || !f.originalUrl || !f.quelle) fehler.push(`${ort}: Pflichtfeld fehlt`); const fk = new Set<string>(); for (const q of (f.fragen as Roh[]) ?? []) { if (!q._key || fk.has(q._key as string)) fehler.push(`${ort}: Frage-_key fehlt/doppelt`); fk.add(q._key as string); if (!["jaNein", "auswahl", "text"].includes(q.art as string)) fehler.push(`${ort}: Frageart ungültig`); if (q.art === "auswahl" && !(q.optionen as unknown[])?.length) fehler.push(`${ort}: Auswahl ohne Optionen`); } }
const downloads = await json<Roh[]>("downloads.json");
for (const d of downloads) { try { await stat(path.join(PUBLIC, d.datei as string)); } catch { fehler.push(`Download ${d.id}: Datei public${d.datei} fehlt`); } }
const medien = await json<Roh[]>("medienstimmen.json");
for (const m of medien) { const ort = `Medienstimme ${m.id}`; bildPruefen(m.logo as never, ort); bildPruefen(m.bild as never, ort); if (m.datei) { try { await stat(path.join(PUBLIC, m.datei as string)); } catch { fehler.push(`${ort}: Datei fehlt`); } } if (!m.url && !m.datei && !m.bild) warnungen.push(`${ort}: weder Link noch Datei noch Bild`); }
for (const z of await json<Roh[]>("zahlungsarten.json")) bildPruefen(z.bild as never, `Zahlungsart ${z.id}`);
const rechtstexte = new Set<string>();
for (const f of await readdir(path.join(DATA, "rechtstexte"))) { const r = await json<Roh>(`rechtstexte/${f}`); if (`${r.art}.json` !== f) fehler.push(`rechtstexte/${f}: Dateiname passt nicht zu art «${r.art}»`); rechtstexte.add(r.art as string); richTextPruefen(r.inhalt, `Rechtstext ${r.art}`); }
for (const art of ["impressum", "datenschutz", "agb"]) if (!rechtstexte.has(art)) fehler.push(`Rechtstext «${art}» fehlt`);

const slugs = new Set<string>();
const seitenDateien = (await readdir(path.join(DATA, "seiten"))).filter((x) => x.endsWith(".json"));
for (const f of seitenDateien) {
  const s = await json<Roh>(`seiten/${f}`);
  const slug = s.slug as string;
  const ort = `Seite ${slug}`;
  if (slugs.has(slug)) fehler.push(`Doppelter Slug: ${ort}`); slugs.add(slug);
  if (`${slug.replaceAll("/", "__")}.json` !== f) fehler.push(`seiten/${f}: Dateiname passt nicht zum Slug «${slug}»`);
  if (!s.titel) fehler.push(`${ort}: Titel fehlt`);
  if (!["seite", "leistung", "ratgeber", "fragebogen", "rechtliches"].includes(s.art as string)) fehler.push(`${ort}: art ungültig`);
  if (s.art === "ratgeber" && !s.teaser) warnungen.push(`${ort}: Ratgeber ohne Teaser`);
  if (!(s.bausteine as unknown[])?.length) fehler.push(`${ort}: keine Bausteine (leere Seite)`);
  for (const k of ["titel", "teaser", "einleitung", "seoTitel", "seoBeschreibung"]) textPruefen(s[k], ort);
  if (typeof s.seoBeschreibung === "string" && s.seoBeschreibung.length > 170) warnungen.push(`${ort}: SEO-Beschreibung ${s.seoBeschreibung.length} Zeichen`);
  bildPruefen(s.bild as never, `${ort} Titelbild`);
  const hero = s.hero as Roh | undefined;
  if (hero) { bildPruefen(hero.bild as never, `${ort} hero`); for (const k of ["knopf", "zweiterKnopf"]) linkSammeln((hero[k] as { ziel?: string } | undefined)?.ziel, `${ort} hero`); textPruefen(hero.titel, `${ort} hero`); textPruefen(hero.text, `${ort} hero`);
    for (const f of (hero.fakten as string[] | undefined) ?? []) textPruefen(f, `${ort} hero.fakten`);
    const angebot = hero.angebot as { titel?: string; preisText?: string; hinweis?: string; link?: { ziel?: string } } | undefined;
    if (angebot) { textPruefen(angebot.titel, `${ort} hero.angebot`); textPruefen(angebot.hinweis, `${ort} hero.angebot`); linkSammeln(angebot.link?.ziel, `${ort} hero.angebot`); if (!/^(ab )?CHF \d+\.–$/.test(angebot.preisText ?? "")) fehler.push(`${ort} hero.angebot: preisText «${angebot.preisText}» muss wie «CHF 399.–» oder «ab CHF 399.–» aussehen`); } }
  if (!s.quelle && s.art !== "rechtliches") warnungen.push(`${ort}: keine Quellenangabe`);
  const keys = new Set<string>(); const anker = new Set<string>();
  for (const b of (s.bausteine as Roh[]) ?? []) {
    const bort = `${ort} › ${b._type}/${b._key}`;
    if (!BAUSTEINE.has(b._type as string)) fehler.push(`${bort}: unbekannter Baustein`);
    if (!b._key || keys.has(b._key as string)) fehler.push(`${bort}: _key fehlt oder doppelt`); keys.add(b._key as string);
    if (b.anker !== undefined) { if (!kennung.test(b.anker as string) || anker.has(b.anker as string)) fehler.push(`${bort}: Anker ungültig/doppelt`); anker.add(b.anker as string); }
    for (const k of ["titel", "kurzzeile", "einleitung", "text", "abschluss", "fazit", "hinweis", "quellenHinweis"]) textPruefen(b[k], bort);
    if ("bild" in b) bildPruefen(b.bild as never, bort);
    for (const k of ["inhalt", "anfahrt", "einleitung"]) if (Array.isArray(b[k])) richTextPruefen(b[k], bort);
    if (b._type === "textBaustein" && !(b.inhalt as unknown[])?.length) fehler.push(`${bort}: inhalt fehlt`);
    if (b._type === "hinweisBaustein" && !["info", "wichtig", "medizinisch"].includes(b.art as string)) fehler.push(`${bort}: art ungültig`);
    if (b._type === "leistungenBaustein") { if (!["karten", "liste"].includes(b.darstellung as string)) fehler.push(`${bort}: darstellung ungültig`); for (const id of (b.leistungen as string[]) ?? []) if (!lid.has(id)) fehler.push(`${bort}: Leistung «${id}» existiert nicht`); }
    if (b._type === "kombinationenBaustein") for (const id of (b.kombinationen as string[]) ?? []) if (!kid.has(id)) fehler.push(`${bort}: Kombination «${id}» existiert nicht`);
    if ((b._type === "aktionBaustein" || b._type === "preistafelBaustein") && b.aktion && !aktionen.some((a) => a.id === b.aktion)) fehler.push(`${bort}: Aktion «${b.aktion}» existiert nicht`);
    if (b._type === "aktionBaustein" && !b.aktion) fehler.push(`${bort}: aktion fehlt`);
    if (b._type === "teamBaustein") for (const id of (b.team as string[]) ?? []) if (!team.some((p) => p.id === id)) fehler.push(`${bort}: Teammitglied «${id}» existiert nicht`);
    if (b._type === "kundenmeinungenBaustein") { if (!["wand", "zitate"].includes(b.darstellung as string)) fehler.push(`${bort}: darstellung ungültig`); for (const id of (b.meinungen as string[]) ?? []) if (!mid.has(id)) fehler.push(`${bort}: Kundenmeinung «${id}» existiert nicht`); }
    if (b._type === "fragebogenBaustein" && !fragebogen.some((f) => f.id === b.fragebogen)) fehler.push(`${bort}: Fragebogen «${b.fragebogen}» existiert nicht`);
    if (b._type === "downloadsBaustein") for (const id of (b.downloads as string[]) ?? []) if (!downloads.some((d) => d.id === id)) fehler.push(`${bort}: Download «${id}» existiert nicht`);
    if (b._type === "galerieBaustein") for (const [i, x] of ((b.bilder as unknown[]) ?? []).entries()) bildPruefen(x as never, `${bort} Bild ${i + 1}`);
    if (b._type === "fallbeispieleBaustein") for (const f of (b.faelle as Roh[]) ?? []) for (const [i, x] of ((f.bilder as unknown[]) ?? []).entries()) bildPruefen(x as never, `${bort} ${f.titel} Bild ${i + 1}`);
    if (b._type === "ablaufBaustein" || b._type === "stufenBaustein") for (const s2 of ((b.schritte ?? b.stufen) as Roh[]) ?? []) { bildPruefen(s2.bild as never, `${bort} ${s2.titel}`); textPruefen(s2.text, bort); textPruefen(s2.titel, bort); }
    if (b._type === "faqBaustein") for (const q of (b.fragen as Roh[]) ?? []) { textPruefen(q.frage, bort); richTextPruefen(q.antwort, bort); }
    if (b._type === "vergleichBaustein") for (const sp of (b.spalten as Roh[]) ?? []) for (const p of (sp.punkte as string[]) ?? []) textPruefen(p, bort);
    if (b._type === "spaltenBaustein") for (const sp of (b.spalten as Roh[]) ?? []) richTextPruefen(sp.inhalt, bort);
    if (b._type === "kontaktBaustein") { for (const k of ["mitKarte", "mitFormular"]) if (typeof b[k] !== "boolean") fehler.push(`${bort}: ${k} muss true/false sein`); for (const [i, x] of ((b.anfahrtBilder as unknown[]) ?? []).entries()) bildPruefen(x as never, `${bort} Anfahrt ${i + 1}`); }
    if (b._type === "aufrufBaustein") { if (!b.knopf) fehler.push(`${bort}: knopf fehlt`); if (!["band", "karte"].includes(b.variante as string)) fehler.push(`${bort}: variante ungültig`); }
    if (b._type === "linkkartenBaustein") for (const k of (b.karten as Roh[]) ?? []) { bildPruefen(k.bild as never, `${bort} ${k.titel}`); linkSammeln((k.link as Roh)?.ziel, bort); textPruefen(k.text, bort); }
    if (b._type === "videoBaustein" && !/^[\w-]{6,20}$/.test(String(b.youtubeId))) fehler.push(`${bort}: youtubeId ungültig`);
    if (b._type === "rechtstextBaustein" && !rechtstexte.has(b.rechtstext as string)) fehler.push(`${bort}: Rechtstext «${b.rechtstext}» fehlt`);
    if (b._type === "ratgeberListeBaustein") for (const sl of (b.seiten as string[]) ?? []) if (!seitenDateien.includes(`${sl.replaceAll("/", "__")}.json`)) fehler.push(`${bort}: Ratgeberseite «${sl}» existiert nicht`);
    for (const k of ["knopf", "zweiterKnopf"]) linkSammeln((b[k] as { ziel?: string } | undefined)?.ziel, bort);
  }
}
for (const f of fragebogen) if (!slugs.has(`tests/${f.slug}`)) warnungen.push(`Fragebogen ${f.id}: keine Seite tests/${f.slug}`);
for (const l of leistungen) if (l.seite && !slugs.has((l.seite as string).replace(/^\/|\/$/g, ""))) fehler.push(`Leistung ${l.id}: Detailseite «${l.seite}» existiert nicht`);
for (const w of await json<{ von: string; nach: string }[]>("weiterleitungen.json")) { const slug = w.nach.replace(/^\/|\/$/g, "") || "start"; if (!slugs.has(slug)) fehler.push(`Weiterleitung ${w.von} → ${w.nach}: Zielseite fehlt`); }
for (const [ziel, ort] of interneLinks) {
  const m = ziel.match(/^\/([a-z0-9/-]*?)\/?(?:[#?].*)?$/);
  if (!m) { fehler.push(`${ort}: interner Link «${ziel}» hat nicht die Form /pfad/`); continue; }
  const slug = m[1] || "start";
  if (!slugs.has(slug)) fehler.push(`${ort}: interner Link «${ziel}» zeigt auf keine Seite`);
}
for (const w of warnungen) console.warn(`  ! ${w}`);
if (fehler.length) { console.error(`✗ ${fehler.length} Problem(e):\n` + fehler.map((f) => `  - ${f}`).join("\n")); process.exit(1); }
console.log(`✓ Inhalte in Ordnung: ${slugs.size} Seiten, ${leistungen.length} Leistungen, ${kombis.length} Kombipakete, ${aktionen.length} Aktion(en), ${meinungen.length} Kundenmeinungen, ${fragebogen.length} Fragebögen, ${Object.keys(bilder).length} Bilder, ${interneLinks.length} interne Links; ${warnungen.length} Hinweis(e).`);
