import type { Baustein } from "@/lib/content/types";

/** Sprungliste aus Bausteintiteln mit Anker – nur für lange Ratgeber. */
export function Inhaltsverzeichnis({ bausteine, titel }: { bausteine: Baustein[]; titel: string }) {
  const eintraege = bausteine.filter((b) => b.anker && b.titel);
  if (eintraege.length < 3) return null;
  return (
    <nav aria-label={titel} className="behaelter-schmal mt-8">
      <details className="karte px-5 py-3">
        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-display font-semibold [&::-webkit-details-marker]:hidden">
          {titel}
          <span aria-hidden="true" className="text-rost">{eintraege.length}</span>
        </summary>
        <ol className="mt-2 grid gap-1 border-t border-linie pt-3">
          {eintraege.map((b) => (
            <li key={b._key}>
              <a href={`#${b.anker}`} className="inline-flex min-h-9 items-center hover:underline">{b.titel}</a>
            </li>
          ))}
        </ol>
      </details>
    </nav>
  );
}
