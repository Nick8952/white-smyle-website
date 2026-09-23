import type { StufenBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";

/** Stufen (z. B. Phasen des Zahnverfalls): Titel, Grafik, Anzeichen, Massnahmen – als Skala nebeneinander. */
export function Stufen({ baustein: b }: { baustein: StufenBaustein }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} hintergrund="emaille" kinder={
      <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {b.stufen.map((s, i) => (
          <li key={s._key} className="karte auftauchen flex flex-col overflow-hidden">
            <div className="flex items-center gap-3 border-b border-linie px-5 py-3">
              <span aria-hidden="true" className="h-2.5 flex-1 rounded-full" style={{ background: `color-mix(in oklab, var(--color-apricot), var(--color-rost) ${(i / Math.max(1, b.stufen.length - 1)) * 100}%)` }} />
              <span className="klein font-display font-bold text-grau">{i + 1}/{b.stufen.length}</span>
            </div>
            {s.bild ? (
              <div className="grid place-items-center bg-papier p-4">
                <Bild bild={s.bild} sizes="240px" className="h-40 w-auto object-contain" />
              </div>
            ) : null}
            <div className="p-5">
              <h3 className="titel-3">{s.titel}</h3>
              {s.untertitel ? <p className="klein text-grau">{s.untertitel}</p> : null}
              <p className="mt-3 font-semibold klein">Anzeichen</p>
              <ul className="klein mt-1 grid gap-1 text-tinte-2">{s.anzeichen.map((a) => <li key={a}>· {a}</li>)}</ul>
              <p className="mt-3 font-semibold klein">Massnahmen</p>
              <ul className="klein mt-1 grid gap-1 text-tinte-2">{s.massnahmen.map((m) => <li key={m}>· {m}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    } />
  );
}
