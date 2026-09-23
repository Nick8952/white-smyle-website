import { defineArrayMember, defineField, defineType } from "sanity";
import { bausteinMitglieder } from "./bausteine";
import { linkRegel, pruefFelder } from "./objekte";

const RESERVIERTE_SLUGS = ["studio", "api", "bilder", "downloads", "_next", "start"];
const slugRegel = (r: import("sanity").SlugRule) =>
  r.required().custom((slug) => {
    const wert = slug?.current ?? "";
    if (wert === "start") return true;
    if (RESERVIERTE_SLUGS.includes(wert.split("/")[0])) return `«${wert}» ist reserviert.`;
    if (!/^[a-z0-9-]+(\/[a-z0-9-]+)*$/.test(wert)) return "Nur Kleinbuchstaben, Ziffern, Bindestriche; Unterseiten mit «/» (z. B. dentalhygiene/kinder).";
    return true;
  });
const reihenfolge = defineField({ name: "reihenfolge", title: "Reihenfolge", type: "number", validation: (r) => r.required().integer() });
const preisChf = (name: string, title: string, pflicht = false) =>
  defineField({ name, title, type: "number", description: "Ganze Franken, ohne Rappen (z. B. 175).", validation: (r) => (pflicht ? r.required() : r).integer().positive() });

/** Praxisdaten (Einzeldokument). */
export const einstellungenTyp = defineType({
  name: "einstellungen",
  title: "Praxisdaten",
  type: "document",
  groups: [
    { name: "praxis", title: "Praxis", default: true },
    { name: "kontakt", title: "Kontakt & Öffnungszeiten" },
    { name: "dienste", title: "Buchung, Shop, Social" },
    { name: "bilder", title: "Logo & Bilder" },
  ],
  fields: [
    defineField({ name: "marke", title: "Markenname", type: "string", group: "praxis", validation: (r) => r.required() }),
    defineField({ name: "kurzname", title: "Kurzname", type: "string", group: "praxis", validation: (r) => r.required() }),
    defineField({ name: "claim", title: "Untertitel / Claim", type: "string", group: "praxis", validation: (r) => r.required() }),
    defineField({ name: "rechtstraeger", title: "Rechtsträger (Firma)", type: "string", group: "praxis", description: "z. B. «KOMVITA AG» – erscheint im Impressum und in den strukturierten Daten.", validation: (r) => r.required() }),
    defineField({ name: "verantwortlich", title: "Verantwortlich für den Inhalt", type: "string", group: "praxis", validation: (r) => r.required() }),
    defineField({ name: "bewilligung", title: "Bewilligung (wörtlich)", type: "text", rows: 2, group: "praxis", description: "Nur belegte Angaben, z. B. Bewilligung der Gesundheitsdirektion Zürich." }),
    defineField({ name: "berufsrecht", title: "Berufsrechtliche Regelungen", type: "array", of: [defineArrayMember({ type: "string" })], group: "praxis" }),
    defineField({
      name: "kennzahlen",
      title: "Kennzahlen",
      type: "array",
      group: "praxis",
      description: "Nur belegte Angaben mit Herkunft (z. B. «ca. 800 Bleachings pro Jahr – Angabe der Praxis»).",
      of: [defineArrayMember({ type: "object", name: "kennzahl", fields: [defineField({ name: "wert", title: "Wert", type: "string", validation: (r) => r.required() }), defineField({ name: "text", title: "Text", type: "string", validation: (r) => r.required() }), defineField({ name: "quelle", title: "Herkunft", type: "string", validation: (r) => r.required() })], preview: { select: { title: "wert", subtitle: "text" } } })],
    }),
    defineField({ name: "adresse", title: "Adresse", type: "adresse", group: "kontakt", validation: (r) => r.required() }),
    defineField({ name: "telefon", title: "Telefon", type: "string", group: "kontakt", validation: (r) => r.required() }),
    defineField({ name: "mobil", title: "Mobil", type: "string", group: "kontakt", validation: (r) => r.required() }),
    defineField({ name: "mobilKanaele", title: "Kanäle der Mobilnummer", type: "string", group: "kontakt", description: "z. B. «SMS, WhatsApp»" }),
    defineField({ name: "email", title: "E-Mail", type: "string", group: "kontakt", validation: (r) => r.required().email() }),
    defineField({ name: "routenlink", title: "Routenlink", type: "url", group: "kontakt", description: "Link zu einem Kartendienst (wird nur verlinkt)." }),
    defineField({ name: "kartenEinbettung", title: "Karten-Einbettungsadresse", type: "url", group: "kontakt", description: "Google-Maps-Embed-URL. Wird ausschliesslich nach Einwilligung geladen." }),
    defineField({ name: "geo", title: "Koordinaten (für Suchmaschinen)", type: "object", group: "kontakt", fields: [defineField({ name: "breite", title: "Breitengrad", type: "number" }), defineField({ name: "laenge", title: "Längengrad", type: "number" })] }),
    defineField({ name: "oeffnungszeiten", title: "Öffnungszeiten", type: "array", group: "kontakt", of: [defineArrayMember({ type: "oeffnungszeit" })] }),
    defineField({ name: "oeffnungszeitenHinweis", title: "Hinweis zu den Öffnungszeiten", type: "string", group: "kontakt", description: "Nur ausfüllen, wenn die Zeiten nicht bestätigt sind. Leer lassen, sobald bestätigt (dann gelangen sie in die strukturierten Daten)." }),
    defineField({ name: "buchungUrl", title: "Online-Buchung (externer Dienst)", type: "url", group: "dienste", validation: (r) => r.required() }),
    defineField({ name: "buchungAnbieter", title: "Name des Buchungsdienstes", type: "string", group: "dienste", validation: (r) => r.required() }),
    defineField({ name: "whatsappUrl", title: "WhatsApp-Link", type: "url", group: "dienste" }),
    defineField({ name: "shopUrl", title: "Externer Shop", type: "url", group: "dienste", validation: (r) => r.required() }),
    defineField({ name: "shopName", title: "Name des Shops", type: "string", group: "dienste", validation: (r) => r.required() }),
    defineField({ name: "instagramUrl", title: "Instagram", type: "url", group: "dienste" }),
    defineField({ name: "facebookUrl", title: "Facebook", type: "url", group: "dienste" }),
    defineField({ name: "logo", title: "Logo (Bilddatei, optional – Standard ist die SVG-Marke im Code)", type: "bild", group: "bilder" }),
    defineField({ name: "seoBild", title: "Vorschaubild (Teilen in sozialen Medien)", type: "bild", group: "bilder" }),
  ],
  preview: { prepare: () => ({ title: "Praxisdaten" }) },
});

