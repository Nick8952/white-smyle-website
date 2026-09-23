import Link from "next/link";
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import type { Einstellungen, Texte } from "@/lib/content/types";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

/** Kopfzeile: Logo, Hauptnavigation mit Untermenüs (Tastatur), Buchungsknopf (extern, Cituro). Höhe ≤ 80 px. */
export function Kopfzeile({ einstellungen: e, texte: t }: { einstellungen: Einstellungen; texte: Texte }) {
  return (
    <header className="sticky top-0 z-50 border-b border-linie bg-papier/95 backdrop-blur supports-[backdrop-filter]:bg-papier/85">
      <div className="behaelter flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex min-h-11 shrink-0 items-center rounded-md" aria-label={`${e.marke} – ${t.ui.startseite}`}>
          <Logo name={e.marke} className="hidden items-center sm:inline-flex" />
          <Logo name={e.marke} kompakt className="inline-flex items-center sm:hidden" />
        </Link>
        <Navigation
          gruppen={t.navigation}
          knopf={t.navigationKnopf}
          ui={{ menueOeffnen: t.ui.menueOeffnen, menueSchliessen: t.ui.menueSchliessen, untermenue: t.ui.untermenue, externerLink: t.ui.externerLink, buchenHinweis: t.ui.buchenHinweis }}
          kontakt={{ telefon: e.telefon, anrufen: t.ui.anrufen }}
          knopfIcon={<CalendarCheck size={20} weight="bold" aria-hidden="true" />}
        />
      </div>
    </header>
  );
}
