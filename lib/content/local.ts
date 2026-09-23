import "server-only";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import type {
  Aktion, Baustein, Bild, Download, Einstellungen, Fragebogen, Inhaltsquelle, Kombination, Kundenmeinung, Leistung, Medienstimme,
  Rechtstext, Seite, SeitenTeaser, Teammitglied, Texte, Zahlungsart,
} from "./types";
import { BEKANNTE_BAUSTEINE } from "./types";

/**
 * Lokale Inhaltsquelle: liest die JSON-Dateien in data/.
 *
 * Aufbau (spiegelt die Sanity-Dokumente, gleiche Feldnamen, Rich Text als Portable Text):
 *   data/einstellungen.json        Praxisdaten (Singleton)
 *   data/texte.json                Navigation, Footer, Bedienelemente, Einwilligung, Formular
 *   data/bilder.json               von `npm run bilder` erzeugt
 *   data/leistungen.json, kombinationen.json, aktionen.json, team.json, kundenmeinungen.json,
 *   data/medienstimmen.json, fragebogen.json, downloads.json, zahlungsarten.json
 *   data/seiten/<slug mit __ statt />.json
 *   data/rechtstexte/<art>.json
 * Bilder werden per Kennung referenziert (`{ "bild": "team-tuende", "alt": "…" }`).
 * Referenzen zwischen Dokumenten sind IDs (z. B. Kombination → Leistungen), hier aufgelöst.
 */

const DATA = path.resolve(process.cwd(), "data");
const PUBLIC = path.resolve(process.cwd(), "public");

interface BildEintrag { id: string; breite: number; hoehe: number; quellen: { breite: number; url: string }[] }
export interface BildReferenz { bild: string; alt: string; bildunterschrift?: string }

const jsonCache = new Map<string, Promise<unknown>>();
/** JSON-Datei einmal pro Prozess lesen (Build liest jede Datei sonst pro Seite und Baustein neu). */
function json<T>(datei: string): Promise<T> {
  let p = jsonCache.get(datei);
  if (!p) { p = readFile(path.join(DATA, datei), "utf8").then((s) => JSON.parse(s) as unknown); jsonCache.set(datei, p); }
  return p as Promise<T>;
}
const fehltNur = (err: unknown) => (err as NodeJS.ErrnoException)?.code === "ENOENT";

let bilderCache: Record<string, BildEintrag> | undefined;
async function bilder() {
  bilderCache ??= await json<Record<string, BildEintrag>>("bilder.json");
  return bilderCache;
}
async function bild(ref: BildReferenz | undefined, kontext: string): Promise<Bild | undefined> {
  if (!ref) return undefined;
  const eintrag = (await bilder())[ref.bild];
  if (!eintrag) throw new Error(`Bild «${ref.bild}» (${kontext}) fehlt in data/bilder.json – \`npm run bilder\` ausführen?`);
  if (typeof ref.alt !== "string") throw new Error(`Bild «${ref.bild}» (${kontext}) hat keinen Alt-Text.`);
  return { id: eintrag.id, alt: ref.alt, breite: eintrag.breite, hoehe: eintrag.hoehe, bildunterschrift: ref.bildunterschrift, quellen: eintrag.quellen };
}
async function bildPflicht(ref: BildReferenz, kontext: string): Promise<Bild> {
  const b = await bild(ref, kontext);
  if (!b) throw new Error(`Pflichtbild fehlt: ${kontext}`);
  return b;
}
const bilderListe = (refs: BildReferenz[] | undefined, ort: string) => Promise.all((refs ?? []).map((b, i) => bildPflicht(b, `${ort} Bild ${i + 1}`)));

/* ---------- Rohformen ---------- */
type MitBild<T> = Omit<T, "bild"> & { bild?: BildReferenz };
type RohEinstellungen = Omit<Einstellungen, "logo" | "seoBild"> & { logo?: BildReferenz; seoBild?: BildReferenz };
type RohLeistung = MitBild<Leistung>;
type RohKombination = Omit<Kombination, "leistungen" | "bild"> & { leistungen: string[]; bild?: BildReferenz };
type RohAktion = Omit<Aktion, "leistung" | "kombination"> & { leistung?: string; kombination?: { kombination: string; aktionspreisChf: number; vergleichspreisChf: number } };
type RohTeam = MitBild<Teammitglied>;
type RohMedienstimme = Omit<Medienstimme, "logo" | "bild"> & { logo?: BildReferenz; bild?: BildReferenz };
type RohZahlungsart = MitBild<Zahlungsart>;
type RohSeite = Omit<Seite, "bausteine" | "hero" | "bild"> & { hero?: Omit<NonNullable<Seite["hero"]>, "bild"> & { bild?: BildReferenz }; bild?: BildReferenz; bausteine: Record<string, unknown>[] };

