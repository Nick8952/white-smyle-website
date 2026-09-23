import Link from "next/link";
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { chf, type Einstellungen, type Leistung, type LeistungenBaustein, type Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";
import { BuchenLink } from "./BuchenLink";

/** Preis einer Leistung als Text: fix «CHF 175.–», ab «ab CHF …», anfrage «auf Anfrage». */
export function preisText(l: Leistung, t: Texte): string {
  if (l.preisArt === "anfrage" || l.preisChf === undefined) return t.ui.preisAufAnfrage;
  return l.preisArt === "ab" ? `ab ${chf(l.preisChf)}` : chf(l.preisChf);
}

/**
 * Leistungen als Karten (Bild, Titel, Kurzbeschreibung, Umfang, Preis, Dauer, Voraussetzungen) – Preis, Voraussetzungen und
 * Buchungsweg stehen zusammen. Variante «liste» ohne Bilder für Unterseiten.
 */
export function Leistungen({ baustein: b, texte: t, einstellungen: e }: { baustein: LeistungenBaustein; texte: Texte; einstellungen: Einstellungen }) {
  const karten = b.darstellung === "karten";
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className={`grid gap-5 ${karten ? "md:grid-cols-2" : "md:grid-cols-2 xl:grid-cols-3"}`}>
        {b.leistungen.map((l) => (
          <li key={l.id} className="karte auftauchen flex flex-col overflow-hidden">
            {karten && l.bild ? (
              <div className="aspect-[3/2] overflow-hidden bg-emaille">
                <Bild bild={l.bild} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover" />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="titel-3">{l.titel}</h3>
                <p className="preis text-2xl text-tinte">{preisText(l, t)}</p>
              </div>
              {l.preisHinweis ? <p className="klein mt-1 text-grau">{l.preisHinweis}</p> : null}
              <p className="mt-3 text-tinte-2">{l.kurzbeschreibung}</p>
              {l.leistungsumfang.length ? (
                <ul className="mt-4 grid gap-1.5 klein">
                  {l.leistungsumfang.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-mandarine" />
                      {p}
                    </li>
                  ))}
                </ul>
              ) : null}
              {l.dauer ? (
                <p className="klein mt-4 flex items-center gap-2 text-tinte-2">
                  <Clock size={18} weight="bold" aria-hidden="true" className="text-rost" />
                  {t.ui.dauer}: {l.dauer}
                </p>
              ) : null}
              {l.voraussetzungen.length ? (
                <div className="mt-4 rounded-[var(--radius-klein)] bg-apricot px-4 py-3 klein">
                  <p className="font-semibold text-rost">{t.ui.voraussetzungen}</p>
                  <ul className="mt-1 grid gap-1">
                    {l.voraussetzungen.map((v) => <li key={v}>{v}</li>)}
                  </ul>
                </div>
              ) : null}
              {l.hinweise.length ? (
                <ul className="klein mt-3 grid gap-1 text-grau">
                  {l.hinweise.map((h) => <li key={h}>{h}</li>)}
                </ul>
              ) : null}
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <BuchenLink einstellungen={e} texte={t} klein />
                {l.seite ? (
                  <Link href={l.seite} className="knopf knopf-sekundaer knopf-klein">
                    {t.ui.mehrErfahren}
                    <ArrowRight size={16} weight="bold" aria-hidden="true" />
                  </Link>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    } />
  );
}
