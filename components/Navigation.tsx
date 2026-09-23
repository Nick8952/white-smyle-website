"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, CaretDown, List, Phone, X } from "@phosphor-icons/react";
import type { Link as LinkTyp, NavGruppe } from "@/lib/content/types";
import { sichererLink } from "@/lib/assets";

type Ui = { menueOeffnen: string; menueSchliessen: string; untermenue: string; externerLink: string; buchenHinweis: string };

/**
 * Hauptnavigation: Desktop mit Untermenüs (Knopf öffnet, Escape schliesst, Pfeiltasten wandern, Klick ausserhalb schliesst);
 * Mobil als <dialog> mit allen Gruppen aufgeklappt (native <details>). Aktive Seite per aria-current.
 */
export function Navigation({ gruppen, knopf, ui, kontakt, knopfIcon }: { gruppen: NavGruppe[]; knopf: LinkTyp; ui: Ui; kontakt: { telefon: string; anrufen: string }; knopfIcon: React.ReactNode }) {
  const pfad = usePathname();
  // Offenes Untermenü, gebunden an den Pfad: beim Seitenwechsel gilt automatisch «geschlossen» (kein setState im Effekt).
  const [offenZustand, setOffenZustand] = useState<{ key: string | null; pfad: string }>({ key: null, pfad: "" });
  const offen = offenZustand.pfad === pfad ? offenZustand.key : null;
  const setOffen = useCallback((key: string | null) => setOffenZustand({ key, pfad }), [pfad]);
  const navRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const id = useId();

  const aktiv = (ziel?: string) => (ziel && pfad === ziel ? "page" : undefined);
  const gruppeAktiv = (g: NavGruppe) => pfad === g.ziel || g.kinder?.some((k) => pfad === k.ziel) || (g.ziel && g.ziel !== "/" && pfad.startsWith(g.ziel));

  useEffect(() => {
    if (!offen) return;
    const klick = (ev: MouseEvent) => {
      if (!navRef.current?.contains(ev.target as Node)) setOffen(null);
    };
    const taste = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setOffen(null);
    };
    document.addEventListener("pointerdown", klick);
    document.addEventListener("keydown", taste);
    return () => {
      document.removeEventListener("pointerdown", klick);
      document.removeEventListener("keydown", taste);
    };
  }, [offen, setOffen]);

  // Beim Seitenwechsel das mobile Menü (natives <dialog>) schliessen
  useEffect(() => {
    dialogRef.current?.close();
  }, [pfad]);

  const pfeiltasten = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (ev.key === "Escape") {
      // Untermenü schliessen und Fokus auf den auslösenden Knopf zurückgeben (WAI-ARIA Menübutton-Muster)
      setOffen(null);
      ev.currentTarget.querySelector<HTMLButtonElement>("button[aria-expanded]")?.focus();
      ev.preventDefault();
      return;
    }
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(ev.key)) return;
    const links = Array.from(ev.currentTarget.querySelectorAll<HTMLAnchorElement>("a"));
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    let n = i;
    if (ev.key === "ArrowDown") n = Math.min(links.length - 1, i + 1);
    if (ev.key === "ArrowUp") n = Math.max(0, i - 1);
    if (ev.key === "Home") n = 0;
    if (ev.key === "End") n = links.length - 1;
    links[n]?.focus();
    ev.preventDefault();
  };

  const buchungExtern = /^https?:/.test(knopf.ziel);

  return (
    <>
      <nav ref={navRef} aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
        {gruppen.map((g) => {
          const hatKinder = !!g.kinder?.length;
          const menueId = `${id}-${g._key}`;
          if (!hatKinder) {
            return (
              <Link key={g._key} href={sichererLink(g.ziel ?? "/")} className="nav-link" aria-current={aktiv(g.ziel)}>
                {g.titel}
              </Link>
            );
          }
          const istOffen = offen === g._key;
          return (
            <div key={g._key} className="relative" onKeyDown={pfeiltasten}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={istOffen}
                aria-controls={menueId}
                aria-current={gruppeAktiv(g) ? "true" : undefined}
                onClick={() => setOffen(istOffen ? null : g._key)}
                onKeyDown={(ev) => {
                  if (ev.key === "ArrowDown" && !istOffen) {
                    setOffen(g._key);
                    ev.preventDefault();
                    // Untermenü wird erst gerendert; danach den ersten Eintrag fokussieren
                    requestAnimationFrame(() => document.getElementById(menueId)?.querySelector<HTMLAnchorElement>("a")?.focus());
                  }
                }}
              >
                {g.titel}
                <CaretDown size={14} weight="bold" aria-hidden="true" className={`transition-transform ${istOffen ? "rotate-180" : ""}`} />
              </button>
              {istOffen ? (
                <div id={menueId} className="nav-untermenue" role="group" aria-label={`${ui.untermenue}: ${g.titel}`}>
                  {g.ziel ? (
                    <Link href={sichererLink(g.ziel)} className="font-semibold" aria-current={aktiv(g.ziel)}>
                      {g.titel}
                    </Link>
                  ) : null}
                  {g.kinder!.map((k) => (
                    <Link key={k.ziel} href={sichererLink(k.ziel)} aria-current={aktiv(k.ziel)}>
                      {k.titel}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
      <div className="flex items-center gap-2">
        <a href={`tel:${kontakt.telefon.replace(/\s/g, "")}`} className="knopf knopf-sekundaer knopf-klein hidden whitespace-nowrap md:inline-flex" aria-label={`${kontakt.anrufen}: ${kontakt.telefon}`}>
          <Phone size={18} weight="bold" aria-hidden="true" />
          <span className="hidden xl:inline">{kontakt.telefon}</span>
        </a>
        <a
          href={sichererLink(knopf.ziel)}
          className="knopf knopf-orange knopf-klein whitespace-nowrap max-sm:px-3"
          target={buchungExtern ? "_blank" : undefined}
          rel={buchungExtern ? "noopener noreferrer" : undefined}
          title={buchungExtern ? ui.buchenHinweis : undefined}
          aria-label={`${knopf.titel}${buchungExtern ? ` (${ui.externerLink})` : ""}`}
        >
          {knopfIcon}
          <span className="hidden sm:inline">{knopf.titel}</span>
          {buchungExtern ? <span className="nur-sr"> ({ui.externerLink})</span> : null}
        </a>
        <button type="button" className="knopf knopf-sekundaer knopf-klein lg:hidden" aria-label={ui.menueOeffnen} onClick={() => dialogRef.current?.showModal()}>
          <List size={22} weight="bold" aria-hidden="true" />
        </button>
      </div>

      <dialog ref={dialogRef} className="m-0 h-dvh max-h-none w-full max-w-none bg-papier p-0 text-tinte backdrop:bg-tinte/50 lg:hidden" aria-label="Menü">
        <div className="flex h-full flex-col">
          <div className="flex h-[72px] items-center justify-between border-b border-linie px-4">
            <span className="font-display text-lg font-bold">Menü</span>
            <button type="button" className="knopf knopf-sekundaer knopf-klein" onClick={() => dialogRef.current?.close()}>
              <X size={20} weight="bold" aria-hidden="true" />
              {ui.menueSchliessen}
            </button>
          </div>
          <nav aria-label="Hauptnavigation mobil" className="flex-1 overflow-y-auto px-4 py-4">
            <ul className="divide-y divide-linie">
              {gruppen.map((g) => (
                <li key={g._key} className="py-1">
                  {g.kinder?.length ? (
                    <details className="group" open={!!gruppeAktiv(g)}>
                      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between py-2 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                        {g.titel}
                        <CaretDown size={18} weight="bold" aria-hidden="true" className="transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mb-2 ml-1 border-l-2 border-apricot pl-3">
                        {g.ziel ? (
                          <li>
                            <Link href={sichererLink(g.ziel)} className="block min-h-11 py-2.5 font-semibold" aria-current={aktiv(g.ziel)}>
                              {g.titel} – Übersicht
                            </Link>
                          </li>
                        ) : null}
                        {g.kinder.map((k) => (
                          <li key={k.ziel}>
                            <Link href={sichererLink(k.ziel)} className={`block min-h-11 py-2.5 ${pfad === k.ziel ? "font-semibold text-rost" : ""}`} aria-current={aktiv(k.ziel)}>
                              {k.titel}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={sichererLink(g.ziel ?? "/")} className="flex min-h-12 items-center py-2 font-display text-lg font-bold" aria-current={aktiv(g.ziel)}>
                      {g.titel}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3">
              <a href={sichererLink(knopf.ziel)} className="knopf knopf-orange" target={buchungExtern ? "_blank" : undefined} rel={buchungExtern ? "noopener noreferrer" : undefined}>
                {knopf.titel}
                {buchungExtern ? <ArrowUpRight size={18} weight="bold" aria-hidden="true" /> : null}
                {buchungExtern ? <span className="nur-sr"> ({ui.externerLink})</span> : null}
              </a>
              <a href={`tel:${kontakt.telefon.replace(/\s/g, "")}`} className="knopf knopf-sekundaer">
                <Phone size={18} weight="bold" aria-hidden="true" />
                {kontakt.telefon}
              </a>
              {buchungExtern ? <p className="klein text-grau">{ui.buchenHinweis}</p> : null}
            </div>
          </nav>
        </div>
      </dialog>
    </>
  );
}
