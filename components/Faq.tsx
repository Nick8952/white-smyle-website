import { Plus } from "@phosphor-icons/react/dist/ssr";
import type { FaqBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { RichText } from "./RichText";

/** Fragen und Antworten als native <details>-Akkordeons (ohne JavaScript bedienbar). */
export function Faq({ baustein: b }: { baustein: FaqBaustein }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <div className="mx-auto max-w-3xl border-b border-linie">
        {b.fragen.map((f) => (
          <details key={f._key} className="akkordeon">
            <summary>
              <span>{f.frage}</span>
              <span className="plus" aria-hidden="true"><Plus size={14} weight="bold" /></span>
            </summary>
            <div>
              <RichText inhalt={f.antwort} />
            </div>
          </details>
        ))}
      </div>
    } />
  );
}
