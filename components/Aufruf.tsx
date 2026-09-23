import type { AufrufBaustein, Texte } from "@/lib/content/types";
import { Farbring } from "./Farbring";
import { SmartLink } from "./SmartLink";

/** Handlungsaufforderung: als oranges Band (Seitenende) oder als Karte im Fluss. Kein Verkaufsdruck, keine Countdowns. */
export function Aufruf({ baustein: b, texte: t }: { baustein: AufrufBaustein; texte: Texte }) {
  const inhalt = (
    <>
      <div className="max-w-2xl">
        {b.kurzzeile ? <p className="klein font-semibold uppercase tracking-wide text-rost">{b.kurzzeile}</p> : null}
        {b.titel ? <h2 className="titel-2">{b.titel}</h2> : null}
        {b.text ? <p className="vorspann mt-3">{b.text}</p> : null}
      </div>
      <div className="flex flex-wrap gap-3 lg:justify-end">
        <SmartLink link={b.knopf} externText={t.ui.externerLink} className={`knopf ${b.variante === "band" ? "knopf-primaer" : "knopf-orange"}`} />
        {b.zweiterKnopf ? <SmartLink link={b.zweiterKnopf} externText={t.ui.externerLink} className={`knopf ${b.variante === "band" ? "knopf-hell" : "knopf-sekundaer"}`} mitPfeil={false} /> : null}
      </div>
    </>
  );
  if (b.variante === "band") {
    return (
      <section id={b.anker} className="relative overflow-hidden bg-mandarine">
        <Farbring className="absolute -top-1 right-0 h-10 w-64 opacity-70" richtung="ab" />
        <div className="behaelter relative grid items-center gap-6 py-12 lg:grid-cols-[1.4fr_1fr] lg:py-16">{inhalt}</div>
      </section>
    );
  }
  return (
    <section id={b.anker} className="abschnitt-eng">
      <div className="behaelter">
        <div className="karte auftauchen grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr]">{inhalt}</div>
      </div>
    </section>
  );
}
