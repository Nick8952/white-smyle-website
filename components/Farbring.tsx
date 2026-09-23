/**
 * Signatur «Farbring»: ein Zahnfarbring (Shade Guide) als Grafik – von warmem Elfenbein zu hellem Weiss.
 * Rein dekorativ (aria-hidden), keine Aussage über Behandlungsergebnisse. Wird als Trennelement und im Hero eingesetzt.
 */
const TOENE = ["#cfb58a", "#d8c29c", "#e0cdab", "#e7d8bd", "#ede0cc", "#f2e8d9", "#f6efe4", "#faf5ec", "#fdfaf3", "#ffffff"];

export function Farbring({ className = "", anzahl = 10, richtung = "auf" }: { className?: string; anzahl?: number; richtung?: "auf" | "ab" }) {
  const toene = TOENE.slice(TOENE.length - anzahl);
  const liste = richtung === "auf" ? toene : [...toene].reverse();
  const b = 100 / liste.length;
  return (
    <svg className={className} viewBox={`0 0 100 ${b * 1.9}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
      {liste.map((farbe, i) => {
        const x = i * b + b * 0.08;
        const w = b * 0.84;
        const h = b * 1.9;
        return (
          <g key={farbe}>
            <rect x={x} y={0} width={w} height={h * 0.34} rx={w * 0.12} fill="#1c1b1a" opacity="0.9" />
            <path
              d={`M${x} ${h * 0.34} h${w} v${h * 0.4} a${w / 2} ${h * 0.26} 0 0 1 -${w} 0 z`}
              fill={farbe}
              stroke="#1c1b1a"
              strokeOpacity="0.18"
              strokeWidth="0.35"
            />
          </g>
        );
      })}
    </svg>
  );
}
