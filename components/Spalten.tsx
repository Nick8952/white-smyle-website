import type { SpaltenBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { RichText } from "./RichText";

/** Mehrere kurze Textspalten nebeneinander (z. B. Morgens / Tagsüber / Abends). */
export function Spalten({ baustein: b }: { baustein: SpaltenBaustein }) {
  const cols = b.spalten.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2";
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} hintergrund="emaille" kinder={
      <div className={`grid gap-4 ${cols}`}>
        {b.spalten.map((s) => (
          <div key={s._key} className="karte auftauchen p-6">
            <h3 className="titel-3 titel-strich mb-3">{s.titel}</h3>
            <RichText inhalt={s.inhalt} className="klein" />
          </div>
        ))}
      </div>
    } />
  );
}