const textFelder = (namen: string[], gruppe: string) => namen.map((name) => defineField({ name, title: name, type: "text", rows: 2, group: gruppe, validation: (r) => r.required() }));

export const texteTyp = defineType({
  name: "texte",
  title: "Website-Texte",
  type: "document",
  groups: [
    { name: "navigation", title: "Navigation & Footer", default: true },
    { name: "seo", title: "Suchmaschinen" },
    { name: "ui", title: "Bedienelemente" },
    { name: "einwilligung", title: "Cookie-/Datenschutz-Einstellungen" },
    { name: "formular", title: "Kontaktanfrage" },
  ],
  fields: [
    defineField({ name: "navigation", title: "Hauptnavigation", type: "array", of: [defineArrayMember({ type: "navGruppe" })], validation: (r) => r.required().min(1).max(7), group: "navigation" }),
    defineField({ name: "navigationKnopf", title: "Knopf in der Kopfzeile (z. B. Termin buchen)", type: "link", group: "navigation", validation: (r) => r.required() }),
    defineField({ name: "footerLinks", title: "Linkgruppen im Footer", type: "array", group: "navigation", of: [defineArrayMember({ type: "object", name: "footerGruppe", fields: [defineField({ name: "titel", title: "Titel", type: "string", validation: (r) => r.required() }), defineField({ name: "links", title: "Links", type: "array", of: [defineArrayMember({ type: "link" })] })], preview: { select: { title: "titel" } } })] }),
    defineField({ name: "rechtslinks", title: "Rechtliche Links (Footer, jede Seite)", type: "array", of: [defineArrayMember({ type: "link" })], group: "navigation", validation: (r) => r.required().min(3) }),
    defineField({ name: "demoHinweis", title: "Demo-Hinweis", type: "string", group: "navigation", description: "Kurzer Hinweis am Seitenende, solange die Website eine Demo ist. Leer = kein Hinweis." }),
    defineField({ name: "seo", title: "Suchmaschinen", type: "object", group: "seo", fields: [defineField({ name: "titelZusatz", title: "Zusatz im Browser-Titel", type: "string", validation: (r) => r.required() }), defineField({ name: "beschreibung", title: "Standard-Beschreibung", type: "text", rows: 3, validation: (r) => r.required().max(160) })] }),
    defineField({
      name: "ui", title: "Bedienelemente", type: "object", group: "ui", description: "Beschriftungen von Knöpfen und Hinweisen. Die Feldnamen sind technisch, die Werte frei.",
      fields: ["zumInhalt", "menueOeffnen", "menueSchliessen", "untermenue", "anrufen", "emailSchreiben", "routePlanen", "externerLink", "buchenExtern", "buchenHinweis", "shopHinweis", "whatsappHinweis", "preisAufAnfrage", "preisChf", "dauer", "voraussetzungen", "enthalten", "einzelpreise", "ersparnis", "aktion", "aktionUngeklaert", "mehrErfahren", "zurueck", "download", "dateiGroesse", "startseite", "nichtGefundenTitel", "nichtGefundenText", "datenschutzEinstellungen", "oeffnungszeiten", "adresse", "kontakt", "quelle", "stand", "fragebogenHinweis", "fragebogenOriginal", "fragebogenAlternative", "ratgeber", "alleRatgeber", "sterne", "kundenmeinungQuelle", "bildHinweisStock", "inhaltsverzeichnis", "preisHinweisUnbestaetigt", "preisFussnote"].map((name) => defineField({ name, title: name, type: "text", rows: 1, validation: (r) => r.required() })),
    }),
    defineField({
      name: "einwilligung", title: "Cookie-/Datenschutz-Einstellungen", type: "object", group: "einwilligung",
      fields: textFelder(["bannerTitel", "bannerText", "alleAkzeptieren", "nurNotwendige", "einstellungen", "dialogTitel", "dialogText", "auswahlSpeichern", "schliessen", "notwendigTitel", "notwendigText", "immerAktiv", "medienTitel", "medienAnbieter", "medienText", "kartePlatzhalter", "karteAnzeigen", "videoPlatzhalter", "videoAnzeigen", "einmalLaden", "merken", "widerrufen", "keineEntscheidung", "entscheidungVom", "fussnote", "gespeichert", "alleErlaubt", "nurNotwendigeGespeichert", "widerrufenMeldung", "datenschutzerklaerung", "externOeffnen"], "einwilligung"),
    }),
    defineField({
      name: "formular", title: "Kontaktanfrage", type: "object", group: "formular",
      fields: [
        ...textFelder(["titel", "einleitung", "warnung", "name", "rueckruf", "anliegen", "nachricht", "nachrichtHilfe", "pflicht", "fehlerName", "emailVorbereiten", "hinweisNachher"], "formular"),
        defineField({ name: "anliegenOptionen", title: "Auswahl «Anliegen»", type: "array", of: [defineArrayMember({ type: "object", name: "option", fields: [defineField({ name: "wert", title: "Kennung", type: "string", validation: (r) => r.required() }), defineField({ name: "titel", title: "Beschriftung", type: "string", validation: (r) => r.required() })], preview: { select: { title: "titel", subtitle: "wert" } } })], validation: (r) => r.required().min(1) }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Website-Texte" }) },
});

export const seiteTyp = defineType({
  name: "seite",
  title: "Seite",
  type: "document",
  groups: [
    { name: "inhalt", title: "Inhalt", default: true },
    { name: "kopf", title: "Seitenanfang" },
    { name: "seo", title: "Suchmaschinen" },
    { name: "pruefung", title: "Herkunft & Prüfung" },
  ],
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Adresse", type: "slug", group: "inhalt", description: "«start» = Startseite. Sonst z. B. «preise» → /preise/ oder «dentalhygiene/kinder» → /dentalhygiene/kinder/.", options: { source: "titel", maxLength: 80 }, validation: slugRegel }),
    defineField({ name: "art", title: "Seitenart", type: "string", group: "inhalt", options: { list: [{ title: "Seite", value: "seite" }, { title: "Leistung", value: "leistung" }, { title: "Ratgeber", value: "ratgeber" }, { title: "Fragebogen", value: "fragebogen" }, { title: "Rechtliches", value: "rechtliches" }], layout: "radio" }, initialValue: "seite", validation: (r) => r.required() }),
    defineField({ name: "teaser", title: "Kurztext für Übersichten", type: "text", rows: 3, group: "inhalt" }),
    defineField({ name: "einleitung", title: "Einleitung unter dem Titel", type: "text", rows: 3, group: "kopf" }),
    defineField({ name: "bild", title: "Titelbild", type: "bild", group: "kopf" }),
    defineField({ name: "hero", title: "Grosser Seitenkopf (Startseite)", type: "object", group: "kopf", fields: [defineField({ name: "kurzzeile", title: "Kurzzeile", type: "string" }), defineField({ name: "titel", title: "Titel", type: "string", validation: (r) => r.required().max(90) }), defineField({ name: "text", title: "Text", type: "text", rows: 3, validation: (r) => r.max(220) }), defineField({ name: "knopf", title: "Knopf", type: "link" }), defineField({ name: "zweiterKnopf", title: "Zweiter Knopf", type: "link" }), defineField({ name: "bild", title: "Bild", type: "bild" }), defineField({ name: "variante", title: "Variante", type: "string", options: { list: ["start", "seite", "artikel"], layout: "radio" }, initialValue: "seite", validation: (r) => r.required() })] }),
    defineField({ name: "mitInhaltsverzeichnis", title: "Inhaltsverzeichnis anzeigen (lange Ratgeber)", type: "boolean", group: "kopf", initialValue: false }),
    defineField({ name: "bausteine", title: "Bausteine", type: "array", group: "inhalt", of: bausteinMitglieder }),
    defineField({ name: "seoTitel", title: "Seitentitel (Browser-Tab)", type: "string", group: "seo", validation: (r) => r.max(70).warning("Suchmaschinen kürzen Titel über ~70 Zeichen.") }),
    defineField({ name: "seoBeschreibung", title: "Beschreibung (Suchergebnis)", type: "text", rows: 3, group: "seo", validation: (r) => r.max(160).warning("Suchmaschinen zeigen meist nur ~160 Zeichen.") }),
    defineField({ name: "alteUrls", title: "Alte Adressen (whitesmyle.ch)", type: "array", of: [defineArrayMember({ type: "string" })], group: "seo", description: "Für Weiterleitungen nach dem Domain-Umzug, z. B. /dentalhygiene.html" }),
    ...pruefFelder("pruefung"),
  ],
  preview: { select: { title: "titel", slug: "slug.current", art: "art" }, prepare: ({ title, slug, art }) => ({ title, subtitle: `${art} · /${slug === "start" ? "" : slug + "/"}` }) },
});

export const leistungTyp = defineType({
  name: "leistung",
  title: "Leistung",
  type: "document",
  groups: [{ name: "inhalt", title: "Inhalt", default: true }, { name: "preis", title: "Preis & Bedingungen" }, { name: "pruefung", title: "Herkunft & Prüfung" }],
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "kurztitel", title: "Kurztitel (Preistafel, Kombipakete)", type: "string", group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "kategorie", title: "Kategorie", type: "string", group: "inhalt", options: { list: [{ title: "Dentalhygiene", value: "dentalhygiene" }, { title: "Bleaching", value: "bleaching" }], layout: "radio" }, validation: (r) => r.required() }),
    defineField({ name: "seite", title: "Detailseite (Pfad)", type: "string", group: "inhalt", validation: (r) => r.custom(linkRegel) }),
    defineField({ name: "kurzbeschreibung", title: "Kurzbeschreibung", type: "text", rows: 3, group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "leistungsumfang", title: "Leistungsumfang", type: "array", of: [defineArrayMember({ type: "string" })], group: "inhalt" }),
    defineField({ name: "bild", title: "Bild", type: "bild", group: "inhalt" }),
    reihenfolge,
    preisChf("preisChf", "Preis in CHF"),
    defineField({ name: "preisArt", title: "Preisart", type: "string", group: "preis", options: { list: [{ title: "Fixpreis", value: "fix" }, { title: "«ab»-Preis", value: "ab" }, { title: "Auf Anfrage (kein Preis anzeigen)", value: "anfrage" }], layout: "radio" }, initialValue: "fix", validation: (r) => r.required() }),
    defineField({ name: "preisHinweis", title: "Hinweis zum Preis", type: "string", group: "preis", description: "z. B. «exkl. Gel; Gel-Spritze CHF 15.–»" }),
    defineField({ name: "dauer", title: "Dauer (mit «ca.»)", type: "string", group: "preis", description: "Ungefähre Angaben nie als Garantie formulieren." }),
    defineField({ name: "voraussetzungen", title: "Voraussetzungen", type: "array", of: [defineArrayMember({ type: "string" })], group: "preis", description: "Erscheinen direkt beim Angebot." }),
    defineField({ name: "hinweise", title: "Weitere Hinweise", type: "array", of: [defineArrayMember({ type: "string" })], group: "preis" }),
    ...pruefFelder("pruefung"),
  ],
  orderings: [{ title: "Reihenfolge", name: "reihenfolge", by: [{ field: "reihenfolge", direction: "asc" }] }],
  preview: { select: { title: "titel", kategorie: "kategorie", preisChf: "preisChf", media: "bild" }, prepare: ({ title, kategorie, preisChf, media }) => ({ title, subtitle: `${kategorie}${preisChf ? ` · CHF ${preisChf}` : ""}`, media }) },
});

export const kombinationTyp = defineType({
  name: "kombination",
  title: "Kombipaket",
  type: "document",
  groups: [{ name: "inhalt", title: "Inhalt", default: true }, { name: "pruefung", title: "Herkunft & Prüfung" }],
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "leistungen", title: "Enthaltene Leistungen (Reihenfolge = Ablauf)", type: "array", of: [defineArrayMember({ type: "reference", to: [{ type: "leistung" }] })], group: "inhalt", validation: (r) => r.required().min(2) }),
    preisChf("preisChf", "Kombipreis in CHF", true),
    defineField({ name: "preisHinweis", title: "Hinweis zum Preis", type: "string", group: "inhalt", description: "z. B. abweichende Angabe auf einer anderen Seite – bleibt sichtbar, bis geklärt." }),
    defineField({ name: "dauer", title: "Dauer (mit «ca.»)", type: "string", group: "inhalt" }),
    defineField({ name: "beschreibung", title: "Beschreibung", type: "text", rows: 3, group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "voraussetzungen", title: "Voraussetzungen", type: "array", of: [defineArrayMember({ type: "string" })], group: "inhalt" }),
    defineField({ name: "bild", title: "Bild", type: "bild", group: "inhalt" }),
    reihenfolge,
    ...pruefFelder("pruefung"),
  ],
  orderings: [{ title: "Reihenfolge", name: "reihenfolge", by: [{ field: "reihenfolge", direction: "asc" }] }],
  preview: { select: { title: "titel", preisChf: "preisChf", media: "bild" }, prepare: ({ title, preisChf, media }) => ({ title, subtitle: `CHF ${preisChf}`, media }) },
});

