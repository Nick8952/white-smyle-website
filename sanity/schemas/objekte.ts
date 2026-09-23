import { defineArrayMember, defineField, defineType } from "sanity";

/** Bild mit Pflicht-Alt-Text und optionaler Bildunterschrift. */
export const bildTyp = defineType({
  name: "bild",
  title: "Bild",
  type: "image",
  options: { hotspot: true },
  fields: [
    defineField({ name: "alt", title: "Alternativtext", type: "string", description: "Beschreibt das Bild für Screenreader. Pflichtfeld. Keine Stockfotos als Praxis-, Team- oder Patientenbilder bezeichnen.", validation: (r) => r.required().max(200) }),
    defineField({ name: "bildunterschrift", title: "Bildunterschrift", type: "string" }),
  ],
});

export const linkRegel = (wert: unknown) => {
  if (typeof wert !== "string") return true;
  const ok = /^\/(?!\/)/.test(wert) || /^(https?:\/\/[^\s]+|mailto:[^\s]+|tel:\+?[\d\s()-]+)$/.test(wert);
  return ok || "Erlaubt sind interne Pfade (/…/), https://…, mailto:… und tel:…";
};

export const linkTyp = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({ name: "titel", title: "Beschriftung", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ziel", title: "Ziel", type: "string", description: "Interner Pfad (z. B. /preise/), externe Adresse (https://…), tel:… oder mailto:…", validation: (r) => r.required().custom(linkRegel) }),
    defineField({ name: "extern", title: "In neuem Tab öffnen", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "titel", subtitle: "ziel" } },
});

export const navGruppeTyp = defineType({
  name: "navGruppe",
  title: "Menüpunkt",
  type: "object",
  fields: [
    defineField({ name: "titel", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ziel", title: "Eigene Seite (optional)", type: "string", validation: (r) => r.custom(linkRegel) }),
    defineField({ name: "kinder", title: "Untermenü", type: "array", of: [defineArrayMember({ type: "link" })], validation: (r) => r.max(12) }),
  ],
  preview: { select: { title: "titel", kinder: "kinder" }, prepare: ({ title, kinder }) => ({ title, subtitle: kinder?.length ? `${kinder.length} Untereinträge` : "ohne Untermenü" }) },
});

/** Formatierter Text: Absätze, Zwischentitel, Listen, Zitat, Quellenangabe, Links, fett/kursiv, einfache Tabelle. */
export const richTextTyp = defineType({
  name: "richText",
  title: "Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Absatz", value: "normal" },
        { title: "Zwischentitel", value: "h2" },
        { title: "Untertitel", value: "h3" },
        { title: "Kleiner Titel", value: "h4" },
        { title: "Zitat", value: "blockquote" },
        { title: "Quellenangabe (klein)", value: "quelle" },
      ],
      lists: [
        { title: "Aufzählung", value: "bullet" },
        { title: "Nummerierung", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Fett", value: "strong" },
          { title: "Kursiv", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            title: "Link",
            type: "object",
            fields: [
              defineField({ name: "href", title: "Adresse", type: "string", validation: (r) => r.required().custom(linkRegel) }),
              defineField({ name: "extern", title: "In neuem Tab öffnen", type: "boolean", initialValue: false }),
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "object",
      name: "tabelle",
      title: "Tabelle",
      fields: [
        defineField({ name: "beschriftung", title: "Beschriftung", type: "string" }),
        defineField({ name: "kopf", title: "Kopfzeile", type: "array", of: [defineArrayMember({ type: "string" })] }),
        defineField({
          name: "zeilen",
          title: "Zeilen",
          type: "array",
          of: [defineArrayMember({ type: "object", name: "zeile", fields: [defineField({ name: "zellen", title: "Zellen", type: "array", of: [defineArrayMember({ type: "string" })] })], preview: { select: { zellen: "zellen" }, prepare: ({ zellen }) => ({ title: (zellen ?? []).join(" | ") }) } })],
        }),
      ],
      preview: { select: { beschriftung: "beschriftung", zeilen: "zeilen" }, prepare: ({ beschriftung, zeilen }) => ({ title: beschriftung || `Tabelle (${zeilen?.length ?? 0} Zeilen)` }) },
    }),
  ],
});

export const adresseTyp = defineType({
  name: "adresse",
  title: "Adresse",
  type: "object",
  fields: [
    defineField({ name: "strasse", title: "Strasse und Nr.", type: "string", validation: (r) => r.required() }),
    defineField({ name: "zusatz", title: "Zusatz (z. B. Rückgebäude/Innenhof)", type: "string" }),
    defineField({ name: "plz", title: "PLZ", type: "string", validation: (r) => r.required() }),
    defineField({ name: "ort", title: "Ort", type: "string", validation: (r) => r.required() }),
    defineField({ name: "land", title: "Land", type: "string", initialValue: "Schweiz" }),
  ],
});

const WOCHENTAGE = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
const ZEIT = /^([01]\d|2[0-3]):[0-5]\d$/;

export const oeffnungszeitTyp = defineType({
  name: "oeffnungszeit",
  title: "Öffnungszeit",
  type: "object",
  description: "«Tage»/«Zeiten» sind der sichtbare Text. Wochentage und Zeitspannen sind optional und nur für Suchmaschinen.",
  fields: [
    defineField({ name: "tage", title: "Tage", type: "string", validation: (r) => r.required() }),
    defineField({ name: "zeiten", title: "Zeiten", type: "string", validation: (r) => r.required() }),
    defineField({ name: "wochentage", title: "Wochentage (für Suchmaschinen)", type: "array", of: [defineArrayMember({ type: "string" })], options: { list: WOCHENTAGE } }),
    defineField({
      name: "intervalle",
      title: "Geöffnete Zeitspannen (für Suchmaschinen)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "intervall",
          fields: [
            defineField({ name: "von", title: "Öffnet um", type: "string", description: "HH:MM", validation: (r) => r.required().regex(ZEIT, { name: "Uhrzeit", invert: false }) }),
            defineField({ name: "bis", title: "Schliesst um", type: "string", description: "HH:MM", validation: (r) => r.required().regex(ZEIT, { name: "Uhrzeit", invert: false }) }),
          ],
          preview: { select: { von: "von", bis: "bis" }, prepare: ({ von, bis }) => ({ title: `${von} bis ${bis}` }) },
        }),
      ],
    }),
    defineField({ name: "nachVereinbarung", title: "Nur nach Vereinbarung", type: "boolean", initialValue: false }),
  ],
  preview: { select: { title: "tage", subtitle: "zeiten" } },
});

/** Redaktionelle Prüfangaben für medizinische Inhalte – informativ, kein technischer Freigabezwang. */
export const pruefFelder = (gruppe?: string) => [
  defineField({ name: "quelle", title: "Quelle des Textes", type: "string", description: "Woher stammt der Text? z. B. «whitesmyle.ch/bleaching.html (Stand 23.09.2026)»", group: gruppe }),
  defineField({
    name: "pruefstatus",
    title: "Prüfstatus",
    type: "string",
    description: "Dokumentiert den redaktionellen Stand. Die fachliche Freigabe erfolgt durch die Praxis – dieses Feld erzwingt nichts.",
    options: {
      list: [
        { title: "Übernommen (unverändert)", value: "uebernommen" },
        { title: "Sprachlich angepasst (Aussage unverändert)", value: "sprachlich-angepasst" },
        { title: "Fachlich geprüft und freigegeben", value: "fachlich-geprueft" },
      ],
      layout: "radio",
    },
    group: gruppe,
  }),
  defineField({ name: "freigabedatum", title: "Freigabedatum", type: "date", description: "Datum der fachlichen Freigabe durch die Praxis (falls erfolgt).", group: gruppe }),
];
