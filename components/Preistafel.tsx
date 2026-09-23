import { chf, type Einstellungen, type Leistung, type PreistafelBaustein, type Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { BuchenLink } from "./BuchenLink";
import { Farbring } from "./Farbring";
import { Bild } from "./Bild";

function preis(l: Leistung, t: Texte) {
  if (l.preisArt === "anfrage" || l.preisChf === undefined) return t.ui.preisAufAnfrage;
  return `${l.preisArt === "ab" ? "ab " : ""}${chf(l.preisChf)}`;
}

/**
 * Preistafel: Dentalhygiene, Bleaching, Kombipakete als Preiszeilen mit Punktlinie; Aktion als markierte Zeile
 * (Aktionspreis + Vergleichspreis von der Preisliste, Status sichtbar). Fussnoten für unbestätigte Angaben.
 */
export function Preistafel({ baustein: b, texte: t, einstellungen: e }: { baustein: PreistafelBaustein; texte: Texte; einstellungen: Einstellungen }) {
  const gruppen: { titel: string; leistungen: Leistung[] }[] = [
    { titel: "Dentalhygiene", leistungen: b.leistungen.filter((l) => l.kategorie === "dentalhygiene") },
    { titel: "Bleaching", leistungen: b.leistungen.filter((l) => l.kategorie === "bleaching") },
  ];
  const a = b.aktion;
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        {gruppen.map((g) => (
          <div key={g.titel} className="auftauchen">
            <div className="mb-2 flex items-end justify-between gap-4">
              <h3 className="titel-3">{g.titel}</h3>
              <Farbring className="h-4 w-28" anzahl={6} />
            </div>
            <ul>
              {g.leistungen.map((l) => {
                const aktion = a && a.leistung?.id === l.id && a.status !== "abgelaufen" ? a : undefined;
                return (
                  <li key={l.id} className="preiszeile">
                    <div>
                      <p className="font-display font-semibold">{l.titel}</p>
                      {l.preisHinweis ? <p className="klein text-grau">{l.preisHinweis}</p> : null}
                      {l.dauer ? <p className="klein text-grau">{t.ui.dauer}: {l.dauer}</p> : null}
                      {l.voraussetzungen.length ? <p className="klein text-tinte-2">{l.voraussetzungen.join(" · ")}</p> : null}
                      {aktion ? (
                        <p className="klein mt-1">
                          <span className="etikett">{t.ui.aktion}</span>{" "}
                          <span className="text-tinte-2">{aktion.titel}: {chf(aktion.aktionspreisChf)} statt {chf(aktion.vergleichspreisChf)}</span>
                          {aktion.status === "gueltigkeit-ungeklaert" ? <span className="text-grau"> ({t.ui.aktionUngeklaert})</span> : null}
                        </p>
                      ) : null}
                    </div>
                    <p className="preis text-xl">{preis(l, t)}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        <div className="auftauchen lg:col-span-2">
          <div className="mb-2 flex items-end justify-between gap-4">
            <h3 className="titel-3">Kombipakete Dentalhygiene &amp; Bleaching</h3>
            <Farbring className="h-4 w-28" anzahl={6} />
          </div>
          <ul className="grid lg:grid-cols-2 lg:gap-x-10">
            {b.kombinationen.map((k) => (
              <li key={k.id} className="preiszeile">
                <div>
                  <p className="font-display font-semibold">{k.titel}</p>
                  <p className="klein text-grau">{k.leistungen.map((l) => l.kurztitel).join(" + ")}{k.dauer ? ` · ${t.ui.dauer}: ${k.dauer}` : ""}</p>
                  {k.preisHinweis ? <p className="klein text-tinte-2">{k.preisHinweis}</p> : null}
                  {a?.kombination && a.kombination.kombination.id === k.id && a.status !== "abgelaufen" ? (
                    <p className="klein mt-1">
                      <span className="etikett">{t.ui.aktion}</span>{" "}
                      <span className="text-tinte-2">{chf(a.kombination.aktionspreisChf)} statt {chf(a.kombination.vergleichspreisChf)}</span>
                      {a.status === "gueltigkeit-ungeklaert" ? <span className="text-grau"> ({t.ui.aktionUngeklaert})</span> : null}
                    </p>
                  ) : null}
                </div>
                <p className="preis text-xl">{chf(k.preisChf)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2 grid gap-6 border-t border-linie pt-6 md:grid-cols-[1fr_auto] md:items-start">
          {b.fussnoten.length ? (
            <ol className="klein grid gap-1.5 text-grau">
              {b.fussnoten.map((f, i) => <li key={i}>{f}</li>)}
            </ol>
          ) : <span />}
          <BuchenLink einstellungen={e} texte={t} />
        </div>
        {b.mitZahlungsarten && b.zahlungsarten.length ? (
          <div className="lg:col-span-2">
            <ul className="flex flex-wrap items-center gap-3" aria-label="Zahlungsmöglichkeiten">
              {b.zahlungsarten.map((z) => (
                <li key={z.id} className="flex h-12 items-center rounded-[var(--radius-klein)] border border-linie bg-papier px-3">
                  {z.logo ? <Bild bild={z.logo} sizes="80px" className="h-7 w-auto object-contain" /> : <span className="klein font-semibold">{z.titel}</span>}
                  {z.logo ? <span className="nur-sr">{z.titel}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    } />
  );
}
