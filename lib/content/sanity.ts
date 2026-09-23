import "server-only";
import { defineQuery } from "next-sanity";
import { client, vorschauClient } from "@/sanity/client";
import { sanityPruefen } from "@/sanity/env";
import { BILD_PROJEKTION, sanityBild, type SanityBildRoh } from "@/sanity/bild";
import { istVorschau } from "@/lib/vorschau/status";
import type {
  Aktion, Baustein, Download, Einstellungen, Fragebogen, Inhaltsquelle, Kombination, Kundenmeinung, Leistung, Medienstimme, Rechtstext, Seite,
  SeitenTeaser, Teammitglied, Texte, Zahlungsart,
} from "./types";
import { BEKANNTE_BAUSTEINE } from "./types";

/**
 * Sanity-Inhaltsquelle (für Vercel). Liefert exakt dieselben Typen und dieselben Fallback-Regeln wie lib/content/local.ts
 * (leere Arrays statt undefined, sortiert nach reihenfolge, Referenzen aufgelöst).
 * Cache: veröffentlichte Inhalte mit Tag «inhalt», Invalidierung per Webhook (server-routes/app/api/revalidate).
 * Im Draft Mode ungecacht mit Perspektive «drafts».
 * Status: VORBEREITET – erst nach Anlegen eines Sanity-Projekts überprüfbar.
 */
export const INHALT_TAG = "inhalt";

async function abfrage<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  sanityPruefen();
  const vorschau = await istVorschau();
  const c = vorschau ? vorschauClient() : client();
  return c.fetch<T>(query, params, vorschau ? { cache: "no-store" } : { next: { revalidate: false, tags: [INHALT_TAG] } });
}

type Roh = Record<string, unknown>;
const bildAus = (o: unknown, alt = "") => sanityBild(o as SanityBildRoh | undefined, alt);
// Gelöschte Referenzen kommen aus GROQ als null zurück und werden hier verworfen.
const liste = <T,>(x: unknown): T[] => (Array.isArray(x) ? (x as T[]).filter((e) => e != null) : []);
const sortiert = <T extends { reihenfolge: number }>(l: T[]) => [...l].sort((a, b) => a.reihenfolge - b.reihenfolge);

const LINK = `{ titel, ziel, extern }`;
const LEISTUNG = `{ "id": _id, titel, kurztitel, kategorie, seite, kurzbeschreibung, leistungsumfang, preisChf, preisArt, preisHinweis, dauer, voraussetzungen, hinweise, bild ${BILD_PROJEKTION}, reihenfolge, quelle, pruefstatus, freigabedatum }`;
const KOMBINATION = `{ "id": _id, titel, "leistungen": leistungen[]-> ${LEISTUNG}, preisChf, preisHinweis, dauer, beschreibung, voraussetzungen, bild ${BILD_PROJEKTION}, reihenfolge, quelle, pruefstatus, freigabedatum }`;
const AKTION = `{ "id": _id, titel, text, "leistung": leistung-> ${LEISTUNG}, aktionspreisChf, vergleichspreisChf, vergleichBasis, kombination { "kombination": kombination-> ${KOMBINATION}, aktionspreisChf, vergleichspreisChf }, status, gueltigVon, gueltigBis, bedingungen, quelle, pruefstatus, freigabedatum }`;
const TEAM = `{ "id": _id, vorname, nachname, funktion, weitereFunktionen, sprachen, bild ${BILD_PROJEKTION}, reihenfolge }`;
const MEINUNG = `{ "id": _id, name, ort, leistung, text, sterne, quelle, reihenfolge }`;
const MEDIENSTIMME = `{ "id": _id, medium, titel, hinweis, url, "datei": datei.asset->url, logo ${BILD_PROJEKTION}, bild ${BILD_PROJEKTION}, reihenfolge }`;
const FRAGEBOGEN = `{ "id": _id, titel, "slug": slug.current, einleitung, versprechenOriginal, fragen[] { _key, frage, art, optionen }, originalUrl, quelle, reihenfolge }`;
const DOWNLOAD = `{ "id": _id, titel, "datei": datei.asset->url, "dateiname": coalesce(datei.asset->originalFilename, titel), "groesseKb": round(datei.asset->size / 1024), hinweis, quelle, reihenfolge }`;
const ZAHLUNGSART = `{ "id": _id, titel, logo ${BILD_PROJEKTION}, reihenfolge }`;
const RECHTSTEXT = `{ "id": _id, art, titel, stand, hinweis, inhalt }`;
const TEASER = `{ "slug": slug.current, titel, art, teaser, bild ${BILD_PROJEKTION} }`;

