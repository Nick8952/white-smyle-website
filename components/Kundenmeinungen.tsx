import { Quotes, Star } from "@phosphor-icons/react/dist/ssr";
import type { KundenmeinungenBaustein, Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";

/**
 * Kundenmeinungen wörtlich (Name, Ort, Leistung wie in der Quelle). Sterne nur, wenn die Quelle sie zeigt.
 * Keine Portraits: die Bildzuordnung zu den Personen ist nicht belegt. Quellenhinweis unter dem Abschnitt.
 */
export function Kundenmeinungen({ baustein: b, texte: t }: { baustein: KundenmeinungenBaustein; texte: Texte }) {
  const wand = b.darstellung === "wand";
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} hintergrund={wand ? "emaille" : "papier"} kinder={
      <>
        <ul className={wand ? "columns-1 gap-4 md:columns-2 xl:columns-3 [&>li]:mb-4 [&>li]:break-inside-avoid" : "grid gap-4 md:grid-cols-2"}>
          {b.meinungen.map((m) => (
            <li key={m.id} className="karte auftauchen p-6">
              <Quotes size={26} weight="fill" aria-hidden="true" className="text-mandarine" />
              {m.sterne ? (
                <p className="mt-2 flex gap-0.5 text-mandarine" aria-label={`${m.sterne} ${t.ui.sterne}`}>
                  {Array.from({ length: m.sterne }).map((_, i) => <Star key={i} size={16} weight="fill" aria-hidden="true" />)}
                </p>
              ) : null}
              <blockquote className="mt-3">
                <p className="text-tinte">{m.text}</p>
              </blockquote>
              <p className="klein mt-4 font-semibold">
                {m.name}
                {m.ort ? <span className="font-normal text-grau"> · {m.ort}</span> : null}
              </p>
              {m.leistung ? <p className="winzig text-grau">{m.leistung}</p> : null}
            </li>
          ))}
        </ul>
        <p className="klein mt-6 max-w-3xl text-grau">{b.quellenHinweis ?? t.ui.kundenmeinungQuelle}</p>
      </>
    } />
  );
}
