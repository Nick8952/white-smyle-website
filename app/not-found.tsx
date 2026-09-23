import Link from "next/link";
import { inhaltsquelle } from "@/lib/content";
import { Farbring } from "@/components/Farbring";

export default async function NichtGefunden() {
  const q = await inhaltsquelle();
  const t = await q.getTexte();
  return (
    <section className="abschnitt">
      <div className="behaelter-schmal text-center">
        <Farbring className="mx-auto mb-8 h-10 w-full max-w-md" />
        <p className="etikett">404</p>
        <h1 className="titel-1 mt-4">{t.ui.nichtGefundenTitel}</h1>
        <p className="vorspann mt-4">{t.ui.nichtGefundenText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="knopf knopf-primaer">{t.ui.startseite}</Link>
          <Link href="/kontakt/" className="knopf knopf-sekundaer">{t.ui.kontakt}</Link>
        </div>
      </div>
    </section>
  );
}