const alleOder = (feld: string, typ: string, projektion: string) =>
  `"${feld}": select(coalesce(count(${feld}), 0) > 0 => ${feld}[]-> ${projektion}, *[_type == "${typ}"] | order(reihenfolge asc) ${projektion})`;

const BAUSTEINE = `bausteine[] {
  _key, _type, "anker": anker.current, kurzzeile, titel,
  _type == "textBaustein" => { inhalt, bild ${BILD_PROJEKTION}, bildPosition, breite },
  _type == "spaltenBaustein" => { einleitung, spalten[] { _key, titel, inhalt } },
  _type == "hinweisBaustein" => { inhalt, art },
  _type == "leistungenBaustein" => { einleitung, darstellung, ${alleOder("leistungen", "leistung", LEISTUNG)} },
  _type == "kombinationenBaustein" => { einleitung, mitEinzelpreisen, ${alleOder("kombinationen", "kombination", KOMBINATION)} },
  _type == "preistafelBaustein" => { einleitung, fussnoten, mitZahlungsarten, "aktion": aktion-> ${AKTION}, "leistungen": *[_type == "leistung"] | order(reihenfolge asc) ${LEISTUNG}, "kombinationen": *[_type == "kombination"] | order(reihenfolge asc) ${KOMBINATION}, "zahlungsarten": *[_type == "zahlungsart"] | order(reihenfolge asc) ${ZAHLUNGSART} },
  _type == "aktionBaustein" => { "aktion": aktion-> ${AKTION} },
  _type == "ablaufBaustein" => { einleitung, abschluss, schritte[] { _key, titel, text, bild ${BILD_PROJEKTION} } },
  _type == "faqBaustein" => { einleitung, fragen[] { _key, frage, antwort } },
  _type == "vergleichBaustein" => { einleitung, fazit, spalten[] { _key, titel, untertitel, punkte, hervorgehoben } },
  _type == "stufenBaustein" => { einleitung, stufen[] { _key, titel, untertitel, bild ${BILD_PROJEKTION}, anzeichen, massnahmen } },
  _type == "teamBaustein" => { einleitung, ${alleOder("team", "teammitglied", TEAM)} },
  _type == "kundenmeinungenBaustein" => { einleitung, darstellung, quellenHinweis, ${alleOder("meinungen", "kundenmeinung", MEINUNG)} },
  _type == "galerieBaustein" => { einleitung, hinweis, bilder[] ${BILD_PROJEKTION} },
  _type == "bildBaustein" => { text, bild ${BILD_PROJEKTION} },
  _type == "fallbeispieleBaustein" => { einleitung, beschriftungen, hinweis, faelle[] { _key, titel, bilder[] ${BILD_PROJEKTION} } },
  _type == "aufrufBaustein" => { text, variante, knopf ${LINK}, zweiterKnopf ${LINK} },
  _type == "fragebogenBaustein" => { "fragebogen": fragebogen-> ${FRAGEBOGEN} },
  _type == "fragebogenListeBaustein" => { einleitung, "fragebogen": *[_type == "fragebogen"] | order(reihenfolge asc) ${FRAGEBOGEN} },
  _type == "karteBaustein" => { text },
  _type == "videoBaustein" => { youtubeId, videoTitel, text },
  _type == "downloadsBaustein" => { einleitung, ${alleOder("downloads", "download", DOWNLOAD)} },
  _type == "kontaktBaustein" => { einleitung, mitFormular, mitKarte, anfahrt, anfahrtBilder[] ${BILD_PROJEKTION} },
  _type == "rechtstextBaustein" => { "rechtstext": rechtstext-> ${RECHTSTEXT} },
  _type == "zahlungsartenBaustein" => { einleitung, "zahlungsarten": *[_type == "zahlungsart"] | order(reihenfolge asc) ${ZAHLUNGSART} },
  _type == "ratgeberListeBaustein" => { einleitung, "seiten": select(coalesce(count(seiten), 0) > 0 => seiten[]-> ${TEASER}, *[_type == "seite" && art == "ratgeber"] | order(titel asc) ${TEASER}) },
  _type == "medienstimmenBaustein" => { einleitung, "medienstimmen": *[_type == "medienstimme"] | order(reihenfolge asc) ${MEDIENSTIMME} },
  _type == "linkkartenBaustein" => { einleitung, spalten, karten[] { _key, titel, text, link ${LINK}, bild ${BILD_PROJEKTION}, preisChf, preisPraefix } },
  _type == "kennzahlenBaustein" => { einleitung },
  _type == "datenschutzEinstellungenBaustein" => { einleitung }
}`;

