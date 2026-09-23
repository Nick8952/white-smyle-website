import type { GalerieBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";

/** Bildergalerie mit gemischten Seitenverhältnissen (dichtes Raster), keine Lightbox nötig. */
export function Galerie({ baustein: b }: { baustein: GalerieBaustein }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {b.bilder.map((bild, i) => (
            <li key={bild.id + i} className={`auftauchen overflow-hidden rounded-[var(--radius-mittel)] bg-emaille ${i % 7 === 0 ? "col-span-2 row-span-2" : ""}`}>
              <figure className="h-full">
                <Bild bild={bild} sizes="(min-width: 1024px) 25vw, 50vw" className="h-full w-full object-cover" />
                {bild.bildunterschrift ? <figcaption className="winzig px-2 py-1 text-grau">{bild.bildunterschrift}</figcaption> : null}
              </figure>
            </li>
          ))}
        </ul>
        {b.hinweis ? <p className="klein mt-4 text-grau">{b.hinweis}</p> : null}
      </>
    } />
  );
}
