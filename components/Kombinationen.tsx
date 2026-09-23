import { Clock, Plus } from "@phosphor-icons/react/dist/ssr";
import { chf, type Einstellungen, type KombinationenBaustein, type Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";
import { BuchenLink } from "./BuchenLink";
import { Farbring } from "./Farbring";

/**
 * Kombipakete als Vergleich: enthaltene Leistungen (Namen + Einzelpreise), Kombipreis, Differenz nur, wenn alle
 * Einzelpreise auf der Preisliste stehen (belegbar). Voraussetzungen direkt beim Angebot.
 */
export function Kombinationen({ baustein: b, texte: t, einstellungen: e }: { baustein: KombinationenBaustein; texte: Texte; einstellungen: Einstellungen }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} hintergrund="emaille" kinder={
      <ul className="grid gap-5 lg:grid-cols-2">
        {b.kombinationen.map((k) => {
          const einzel = k.leistungen.every((l) => l.preisArt === "fix" && l.preisChf !== undefined) ? k.leistungen.reduce((s, l) => s + (l.preisChf ?? 0), 0) : undefined;
          const ersparnis = einzel !== undefined && einzel > k.preisChf ? einzel - k.preisChf : undefined;
          return (
            <li key={k.id} className="karte auftauchen relative flex flex-col overflow-hidden">
              {k.bild ? (
                <div className="relative aspect-[5/2] overflow-hidden bg-emaille">
                  <Bild bild={k.bild} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover" />
                  <Farbring className="absolute bottom-2 left-4 h-6 w-40 drop-shadow-sm" />
                </div>
              ) : null}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="titel-3">{k.titel}</h3>
                <p className="mt-2 text-tinte-2">{k.beschreibung}</p>
                <ol className="mt-5 grid gap-2">
                  {k.leistungen.map((l, i) => (
                    <li key={l.id} className="flex items-center gap-3">
                      <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-apricot font-display text-sm font-bold text-rost">{i + 1}</span>
                      <span className="flex-1">{l.titel}</span>
                      {b.mitEinzelpreisen && l.preisChf !== undefined ? <span className="klein text-grau tabular-nums">{chf(l.preisChf)}</span> : null}
                    </li>
                  ))}
                </ol>
                <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-linie pt-5">
                  <div>
                    <p className="klein text-grau">{t.ui.preisChf}</p>
                    <p className="preis text-3xl">{chf(k.preisChf)}</p>
                  </div>
                  {b.mitEinzelpreisen && einzel !== undefined ? (
                    <div className="text-right klein text-grau">
                      <p className="flex items-center justify-end gap-1"><Plus size={12} weight="bold" aria-hidden="true" />{t.ui.einzelpreise}: {chf(einzel)}</p>
                      {ersparnis ? <p className="font-semibold text-rost">{t.ui.ersparnis}: {chf(ersparnis)}</p> : null}
                    </div>
                  ) : null}
                </div>
                {k.preisHinweis ? <p className="klein mt-2 text-grau">{k.preisHinweis}</p> : null}
                {k.dauer ? (
                  <p className="klein mt-3 flex items-center gap-2 text-tinte-2">
                    <Clock size={18} weight="bold" aria-hidden="true" className="text-rost" />
                    {t.ui.dauer}: {k.dauer}
                  </p>
                ) : null}
                {k.voraussetzungen.length ? (
                  <div className="mt-4 rounded-[var(--radius-klein)] bg-apricot px-4 py-3 klein">
                    <p className="font-semibold text-rost">{t.ui.voraussetzungen}</p>
                    <ul className="mt-1 grid gap-1">{k.voraussetzungen.map((v) => <li key={v}>{v}</li>)}</ul>
                  </div>
                ) : null}
                <div className="mt-auto pt-6">
                  <BuchenLink einstellungen={e} texte={t} klein />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    } />
  );
}