const EINSTELLUNGEN_QUERY = defineQuery(`*[_type == "einstellungen"][0] {
  marke, kurzname, claim, rechtstraeger, verantwortlich, bewilligung, berufsrecht, kennzahlen[] { _key, wert, text, quelle },
  adresse, telefon, mobil, mobilKanaele, email, whatsappUrl, buchungUrl, buchungAnbieter, shopUrl, shopName, instagramUrl, facebookUrl,
  routenlink, kartenEinbettung, geo, oeffnungszeiten[] { _key, tage, zeiten, wochentage, intervalle[] { _key, von, bis }, nachVereinbarung }, oeffnungszeitenHinweis,
  logo ${BILD_PROJEKTION}, seoBild ${BILD_PROJEKTION}
}`);
const TEXTE_QUERY = defineQuery(`*[_type == "texte"][0] {
  navigation[] { _key, titel, ziel, kinder[] ${LINK} }, navigationKnopf ${LINK}, footerLinks[] { titel, links[] ${LINK} }, rechtslinks[] ${LINK}, seo, demoHinweis, ui, einwilligung, formular
}`);
const SEITE_QUERY = defineQuery(`*[_type == "seite" && slug.current == $slug][0] {
  "id": _id, "slug": slug.current, titel, art, teaser, einleitung, seoTitel, seoBeschreibung, alteUrls, mitInhaltsverzeichnis, quelle, pruefstatus, freigabedatum,
  bild ${BILD_PROJEKTION},
  hero { kurzzeile, titel, text, variante, knopf ${LINK}, zweiterKnopf ${LINK}, bild ${BILD_PROJEKTION} },
  ${BAUSTEINE}
}`);

function leistungAufbereiten(l: Roh): Leistung {
  return { ...(l as object), leistungsumfang: liste(l.leistungsumfang), voraussetzungen: liste(l.voraussetzungen), hinweise: liste(l.hinweise), bild: bildAus(l.bild, l.titel as string) } as Leistung;
}
function kombinationAufbereiten(k: Roh): Kombination {
  return { ...(k as object), leistungen: liste<Roh>(k.leistungen).map(leistungAufbereiten), voraussetzungen: liste(k.voraussetzungen), bild: bildAus(k.bild, k.titel as string) } as Kombination;
}
function aktionAufbereiten(a: Roh): Aktion {
  const komb = a.kombination as Roh | undefined;
  return {
    ...(a as object),
    bedingungen: liste(a.bedingungen),
    leistung: a.leistung ? leistungAufbereiten(a.leistung as Roh) : undefined,
    kombination: komb?.kombination ? { kombination: kombinationAufbereiten(komb.kombination as Roh), aktionspreisChf: komb.aktionspreisChf as number, vergleichspreisChf: komb.vergleichspreisChf as number } : undefined,
  } as Aktion;
}
const teamAufbereiten = (t: Roh): Teammitglied => ({ ...(t as object), weitereFunktionen: liste(t.weitereFunktionen), sprachen: liste(t.sprachen), bild: bildAus(t.bild, `${t.vorname} ${t.nachname}`) }) as Teammitglied;
const medienstimmeAufbereiten = (m: Roh): Medienstimme => ({ ...(m as object), logo: bildAus(m.logo, m.medium as string), bild: bildAus(m.bild, m.medium as string) }) as Medienstimme;
const zahlungsartAufbereiten = (z: Roh): Zahlungsart => ({ ...(z as object), logo: bildAus(z.logo, z.titel as string) }) as Zahlungsart;
const teaserAufbereiten = (s: Roh): SeitenTeaser => ({ ...(s as object), bild: bildAus(s.bild, s.titel as string) }) as SeitenTeaser;
const bilder = (x: unknown) => liste<Roh>(x).map((b) => bildAus(b)).filter((b): b is NonNullable<typeof b> => !!b);

