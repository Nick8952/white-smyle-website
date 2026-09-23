/**
 * Importskript: lokale Demo-Inhalte (data/), freigegebene Originalbilder (assets/originale/) und PDFs (public/downloads/) → Sanity.
 *
 * NUR NACH DER SANITY-EINRICHTUNG AUSFÜHREN (docs/SANITY-VERCEL-EINRICHTUNG.md).
 * Braucht in .env.local: NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_API_WRITE_TOKEN.
 *
 *   npm run seed -- --probe   zeigt nur, was passieren würde (kein Schreibzugriff) – EMPFOHLENER ERSTER SCHRITT
 *   npm run seed              legt fehlende Dokumente an, überschreibt NICHTS Vorhandenes
 *   npm run seed -- --force   ersetzt die vom Skript verwalteten Dokumente (nur die mit bekannten IDs)
 *
 * Dokument-IDs sind deterministisch (die `id`-Felder der JSON-Dateien; Seiten: seite-<slug mit ->), _key-Werte stammen
 * unverändert aus den JSON-Dateien. Sanity dedupliziert Assets anhand des Dateiinhalts – Wiederholungen legen keine Duplikate an.
 * Status: lokal nur mit --probe geprüft; der eigentliche Upload ist erst mit einem echten Projekt überprüfbar.
 */
import { createClient, type SanityClient } from "@sanity/client";
import nextEnv from "@next/env";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

