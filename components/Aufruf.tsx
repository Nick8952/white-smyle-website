import type { AufrufBaustein, Texte } from "@/lib/content/types";
import { SmartLink } from "./SmartLink";

/** Handlungsaufforderung: als ruhiges, helles Band (Seitenende) oder als Karte im Fluss. Kein Verkaufsdruck, keine Countdowns. */
export function Aufruf({ baustein: b, texte: t }: { baustein: AufrufBaustein; texte: Texte }) {
  const inhalt = (
    <>
      <div className="max-w-2xl">
        {b.kurzzeile ? <p className="klein font-semibold uppercase tracking-wide text-rost">{b.kurzzeile}</p> : null}
        {b.titel ? <h2 className="titel-2">{b.titel}</h2> : null}
        {b.text ? <p className="vorspann mt-3">{b.text}</p> : null}
      </div>
      <div className="flex flex-wrap gap-3 lg:justify-end">
        <SmartLink link={b.knopf} externText={t.ui.externerLink} className="knopf knopf-orange" />
        {b.zweiterKnopf ? <SmartLink link={b.zweiterKnopf} externText={t.ui.externerLink} className="knopf knopf-sekundaer" mitPfeil={false} /> : null}
      </div>
    </>
  );
  if (b.variante === "band") {
    return (
      <section id={b.anker} className="border-t border-linie bg-emaille">
        <div className="behaelter grid items-center gap-8 py-16 lg:grid-cols-[1.4fr_1fr] lg:py-20">{inhalt}</div>
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