function bausteinAufbereiten(b: Roh): Baustein {
  const mk = (o: Roh): Baustein => ({ ...b, ...o }) as unknown as Baustein;
  switch (b._type) {
    case "textBaustein": return mk({ bild: bildAus(b.bild) });
    case "spaltenBaustein": return mk({ spalten: liste(b.spalten) });
    case "leistungenBaustein": return mk({ leistungen: sortiert(liste<Roh>(b.leistungen).map(leistungAufbereiten)) });
    case "kombinationenBaustein": return mk({ kombinationen: sortiert(liste<Roh>(b.kombinationen).map(kombinationAufbereiten)), mitEinzelpreisen: b.mitEinzelpreisen !== false });
    case "preistafelBaustein": return mk({ leistungen: liste<Roh>(b.leistungen).map(leistungAufbereiten), kombinationen: liste<Roh>(b.kombinationen).map(kombinationAufbereiten), aktion: b.aktion ? aktionAufbereiten(b.aktion as Roh) : undefined, fussnoten: liste(b.fussnoten), mitZahlungsarten: b.mitZahlungsarten === true, zahlungsarten: liste<Roh>(b.zahlungsarten).map(zahlungsartAufbereiten) });
    case "aktionBaustein": { if (!b.aktion) throw new Error(`Sanity: aktionBaustein ${b._key} ohne Aktion.`); return mk({ aktion: aktionAufbereiten(b.aktion as Roh) }); }
    case "ablaufBaustein": return mk({ schritte: liste<Roh>(b.schritte).map((s) => ({ ...(s as object), bild: bildAus(s.bild) })) });
    case "faqBaustein": return mk({ fragen: liste(b.fragen) });
    case "vergleichBaustein": return mk({ spalten: liste<Roh>(b.spalten).map((s) => ({ ...(s as object), punkte: liste(s.punkte) })) });
    case "stufenBaustein": return mk({ stufen: liste<Roh>(b.stufen).map((s) => ({ ...(s as object), bild: bildAus(s.bild), anzeichen: liste(s.anzeichen), massnahmen: liste(s.massnahmen) })) });
    case "teamBaustein": return mk({ team: sortiert(liste<Roh>(b.team).map(teamAufbereiten)) });
    case "kundenmeinungenBaustein": return mk({ meinungen: sortiert(liste<Kundenmeinung>(b.meinungen)) });
    case "galerieBaustein": return mk({ bilder: bilder(b.bilder) });
    case "bildBaustein": { const bild = bildAus(b.bild); if (!bild) throw new Error(`Sanity: bildBaustein ${b._key} ohne Bild.`); return mk({ bild }); }
    case "fallbeispieleBaustein": return mk({ beschriftungen: liste(b.beschriftungen), faelle: liste<Roh>(b.faelle).map((f) => ({ ...(f as object), bilder: bilder(f.bilder) })) });
    case "fragebogenBaustein": { if (!b.fragebogen) throw new Error(`Sanity: fragebogenBaustein ${b._key} ohne Fragebogen.`); return mk({ fragebogen: { ...(b.fragebogen as object), fragen: liste((b.fragebogen as Roh).fragen) } }); }
    case "fragebogenListeBaustein": return mk({ fragebogen: liste<Roh>(b.fragebogen).map((f) => ({ ...(f as object), fragen: liste(f.fragen) })) });
    case "downloadsBaustein": return mk({ downloads: sortiert(liste<Download>(b.downloads)) });
    case "kontaktBaustein": return mk({ mitFormular: b.mitFormular === true, mitKarte: b.mitKarte === true, anfahrtBilder: bilder(b.anfahrtBilder) });
    case "rechtstextBaustein": { if (!b.rechtstext) throw new Error(`Sanity: rechtstextBaustein ${b._key} ohne Rechtstext.`); return b as unknown as Baustein; }
    case "zahlungsartenBaustein": return mk({ zahlungsarten: liste<Roh>(b.zahlungsarten).map(zahlungsartAufbereiten) });
    case "ratgeberListeBaustein": return mk({ seiten: liste<Roh>(b.seiten).map(teaserAufbereiten) });
    case "medienstimmenBaustein": return mk({ medienstimmen: liste<Roh>(b.medienstimmen).map(medienstimmeAufbereiten) });
    case "linkkartenBaustein": return mk({ karten: liste<Roh>(b.karten).map((k) => ({ ...(k as object), bild: bildAus(k.bild) })), spalten: (b.spalten as 2 | 3) ?? 3 });
    default:
      if (!BEKANNTE_BAUSTEINE.has(String(b._type))) throw new Error(`Sanity: unbekannter Bausteintyp «${String(b._type)}» (${String(b._key)}).`);
      return b as unknown as Baustein;
  }
}