nextEnv.loadEnvConfig(process.cwd());
const force = process.argv.includes("--force");
const probe = process.argv.includes("--probe");
const WURZEL = process.cwd();
const json = async <T,>(p: string): Promise<T> => JSON.parse(await readFile(path.join(WURZEL, "data", p), "utf8")) as T;

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
if (!probe && (!projectId || !token)) {
  console.error("Fehlend: NEXT_PUBLIC_SANITY_PROJECT_ID und/oder SANITY_API_WRITE_TOKEN in .env.local (siehe .env.example).");
  process.exit(1);
}
const client: SanityClient = createClient({ projectId: projectId ?? "probe", dataset, token, apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-09-23", useCdn: false });

type Roh = Record<string, unknown>;
type BildRef = { bild: string; alt: string; bildunterschrift?: string };
const bilder = await json<Record<string, { id: string; original: string }>>("bilder.json");
const assetIds = new Map<string, string>();

async function hochladen(art: "image" | "file", datei: string, kennung: string): Promise<string> {
  const schluessel = `${art}:${kennung}`;
  if (assetIds.has(schluessel)) return assetIds.get(schluessel)!;
  if (probe) {
    await readFile(datei);
    console.log(`  [probe] würde hochladen (${art}): ${path.relative(WURZEL, datei)}`);
    assetIds.set(schluessel, `probe-${kennung}`);
    return `probe-${kennung}`;
  }
  const asset = await client.assets.upload(art, await readFile(datei), { filename: path.basename(datei), label: kennung });
  console.log(`  hochgeladen (${art}): ${path.relative(WURZEL, datei)} → ${asset._id}`);
  assetIds.set(schluessel, asset._id);
  return asset._id;
}
async function bild(ref: BildRef | undefined) {
  if (!ref) return undefined;
  const eintrag = bilder[ref.bild];
  if (!eintrag) throw new Error(`Bild «${ref.bild}» fehlt in data/bilder.json`);
  return { _type: "bild", asset: { _type: "reference", _ref: await hochladen("image", path.join(WURZEL, eintrag.original), ref.bild) }, alt: ref.alt, ...(ref.bildunterschrift ? { bildunterschrift: ref.bildunterschrift } : {}) };
}
async function bilderListe(refs: unknown) { return Promise.all(((refs as BildRef[]) ?? []).map(async (x, i) => ({ _key: `bild-${i}`, ...(await bild(x)) }))); }
async function datei(pfad: string, kennung: string) { return { _type: "file", asset: { _type: "reference", _ref: await hochladen("file", path.join(WURZEL, "public", pfad), kennung) } }; }
const ref = (_ref: string, key?: string) => ({ _type: "reference", _ref, ...(key ? { _key: key } : {}) });
const refs = (ids: unknown) => ((ids as string[] | undefined) ?? []).map((id) => ref(id, id));
const link = (l: unknown) => (l && typeof l === "object" ? { _type: "link", ...(l as object) } : undefined);
const slug = (s: unknown) => (typeof s === "string" ? { _type: "slug", current: s } : undefined);
const mitKeys = (liste: unknown, praefix: string, typ: string): Roh[] => ((liste as Roh[]) ?? []).map((x, i) => ({ _type: typ, _key: (x._key as string) ?? `${praefix}-${i}`, ...x }));

async function bausteinUmwandeln(b: Roh) {
  const k: Roh = { ...b, anker: slug(b.anker) };
  for (const f of ["knopf", "zweiterKnopf"]) if (f in b) k[f] = link(b[f]);
  if ("bild" in b && b._type !== "linkkartenBaustein") k.bild = await bild(b.bild as BildRef | undefined);
  if (b._type === "leistungenBaustein") k.leistungen = refs(b.leistungen);
  if (b._type === "kombinationenBaustein") k.kombinationen = refs(b.kombinationen);
  if (b._type === "preistafelBaustein" || b._type === "aktionBaustein") k.aktion = b.aktion ? ref(b.aktion as string) : undefined;
  if (b._type === "teamBaustein") k.team = refs(b.team);
  if (b._type === "kundenmeinungenBaustein") k.meinungen = refs(b.meinungen);
  if (b._type === "downloadsBaustein") k.downloads = refs(b.downloads);
  if (b._type === "fragebogenBaustein") k.fragebogen = ref(b.fragebogen as string);
  if (b._type === "rechtstextBaustein") k.rechtstext = ref(`rechtstext-${b.rechtstext as string}`);
  if (b._type === "ratgeberListeBaustein") k.seiten = ((b.seiten as string[] | undefined) ?? []).map((s) => ref(`seite-${s.replaceAll("/", "-")}`, s));
  if (b._type === "galerieBaustein") k.bilder = await bilderListe(b.bilder);
  if (b._type === "kontaktBaustein") k.anfahrtBilder = await bilderListe(b.anfahrtBilder);
  if (b._type === "ablaufBaustein") k.schritte = await Promise.all(mitKeys(b.schritte, "schritt", "schritt").map(async (s) => ({ ...s, bild: await bild(s.bild as BildRef | undefined) })));
  if (b._type === "stufenBaustein") k.stufen = await Promise.all(mitKeys(b.stufen, "stufe", "stufe").map(async (s) => ({ ...s, bild: await bild(s.bild as BildRef | undefined) })));
  if (b._type === "fallbeispieleBaustein") k.faelle = await Promise.all(mitKeys(b.faelle, "fall", "fall").map(async (f) => ({ ...f, bilder: await bilderListe(f.bilder) })));
  if (b._type === "linkkartenBaustein") k.karten = await Promise.all(mitKeys(b.karten, "karte", "linkkarte").map(async (x) => ({ ...x, link: link(x.link), bild: await bild(x.bild as BildRef | undefined) })));
  if (b._type === "faqBaustein") k.fragen = mitKeys(b.fragen, "frage", "frage");
  if (b._type === "vergleichBaustein") k.spalten = mitKeys(b.spalten, "spalte", "vergleichSpalte");
  if (b._type === "spaltenBaustein") k.spalten = mitKeys(b.spalten, "spalte", "spalte");
  return k;
}

const dokumente: Roh[] = [];
const e = await json<Roh>("einstellungen.json");
dokumente.push({ ...e, _id: "einstellungen", _type: "einstellungen", adresse: { _type: "adresse", ...(e.adresse as object) }, kennzahlen: mitKeys(e.kennzahlen, "kz", "kennzahl"), oeffnungszeiten: mitKeys(e.oeffnungszeiten, "oz", "oeffnungszeit").map((z) => ({ ...z, intervalle: mitKeys(z.intervalle, "iv", "intervall") })), logo: await bild(e.logo as BildRef | undefined), seoBild: await bild(e.seoBild as BildRef | undefined) });
const t = await json<Roh>("texte.json");
dokumente.push({ ...t, _id: "texte", _type: "texte", navigation: mitKeys(t.navigation, "nav", "navGruppe").map((g) => ({ ...g, kinder: mitKeys(g.kinder, "kind", "link") })), navigationKnopf: link(t.navigationKnopf), footerLinks: mitKeys(t.footerLinks, "fg", "footerGruppe").map((g) => ({ ...g, links: mitKeys(g.links, "fl", "link") })), rechtslinks: mitKeys(t.rechtslinks, "recht", "link"), formular: { ...(t.formular as Roh), anliegenOptionen: mitKeys((t.formular as Roh).anliegenOptionen, "opt", "option") } });
for (const l of await json<Roh[]>("leistungen.json")) dokumente.push({ ...l, _id: l.id as string, _type: "leistung", id: undefined, bild: await bild(l.bild as BildRef | undefined) });
for (const k of await json<Roh[]>("kombinationen.json")) dokumente.push({ ...k, _id: k.id as string, _type: "kombination", id: undefined, leistungen: refs(k.leistungen), bild: await bild(k.bild as BildRef | undefined) });
for (const a of await json<Roh[]>("aktionen.json")) { const komb = a.kombination as Roh | undefined; dokumente.push({ ...a, _id: a.id as string, _type: "aktion", id: undefined, leistung: a.leistung ? ref(a.leistung as string) : undefined, kombination: komb ? { ...komb, kombination: ref(komb.kombination as string) } : undefined }); }
for (const p of await json<Roh[]>("team.json")) dokumente.push({ ...p, _id: p.id as string, _type: "teammitglied", id: undefined, bild: await bild(p.bild as BildRef | undefined) });
for (const m of await json<Roh[]>("kundenmeinungen.json")) dokumente.push({ ...m, _id: m.id as string, _type: "kundenmeinung", id: undefined });
for (const m of await json<Roh[]>("medienstimmen.json")) dokumente.push({ ...m, _id: m.id as string, _type: "medienstimme", id: undefined, logo: await bild(m.logo as BildRef | undefined), bild: await bild(m.bild as BildRef | undefined), datei: m.datei ? await datei(m.datei as string, m.id as string) : undefined });
for (const f of await json<Roh[]>("fragebogen.json")) dokumente.push({ ...f, _id: f.id as string, _type: "fragebogen", id: undefined, slug: slug(f.slug), fragen: mitKeys(f.fragen, "frage", "frage") });
for (const d of await json<Roh[]>("downloads.json")) dokumente.push({ ...d, _id: d.id as string, _type: "download", id: undefined, datei: await datei(d.datei as string, d.id as string), dateiname: undefined, groesseKb: undefined });
for (const z of await json<Roh[]>("zahlungsarten.json")) dokumente.push({ ...z, _id: z.id as string, _type: "zahlungsart", id: undefined, bild: undefined, logo: await bild(z.bild as BildRef | undefined) });
for (const f of await readdir(path.join(WURZEL, "data", "rechtstexte"))) { const r = await json<Roh>(`rechtstexte/${f}`); dokumente.push({ ...r, _id: r.id as string, _type: "rechtstext", id: undefined }); }
for (const f of await readdir(path.join(WURZEL, "data", "seiten"))) {
  const s = await json<Roh>(`seiten/${f}`);
  const hero = s.hero as Roh | undefined;
  dokumente.push({ ...s, _id: s.id as string, _type: "seite", id: undefined, slug: slug(s.slug), bild: await bild(s.bild as BildRef | undefined), hero: hero ? { ...hero, knopf: link(hero.knopf), zweiterKnopf: link(hero.zweiterKnopf), bild: await bild(hero.bild as BildRef | undefined) } : undefined, bausteine: await Promise.all(((s.bausteine as Roh[]) ?? []).map(bausteinUmwandeln)) });
}

console.log(`${dokumente.length} Dokumente, ${assetIds.size} Dateien. Modus: ${probe ? "PROBE (kein Schreiben)" : force ? "FORCE (ersetzen)" : "nur fehlende anlegen"}`);
if (probe) { for (const d of dokumente) console.log(`  ${d._type}: ${d._id}`); process.exit(0); }
const tx = client.transaction();
for (const d of dokumente) { const sauber = JSON.parse(JSON.stringify(d)); if (force) tx.createOrReplace(sauber); else tx.createIfNotExists(sauber); }
const ergebnis = await tx.commit();
console.log(`Fertig: ${ergebnis.results.length} Operationen. Nächster Schritt: im Studio prüfen (/studio) – der Seed schreibt direkt veröffentlichte Dokumente.`);
