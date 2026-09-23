import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { istExternerLink, sichererLink } from "@/lib/assets";
import type { Link as LinkTyp } from "@/lib/content/types";

/**
 * Interne Ziele über next/link (Unterpfad automatisch), externe/tel/mailto als <a>.
 * Externe Links tragen Kennzeichnung (Pfeil + Screenreader-Text «externer Link»), rel="noopener".
 */
export function SmartLink({ link, className = "", externText, kinder, mitPfeil = true }: { link: LinkTyp; className?: string; externText: string; kinder?: React.ReactNode; mitPfeil?: boolean }) {
  const ziel = sichererLink(link.ziel);
  const inhalt = kinder ?? link.titel;
  if (istExternerLink(ziel)) {
    const http = /^https?:/.test(ziel);
    return (
      <a href={ziel} className={className} target={http && link.extern !== false ? "_blank" : undefined} rel={http ? "noopener noreferrer" : undefined}>
        {inhalt}
        {http && mitPfeil ? <ArrowUpRight size={18} weight="bold" aria-hidden="true" /> : null}
        {http ? <span className="nur-sr"> ({externText})</span> : null}
      </a>
    );
  }
  return (
    <Link href={ziel} className={className}>
      {inhalt}
    </Link>
  );
}