export const sanityQuelle: Inhaltsquelle = {
  async getEinstellungen() {
    const e = await abfrage<Roh | null>(EINSTELLUNGEN_QUERY);
    if (!e) throw new Error("Sanity: Dokument «einstellungen» fehlt – `npm run seed` ausführen.");
    return { ...(e as object), berufsrecht: liste(e.berufsrecht), kennzahlen: liste(e.kennzahlen), oeffnungszeiten: liste(e.oeffnungszeiten), logo: bildAus(e.logo, e.marke as string), seoBild: bildAus(e.seoBild) } as Einstellungen;
  },
  async getTexte() {
    const t = await abfrage<Roh | null>(TEXTE_QUERY);
    if (!t) throw new Error("Sanity: Dokument «texte» fehlt – `npm run seed` ausführen.");
    return { ...(t as object), navigation: liste(t.navigation), footerLinks: liste(t.footerLinks), rechtslinks: liste(t.rechtslinks) } as Texte;
  },
  async getSeite(slug) {
    const s = await abfrage<Roh | null>(SEITE_QUERY, { slug });
    if (!s) return null;
    const hero = s.hero as Roh | undefined;
    return { ...(s as object), alteUrls: liste(s.alteUrls), bild: bildAus(s.bild), hero: hero ? { ...(hero as object), bild: bildAus(hero.bild) } : undefined, bausteine: liste<Roh>(s.bausteine).map(bausteinAufbereiten) } as Seite;
  },
  async getAlleSeiten() {
    return (await abfrage<Roh[]>(`*[_type == "seite" && defined(slug.current)] | order(slug.current asc) ${TEASER}`)).map(teaserAufbereiten);
  },
  async getLeistungen() { return (await abfrage<Roh[]>(`*[_type == "leistung"] | order(reihenfolge asc) ${LEISTUNG}`)).map(leistungAufbereiten); },
  async getKombinationen() { return (await abfrage<Roh[]>(`*[_type == "kombination"] | order(reihenfolge asc) ${KOMBINATION}`)).map(kombinationAufbereiten); },
  async getAktionen() { return (await abfrage<Roh[]>(`*[_type == "aktion"] ${AKTION}`)).map(aktionAufbereiten); },
  async getTeam() { return (await abfrage<Roh[]>(`*[_type == "teammitglied"] | order(reihenfolge asc) ${TEAM}`)).map(teamAufbereiten); },
  async getKundenmeinungen() { return abfrage<Kundenmeinung[]>(`*[_type == "kundenmeinung"] | order(reihenfolge asc) ${MEINUNG}`); },
  async getMedienstimmen() { return (await abfrage<Roh[]>(`*[_type == "medienstimme"] | order(reihenfolge asc) ${MEDIENSTIMME}`)).map(medienstimmeAufbereiten); },
  async getFragebogen() { return (await abfrage<Roh[]>(`*[_type == "fragebogen"] | order(reihenfolge asc) ${FRAGEBOGEN}`)).map((f) => ({ ...(f as object), fragen: liste(f.fragen) }) as Fragebogen); },
  async getDownloads() { return abfrage<Download[]>(`*[_type == "download"] | order(reihenfolge asc) ${DOWNLOAD}`); },
  async getZahlungsarten() { return (await abfrage<Roh[]>(`*[_type == "zahlungsart"] | order(reihenfolge asc) ${ZAHLUNGSART}`)).map(zahlungsartAufbereiten); },
  async getRechtstext(art) { return abfrage<Rechtstext | null>(`*[_type == "rechtstext" && art == $art] | order(_updatedAt desc) [0] ${RECHTSTEXT}`, { art }); },
};
