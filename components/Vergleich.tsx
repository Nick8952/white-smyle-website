import { Check } from "@phosphor-icons/react/dist/ssr";
import type { VergleichBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";

/** Gegenüberstellung (z. B. Dentalhygiene vs. Zahnreinigung) – belegte Unterschiede als Punkte, eine Spalte hervorhebbar. */
export function Vergleich({ baustein: b }: { baustein: VergleichBaustein }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <>
        <div className={`grid gap-4 ${b.spalten.length > 2 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
          {b.spalten.map((s) => (
            <div key={s._key} className={`auftauchen rounded-[var(--radius-gross)] p-6 sm:p-7 ${s.hervorgehoben ? "bg-tinte text-papier" : "karte"}`}>
              <h3 className="titel-3">{s.titel}</h3>
              {s.untertitel ? <p className={`klein mt-1 ${s.hervorgehoben ? "text-[#d8d3cc]" : "text-grau"}`}>{s.untertitel}</p> : null}
              <ul className="mt-4 grid gap-2">
                {s.punkte.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Check size={20} weight="bold" aria-hidden="true" className={`mt-0.5 shrink-0 ${s.hervorgehoben ? "text-mandarine" : "text-rost"}`} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {b.fazit ? <p className="mt-6 max-w-[44rem] font-semibold">{b.fazit}</p> : null}
      </>
    } />
  );
}
