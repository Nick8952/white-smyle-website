import type { ZahlungsartenBaustein } from "@/lib/content/types";
import { Abschnitt } from "./Abschnitt";
import { Bild } from "./Bild";

export function Zahlungsarten({ baustein: b }: { baustein: ZahlungsartenBaustein }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className="flex flex-wrap items-center gap-3">
        {b.zahlungsarten.map((z) => (
          <li key={z.id} className="karte flex h-16 items-center px-4">
            {z.logo ? <Bild bild={z.logo} sizes="120px" className="h-9 w-auto object-contain" /> : null}
            <span className={z.logo ? "nur-sr" : "font-semibold"}>{z.titel}</span>
          </li>
        ))}
      </ul>
    } />
  );
}
