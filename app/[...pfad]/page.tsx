import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { inhaltsquelle } from "@/lib/content";
import { seitenMetadata } from "@/lib/seo";
import { Seite } from "../Seite";

// Alle Unterseiten (auch verschachtelte wie /dentalhygiene/kinder/) kommen aus den Inhaltsdaten.
// Statischer Export: nur bekannte Pfade, kein Laufzeit-Rendering unbekannter Slugs.
export const dynamicParams = false;

type Params = { pfad: string[] };

export async function generateStaticParams(): Promise<Params[]> {
  const q = await inhaltsquelle();
  return (await q.getAlleSeiten()).filter((s) => s.slug !== "start").map((s) => ({ pfad: s.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { pfad } = await params;
  const q = await inhaltsquelle();
  const [s, e, t] = await Promise.all([q.getSeite(pfad.join("/")), q.getEinstellungen(), q.getTexte()]);
  return s ? seitenMetadata(s, e, t) : {};
}

export default async function Unterseite({ params }: { params: Promise<Params> }) {
  const { pfad } = await params;
  const q = await inhaltsquelle();
  const seite = await q.getSeite(pfad.join("/"));
  if (!seite) notFound();
  return <Seite seite={seite} />;
}
