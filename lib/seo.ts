import type { Metadata } from "next";
import { stegaClean } from "@sanity/client/stega";
import { seitenPfad, type Einstellungen, type Seite, type Teammitglied, type Texte } from "./content/types";
import { siteUrl } from "./deploy-ziel";

/** Indexierung nur, wenn ausdrücklich freigegeben (nach Go-Live auf der Kundendomain). */
export const indexierungErlaubt = process.env.INDEXIERUNG === "1";

/** Entfernt Stega-Markierungen (Visual Editing) aus Strings, bevor sie in Metadaten/JSON-LD landen. */
const sauber = (s: string | undefined) => (s ? stegaClean(s) : undefined);

export function seitenMetadata(seite: Seite, e: Einstellungen, t: Texte): Metadata {
  const titel = sauber(seite.seoTitel) ?? sauber(seite.titel) ?? "";
  const beschreibung = sauber(seite.seoBeschreibung) ?? sauber(seite.teaser) ?? sauber(t.seo.beschreibung);
  const pfad = seitenPfad(seite.slug);
  const bild = seite.hero?.bild ?? seite.bild ?? e.seoBild;
  const bildUrl = bild ? bild.quellen[bild.quellen.length - 1]?.url : undefined;
  return {
    title: seite.slug === "start" ? `${sauber(e.marke)} – ${titel}` : `${titel} | ${sauber(t.seo.titelZusatz)}`,
    description: beschreibung,
    alternates: { canonical: `${siteUrl}${pfad}` },
    openGraph: {
      title: titel,
      description: beschreibung,
      url: `${siteUrl}${pfad}`,
      siteName: sauber(e.marke),
      locale: "de_CH",
      type: "website",
      images: bildUrl ? [{ url: bildUrl.startsWith("http") ? bildUrl : `${siteUrl}${bildUrl}`, width: bild?.breite, height: bild?.hoehe, alt: sauber(bild?.alt) }] : undefined,
    },
    robots: indexierungErlaubt ? { index: true, follow: true } : { index: false, follow: false },
  };
}

const SCHEMA_WOCHENTAG: Record<string, string> = {
  Montag: "https://schema.org/Monday", Dienstag: "https://schema.org/Tuesday", Mittwoch: "https://schema.org/Wednesday", Donnerstag: "https://schema.org/Thursday",
  Freitag: "https://schema.org/Friday", Samstag: "https://schema.org/Saturday", Sonntag: "https://schema.org/Sunday",
};

/**
 * Strukturierte Daten: `LocalBusiness` mit `additionalType: HealthAndBeautyBusiness` – ausschliesslich belegte Angaben.
 * Bewusst NICHT `Dentist` (Codex-Empfehlung): Belegt ist eine Dentalhygiene-Praxis mit Bewilligung der Gesundheitsdirektion
 * Zürich für Tünde Obenauer, kein zahnärztliches Teammitglied. Öffnungszeiten nur, wenn kein Herkunftshinweis mehr gesetzt ist.
 * Keine Bewertungen, keine Aktionspreise, keine erfundenen Fachbezeichnungen.
 */
export function praxisJsonLd(e: Einstellungen, team: Teammitglied[] = []): Record<string, unknown> {
  const bestaetigt = !e.oeffnungszeitenHinweis;
  const zeiten = (bestaetigt ? e.oeffnungszeiten : [])
    .filter((z) => !z.nachVereinbarung && z.wochentage?.length && z.intervalle?.length)
    .flatMap((z) => z.intervalle!.map((i) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: z.wochentage!.map((w) => SCHEMA_WOCHENTAG[w]).filter(Boolean), opens: i.von, closes: i.bis })));
  const sameAs = [e.instagramUrl, e.facebookUrl].filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    additionalType: "https://schema.org/HealthAndBeautyBusiness",
    "@id": `${siteUrl}/#praxis`,
    name: sauber(e.marke),
    legalName: sauber(e.rechtstraeger),
    url: `${siteUrl}/`,
    telephone: telefonInternational(e.telefon),
    email: sauber(e.email),
    image: e.seoBild ? `${siteUrl}${e.seoBild.quellen[e.seoBild.quellen.length - 1].url}` : undefined,
    address: { "@type": "PostalAddress", streetAddress: sauber(e.adresse.strasse), postalCode: sauber(e.adresse.plz), addressLocality: sauber(e.adresse.ort), addressCountry: "CH" },
    geo: e.geo ? { "@type": "GeoCoordinates", latitude: e.geo.breite, longitude: e.geo.laenge } : undefined,
    openingHoursSpecification: zeiten.length ? zeiten : undefined,
    sameAs: sameAs.length ? sameAs : undefined,
    employee: team.length
      ? team.map((p) => ({ "@type": "Person", name: `${sauber(p.vorname)} ${sauber(p.nachname)}`, givenName: sauber(p.vorname), familyName: sauber(p.nachname), jobTitle: sauber(p.funktion), knowsLanguage: p.sprachen.map(sauber) }))
      : undefined,
    inLanguage: "de-CH",
  };
}

/** «043 931 78 74», «+41 43 …», «0041 43 …» → «+41439317874» (E.164). */
export function telefonInternational(tel: string): string {
  const ziffern = tel.replace(/\D/g, "");
  if (ziffern.startsWith("00")) return `+${ziffern.slice(2)}`;
  if (ziffern.startsWith("0")) return `+41${ziffern.slice(1)}`;
  return `+${ziffern}`;
}

/** JSON-LD sicher in ein <script> einbetten: «<» wird escaped, damit kein HTML entsteht. */
export function jsonLdSicher(daten: unknown): string {
  return JSON.stringify(daten).replace(/</g, "\\u003c");
}
