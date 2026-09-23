"use client";

import { ArrowUpRight, Play } from "@phosphor-icons/react";
import type { Texte } from "@/lib/content/types";
import { useEinwilligung } from "@/lib/einwilligung-hook";

/**
 * YouTube-Video über youtube-nocookie.com, erst nach Einwilligung (Kategorie «medien»). Vorher kein Request, kein Vorschaubild
 * von YouTube. Alternative: Video extern auf YouTube öffnen.
 */
export function Video({ youtubeId, titel, texte: t }: { youtubeId: string; titel: string; texte: Texte["einwilligung"] }) {
  const { erlaubt, setzen, geladen } = useEinwilligung();
  const zeigen = geladen && erlaubt("medien");
  const extern = `https://www.youtube.com/watch?v=${encodeURIComponent(youtubeId)}`;
  return (
    <figure className="grid gap-3">
      <div className="relative overflow-hidden rounded-[var(--radius-gross)] border border-linie bg-tinte" style={{ aspectRatio: "16 / 9" }}>
        {zeigen ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?rel=0`}
            title={titel}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            sandbox="allow-scripts allow-same-origin allow-popups allow-presentation"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-6 text-center text-papier">
            <div className="max-w-md">
              <Play size={40} weight="fill" aria-hidden="true" className="mx-auto text-mandarine" />
              <p className="mt-3 font-display text-lg font-bold">{titel}</p>
              <p className="klein mt-2 text-[#d8d3cc]">{t.videoPlatzhalter}</p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <button type="button" className="knopf knopf-orange knopf-klein" onClick={() => setzen({ medien: true })}>
                  {t.videoAnzeigen}
                </button>
                <a href={extern} target="_blank" rel="noopener noreferrer" className="knopf knopf-hell knopf-klein">
                  {t.externOeffnen}
                  <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <figcaption className="klein text-grau">{t.fussnote}</figcaption>
    </figure>
  );
}
