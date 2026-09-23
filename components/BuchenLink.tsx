import { ArrowUpRight, CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import type { Einstellungen, Texte } from "@/lib/content/types";

/** Externer Buchungslink (Cituro) – immer als gekennzeichneter externer Link, nie als Einbettung. */
export function BuchenLink({ einstellungen: e, texte: t, klein = false, variante = "orange", titel }: { einstellungen: Einstellungen; texte: Texte; klein?: boolean; variante?: "orange" | "primaer" | "hell"; titel?: string }) {
  return (
    <a href={e.buchungUrl} target="_blank" rel="noopener noreferrer" className={`knopf knopf-${variante} ${klein ? "knopf-klein" : ""}`} title={t.ui.buchenHinweis.replace("{anbieter}", e.buchungAnbieter)}>
      <CalendarCheck size={klein ? 18 : 20} weight="bold" aria-hidden="true" />
      {titel ?? t.ui.buchenExtern}
      <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
      <span className="nur-sr"> ({t.ui.externerLink}, {e.buchungAnbieter})</span>
    </a>
  );
}