const sortiert = <T extends { reihenfolge: number }>(l: T[]) => [...l].sort((a, b) => a.reihenfolge - b.reihenfolge);

async function leistungen(): Promise<Leistung[]> {
  const liste = await json<RohLeistung[]>("leistungen.json");
  return sortiert(await Promise.all(liste.map(async (l) => ({ ...l, voraussetzungen: l.voraussetzungen ?? [], hinweise: l.hinweise ?? [], bild: await bild(l.bild, `Leistung ${l.id}`) }))));
}
async function kombinationen(): Promise<Kombination[]> {
  const alleLeistungen = await leistungen();
  const liste = await json<RohKombination[]>("kombinationen.json");
  return sortiert(
    await Promise.all(
      liste.map(async (k) => ({
        ...k,
        voraussetzungen: k.voraussetzungen ?? [],
        leistungen: k.leistungen.map((id) => {
          const l = alleLeistungen.find((x) => x.id === id);
          if (!l) throw new Error(`Kombination «${k.id}»: Leistung «${id}» existiert nicht.`);
          return l;
        }),
        bild: await bild(k.bild, `Kombination ${k.id}`),
      })),
    ),
  );
}
async function aktionen(): Promise<Aktion[]> {
  const [alleLeistungen, alleKombis] = await Promise.all([leistungen(), kombinationen()]);
  const liste = await json<RohAktion[]>("aktionen.json");
  return liste.map((a) => {
    const leistung = a.leistung ? alleLeistungen.find((l) => l.id === a.leistung) : undefined;
    if (a.leistung && !leistung) throw new Error(`Aktion «${a.id}»: Leistung «${a.leistung}» existiert nicht.`);
    let kombination: Aktion["kombination"];
    if (a.kombination) {
      const k = alleKombis.find((x) => x.id === a.kombination!.kombination);
      if (!k) throw new Error(`Aktion «${a.id}»: Kombination «${a.kombination.kombination}» existiert nicht.`);
      kombination = { kombination: k, aktionspreisChf: a.kombination.aktionspreisChf, vergleichspreisChf: a.kombination.vergleichspreisChf };
    }
    return { ...a, bedingungen: a.bedingungen ?? [], leistung, kombination };
  });
}
async function team(): Promise<Teammitglied[]> {
  const liste = await json<RohTeam[]>("team.json");
  return sortiert(await Promise.all(liste.map(async (t) => ({ ...t, weitereFunktionen: t.weitereFunktionen ?? [], sprachen: t.sprachen ?? [], bild: await bild(t.bild, `Team ${t.id}`) }))));
}
async function kundenmeinungen(): Promise<Kundenmeinung[]> {
  return sortiert(await json<Kundenmeinung[]>("kundenmeinungen.json"));
}
async function medienstimmen(): Promise<Medienstimme[]> {
  const liste = await json<RohMedienstimme[]>("medienstimmen.json");
  return sortiert(
    await Promise.all(
      liste.map(async (m) => {
        if (m.datei) await stat(path.join(PUBLIC, m.datei)).catch(() => { throw new Error(`Medienstimme «${m.id}»: Datei public${m.datei} fehlt.`); });
        return { ...m, logo: await bild(m.logo, `Medienstimme ${m.id} Logo`), bild: await bild(m.bild, `Medienstimme ${m.id}`) };
      }),
    ),
  );
}
async function fragebogen(): Promise<Fragebogen[]> {
  return sortiert(await json<Fragebogen[]>("fragebogen.json"));
}
async function downloads(): Promise<Download[]> {
  const liste = await json<(Omit<Download, "groesseKb"> & { groesseKb?: number })[]>("downloads.json");
  return sortiert(
    await Promise.all(
      liste.map(async (d) => {
        let groesseKb = d.groesseKb;
        try {
          groesseKb ??= Math.round((await stat(path.join(PUBLIC, d.datei))).size / 1024);
        } catch {
          throw new Error(`Download «${d.id}»: Datei public${d.datei} fehlt.`);
        }
        return { ...d, groesseKb };
      }),
    ),
  );
}
async function zahlungsarten(): Promise<Zahlungsart[]> {
  const liste = await json<RohZahlungsart[]>("zahlungsarten.json");
  return sortiert(await Promise.all(liste.map(async (z) => ({ ...z, logo: await bild(z.bild, `Zahlungsart ${z.id}`) }))));
}
async function rechtstext(art: Rechtstext["art"]): Promise<Rechtstext | null> {
  try {
    return await json<Rechtstext>(`rechtstexte/${art}.json`);
  } catch (err) {
    if (fehltNur(err)) return null;
    throw err;
  }
}
const dateiZuSlug = (f: string) => f.replace(/\.json$/, "").replaceAll("__", "/");
const slugZuDatei = (slug: string) => `${slug.replaceAll("/", "__")}.json`;