export const aktionTyp = defineType({
  name: "aktion",
  title: "Aktion",
  type: "document",
  description: "Aktionen sind eigene Einträge mit Status. Ein fehlendes Enddatum bedeutet nicht «dauerhaft gültig».",
  groups: [{ name: "inhalt", title: "Inhalt", default: true }, { name: "gueltigkeit", title: "Gültigkeit & Status" }, { name: "pruefung", title: "Herkunft & Prüfung" }],
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "text", title: "Text", type: "text", rows: 3, group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "leistung", title: "Betroffene Leistung", type: "reference", to: [{ type: "leistung" }], group: "inhalt" }),
    preisChf("aktionspreisChf", "Aktionspreis in CHF", true),
    preisChf("vergleichspreisChf", "Vergleichspreis in CHF (muss auf der Preisliste stehen)", true),
    defineField({ name: "vergleichBasis", title: "Woher stammt der Vergleichspreis?", type: "string", group: "inhalt", validation: (r) => r.required() }),
    defineField({ name: "kombination", title: "Auf ein Kombipaket übertragen", type: "object", group: "inhalt", fields: [defineField({ name: "kombination", title: "Kombipaket", type: "reference", to: [{ type: "kombination" }], validation: (r) => r.required() }), preisChf("aktionspreisChf", "Aktionspreis Kombipaket", true), preisChf("vergleichspreisChf", "Vergleichspreis Kombipaket", true)] }),
    defineField({ name: "bedingungen", title: "Bedingungen", type: "array", of: [defineArrayMember({ type: "string" })], group: "gueltigkeit" }),
    defineField({ name: "status", title: "Status", type: "string", group: "gueltigkeit", options: { list: [{ title: "Aktiv – von der Praxis bestätigt", value: "aktiv-bestaetigt" }, { title: "Gültigkeit ungeklärt (erscheint mit Hinweis)", value: "gueltigkeit-ungeklaert" }, { title: "Geplant (erscheint nicht)", value: "geplant" }, { title: "Abgelaufen (erscheint nicht)", value: "abgelaufen" }], layout: "radio" }, initialValue: "gueltigkeit-ungeklaert", validation: (r) => r.required(), description: "Die Website zeigt Aktionen nur im Status «aktiv» oder «ungeklärt». Es gibt keine automatische Umschaltung nach Datum – der Status wird redaktionell gepflegt." }),
    defineField({ name: "gueltigVon", title: "Gültig ab", type: "date", group: "gueltigkeit" }),
    defineField({ name: "gueltigBis", title: "Gültig bis", type: "date", group: "gueltigkeit", description: "Nur eintragen, wenn bekannt. Kein Datum erfinden." }),
    ...pruefFelder("pruefung"),
  ],
  preview: { select: { title: "titel", status: "status", aktionspreisChf: "aktionspreisChf" }, prepare: ({ title, status, aktionspreisChf }) => ({ title, subtitle: `${status} · CHF ${aktionspreisChf}` }) },
});

