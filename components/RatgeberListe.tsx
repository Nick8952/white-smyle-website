import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { RatgeberListeBaustein, Texte } from "@/lib/content/types";
import { seitenPfad } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";

/** Ratgeber-Übersicht: Karten mit Bild, Titel, Teaser. */
export function RatgeberListe({ baustein: b, texte: t }: { baustein: RatgeberListeBaustein; texte: Texte }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {b.seiten.map((s) => (
          <li key={s.slug} className="karte auftauchen flex flex-col overflow-hidden">
            {s.bild ? (
              <div className="aspect-[3/2] overflow-hidden bg-emaille">
                <Bild bild={s.bild} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw" className="h-full w-full object-cover" />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-5">
              <h3 className="titel-3">
                <Link href={seitenPfad(s.slug)} className="hover:underline">{s.titel}</Link>
              </h3>
              {s.teaser ? <p className="klein mt-2 text-tinte-2">{s.teaser}</p> : null}
              <Link href={seitenPfad(s.slug)} className="klein mt-auto inline-flex min-h-10 items-center gap-1 pt-3 font-semibold text-rost" aria-label={`${t.ui.mehrErfahren}: ${s.titel}`}>
                {t.ui.mehrErfahren} <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    } />
  );
}
