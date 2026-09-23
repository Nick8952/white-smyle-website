import type { FallbeispieleBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";
import { RichText } from "./RichText";

/**
 * Fallbeispiele der Praxis (Bildreihen mit den Original-Beschriftungen). Keine Bearbeitung der Zahnfarben,
 * keine erfundenen Ergebnisse; Hinweis zur Einzelfallabhängigkeit aus der Quelle.
 */
export function Fallbeispiele({ baustein: b }: { baustein: FallbeispieleBaustein }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} kinder={
      <>
        <RichText inhalt={b.einleitung} className="max-w-[44rem]" />
        <ol className="mt-8 grid gap-6">
          {b.faelle.map((f) => (
            <li key={f._key} className="auftauchen">
              <h3 className="titel-3 mb-3">{f.titel}</h3>
              <ol className="grid grid-cols-3 gap-2 sm:gap-3">
                {f.bilder.map((bild, i) => (
                  <li key={bild.id + i}>
                    <figure>
                      <div className="overflow-hidden rounded-[var(--radius-mittel)] bg-emaille" style={{ aspectRatio: `${bild.breite} / ${bild.hoehe}` }}>
                        <Bild bild={bild} sizes="(min-width: 1024px) 30vw, 33vw" className="h-full w-full object-cover" />
                      </div>
                      <figcaption className="winzig mt-1.5 text-grau">{b.beschriftungen[i] ?? bild.alt}</figcaption>
                    </figure>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
        {b.hinweis ? <p className="klein mt-6 max-w-[44rem] text-grau">{b.hinweis}</p> : null}
      </>
    } />
  );
}
