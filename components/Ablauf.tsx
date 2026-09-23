import type { AblaufBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";

/** Behandlungsablauf als nummerierte Schritte (echte Reihenfolge – deshalb Zahlen). Optional mit Bild je Schritt. */
export function Ablauf({ baustein: b }: { baustein: AblaufBaustein }) {
  const mitBildern = b.schritte.some((s) => s.bild);
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} hintergrund="emaille" kinder={
      <>
        <ol className={`grid gap-4 ${mitBildern ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2"}`}>
          {b.schritte.map((s, i) => (
            <li key={s._key} className="karte auftauchen flex flex-col overflow-hidden">
              {s.bild ? (
                <div className="aspect-[4/3] overflow-hidden bg-emaille">
                  <Bild bild={s.bild} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover" />
                </div>
              ) : null}
              <div className="flex gap-4 p-5">
                <span aria-hidden="true" className="preis grid h-10 w-10 shrink-0 place-items-center rounded-full bg-mandarine text-lg text-tinte">{i + 1}</span>
                <div>
                  <h3 className="titel-3">{s.titel}</h3>
                  <p className="klein mt-1.5 text-tinte-2">{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        {b.abschluss ? <p className="mt-6 max-w-[40rem] font-semibold">{b.abschluss}</p> : null}
      </>
    } />
  );
}
