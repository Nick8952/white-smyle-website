import { ArrowUpRight, FilePdf, Newspaper } from "@phosphor-icons/react/dist/ssr";
import type { MedienstimmenBaustein, Texte } from "@/lib/content/types";
import { assetUrl } from "@/lib/assets";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";

/** Medienverweise: Logo/Scan, Titel, Link zum Original (extern) oder PDF. Keine fremden Artikel im Volltext. */
export function Medienstimmen({ baustein: b, texte: t }: { baustein: MedienstimmenBaustein; texte: Texte }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className="grid gap-5 md:grid-cols-2">
        {b.medienstimmen.map((m) => (
          <li key={m.id} className="karte auftauchen flex flex-col overflow-hidden">
            {m.bild ? (
              <div className="aspect-[4/3] overflow-hidden border-b border-linie bg-emaille">
                <Bild bild={m.bild} sizes="(min-width: 768px) 50vw, 100vw" className="h-full w-full object-cover object-top" />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col gap-3 p-6">
              {m.logo ? <Bild bild={m.logo} sizes="200px" className="h-8 w-auto self-start object-contain" /> : <p className="flex items-center gap-2 font-display font-bold"><Newspaper size={20} aria-hidden="true" />{m.medium}</p>}
              {m.logo ? <span className="nur-sr">{m.medium}</span> : null}
              {m.titel ? <h3 className="titel-3">{m.titel}</h3> : null}
              {m.hinweis ? <p className="klein text-tinte-2">{m.hinweis}</p> : null}
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {m.url ? (
                  <a href={m.url} target="_blank" rel="noopener noreferrer" className="knopf knopf-sekundaer knopf-klein">
                    Artikel lesen <ArrowUpRight size={16} weight="bold" aria-hidden="true" /><span className="nur-sr"> ({t.ui.externerLink})</span>
                  </a>
                ) : null}
                {m.datei ? (
                  <a href={assetUrl(m.datei)} className="knopf knopf-sekundaer knopf-klein">
                    <FilePdf size={18} weight="bold" aria-hidden="true" /> PDF öffnen
                  </a>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    } />
  );
}
