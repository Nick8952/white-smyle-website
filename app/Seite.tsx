import { inhaltsquelle, type Seite as SeiteTyp } from "@/lib/content";
import { jsonLdSicher, praxisJsonLd } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { Bausteine } from "@/components/Bausteine";
import { Inhaltsverzeichnis } from "@/components/Inhaltsverzeichnis";

/** Gemeinsames Seitengerüst: Seitenkopf, optionales Inhaltsverzeichnis, Bausteine, JSON-LD (nur Startseite). */
export async function Seite({ seite }: { seite: SeiteTyp }) {
  const q = await inhaltsquelle();
  const [e, t, team] = await Promise.all([q.getEinstellungen(), q.getTexte(), q.getTeam()]);
  const hero = seite.hero ?? { titel: seite.titel, text: seite.einleitung, bild: seite.bild, variante: seite.art === "ratgeber" ? ("artikel" as const) : ("seite" as const) };
  return (
    <>
      {seite.slug === "start" ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSicher(praxisJsonLd(e, team)) }} /> : null}
      <Hero hero={hero} einstellungen={e} texte={t} seite={seite} />
      {seite.mitInhaltsverzeichnis ? <Inhaltsverzeichnis bausteine={seite.bausteine} titel={t.ui.inhaltsverzeichnis} /> : null}
      <Bausteine bausteine={seite.bausteine} einstellungen={e} texte={t} seite={seite} />
    </>
  );
}
