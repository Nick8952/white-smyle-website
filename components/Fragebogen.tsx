import Link from "next/link";
import { ArrowRight, ArrowUpRight, ListChecks } from "@phosphor-icons/react/dist/ssr";
import type { Einstellungen, FragebogenBaustein, FragebogenListeBaustein, Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { BuchenLink } from "./BuchenLink";

/**
 * Fragebogen als redaktionelle Anzeige: die Fragen, die die Praxis vorab klärt – ohne Eingabefelder, ohne Auswertung,
 * ohne Speicherung (Codex-Empfehlung: keine Antwortfelder, wenn nichts verarbeitet wird). Der Link zur Originalfunktion
 * ist als externer, datenübermittelnder Weg gekennzeichnet; Alternative: Telefon/Termin.
 */
export function FragebogenAnzeige({ baustein: b, texte: t, einstellungen: e }: { baustein: FragebogenBaustein; texte: Texte; einstellungen: Einstellungen }) {
  const f = b.fragebogen;
  return (
    <Abschnitt id={b.anker} titel={b.titel ?? f.titel} kurzzeile={b.kurzzeile} einleitung={f.einleitung} kinder={
      <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <ol className="karte divide-y divide-linie">
          {f.fragen.map((fr, i) => (
            <li key={fr._key} className="flex gap-4 px-5 py-4">
              <span aria-hidden="true" className="preis grid h-8 w-8 shrink-0 place-items-center rounded-full bg-apricot text-sm text-rost">{i + 1}</span>
              <div>
                <p className="font-semibold">{fr.frage}</p>
                {fr.optionen?.length ? <p className="klein mt-1 text-grau">{fr.optionen.join(" · ")}</p> : fr.art === "text" ? <p className="klein mt-1 text-grau">Freie Antwort</p> : null}
              </div>
            </li>
          ))}
        </ol>
        <aside className="grid gap-4 self-start">
          <div className="karte-orange p-6">
            <h3 className="titel-3 flex items-center gap-2">
              <ListChecks size={22} weight="bold" aria-hidden="true" />
              {t.ui.fragebogenHinweis.split("|")[0]}
            </h3>
            <p className="klein mt-2 text-tinte-2">{t.ui.fragebogenHinweis.split("|")[1]}</p>
            <p className="klein mt-3 text-tinte-2">
              <span className="font-semibold">Zusage der Praxis auf der bisherigen Website:</span> «{f.versprechenOriginal}»
            </p>
          </div>
          <div className="karte p-6">
            <p className="font-semibold">{t.ui.fragebogenAlternative}</p>
            <div className="mt-4 grid gap-3">
              <BuchenLink einstellungen={e} texte={t} klein />
              <a href={`tel:${e.telefon.replace(/\s/g, "")}`} className="knopf knopf-sekundaer knopf-klein">{t.ui.anrufen}: {e.telefon}</a>
              {f.originalUrl ? (
                <a href={f.originalUrl} target="_blank" rel="noopener noreferrer" className="klein inline-flex min-h-11 items-center gap-1 text-rost underline">
                  {t.ui.fragebogenOriginal}
                  <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  <span className="nur-sr"> ({t.ui.externerLink})</span>
                </a>
              ) : null}
            </div>
          </div>
        </aside>
      </div>
    } />
  );
}

export function FragebogenListe({ baustein: b }: { baustein: FragebogenListeBaustein; texte: Texte }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {b.fragebogen.map((f) => (
          <li key={f.id} className="karte auftauchen flex flex-col p-6">
            <p className="klein text-grau">{f.fragen.length} Fragen</p>
            <h3 className="titel-3 mt-1">{f.titel}</h3>
            <p className="klein mt-2 text-tinte-2">{f.einleitung}</p>
            <Link href={`/tests/${f.slug}/`} className="knopf knopf-sekundaer knopf-klein mt-auto self-start pt-2">
              Fragen ansehen
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    } />
  );
}