async function alleSeiten(): Promise<SeitenTeaser[]> {
  const liste: SeitenTeaser[] = [];
  for (const d of (await readdir(path.join(DATA, "seiten"))).filter((f) => f.endsWith(".json")).sort()) {
    const s = await json<RohSeite>(`seiten/${d}`);
    if (s.slug !== dateiZuSlug(d)) throw new Error(`data/seiten/${d}: Slug «${s.slug}» passt nicht zum Dateinamen.`);
    liste.push({ slug: s.slug, titel: s.titel, art: s.art, teaser: s.teaser, bild: await bild(s.bild, `Seite ${s.slug}`) });
  }
  return liste;
}

const auswahl = <T extends { id: string }>(alle: T[], ids: unknown, ort: string, was: string): T[] => {
  const liste = (ids as string[] | undefined) ?? [];
  if (!liste.length) return alle;
  return liste.map((id) => {
    const t = alle.find((x) => x.id === id);
    if (!t) throw new Error(`${ort}: ${was} «${id}» existiert nicht.`);
    return t;
  });
};

async function baustein(roh: Record<string, unknown>, seite: string): Promise<Baustein> {
  const ort = `Seite ${seite}, Baustein ${roh._key}`;
  const mk = (o: Record<string, unknown>): Baustein => ({ ...roh, ...o }) as unknown as Baustein;
  switch (roh._type) {
    case "textBaustein":
      return mk({ bild: await bild(roh.bild as BildReferenz | undefined, ort) });
    case "leistungenBaustein":
      return mk({ leistungen: auswahl(await leistungen(), roh.leistungen, ort, "Leistung") });
    case "kombinationenBaustein":
      return mk({ kombinationen: auswahl(await kombinationen(), roh.kombinationen, ort, "Kombination"), mitEinzelpreisen: roh.mitEinzelpreisen !== false });
    case "preistafelBaustein": {
      const [l, k, a, z] = await Promise.all([leistungen(), kombinationen(), aktionen(), zahlungsarten()]);
      const aktion = roh.aktion ? a.find((x) => x.id === roh.aktion) : undefined;
      if (roh.aktion && !aktion) throw new Error(`${ort}: Aktion «${roh.aktion}» existiert nicht.`);
      return mk({ leistungen: l, kombinationen: k, aktion, fussnoten: (roh.fussnoten as string[]) ?? [], mitZahlungsarten: roh.mitZahlungsarten === true, zahlungsarten: z });
    }
    case "aktionBaustein": {
      const a = (await aktionen()).find((x) => x.id === roh.aktion);
      if (!a) throw new Error(`${ort}: Aktion «${roh.aktion}» existiert nicht.`);
      return mk({ aktion: a });
    }
    case "ablaufBaustein":
      return mk({ schritte: await Promise.all(((roh.schritte as Record<string, unknown>[]) ?? []).map(async (s) => ({ ...s, bild: await bild(s.bild as BildReferenz | undefined, `${ort} Schritt ${s._key}`) }))) });
    case "stufenBaustein":
      return mk({ stufen: await Promise.all(((roh.stufen as Record<string, unknown>[]) ?? []).map(async (s) => ({ ...s, bild: await bild(s.bild as BildReferenz | undefined, `${ort} Stufe ${s._key}`) }))) });
    case "teamBaustein":
      return mk({ team: auswahl(await team(), roh.team, ort, "Teammitglied") });
    case "kundenmeinungenBaustein":
      return mk({ meinungen: auswahl(await kundenmeinungen(), roh.meinungen, ort, "Kundenmeinung") });
    case "galerieBaustein":
      return mk({ bilder: await bilderListe(roh.bilder as BildReferenz[], ort) });
    case "bildBaustein":
      return mk({ bild: await bildPflicht(roh.bild as BildReferenz, ort) });
    case "fallbeispieleBaustein":
      return mk({ faelle: await Promise.all(((roh.faelle as Record<string, unknown>[]) ?? []).map(async (f) => ({ ...f, bilder: await bilderListe(f.bilder as BildReferenz[], `${ort} Fall ${f._key}`) }))) });
    case "fragebogenBaustein": {
      const f = (await fragebogen()).find((x) => x.id === roh.fragebogen);
      if (!f) throw new Error(`${ort}: Fragebogen «${roh.fragebogen}» existiert nicht.`);
      return mk({ fragebogen: f });
    }
    case "fragebogenListeBaustein":
      return mk({ fragebogen: await fragebogen() });
    case "downloadsBaustein":
      return mk({ downloads: auswahl(await downloads(), roh.downloads, ort, "Download") });
    case "kontaktBaustein":
      return mk({ mitFormular: roh.mitFormular === true, mitKarte: roh.mitKarte === true, anfahrtBilder: await bilderListe(roh.anfahrtBilder as BildReferenz[] | undefined, ort) });
    case "rechtstextBaustein": {
      const t = await rechtstext(roh.rechtstext as Rechtstext["art"]);
      if (!t) throw new Error(`Rechtstext «${roh.rechtstext}» fehlt (${ort}).`);
      return mk({ rechtstext: t });
    }
    case "zahlungsartenBaustein":
      return mk({ zahlungsarten: await zahlungsarten() });
    case "ratgeberListeBaustein": {
      const alle = (await alleSeiten()).filter((s) => s.art === "ratgeber");
      const ids = (roh.seiten as string[] | undefined) ?? [];
      return mk({ seiten: ids.length ? ids.map((slug) => { const s = alle.find((x) => x.slug === slug); if (!s) throw new Error(`${ort}: Ratgeberseite «${slug}» existiert nicht.`); return s; }) : alle });
    }
    case "medienstimmenBaustein":
      return mk({ medienstimmen: await medienstimmen() });
    case "linkkartenBaustein":
      return mk({ karten: await Promise.all(((roh.karten as Record<string, unknown>[]) ?? []).map(async (k) => ({ ...k, bild: await bild(k.bild as BildReferenz | undefined, `${ort} Karte ${k._key}`) }))), spalten: (roh.spalten as 2 | 3) ?? 3 });
    default:
      if (!BEKANNTE_BAUSTEINE.has(String(roh._type))) throw new Error(`${ort}: unbekannter Bausteintyp «${String(roh._type)}».`);
      return roh as unknown as Baustein;
  }
}

