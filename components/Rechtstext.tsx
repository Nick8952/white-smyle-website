import type { RechtstextBaustein, Texte } from "@/lib/content/types";
import { RichText } from "./RichText";

export function Rechtstext({ baustein: b, texte: t }: { baustein: RechtstextBaustein; texte: Texte }) {
  const r = b.rechtstext;
  return (
    <section id={b.anker} className="abschnitt">
      <div className="behaelter-schmal">
        {r.hinweis ? <p className="klein mb-6 rounded-[var(--radius-klein)] border-l-4 border-mandarine bg-hinweis px-4 py-3 text-tinte-2">{r.hinweis}</p> : null}
        {r.stand ? <p className="klein mb-6 text-grau">{t.ui.stand}: {r.stand}</p> : null}
        <RichText inhalt={r.inhalt} />
      </div>
    </section>
  );
}
