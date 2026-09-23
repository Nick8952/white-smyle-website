/**
 * Gemeinsame Inhaltsstruktur der Website «WHITE SMYLE dental».
 *
 * Schnittstelle zwischen Inhaltsquelle und Darstellung:
 * - lib/content/local.ts  liefert sie aus data/ (GitHub-Pages-Demo, JETZT)
 * - lib/content/sanity.ts liefert sie aus Sanity (SPÄTER, Vercel)
 * Seitenkomponenten kennen nur diese Typen, nie die Quelle.
 * Feldnamen sind deutsch und decken sich 1:1 mit den Sanity-Schemas in sanity/schemas/.
 *
 * Preise sind ganze Franken (alle Preise der Quelle sind ganzzahlig). Aktionen sind eigene Dokumente
 * mit ausdrücklichem Status – ein fehlendes Enddatum bedeutet NICHT «dauerhaft gültig» (Codex-Empfehlung).
 */
import type { PortableTextBlock } from "@portabletext/types";

export type RichText = PortableTextBlock[];

/** Fertig aufbereitetes Bild – beide Provider liefern dieselbe Form. */
export interface Bild {
  id: string;
  alt: string;
  breite: number;
  hoehe: number;
  bildunterschrift?: string;
  /** Renditions aufsteigend nach Breite; `url` absolut (Sanity) oder wurzelrelativ ohne Unterpfad (lokal). */
  quellen: { breite: number; url: string }[];
}

export interface Link {
  titel: string;
  /** Interner Pfad («/preise/»), externe URL (https://…), tel: oder mailto: */
  ziel: string;
  extern?: boolean;
}

export interface NavGruppe {
  _key: string;
  titel: string;
  /** Eigene Zielseite der Gruppe (optional, z. B. /dentalhygiene/) */
  ziel?: string;
  kinder?: Link[];
}

export interface Adresse {
  strasse: string;
  zusatz?: string;
  plz: string;
  ort: string;
  land?: string;
}

export type Wochentag = "Montag" | "Dienstag" | "Mittwoch" | "Donnerstag" | "Freitag" | "Samstag" | "Sonntag";

export interface Oeffnungszeit {
  _key: string;
  tage: string;
  zeiten: string;
  /** Strukturiert für JSON-LD; ohne diese Felder erscheint der Eintrag nur im Text */
  wochentage?: Wochentag[];
  intervalle?: { _key: string; von: string; bis: string }[];
  nachVereinbarung?: boolean;
}

/** Nicht lokalisierte Praxisdaten (ein Dokument). */
export interface Einstellungen {
  marke: string; // «WHITE SMYLE dental»
  kurzname: string; // «WHITE SMYLE»
  claim: string; // «Dentalhygiene & Bleaching Zürich Altstetten»
  rechtstraeger: string; // «KOMVITA AG»
  verantwortlich: string; // «Andreas Obenauer»
  adresse: Adresse;
  telefon: string;
  mobil: string;
  /** Kanäle der Mobilnummer laut Quelle (z. B. «SMS, WhatsApp») */
  mobilKanaele: string;
  email: string;
  whatsappUrl?: string;
  buchungUrl: string;
  buchungAnbieter: string; // «Cituro»
  shopUrl: string;
  shopName: string; // «zahnpastashop.ch»
  instagramUrl?: string;
  facebookUrl?: string;
  routenlink: string;
  /** Einbettungs-URL der Karte – wird ausschliesslich nach Einwilligung geladen */
  kartenEinbettung: string;
  geo?: { breite: number; laenge: number };
  oeffnungszeiten: Oeffnungszeit[];
  oeffnungszeitenHinweis?: string;
  /** Berufsrechtliche Angaben laut Impressum (wörtlich) */
  bewilligung: string;
  berufsrecht: string[];
  logo?: Bild;
  seoBild?: Bild;
  /** Herkunft der Kennzahlen («seit 2012», «ca. 800 Bleachings pro Jahr») – nur belegte Angaben */
  kennzahlen: { _key: string; wert: string; text: string; quelle: string }[];
}

