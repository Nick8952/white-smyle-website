import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import type { Einstellungen, Hero as HeroTyp, Seite, Texte } from "@/lib/content/types";
import { seitenPfad } from "@/lib/content/types";
import { sichererLink } from "@/lib/assets";
import { Bild } from "./Bild";
import { SmartLink } from "./SmartLink";

/**
 * Seitenkopf in drei Varianten:
 * - «start»: zweispaltig, links Titel/Text/Knöpfe, rechts Foto, dezenter Apricot-Hintergrundstreifen
 * - «seite»: kompakter Kopf mit Titel, Einleitung, optionalem Bild rechts
 * - «artikel»: schmaler Lesekopf (Ratgeber) mit breitem Bild darunter
 */
export function Hero({ hero, einstellungen: e, texte: t, seite }: { hero: HeroTyp; einstellungen: Einstellungen; texte: Texte; seite: Seite }) {
  const eltern = seite.slug.includes("/") ? seite.slug.split("/").slice(0, -1).join("/") : null;
  const brotkrumen =
    seite.slug !== "start" ? (
      <nav aria-label="Pfad" className="klein mb-4 text-grau">
        <ol className="flex flex-wrap items-center gap-x-2">
          <li>
            <Link href="/" className="hover:underline">{t.ui.startseite}</Link>
          </li>
          {eltern ? (
            <li className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <Link href={seitenPfad(eltern)} className="capitalize hover:underline">{eltern.split("/").pop()!.replaceAll("-", " ")}</Link>
            </li>
          ) : null}
          <li className="flex items-center gap-2" aria-current="page">
            <span aria-hidden="true">/</span>
            <span className="text-tinte-2">{seite.titel}</span>
          </li>
        </ol>
      </nav>
    ) : null;

  if (hero.variante === "start") {
    return (
      <section className="overflow-hidden">
        {/* Eigener Positionsrahmen: der Apricot-Streifen darf nur den oberen Teil füllen, nicht die Infoleiste darunter
            (sonst überdeckt er Adresse/Öffnungszeiten rechts). */}
        <div className="relative">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-apricot lg:block" aria-hidden="true" />
          <div className="behaelter relative grid items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div className="hero-auftritt max-w-2xl">
              {hero.kurzzeile ? <p className="etikett">{hero.kurzzeile}</p> : null}
              <h1 className="h-display mt-5">{hero.titel}</h1>
              {hero.text ? <p className="vorspann mt-6 max-w-[34rem]">{hero.text}</p> : null}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {hero.knopf ? <SmartLink link={hero.knopf} externText={t.ui.externerLink} className="knopf knopf-orange" /> : null}
                {hero.zweiterKnopf ? <SmartLink link={hero.zweiterKnopf} externText={t.ui.externerLink} className="knopf knopf-sekundaer" mitPfeil={false} /> : null}
              </div>
              {hero.fakten?.length ? (
                <ul className="klein mt-7 flex flex-wrap gap-x-5 gap-y-2 text-tinte-2" aria-label="Auf einen Blick">
                  {hero.fakten.map((f) => (
                    <li key={f} className="inline-flex items-center gap-1.5">
                      <CheckCircle size={18} weight="fill" aria-hidden="true" className="shrink-0 text-mandarine" />
                      {f}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="relative lg:pb-10">
              <div className="relative overflow-hidden rounded-[var(--radius-gross)] bg-emaille shadow-weich lg:-mr-6" style={{ aspectRatio: hero.bild ? `${hero.bild.breite} / ${hero.bild.hoehe}` : "4 / 3" }}>
                {hero.bild ? <Bild bild={hero.bild} sizes="(min-width: 1024px) 45vw, 100vw" prioritaet className="h-full w-full object-cover" /> : null}
              </div>
              {hero.angebot ? (
                <Link
                  href={sichererLink(hero.angebot.link.ziel)}
                  className="group mt-4 flex items-center gap-5 rounded-[var(--radius-mittel)] border border-linie bg-papier p-5 shadow-weich transition-colors hover:border-mandarine lg:absolute lg:-bottom-2 lg:left-0 lg:mt-0 lg:max-w-[26rem] lg:-translate-x-10"
                >
                  <div className="min-w-0 flex-1">
                    {hero.angebot.etikett ? <p className="klein font-semibold uppercase tracking-wide text-rost">{hero.angebot.etikett}</p> : null}
                    <p className="font-display font-semibold leading-snug">{hero.angebot.titel}</p>
                    {hero.angebot.hinweis ? <p className="klein mt-1 text-grau">{hero.angebot.hinweis}</p> : null}
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="preis text-2xl">{hero.angebot.preisText}</p>
                    <p className="klein inline-flex items-center gap-1 text-rost group-hover:underline">
                      {hero.angebot.link.titel}
                      <ArrowRight size={14} weight="bold" aria-hidden="true" />
                    </p>
                  </div>
                </Link>
              ) : null}
            </div>
          </div>
        </div>
        <div className="border-y border-linie bg-papier">
          <div className="behaelter flex flex-wrap items-center gap-x-8 gap-y-2 py-3 text-tinte-2">
            <a href={`tel:${e.telefon.replace(/\s/g, "")}`} className="inline-flex min-h-11 items-center gap-2 font-semibold text-tinte hover:underline">
              <Phone size={18} weight="bold" aria-hidden="true" className="text-rost" />
              {e.telefon}
            </a>
            <span className="inline-flex min-h-11 items-center gap-2">
              <MapPin size={18} weight="bold" aria-hidden="true" className="text-rost" />
              {e.adresse.strasse}, {e.adresse.plz} {e.adresse.ort}
            </span>
            {/* Öffnungszeiten als eigene Paare (Tag fett, Zeit normal) statt eines langen Satzes mit Punkten: bleibt auch bei Umbruch lesbar */}
            <dl className="inline-flex min-h-11 flex-wrap items-center gap-x-4 gap-y-1" aria-label={t.ui.oeffnungszeiten}>
              <Clock size={18} weight="bold" aria-hidden="true" className="text-rost" />
              {e.oeffnungszeiten.map((z) => (
                <div key={z._key} className="inline-flex items-baseline gap-1.5">
                  <dt className="font-semibold text-tinte">{z.tage}</dt>
                  <dd>{z.zeiten}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    );
  }

  if (hero.variante === "artikel") {
    return (
      <header className="pt-8 sm:pt-12">
        <div className="behaelter-schmal">
          {brotkrumen}
          {hero.kurzzeile ? <p className="etikett">{hero.kurzzeile}</p> : <p className="etikett etikett-grau">{t.ui.ratgeber}</p>}
          <h1 className="titel-1 mt-4">{hero.titel}</h1>
          {hero.text ? <p className="vorspann mt-5">{hero.text}</p> : null}
        </div>
        {hero.bild ? (
          <div className="behaelter mt-8">
            <div className="bild-rahmen mx-auto max-h-[520px] max-w-4xl" style={{ aspectRatio: `${hero.bild.breite} / ${hero.bild.hoehe}` }}>
              <Bild bild={hero.bild} sizes="(min-width: 1024px) 896px, 100vw" prioritaet />
            </div>
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header className="border-b border-linie bg-emaille">
      <div className={`behaelter grid gap-8 py-10 sm:py-14 ${hero.bild ? "lg:grid-cols-[1.2fr_0.8fr] lg:items-center" : ""}`}>
        <div className="hero-auftritt max-w-3xl">
          {brotkrumen}
          {hero.kurzzeile ? <p className="etikett">{hero.kurzzeile}</p> : null}
          <h1 className="titel-1 titel-strich mt-3">{hero.titel}</h1>
          {hero.text ? <p className="vorspann mt-5 max-w-[38rem]">{hero.text}</p> : null}
          {hero.knopf || hero.zweiterKnopf ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {hero.knopf ? <SmartLink link={hero.knopf} externText={t.ui.externerLink} className="knopf knopf-primaer" /> : null}
              {hero.zweiterKnopf ? <SmartLink link={hero.zweiterKnopf} externText={t.ui.externerLink} className="knopf knopf-sekundaer" /> : null}
            </div>
          ) : null}
        </div>
        {hero.bild ? (
          <div className="bild-rahmen" style={{ aspectRatio: `${hero.bild.breite} / ${hero.bild.hoehe}` }}>
            <Bild bild={hero.bild} sizes="(min-width: 1024px) 40vw, 100vw" prioritaet />
          </div>
        ) : null}
      </div>
    </header>
  );
}
