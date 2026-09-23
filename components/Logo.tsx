import { DENTAL_PFAD, WORTMARKE_PFAD } from "@/lib/wortmarke";

/**
 * Logo WHITE SMYLE dental – SVG-Nachbau der vorhandenen Bildmarke (Kreis, oben Lime, unten Orange, weisse Welle dazwischen,
 * oranger Schwung nach rechts) und der Wortmarke in Serifen-Versalien. Herkunft: Logo auf whitesmyle.ch (Dental-Info-Banner,
 * Tagesanzeiger-Beitrag, Kundengrafiken, «dental-freigestellt»). Die Wortmarke ist als Pfad aus der OFL-Schrift Cinzel gesetzt
 * (keine Laufzeit-Schrift). Kein neues Markendesign: Original-Vektordatei beim Kunden anfordern und hier ersetzen (docs/UEBERGABE.md).
 */
export function LogoMarke({ className = "", groesse = 40 }: { className?: string; groesse?: number }) {
  return (
    <svg className={className} width={groesse * 1.16} height={groesse} viewBox="-4 0 116 100" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="ws-oben">
          <path d="M-10 -10 L110 -10 L110 40 C55 40 25 70 -10 62 Z" />
        </clipPath>
        <clipPath id="ws-unten">
          <path d="M-10 110 L110 110 L110 48 C55 48 25 78 -10 70 Z" />
        </clipPath>
      </defs>
      <circle cx="50" cy="50" r="46" fill="#7ac943" clipPath="url(#ws-oben)" />
      <circle cx="50" cy="50" r="46" fill="#e9803b" clipPath="url(#ws-unten)" />
      <path d="M-2 71 C28 80 58 50 112 46" fill="none" stroke="#e9803b" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function LogoWortmarke({ className = "", mitDental = true }: { className?: string; mitDental?: boolean }) {
  return (
    <svg className={className} viewBox={`-2 -74 676 ${mitDental ? 136 : 78}`} aria-hidden="true" focusable="false" fill="currentColor">
      <path d={WORTMARKE_PFAD} />
      {mitDental ? (
        <g transform="translate(219 56)">
          <path d={DENTAL_PFAD} />
        </g>
      ) : null}
    </svg>
  );
}

/** Vollständiges Logo für Kopf- und Fusszeile. Der sichtbare Name steht als Text für Screenreader dahinter. */
/** `className` muss eine Display-Klasse enthalten (Standard inline-flex), damit responsive Varianten (hidden/sm:inline-flex) greifen. */
export function Logo({ name, className = "", kompakt = false }: { name: string; className?: string; kompakt?: boolean }) {
  return (
    <span className={`items-center text-tinte ${kompakt ? "gap-2" : "gap-3"} ${className || "inline-flex"}`}>
      <LogoMarke groesse={kompakt ? 30 : 42} className="shrink-0" />
      <LogoWortmarke className={kompakt ? "h-[16px] w-auto" : "h-[36px] w-auto"} mitDental={!kompakt} />
      <span className="nur-sr">{name}</span>
    </span>
  );
}
