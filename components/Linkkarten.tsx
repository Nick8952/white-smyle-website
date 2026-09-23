import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { chf, type LinkkartenBaustein, type Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";
import { SmartLink } from "./SmartLink";

/** Verweiskarten (z. B. die drei Angebote auf der Startseite): Bild, Titel, Text, optional Preis, ein Link. */
export function Linkkarten({ baustein: b, texte: t }: { baustein: LinkkartenBaustein; texte: Texte }) {
  const cols = b.spalten === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className={`grid gap-5 ${cols}`}>
        {b.karten.map((k, i) => (
          <li key={k._key} className={`karte auftauchen flex flex-col overflow-hidden ${b.spalten === 3 && i === 0 ? "lg:row-span-1" : ""}`}>
            {k.bild ? (
              <div className="aspect-[3/2] overflow-hidden bg-emaille">
                <Bild bild={k.bild} sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="titel-3">{k.titel}</h3>
                {k.preisChf !== undefined ? <p className="preis text-2xl">{k.preisPraefix ? `${k.preisPraefix} ` : ""}{chf(k.preisChf)}</p> : null}
              </div>
              <p className="mt-3 text-tinte-2">{k.text}</p>
              <div className="mt-auto pt-5">
                <SmartLink link={k.link} externText={t.ui.externerLink} className="knopf knopf-sekundaer knopf-klein" mitPfeil={false} kinder={<>{k.link.titel}<ArrowRight size={16} weight="bold" aria-hidden="true" /></>} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    } />
  );
}
