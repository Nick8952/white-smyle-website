"use client";

import { useState } from "react";
import type { Texte } from "@/lib/content/types";
import { useEinwilligung } from "@/lib/einwilligung-hook";

/**
 * Datenschutz-Einstellungen (Seite): aktueller Stand, Kategorie umschalten, Widerruf. Der Widerruf entfernt
 * eingebettete Karten/Videos sofort (alle Komponenten hören auf dasselbe Ereignis).
 */
export function Widerruf({ texte: t }: { texte: Texte["einwilligung"] }) {
  const { einwilligung, geladen, setzen, widerrufen } = useEinwilligung();
  const [meldung, setMeldung] = useState<string | null>(null);
  if (!geladen) return <p className="klein text-grau">…</p>;
  const medien = einwilligung?.kategorien.medien === true;
  const zeitpunkt = einwilligung ? new Date(einwilligung.zeitpunkt).toLocaleString("de-CH", { dateStyle: "medium", timeStyle: "short" }) : null;
  return (
    <div className="karte grid gap-5 p-6 sm:p-8">
      <p className="klein text-tinte-2">{einwilligung ? `${t.entscheidungVom} ${zeitpunkt}` : t.keineEntscheidung}</p>
      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-4 rounded-[var(--radius-mittel)] border border-linie p-4">
          <div>
            <p className="font-semibold">{t.notwendigTitel}</p>
            <p className="klein mt-1 text-tinte-2">{t.notwendigText}</p>
          </div>
          <span className="etikett etikett-grau shrink-0">{t.immerAktiv}</span>
        </div>
        <label className="flex cursor-pointer items-start gap-4 rounded-[var(--radius-mittel)] border border-linie p-4 has-[:checked]:border-mandarine has-[:checked]:bg-hinweis">
          <input
            type="checkbox"
            className="mt-1 h-6 w-6 shrink-0 accent-[var(--color-rost)]"
            checked={medien}
            onChange={(ev) => {
              setzen({ medien: ev.target.checked });
              setMeldung(ev.target.checked ? t.alleErlaubt : t.nurNotwendigeGespeichert);
            }}
          />
          <span>
            <span className="block font-semibold">{t.medienTitel}</span>
            <span className="klein mt-1 block text-tinte-2">{t.medienAnbieter}. {t.medienText}</span>
          </span>
        </label>
      </div>
      <div className="flex flex-wrap gap-3">
        <button type="button" className="knopf knopf-sekundaer knopf-klein" onClick={() => { widerrufen(); setMeldung(t.widerrufenMeldung); }} disabled={!einwilligung}>
          {t.widerrufen}
        </button>
      </div>
      <p role="status" aria-live="polite" className="klein min-h-5 text-rost">{meldung}</p>
      <p className="klein text-grau">{t.fussnote}</p>
    </div>
  );
}
