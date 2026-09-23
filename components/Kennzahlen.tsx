import type { Einstellungen, KennzahlenBaustein } from "@/lib/content/types";

/** Belegte Kennzahlen aus der Quelle (mit Herkunft im Tooltip-Text darunter). Keine erfundenen Zahlen. */
export function Kennzahlen({ baustein: b, einstellungen: e }: { baustein: KennzahlenBaustein; einstellungen: Einstellungen }) {
  if (!e.kennzahlen.length) return null;
  return (
    <section id={b.anker} className="abschnitt-eng border-y border-linie">
      <div className="behaelter">
        {b.titel ? <h2 className="titel-3 mb-6">{b.titel}</h2> : null}
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {e.kennzahlen.map((k) => (
            <div key={k._key} className="auftauchen border-l-4 border-mandarine pl-4">
              <dt className="order-2 text-tinte-2">{k.text}</dt>
              <dd className="preis text-3xl sm:text-4xl">{k.wert}</dd>
              <dd className="winzig mt-1 text-grau">{k.quelle}</dd>
            </div>
          ))}
        </dl>
        {b.einleitung ? <p className="klein mt-6 text-grau">{b.einleitung}</p> : null}
      </div>
    </section>
  );
}
