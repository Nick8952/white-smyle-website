import type { Baustein, Einstellungen, Seite, Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { RichText } from "./RichText";
import { Bild, BildMitUnterschrift } from "./Bild";
import { Leistungen } from "./Leistungen";
import { Kombinationen } from "./Kombinationen";
import { Preistafel } from "./Preistafel";
import { AktionBox } from "./AktionBox";
import { Ablauf } from "./Ablauf";
import { Faq } from "./Faq";
import { Vergleich } from "./Vergleich";
import { Stufen } from "./Stufen";
import { Team } from "./Team";
import { Kundenmeinungen } from "./Kundenmeinungen";
import { Galerie } from "./Galerie";
import { Fallbeispiele } from "./Fallbeispiele";
import { Aufruf } from "./Aufruf";
import { FragebogenAnzeige, FragebogenListe } from "./Fragebogen";
import { Karte } from "./Karte";
import { Video } from "./Video";
import { Downloads } from "./Downloads";
import { Kontakt } from "./Kontakt";
import { Rechtstext } from "./Rechtstext";
import { Zahlungsarten } from "./Zahlungsarten";
import { RatgeberListe } from "./RatgeberListe";
import { Medienstimmen } from "./Medienstimmen";
import { Linkkarten } from "./Linkkarten";
import { Kennzahlen } from "./Kennzahlen";
import { Hinweis } from "./Hinweis";
import { Spalten } from "./Spalten";
import { Widerruf } from "./Widerruf";

export type BausteinKontext = { einstellungen: Einstellungen; texte: Texte; seite: Seite };

/** Rendert die Bausteine einer Seite in Reihenfolge. Neuer Baustein = Typ + Sanity-Schema + Fall hier + inhalt-pruefen + Seed. */
export function Bausteine({ bausteine, einstellungen, texte, seite }: { bausteine: Baustein[] } & BausteinKontext) {
  const ctx = { einstellungen, texte, seite };
  return (
    <>
      {bausteine.map((b, i) => (
        <BausteinAusgabe key={b._key} baustein={b} ctx={ctx} wechsel={i % 2 === 1} />
      ))}
    </>
  );
}

function BausteinAusgabe({ baustein: b, ctx, wechsel }: { baustein: Baustein; ctx: BausteinKontext; wechsel: boolean }) {
  const { texte: t } = ctx;
  switch (b._type) {
    case "textBaustein": {
      const schmal = b.breite === "schmal" || (!b.bild && ctx.seite.art === "ratgeber");
      return (
        <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} breite={schmal ? "schmal" : "normal"} kinder={
          b.bild ? (
            <div className={`grid items-start gap-8 lg:grid-cols-2 ${b.bildPosition === "links" ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <RichText inhalt={b.inhalt} className="auftauchen max-w-[40rem]" />
              <BildMitUnterschrift bild={b.bild} sizes="(min-width: 1024px) 45vw, 100vw" className="auftauchen lg:sticky lg:top-24" />
            </div>
          ) : (
            <RichText inhalt={b.inhalt} className={schmal ? "" : "max-w-[44rem]"} />
          )
        } />
      );
    }
    case "spaltenBaustein":
      return <Spalten baustein={b} />;
    case "hinweisBaustein":
      return <Hinweis baustein={b} />;
    case "leistungenBaustein":
      return <Leistungen baustein={b} texte={t} einstellungen={ctx.einstellungen} />;
    case "kombinationenBaustein":
      return <Kombinationen baustein={b} texte={t} einstellungen={ctx.einstellungen} />;
    case "preistafelBaustein":
      return <Preistafel baustein={b} texte={t} einstellungen={ctx.einstellungen} />;
    case "aktionBaustein":
      return <AktionBox baustein={b} texte={t} einstellungen={ctx.einstellungen} />;
    case "ablaufBaustein":
      return <Ablauf baustein={b} />;
    case "faqBaustein":
      return <Faq baustein={b} />;
    case "vergleichBaustein":
      return <Vergleich baustein={b} />;
    case "stufenBaustein":
      return <Stufen baustein={b} />;
    case "teamBaustein":
      return <Team baustein={b} texte={t} />;
    case "kundenmeinungenBaustein":
      return <Kundenmeinungen baustein={b} texte={t} />;
    case "galerieBaustein":
      return <Galerie baustein={b} />;
    case "bildBaustein":
      return (
        <section id={b.anker} className="abschnitt-eng">
          <div className="behaelter">
            <figure className="mx-auto max-w-4xl">
              <div className="bild-rahmen" style={{ aspectRatio: `${b.bild.breite} / ${b.bild.hoehe}` }}>
                <Bild bild={b.bild} sizes="(min-width: 1024px) 896px, 100vw" />
              </div>
              {b.text ? <figcaption className="klein mt-3 text-grau">{b.text}</figcaption> : null}
            </figure>
          </div>
        </section>
      );
    case "fallbeispieleBaustein":
      return <Fallbeispiele baustein={b} />;
    case "aufrufBaustein":
      return <Aufruf baustein={b} texte={t} />;
    case "fragebogenBaustein":
      return <FragebogenAnzeige baustein={b} texte={t} einstellungen={ctx.einstellungen} />;
    case "fragebogenListeBaustein":
      return <FragebogenListe baustein={b} texte={t} />;
    case "karteBaustein":
      return (
        <Abschnitt id={b.anker} titel={b.titel} einleitung={b.text} hintergrund={wechsel ? "emaille" : "papier"} kinder={<Karte einstellungen={ctx.einstellungen} texte={t.einwilligung} />} />
      );
    case "videoBaustein":
      return (
        <Abschnitt id={b.anker} titel={b.titel} einleitung={b.text} breite="schmal" kinder={<Video youtubeId={b.youtubeId} titel={b.videoTitel} texte={t.einwilligung} />} />
      );
    case "downloadsBaustein":
      return <Downloads baustein={b} texte={t} />;
    case "kontaktBaustein":
      return <Kontakt baustein={b} einstellungen={ctx.einstellungen} texte={t} />;
    case "rechtstextBaustein":
      return <Rechtstext baustein={b} texte={t} />;
    case "zahlungsartenBaustein":
      return <Zahlungsarten baustein={b} />;
    case "ratgeberListeBaustein":
      return <RatgeberListe baustein={b} texte={t} />;
    case "medienstimmenBaustein":
      return <Medienstimmen baustein={b} texte={t} />;
    case "linkkartenBaustein":
      return <Linkkarten baustein={b} texte={t} />;
    case "kennzahlenBaustein":
      return <Kennzahlen baustein={b} einstellungen={ctx.einstellungen} />;
    case "datenschutzEinstellungenBaustein":
      return <Abschnitt id={b.anker} titel={b.titel} einleitung={b.einleitung} breite="schmal" kinder={<Widerruf texte={t.einwilligung} />} />;
    default: {
      // Exhaustiv: ein neuer Bausteintyp muss hier gerendert werden, sonst bricht der Build statt Inhalt still zu verschwinden.
      const unbekannt: never = b;
      throw new Error(`Unbekannter Baustein: ${JSON.stringify(unbekannt).slice(0, 80)}`);
    }
  }
}
