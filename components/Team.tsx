import { Translate } from "@phosphor-icons/react/dist/ssr";
import type { TeamBaustein, Texte } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";

/** Team: Portrait, Name (Vorname Nachname), Funktion(en), Sprachen – nur belegte Angaben. */
export function Team({ baustein: b }: { baustein: TeamBaustein; texte: Texte }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
        {b.team.map((p) => (
          <li key={p.id} className="karte auftauchen grid grid-cols-[minmax(7rem,38%)_1fr] overflow-hidden">
            <div className="bg-emaille">
              {p.bild ? <Bild bild={p.bild} sizes="(min-width: 640px) 20vw, 40vw" className="h-full w-full object-cover" /> : null}
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="titel-3">
                {p.vorname} {p.nachname}
              </h3>
              <p className="mt-1 font-semibold text-rost">{p.funktion}</p>
              {p.weitereFunktionen.length ? <p className="klein mt-1 text-tinte-2">{p.weitereFunktionen.join(" · ")}</p> : null}
              {p.sprachen.length ? (
                <p className="klein mt-4 flex items-start gap-2 text-tinte-2">
                  <Translate size={18} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-rost" />
                  <span>{p.sprachen.join(", ")}</span>
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    } />
  );
}
