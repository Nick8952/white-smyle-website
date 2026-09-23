import { FilePdf } from "@phosphor-icons/react/dist/ssr";
import type { DownloadsBaustein, Texte } from "@/lib/content/types";
import { assetUrl } from "@/lib/assets";
import { Abschnitt } from "./Abschnitt";

export function Downloads({ baustein: b, texte: t }: { baustein: DownloadsBaustein; texte: Texte }) {
  return (
    <Abschnitt id={b.anker} titel={b.titel} kurzzeile={b.kurzzeile} einleitung={b.einleitung} kinder={
      <ul className="grid gap-3 md:grid-cols-2">
        {b.downloads.map((d) => (
          <li key={d.id}>
            <a href={assetUrl(d.datei)} download={d.dateiname} className="karte flex items-center gap-4 p-4 hover:border-tinte">
              <FilePdf size={32} weight="duotone" aria-hidden="true" className="shrink-0 text-rost" />
              <span>
                <span className="block font-semibold">{d.titel}</span>
                <span className="klein block text-grau">{t.ui.download} · {t.ui.dateiGroesse.replace("{kb}", String(d.groesseKb ?? "?"))}{d.hinweis ? ` · ${d.hinweis}` : ""}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    } />
  );
}
