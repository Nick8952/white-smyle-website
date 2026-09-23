import { ArrowUpRight, ChatCircleText, Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import type { Einstellungen, KontaktBaustein, Texte } from "@/lib/content/types";
import { telefonInternational } from "@/lib/seo";
import { Abschnitt } from "./Abschnitt";
import { Anfrageformular } from "./Anfrageformular";
import { Bild } from "./Bild";
import { BuchenLink } from "./BuchenLink";
import { Karte } from "./Karte";
import { RichText } from "./RichText";

/** Kontaktblock: Kontaktwege (Telefon, Mobil/WhatsApp, E-Mail, Buchung), Adresse, Öffnungszeiten, Karte (Zwei-Klick), Anfahrt, Formular. */
export function Kontakt({ baustein: b, einstellungen: e, texte: t }: { baustein: KontaktBaustein; einstellungen: Einstellungen; texte: Texte }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-6 self-start">
          <ul className="grid gap-3">
            <li className="karte flex items-center gap-4 p-4">
              <Phone size={26} weight="duotone" aria-hidden="true" className="shrink-0 text-rost" />
              <div>
                <p className="klein text-grau">{t.ui.anrufen}</p>
                <a href={`tel:${telefonInternational(e.telefon)}`} className="font-display text-lg font-bold hover:underline">{e.telefon}</a>
              </div>
            </li>
            <li className="karte flex items-center gap-4 p-4">
              <ChatCircleText size={26} weight="duotone" aria-hidden="true" className="shrink-0 text-rost" />
              <div>
                <p className="klein text-grau">{e.mobilKanaele}</p>
                <a href={`tel:${telefonInternational(e.mobil)}`} className="font-display text-lg font-bold hover:underline">{e.mobil}</a>
                {e.whatsappUrl ? (
                  <p className="klein">
                    <a href={e.whatsappUrl} target="_blank" rel="noopener noreferrer" className="textlink inline-flex items-center gap-1">
                      WhatsApp-Chat öffnen <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                      <span className="nur-sr"> ({t.ui.externerLink})</span>
                    </a>{" "}
                    <span className="text-grau">{t.ui.whatsappHinweis}</span>
                  </p>
                ) : null}
              </div>
            </li>
            <li className="karte flex items-center gap-4 p-4">
              <EnvelopeSimple size={26} weight="duotone" aria-hidden="true" className="shrink-0 text-rost" />
              <div>
                <p className="klein text-grau">{t.ui.emailSchreiben}</p>
                <a href={`mailto:${e.email}`} className="font-display text-lg font-bold hover:underline">{e.email}</a>
              </div>
            </li>
            <li className="karte flex items-start gap-4 p-4">
              <MapPin size={26} weight="duotone" aria-hidden="true" className="shrink-0 text-rost" />
              <div>
                <p className="klein text-grau">{t.ui.adresse}</p>
                <p className="font-display text-lg font-bold">{e.marke}</p>
                <p>{e.adresse.strasse}{e.adresse.zusatz ? `, ${e.adresse.zusatz}` : ""}<br />{e.adresse.plz} {e.adresse.ort}</p>
                <a href={e.routenlink} target="_blank" rel="noopener noreferrer" className="textlink klein mt-1 inline-flex items-center gap-1">
                  {t.ui.routePlanen} <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  <span className="nur-sr"> ({t.ui.externerLink})</span>
                </a>
              </div>
            </li>
            <li className="karte flex items-start gap-4 p-4">
              <Clock size={26} weight="duotone" aria-hidden="true" className="shrink-0 text-rost" />
              <div>
                <p className="klein text-grau">{t.ui.oeffnungszeiten}</p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                  {e.oeffnungszeiten.map((z) => (
                    <div key={z._key} className="contents">
                      <dt className="font-semibold">{z.tage}</dt>
                      <dd>{z.zeiten}</dd>
                    </div>
                  ))}
                </dl>
                {e.oeffnungszeitenHinweis ? <p className="klein mt-2 text-grau">{e.oeffnungszeitenHinweis}</p> : null}
              </div>
            </li>
          </ul>
          <div className="karte-orange p-5">
            <p className="font-semibold">{t.ui.buchenHinweis.replace("{anbieter}", e.buchungAnbieter)}</p>
            <div className="mt-3">
              <BuchenLink einstellungen={e} texte={t} variante="primaer" />
            </div>
          </div>
        </div>
        <div className="grid gap-8">
          {b.mitKarte ? <Karte einstellungen={e} texte={t.einwilligung} /> : null}
          {b.anfahrt ? (
            <div>
              <RichText inhalt={b.anfahrt} />
              {b.anfahrtBilder.length ? (
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {b.anfahrtBilder.map((bild, i) => (
                    <li key={bild.id + i}>
                      <figure>
                        <div className="overflow-hidden rounded-[var(--radius-mittel)] bg-emaille" style={{ aspectRatio: "4 / 3" }}>
                          <Bild bild={bild} sizes="(min-width: 640px) 20vw, 45vw" className="h-full w-full object-cover" />
                        </div>
                        {bild.bildunterschrift ? <figcaption className="winzig mt-1 text-grau">{bild.bildunterschrift}</figcaption> : null}
                      </figure>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
          {b.mitFormular ? <Anfrageformular einstellungen={e} texte={t} /> : null}
        </div>
      </div>
    } />
  );
}
