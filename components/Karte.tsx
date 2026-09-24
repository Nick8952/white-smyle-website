"use client";

import { ArrowUpRight, MapPin } from "@phosphor-icons/react";
import type { Einstellungen, Texte } from "@/lib/content/types";
import { useEinwilligung } from "@/lib/einwilligung-hook";

/**
 * Google-Maps-Karte: vor der Einwilligung kein Request (kein iframe-src, kein preconnect, kein Vorschaubild).
 * Platzhalter erklärt die Datenübertragung, bietet «Karte laden» (setzt Kategorie «medien», gespeichert) und den externen Routenlink.
 */
export function Karte({ einstellungen: e, texte: t }: { einstellungen: Einstellungen; texte: Texte["einwilligung"] }) {
  const { erlaubt, setzen, geladen } = useEinwilligung();
  const zeigen = geladen && erlaubt("medien");
  return (
    <div className="grid gap-4">
      {/* Mit iframe: feste 16:9-Box. Als Platzhalter: 16:9 nur als Mindesthöhe (Abstandhalter in derselben Rasterzelle), damit die Box
          auf schmalen Bildschirmen oder bei grosser Schrift mitwächst, statt Text und «laden»-Knopf abzuschneiden. Kein aspect-ratio am
          Platzhalter – sonst überträgt der Browser die Inhaltshöhe auf die Breite und die Seite scrollt seitlich. */}
      <div
        className={`relative rounded-[var(--radius-gross)] border border-linie bg-emaille ${zeigen ? "overflow-hidden" : "grid"}`}
        style={zeigen ? { aspectRatio: "16 / 9" } : undefined}
      >
        {zeigen ? (
          <iframe
            src={e.kartenEinbettung}
            title={`${t.medienAnbieter}: ${e.adresse.strasse}, ${e.adresse.plz} ${e.adresse.ort}`}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        ) : (
          <>
            <div aria-hidden="true" className="col-start-1 row-start-1 pt-[56.25%]" />
            <div className="col-start-1 row-start-1 grid place-items-center p-6 text-center">
              <div className="max-w-md">
                <MapPin size={40} weight="duotone" aria-hidden="true" className="mx-auto text-rost" />
                <p className="mt-3 font-display text-lg font-bold">{t.kartePlatzhalter}</p>
                <p className="klein mt-2 text-tinte-2">{t.medienText}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <button type="button" className="knopf knopf-primaer knopf-klein" onClick={() => setzen({ medien: true })}>
                    {t.karteAnzeigen}
                  </button>
                  <a href={e.routenlink} target="_blank" rel="noopener noreferrer" className="knopf knopf-sekundaer knopf-klein">
                    {t.externOeffnen}
                    <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <p className="klein text-grau">{t.fussnote}</p>
    </div>
  );
}