export const teammitgliedTyp = defineType({
  name: "teammitglied",
  title: "Teammitglied",
  type: "document",
  fields: [
    defineField({ name: "vorname", title: "Vorname", type: "string", validation: (r) => r.required() }),
    defineField({ name: "nachname", title: "Nachname", type: "string", validation: (r) => r.required() }),
    defineField({ name: "funktion", title: "Funktion / Berufsbezeichnung", type: "string", description: "Nur belegte Bezeichnungen, z. B. «Dipl. Dentalhygienikerin HF».", validation: (r) => r.required() }),
    defineField({ name: "weitereFunktionen", title: "Weitere Funktionen", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "sprachen", title: "Sprachen", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "bild", title: "Portrait", type: "bild" }),
    reihenfolge,
  ],
  orderings: [{ title: "Reihenfolge", name: "reihenfolge", by: [{ field: "reihenfolge", direction: "asc" }] }],
  preview: { select: { vorname: "vorname", nachname: "nachname", funktion: "funktion", media: "bild" }, prepare: ({ vorname, nachname, funktion, media }) => ({ title: `${vorname} ${nachname}`, subtitle: funktion, media }) },
});

export const kundenmeinungTyp = defineType({
  name: "kundenmeinung",
  title: "Kundenmeinung",
  type: "document",
  description: "Wörtlich übernehmen, nicht umformulieren. Sterne nur, wenn die Quelle sie zeigt.",
  fields: [
    defineField({ name: "name", title: "Name (wie veröffentlicht)", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ort", title: "Ort", type: "string" }),
    defineField({ name: "leistung", title: "Leistung", type: "string" }),
    defineField({ name: "text", title: "Text (wörtlich)", type: "text", rows: 5, validation: (r) => r.required() }),
    defineField({ name: "sterne", title: "Sterne (nur wenn in der Quelle)", type: "number", validation: (r) => r.integer().min(1).max(5) }),
    defineField({ name: "quelle", title: "Quelle", type: "string", validation: (r) => r.required() }),
    reihenfolge,
  ],
  orderings: [{ title: "Reihenfolge", name: "reihenfolge", by: [{ field: "reihenfolge", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "text" } },
});

export const medienstimmeTyp = defineType({
  name: "medienstimme",
  title: "Medienstimme",
  type: "document",
  fields: [
    defineField({ name: "medium", title: "Medium", type: "string", validation: (r) => r.required() }),
    defineField({ name: "titel", title: "Titel des Beitrags", type: "string" }),
    defineField({ name: "hinweis", title: "Hinweis", type: "string" }),
    defineField({ name: "url", title: "Link zum Original", type: "url" }),
    defineField({ name: "datei", title: "PDF", type: "file", options: { accept: "application/pdf" } }),
    defineField({ name: "logo", title: "Logo", type: "bild" }),
    defineField({ name: "bild", title: "Bild/Scan", type: "bild" }),
    reihenfolge,
  ],
  preview: { select: { title: "medium", subtitle: "titel", media: "logo" } },
});

export const fragebogenTyp = defineType({
  name: "fragebogen",
  title: "Fragebogen (Anzeige)",
  type: "document",
  description: "Wird nur angezeigt: keine Eingabe, keine Auswertung, keine Speicherung. Der Link zur Originalfunktion bleibt extern.",
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Adresse unter /tests/", type: "slug", options: { source: "titel" }, validation: (r) => r.required() }),
    defineField({ name: "einleitung", title: "Einleitung", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "versprechenOriginal", title: "Zusage der Praxis (wörtlich aus der Quelle)", type: "string" }),
    defineField({ name: "fragen", title: "Fragen", type: "array", of: [defineArrayMember({ type: "object", name: "frage", fields: [defineField({ name: "frage", title: "Frage", type: "string", validation: (r) => r.required() }), defineField({ name: "art", title: "Antwortart", type: "string", options: { list: [{ title: "Ja / Nein", value: "jaNein" }, { title: "Auswahl", value: "auswahl" }, { title: "Freitext", value: "text" }], layout: "radio" }, validation: (r) => r.required() }), defineField({ name: "optionen", title: "Optionen", type: "array", of: [defineArrayMember({ type: "string" })] })], preview: { select: { title: "frage", subtitle: "art" } } })], validation: (r) => r.required().min(1) }),
    defineField({ name: "originalUrl", title: "Originalfunktion (externer Link)", type: "url", validation: (r) => r.required() }),
    defineField({ name: "quelle", title: "Quelle", type: "string", validation: (r) => r.required() }),
    reihenfolge,
  ],
  preview: { select: { title: "titel", subtitle: "slug.current" } },
});

export const downloadTyp = defineType({
  name: "download",
  title: "Download (PDF)",
  type: "document",
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "datei", title: "Datei", type: "file", options: { accept: "application/pdf" }, validation: (r) => r.required() }),
    defineField({ name: "hinweis", title: "Hinweis", type: "string" }),
    defineField({ name: "quelle", title: "Quelle", type: "string", validation: (r) => r.required() }),
    reihenfolge,
  ],
  preview: { select: { title: "titel", subtitle: "hinweis" } },
});

export const zahlungsartTyp = defineType({
  name: "zahlungsart",
  title: "Zahlungsmöglichkeit",
  type: "document",
  fields: [defineField({ name: "titel", title: "Bezeichnung", type: "string", validation: (r) => r.required() }), defineField({ name: "logo", title: "Logo", type: "bild" }), reihenfolge],
  preview: { select: { title: "titel", media: "logo" } },
});

export const rechtstextTyp = defineType({
  name: "rechtstext",
  title: "Rechtstext",
  type: "document",
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "art", title: "Art", type: "string", options: { list: [{ title: "Impressum", value: "impressum" }, { title: "Datenschutzerklärung", value: "datenschutz" }, { title: "AGB", value: "agb" }], layout: "radio" }, validation: (r) => r.required() }),
    defineField({ name: "stand", title: "Stand (Datum)", type: "date" }),
    defineField({ name: "hinweis", title: "Hinweis oberhalb des Textes", type: "text", rows: 2, description: "z. B. «Demo-Fassung, nicht anwaltlich geprüft». Vor dem Go-Live entfernen oder anpassen." }),
    defineField({ name: "inhalt", title: "Inhalt", type: "richText", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "titel", subtitle: "art" } },
});
