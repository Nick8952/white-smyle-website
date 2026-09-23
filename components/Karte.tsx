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
      <div className="relative overflow-hidden rounded-[var(--radius-gross)] border border-linie bg-emaille" style={{ aspectRatio: "16 / 9" }}>
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
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
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
        )}
      </div>
      <p className="klein text-grau">{t.fussnote}</p>
    </div>
  );
}