/** Website-Texte: Navigation, Footer, Bedienelemente, Einwilligung, Formular. */
export interface Texte {
  navigation: NavGruppe[];
  navigationKnopf: Link; // «Termin buchen» (extern)
  rechtslinks: Link[];
  footerLinks: { titel: string; links: Link[] }[];
  seo: { titelZusatz: string; beschreibung: string };
  demoHinweis?: string;
  ui: Record<
    | "zumInhalt" | "menueOeffnen" | "menueSchliessen" | "untermenue" | "anrufen" | "emailSchreiben" | "routePlanen" | "externerLink"
    | "buchenExtern" | "buchenHinweis" | "shopHinweis" | "whatsappHinweis" | "preisAufAnfrage" | "preisChf" | "dauer" | "voraussetzungen"
    | "enthalten" | "einzelpreise" | "ersparnis" | "aktion" | "aktionUngeklaert" | "mehrErfahren" | "zurueck" | "download" | "dateiGroesse"
    | "startseite" | "nichtGefundenTitel" | "nichtGefundenText" | "datenschutzEinstellungen" | "oeffnungszeiten" | "adresse" | "kontakt"
    | "quelle" | "stand" | "fragebogenHinweis" | "fragebogenOriginal" | "fragebogenAlternative" | "ratgeber" | "alleRatgeber" | "sterne"
    | "kundenmeinungQuelle" | "bildHinweisStock" | "inhaltsverzeichnis" | "preisHinweisUnbestaetigt" | "preisFussnote",
    string
  >;
  einwilligung: Record<
    | "bannerTitel" | "bannerText" | "alleAkzeptieren" | "nurNotwendige" | "einstellungen" | "dialogTitel" | "dialogText" | "auswahlSpeichern"
    | "schliessen" | "notwendigTitel" | "notwendigText" | "immerAktiv" | "medienTitel" | "medienAnbieter" | "medienText" | "kartePlatzhalter"
    | "karteAnzeigen" | "videoPlatzhalter" | "videoAnzeigen" | "einmalLaden" | "merken" | "widerrufen" | "keineEntscheidung" | "entscheidungVom"
    | "fussnote" | "gespeichert" | "alleErlaubt" | "nurNotwendigeGespeichert" | "widerrufenMeldung" | "datenschutzerklaerung" | "externOeffnen",
    string
  >;
  formular: {
    titel: string;
    einleitung: string;
    warnung: string;
    name: string;
    rueckruf: string;
    anliegen: string;
    anliegenOptionen: { wert: string; titel: string }[];
    nachricht: string;
    nachrichtHilfe: string;
    pflicht: string;
    fehlerName: string;
    emailVorbereiten: string;
    hinweisNachher: string;
  };
}

export type Pruefstatus = "uebernommen" | "sprachlich-angepasst" | "fachlich-geprueft";
export type LeistungsKategorie = "dentalhygiene" | "bleaching";
export type PreisArt = "fix" | "ab" | "anfrage";

/** Redaktionelle Herkunfts-/Prüfangaben – informativ, kein technischer Freigabezwang */
export interface Pruefung {
  quelle?: string;
  pruefstatus?: Pruefstatus;
  freigabedatum?: string;
}

export interface Leistung extends Pruefung {
  id: string;
  titel: string;
  kurztitel: string;
  kategorie: LeistungsKategorie;
  /** Seite mit Details, z. B. «/bleaching/power-bleaching/» */
  seite?: string;
  kurzbeschreibung: string;
  leistungsumfang: string[];
  preisChf?: number;
  preisArt: PreisArt;
  /** z. B. «exkl. Gel», «1 Spritze CHF 15.–» */
  preisHinweis?: string;
  dauer?: string;
  voraussetzungen: string[];
  hinweise: string[];
  bild?: Bild;
  reihenfolge: number;
}

export interface Kombination extends Pruefung {
  id: string;
  titel: string;
  leistungen: Leistung[];
  preisChf: number;
  /** Abweichende Preisangabe in der Quelle – wird als Fussnote sichtbar (kein stilles Auswählen) */
  preisHinweis?: string;
  dauer?: string;
  beschreibung: string;
  voraussetzungen: string[];
  bild?: Bild;
  reihenfolge: number;
}

export type AktionsStatus = "aktiv-bestaetigt" | "gueltigkeit-ungeklaert" | "geplant" | "abgelaufen";

