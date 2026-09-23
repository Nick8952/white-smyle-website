"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { Texte } from "@/lib/content/types";
import { useEinwilligung } from "@/lib/einwilligung-hook";

/**
 * Einwilligungs-Banner («Alle akzeptieren» / «Nur notwendige» / «Einstellungen») – gleichwertige Knöpfe, nichts vorausgewählt.
 * Es gibt genau eine optionale Kategorie: «Externe Medien» (Google Maps, YouTube). Ohne Entscheidung wird nichts Externes geladen.
 * Der Dialog ist ein natives <dialog> (Fokusfang, Escape). Entscheidung in localStorage; Widerruf über /datenschutz-einstellungen/.
 */
export function Einwilligung({ texte: t, datenschutzPfad }: { texte: Texte["einwilligung"]; datenschutzPfad: string }) {
  const { einwilligung, geladen, setzen } = useEinwilligung();
  const [dialogOffen, setDialogOffen] = useState(false);
  const [medien, setMedien] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const id = useId();

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (dialogOffen && !d.open) d.showModal();
    if (!dialogOffen && d.open) d.close();
  }, [dialogOffen]);

  if (!geladen || einwilligung) return null;

  const speichernUndSchliessen = (m: boolean) => {
    setzen({ medien: m });
    setDialogOffen(false);
  };

  return (
    <>
      <div role="region" aria-label={t.bannerTitel} className="fixed inset-x-0 bottom-0 z-[60] border-t border-linie bg-papier shadow-[0_-12px_40px_-20px_rgb(28_27_26/0.35)]">
        <div className="behaelter grid gap-4 py-4 sm:py-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-display font-bold">{t.bannerTitel}</p>
            <p className="klein mt-1 max-w-3xl text-tinte-2">
              {t.bannerText}{" "}
              <Link href={datenschutzPfad} className="textlink">{t.datenschutzerklaerung}</Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="knopf knopf-sekundaer knopf-klein" onClick={() => setDialogOffen(true)}>{t.einstellungen}</button>
            <button type="button" className="knopf knopf-sekundaer knopf-klein" onClick={() => speichernUndSchliessen(false)}>{t.nurNotwendige}</button>
            <button type="button" className="knopf knopf-primaer knopf-klein" onClick={() => speichernUndSchliessen(true)}>{t.alleAkzeptieren}</button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="m-auto w-[min(92vw,34rem)] rounded-[var(--radius-gross)] border border-linie bg-papier p-0 text-tinte"
        aria-labelledby={`${id}-titel`}
        onClose={() => setDialogOffen(false)}
        onCancel={(ev) => {
          ev.preventDefault();
          setDialogOffen(false);
        }}
      >
        <form method="dialog" className="p-6 sm:p-8" onSubmit={(ev) => { ev.preventDefault(); speichernUndSchliessen(medien); }}>
          <h2 id={`${id}-titel`} className="titel-3">{t.dialogTitel}</h2>
          <p className="klein mt-2 text-tinte-2">{t.dialogText}</p>
          <div className="mt-5 grid gap-3">
            <div className="rounded-[var(--radius-mittel)] border border-linie p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">{t.notwendigTitel}</p>
                  <p className="klein mt-1 text-tinte-2">{t.notwendigText}</p>
                </div>
                <span className="etikett etikett-grau shrink-0">{t.immerAktiv}</span>
              </div>
            </div>
            <label className="flex cursor-pointer items-start gap-4 rounded-[var(--radius-mittel)] border border-linie p-4 has-[:checked]:border-mandarine has-[:checked]:bg-hinweis">
              <input type="checkbox" className="mt-1 h-6 w-6 shrink-0 accent-[var(--color-rost)]" checked={medien} onChange={(ev) => setMedien(ev.target.checked)} />
              <span>
                <span className="block font-semibold">{t.medienTitel}</span>
                <span className="klein mt-1 block text-tinte-2">{t.medienAnbieter}. {t.medienText}</span>
              </span>
            </label>
          </div>
          <div className="mt-6 flex flex-wrap justify-end gap-2">
            <button type="button" className="knopf knopf-sekundaer knopf-klein" onClick={() => setDialogOffen(false)}>{t.schliessen}</button>
            <button type="submit" className="knopf knopf-primaer knopf-klein">{t.auswahlSpeichern}</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
