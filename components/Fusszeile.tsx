import Link from "next/link";
import { ArrowUpRight, Clock, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import type { Einstellungen, Texte } from "@/lib/content/types";
import { telefonInternational } from "@/lib/seo";
import { Logo } from "./Logo";
import { Farbring } from "./Farbring";
import { SmartLink } from "./SmartLink";

export function Fusszeile({ einstellungen: e, texte: t }: { einstellungen: Einstellungen; texte: Texte }) {
  return (
    <footer className="mt-16 border-t border-linie bg-emaille">
      <Farbring className="h-5 w-full" richtung="auf" />
      <div className="behaelter grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex min-h-11 items-center rounded-md" aria-label={`${e.marke} – ${t.ui.startseite}`}>
            <Logo name={e.marke} />
          </Link>
          <p className="mt-4 max-w-sm text-tinte-2">{e.claim}</p>
          <address className="mt-6 grid gap-2 not-italic">
            <p className="flex items-start gap-2">
              <MapPin size={20} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-rost" />
              <span>
                {e.adresse.strasse}
                <br />
                {e.adresse.plz} {e.adresse.ort}
              </span>
            </p>
            <p className="flex items-start gap-2">
              <Phone size={20} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-rost" />
              <span>
                <a href={`tel:${telefonInternational(e.telefon)}`} className="hover:underline">{e.telefon}</a>
                <br />
                <a href={`tel:${telefonInternational(e.mobil)}`} className="hover:underline">{e.mobil}</a> <span className="text-grau">({e.mobilKanaele})</span>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <EnvelopeSimple size={20} weight="bold" aria-hidden="true" className="shrink-0 text-rost" />
              <a href={`mailto:${e.email}`} className="hover:underline">{e.email}</a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="titel-3 mb-3 flex items-center gap-2">
            <Clock size={20} weight="bold" aria-hidden="true" className="text-rost" />
            {t.ui.oeffnungszeiten}
          </h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
            {e.oeffnungszeiten.map((z) => (
              <div key={z._key} className="contents">
                <dt className="font-semibold">{z.tage}</dt>
                <dd>{z.zeiten}</dd>
              </div>
            ))}
          </dl>
          {e.oeffnungszeitenHinweis ? <p className="klein mt-3 text-grau">{e.oeffnungszeitenHinweis}</p> : null}
        </div>
        {t.footerLinks.map((gruppe) => (
          <div key={gruppe.titel}>
            <h2 className="titel-3 mb-3">{gruppe.titel}</h2>
            <ul className="grid gap-1.5">
              {gruppe.links.map((l) => (
                <li key={l.ziel}>
                  <SmartLink link={l} externText={t.ui.externerLink} className="inline-flex min-h-11 items-center gap-1 hover:underline" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-linie">
        <div className="behaelter flex flex-col gap-3 py-5 text-tinte-2 md:flex-row md:items-center md:justify-between">
          <p className="klein">
            © {new Date().getFullYear()} {e.rechtstraeger} · {e.marke}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {t.rechtslinks.map((l) => (
              <li key={l.ziel}>
                <SmartLink link={l} externText={t.ui.externerLink} className="klein inline-flex min-h-11 items-center gap-1 hover:underline" />
              </li>
            ))}
            <li>
              <a href={e.shopUrl} target="_blank" rel="noopener noreferrer" className="klein inline-flex min-h-8 items-center gap-1 hover:underline">
                {e.shopName}
                <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                <span className="nur-sr"> ({t.ui.externerLink})</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {t.demoHinweis ? <p className="demo-hinweis">{t.demoHinweis}</p> : null}
    </footer>
  );
}