export interface Aktion extends Pruefung {
  id: string;
  titel: string;
  text: string;
  /** Betroffene Einzelleistung */
  leistung?: Leistung;
  aktionspreisChf: number;
  /** Vergleichspreis muss auf der Preisliste stehen, sonst keine Ersparnis anzeigen */
  vergleichspreisChf: number;
  vergleichBasis: string;
  /** Aktion auf das Kombipaket übertragen (Quelle: Startseite) */
  kombination?: { kombination: Kombination; aktionspreisChf: number; vergleichspreisChf: number };
  status: AktionsStatus;
  gueltigVon?: string;
  gueltigBis?: string;
  bedingungen: string[];
}

export interface Teammitglied {
  id: string;
  vorname: string;
  nachname: string;
  funktion: string;
  weitereFunktionen: string[];
  sprachen: string[];
  bild?: Bild;
  reihenfolge: number;
}

export interface Kundenmeinung {
  id: string;
  name: string;
  ort?: string;
  leistung?: string;
  text: string;
  /** Nur, wenn die Quelle selbst Sterne zeigt */
  sterne?: number;
  quelle: string;
  reihenfolge: number;
}

export interface Medienstimme {
  id: string;
  medium: string;
  titel?: string;
  hinweis?: string;
  url?: string;
  /** PDF unter public/downloads (lokal) bzw. Datei-URL (Sanity) */
  datei?: string;
  logo?: Bild;
  bild?: Bild;
  reihenfolge: number;
}

export type FrageArt = "jaNein" | "auswahl" | "text";

export interface Fragebogen {
  id: string;
  titel: string;
  slug: string;
  einleitung: string;
  /** Wörtliche Zusage der Quelle (z. B. «Sie erhalten von uns eine Auswertung») */
  versprechenOriginal: string;
  fragen: { _key: string; frage: string; art: FrageArt; optionen?: string[] }[];
  originalUrl: string;
  quelle: string;
  reihenfolge: number;
}

export interface Download {
  id: string;
  titel: string;
  datei: string;
  dateiname: string;
  groesseKb?: number;
  hinweis?: string;
  quelle: string;
  reihenfolge: number;
}

export interface Zahlungsart {
  id: string;
  titel: string;
  logo?: Bild;
  reihenfolge: number;
}

export interface Rechtstext {
  id: string;
  art: "impressum" | "datenschutz" | "agb";
  titel: string;
  stand?: string;
  inhalt: RichText;
  /** Hinweis oberhalb des Textes, z. B. «Demo-Fassung, nicht anwaltlich geprüft» */
  hinweis?: string;
}

/* ------------------------------------------------------------------ */
/* Seitenbausteine                                                      */
/* ------------------------------------------------------------------ */

interface BausteinBasis {
  _key: string;
  anker?: string;
  kurzzeile?: string;
  titel?: string;
}

