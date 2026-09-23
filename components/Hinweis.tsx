import { FirstAid, Info, Warning } from "@phosphor-icons/react/dist/ssr";
import type { HinweisBaustein } from "@/lib/content/types";
import { RichText } from "./RichText";

/** Hinweisbox: info (grau), wichtig (orange), medizinisch (mit Kreuz – Aussage der Praxis, keine Diagnose). */
export function Hinweis({ baustein: b }: { baustein: HinweisBaustein }) {
  const Icon = b.art === "wichtig" ? Warning : b.art === "medizinisch" ? FirstAid : Info;
  const farbe = b.art === "wichtig" ? "border-mandarine bg-hinweis" : b.art === "medizinisch" ? "border-rost bg-papier" : "border-linie-2 bg-emaille";
  return (
    <section id={b.anker} className="abschnitt-eng">
      <div className="behaelter-schmal">
        <div className={`auftauchen flex gap-4 rounded-[var(--radius-mittel)] border-l-4 px-5 py-4 ${farbe}`}>
          <Icon size={26} weight="duotone" aria-hidden="true" className="mt-0.5 shrink-0 text-rost" />
          <div>
            {b.titel ? <h2 className="titel-3 mb-2">{b.titel}</h2> : null}
            <RichText inhalt={b.inhalt} className="klein" />
          </div>
        </div>
      </div>
    </section>
  );
}