export const lokaleQuelle: Inhaltsquelle = {
  async getEinstellungen() {
    const roh = await json<RohEinstellungen>("einstellungen.json");
    return { ...roh, kennzahlen: roh.kennzahlen ?? [], logo: await bild(roh.logo, "Einstellungen: Logo"), seoBild: await bild(roh.seoBild, "Einstellungen: SEO-Bild") };
  },
  async getTexte() {
    return json<Texte>("texte.json");
  },
  async getSeite(slug) {
    let roh: RohSeite;
    try {
      roh = await json<RohSeite>(`seiten/${slugZuDatei(slug)}`);
    } catch (err) {
      if (fehltNur(err)) return null;
      throw err;
    }
    return {
      ...roh,
      alteUrls: roh.alteUrls ?? [],
      hero: roh.hero ? { ...roh.hero, bild: await bild(roh.hero.bild, `Hero ${slug}`) } : undefined,
      bild: await bild(roh.bild, `Seite ${slug}`),
      bausteine: await Promise.all(roh.bausteine.map((b) => baustein(b, slug))),
    };
  },
  getAlleSeiten: alleSeiten,
  getLeistungen: leistungen,
  getKombinationen: kombinationen,
  getAktionen: aktionen,
  getTeam: team,
  getKundenmeinungen: kundenmeinungen,
  getMedienstimmen: medienstimmen,
  getFragebogen: fragebogen,
  getDownloads: downloads,
  getZahlungsarten: zahlungsarten,
  getRechtstext: rechtstext,
};

/** Für Skripte (Seed, Prüfung): Dateiname einer Seite. */
export { slugZuDatei, dateiZuSlug };