export interface TextBaustein extends BausteinBasis {
  _type: "textBaustein";
  inhalt: RichText;
  bild?: Bild;
  bildPosition?: "links" | "rechts";
  /** Schmale Spalte für lange Lesetexte */
  breite?: "schmal" | "normal";
}
export interface SpaltenBaustein extends BausteinBasis {
  _type: "spaltenBaustein";
  einleitung?: string;
  spalten: { _key: string; titel: string; inhalt: RichText }[];
}
export interface HinweisBaustein extends BausteinBasis {
  _type: "hinweisBaustein";
  inhalt: RichText;
  art: "info" | "wichtig" | "medizinisch";
}
export interface LeistungenBaustein extends BausteinBasis {
  _type: "leistungenBaustein";
  einleitung?: string;
  leistungen: Leistung[];
  darstellung: "karten" | "liste";
}
export interface KombinationenBaustein extends BausteinBasis {
  _type: "kombinationenBaustein";
  einleitung?: string;
  kombinationen: Kombination[];
  mitEinzelpreisen: boolean;
}
export interface PreistafelBaustein extends BausteinBasis {
  _type: "preistafelBaustein";
  einleitung?: string;
  leistungen: Leistung[];
  kombinationen: Kombination[];
  aktion?: Aktion;
  fussnoten: string[];
  mitZahlungsarten: boolean;
  zahlungsarten: Zahlungsart[];
}
export interface AktionBaustein extends BausteinBasis {
  _type: "aktionBaustein";
  aktion: Aktion;
}
export interface AblaufBaustein extends BausteinBasis {
  _type: "ablaufBaustein";
  einleitung?: string;
  schritte: { _key: string; titel: string; text: string; bild?: Bild }[];
  abschluss?: string;
}
export interface FaqBaustein extends BausteinBasis {
  _type: "faqBaustein";
  einleitung?: string;
  fragen: { _key: string; frage: string; antwort: RichText }[];
}
export interface VergleichBaustein extends BausteinBasis {
  _type: "vergleichBaustein";
  einleitung?: string;
  spalten: { _key: string; titel: string; untertitel?: string; punkte: string[]; hervorgehoben?: boolean }[];
  fazit?: string;
}
export interface StufenBaustein extends BausteinBasis {
  _type: "stufenBaustein";
  einleitung?: string;
  stufen: { _key: string; titel: string; untertitel?: string; bild?: Bild; anzeichen: string[]; massnahmen: string[] }[];
}
export interface TeamBaustein extends BausteinBasis {
  _type: "teamBaustein";
  einleitung?: string;
  team: Teammitglied[];
}
export interface KundenmeinungenBaustein extends BausteinBasis {
  _type: "kundenmeinungenBaustein";
  einleitung?: string;
  meinungen: Kundenmeinung[];
  darstellung: "wand" | "zitate";
  quellenHinweis?: string;
}
export interface GalerieBaustein extends BausteinBasis {
  _type: "galerieBaustein";
  einleitung?: string;
  bilder: Bild[];
  hinweis?: string;
}
export interface BildBaustein extends BausteinBasis {
  _type: "bildBaustein";
  bild: Bild;
  text?: string;
}
export interface FallbeispieleBaustein extends BausteinBasis {
  _type: "fallbeispieleBaustein";
  einleitung: RichText;
  beschriftungen: string[];
  faelle: { _key: string; titel: string; bilder: Bild[] }[];
  hinweis?: string;
}
export interface AufrufBaustein extends BausteinBasis {
  _type: "aufrufBaustein";
  text?: string;
  knopf: Link;
  zweiterKnopf?: Link;
  variante: "band" | "karte";
}
export interface FragebogenBaustein extends BausteinBasis {
  _type: "fragebogenBaustein";
  fragebogen: Fragebogen;
}
export interface FragebogenListeBaustein extends BausteinBasis {
  _type: "fragebogenListeBaustein";
  einleitung?: string;
  fragebogen: Fragebogen[];
}
export interface KarteBaustein extends BausteinBasis {
  _type: "karteBaustein";
  text?: string;
}
export interface VideoBaustein extends BausteinBasis {
  _type: "videoBaustein";
  youtubeId: string;
  videoTitel: string;
  text?: string;
}
export interface DownloadsBaustein extends BausteinBasis {
  _type: "downloadsBaustein";
  einleitung?: string;
  downloads: Download[];
}
export interface KontaktBaustein extends BausteinBasis {
  _type: "kontaktBaustein";
  einleitung?: string;
  mitFormular: boolean;
  mitKarte: boolean;
  anfahrt?: RichText;
  anfahrtBilder: Bild[];
}
export interface RechtstextBaustein extends BausteinBasis {
  _type: "rechtstextBaustein";
  rechtstext: Rechtstext;
}
export interface ZahlungsartenBaustein extends BausteinBasis {
  _type: "zahlungsartenBaustein";
  einleitung?: string;
  zahlungsarten: Zahlungsart[];
}
export interface RatgeberListeBaustein extends BausteinBasis {
  _type: "ratgeberListeBaustein";
  einleitung?: string;
  /** Leer = alle Ratgeberseiten */
  seiten: SeitenTeaser[];
}
export interface MedienstimmenBaustein extends BausteinBasis {
  _type: "medienstimmenBaustein";
  einleitung?: string;
  medienstimmen: Medienstimme[];
}
export interface LinkkartenBaustein extends BausteinBasis {
  _type: "linkkartenBaustein";
  einleitung?: string;
  karten: { _key: string; titel: string; text: string; link: Link; bild?: Bild; preisChf?: number; preisPraefix?: string }[];
  spalten: 2 | 3;
}
export interface KennzahlenBaustein extends BausteinBasis {
  _type: "kennzahlenBaustein";
  einleitung?: string;
}
export interface DatenschutzEinstellungenBaustein extends BausteinBasis {
  _type: "datenschutzEinstellungenBaustein";
  einleitung?: string;
}

