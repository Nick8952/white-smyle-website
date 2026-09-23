import { Phone, Tag } from "@phosphor-icons/react/dist/ssr";
import { telefonInternational } from "@/lib/seo";
import { chf, type AktionBaustein, type Einstellungen, type Texte } from "@/lib/content/types";
import { BuchenLink } from "./BuchenLink";

/**
 * Aktion als eigenständige Box: Aktionspreis, belegter Vergleichspreis, Bedingungen, Status.
 * Keine Countdowns, keine Verknappung. Bei Status «gueltigkeit-ungeklaert» steht das sichtbar dabei.
 */
export function AktionBox({ baustein: b, texte: t, einstellungen: e }: { baustein: AktionBaustein; texte: Texte; einstellungen: Einstellungen }) {
  const a = b.aktion;
  const ersparnis = a.vergleichspreisChf - a.aktionspreisChf;
  // Nicht bestätigte Aktion: kein Streichpreis-Charakter, keine Ersparnis, kein Buchungsknopf – nur Nachfrage bei der Praxis.
  const ungeklaert = a.status !== "aktiv-bestaetigt";
  return (
    <section id={b.anker} className="abschnitt-eng">
      <div className="behaelter">
        <div className="karte-orange auftauchen grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="etikett bg-papier">
              <Tag size={16} weight="bold" aria-hidden="true" />
              {t.ui.aktion}
              {a.status === "gueltigkeit-ungeklaert" ? <span className="font-normal text-tinte-2"> · {t.ui.aktionUngeklaert}</span> : null}
            </p>
            <h2 className="titel-2 mt-4">{a.titel}</h2>
            <p className="mt-3 max-w-[40rem] text-tinte-2">{a.text}</p>
            {a.bedingungen.length ? (
              <ul className="klein mt-4 grid gap-1">
                {a.bedingungen.map((x) => (
                  <li key={x} className="flex gap-2"><span aria-hidden="true" className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-rost" />{x}</li>
                ))}
              </ul>
            ) : null}
            {a.gueltigBis ? <p className="klein mt-3 text-tinte-2">Gültig bis {a.gueltigBis}</p> : null}
          </div>
          <div className="rounded-[var(--radius-mittel)] bg-papier p-6">
            {a.leistung ? <p className="font-display font-semibold">{a.leistung.titel}</p> : null}
            <p className="preis mt-2 text-4xl">{chf(a.aktionspreisChf)}</p>
            <p className="klein text-grau">{ungeklaert ? `Aktionspreis laut bisheriger Website; regulär ${chf(a.vergleichspreisChf)} (${a.vergleichBasis})` : `statt ${chf(a.vergleichspreisChf)} (${a.vergleichBasis})${ersparnis > 0 ? ` · ${t.ui.ersparnis} ${chf(ersparnis)}` : ""}`}</p>
            {a.kombination ? (
              <div className="mt-4 border-t border-linie pt-4">
                <p className="font-display font-semibold">{a.kombination.kombination.titel}</p>
                <p className="preis mt-1 text-3xl">{chf(a.kombination.aktionspreisChf)}</p>
                <p className="klein text-grau">{ungeklaert ? `regulär ${chf(a.kombination.vergleichspreisChf)}` : `statt ${chf(a.kombination.vergleichspreisChf)} · ${t.ui.ersparnis} ${chf(a.kombination.vergleichspreisChf - a.kombination.aktionspreisChf)}`}</p>
              </div>
            ) : null}
            <div className="mt-5">
              {ungeklaert ? (
                <a href={`tel:${telefonInternational(e.telefon)}`} className="knopf knopf-sekundaer">
                  <Phone size={18} weight="bold" aria-hidden="true" />
                  Gültigkeit anfragen: {e.telefon}
                </a>
              ) : (
                <BuchenLink einstellungen={e} texte={t} variante="primaer" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
