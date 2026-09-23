import type { Metadata, Viewport } from "next";
import "@fontsource-variable/gabarito";
import "@fontsource-variable/figtree";
import "./globals.css";
import { inhaltsquelle } from "@/lib/content";
import { siteUrl } from "@/lib/deploy-ziel";
import { indexierungErlaubt } from "@/lib/seo";
import { Kopfzeile } from "@/components/Kopfzeile";
import { Fusszeile } from "@/components/Fusszeile";
import { Einwilligung } from "@/components/Einwilligung";

export async function generateMetadata(): Promise<Metadata> {
  const q = await inhaltsquelle();
  const [e, t] = await Promise.all([q.getEinstellungen(), q.getTexte()]);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: `${e.marke} – ${e.claim}`, template: `%s | ${t.seo.titelZusatz}` },
    description: t.seo.beschreibung,
    robots: indexierungErlaubt ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const q = await inhaltsquelle();
  const [e, t, seiten] = await Promise.all([q.getEinstellungen(), q.getTexte(), q.getAlleSeiten()]);
  return (
    <html lang="de-CH">
      <body>
        <a href="#inhalt" className="nur-sr focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-tinte focus:px-4 focus:py-2 focus:text-papier">
          {t.ui.zumInhalt}
        </a>
        <Kopfzeile einstellungen={e} texte={t} />
        <main id="inhalt">{children}</main>
        <Fusszeile einstellungen={e} texte={t} seiten={seiten} />
        <Einwilligung texte={t.einwilligung} datenschutzPfad="/datenschutz/" />
      </body>
    </html>
  );
}