export type Baustein =
  | TextBaustein
  | SpaltenBaustein
  | HinweisBaustein
  | LeistungenBaustein
  | KombinationenBaustein
  | PreistafelBaustein
  | AktionBaustein
  | AblaufBaustein
  | FaqBaustein
  | VergleichBaustein
  | StufenBaustein
  | TeamBaustein
  | KundenmeinungenBaustein
  | GalerieBaustein
  | BildBaustein
  | FallbeispieleBaustein
  | AufrufBaustein
  | FragebogenBaustein
  | FragebogenListeBaustein
  | KarteBaustein
  | VideoBaustein
  | DownloadsBaustein
  | KontaktBaustein
  | RechtstextBaustein
  | ZahlungsartenBaustein
  | RatgeberListeBaustein
  | MedienstimmenBaustein
  | LinkkartenBaustein
  | KennzahlenBaustein
  | DatenschutzEinstellungenBaustein;

export const BAUSTEIN_TYPEN: Baustein["_type"][] = [
  "textBaustein", "spaltenBaustein", "hinweisBaustein", "leistungenBaustein", "kombinationenBaustein", "preistafelBaustein", "aktionBaustein",
  "ablaufBaustein", "faqBaustein", "vergleichBaustein", "stufenBaustein", "teamBaustein", "kundenmeinungenBaustein", "galerieBaustein",
  "bildBaustein", "fallbeispieleBaustein", "aufrufBaustein", "fragebogenBaustein", "fragebogenListeBaustein", "karteBaustein", "videoBaustein",
  "downloadsBaustein", "kontaktBaustein", "rechtstextBaustein", "zahlungsartenBaustein", "ratgeberListeBaustein", "medienstimmenBaustein",
  "linkkartenBaustein", "kennzahlenBaustein", "datenschutzEinstellungenBaustein",
];

export type SeitenArt = "seite" | "leistung" | "ratgeber" | "fragebogen" | "rechtliches";

export interface Hero {
  kurzzeile?: string;
  titel: string;
  text?: string;
  knopf?: Link;
  zweiterKnopf?: Link;
  bild?: Bild;
  /** Startseite: grosse Komposition mit Farbring; sonst kompakter Seitenkopf */
  variante: "start" | "seite" | "artikel";
}

export interface Seite extends Pruefung {
  id: string;
  /** Pfad ohne Schrägstriche, «start» für die Startseite, sonst z. B. «dentalhygiene/kinder» */
  slug: string;
  titel: string;
  art: SeitenArt;
  /** Kurztext für Übersichten (Ratgeber, Verweise) */
  teaser?: string;
  einleitung?: string;
  seoTitel?: string;
  seoBeschreibung?: string;
  hero?: Hero;
  bild?: Bild;
  bausteine: Baustein[];
  /** Alte URLs, die auf diese Seite abgebildet werden (Inhaltsinventur, spätere Weiterleitungen) */
  alteUrls: string[];
  /** Inhaltsverzeichnis aus Bausteintiteln anzeigen (lange Ratgeber) */
  mitInhaltsverzeichnis?: boolean;
}

export interface SeitenTeaser {
  slug: string;
  titel: string;
  art: SeitenArt;
  teaser?: string;
  bild?: Bild;
}

/** Vertrag, den jede Inhaltsquelle erfüllt. */
export interface Inhaltsquelle {
  getEinstellungen(): Promise<Einstellungen>;
  getTexte(): Promise<Texte>;
  getSeite(slug: string): Promise<Seite | null>;
  getAlleSeiten(): Promise<SeitenTeaser[]>;
  getLeistungen(): Promise<Leistung[]>;
  getKombinationen(): Promise<Kombination[]>;
  getAktionen(): Promise<Aktion[]>;
  getTeam(): Promise<Teammitglied[]>;
  getKundenmeinungen(): Promise<Kundenmeinung[]>;
  getMedienstimmen(): Promise<Medienstimme[]>;
  getFragebogen(): Promise<Fragebogen[]>;
  getDownloads(): Promise<Download[]>;
  getZahlungsarten(): Promise<Zahlungsart[]>;
  getRechtstext(art: Rechtstext["art"]): Promise<Rechtstext | null>;
}

/** Pfad einer Seite, immer mit Schrägstrichen. */
export function seitenPfad(slug: string): string {
  return slug === "start" ? "/" : `/${slug}/`;
}

/** Preis als «CHF 175.–» */
export function chf(betrag: number): string {
  return `CHF ${betrag.toLocaleString("de-CH")}.–`;
}
