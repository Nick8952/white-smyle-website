"use client";

import { useId, useState } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react";
import type { Einstellungen, Texte } from "@/lib/content/types";

/**
 * «E-Mail vorbereiten»: baut aus organisatorischen Angaben (Name, Rückrufnummer, Anliegen, Nachricht) einen mailto:-Link
 * und öffnet das Mailprogramm der Nutzerin. Es wird nichts gesendet, gespeichert oder protokolliert; keine Versandbestätigung.
 * Ohne JavaScript sendet das Formular per GET an mailto: (Fallback). Keine Gesundheitsangaben, keine Uploads.
 */
export function Anfrageformular({ einstellungen: e, texte: t }: { einstellungen: Einstellungen; texte: Texte }) {
  const f = t.formular;
  const id = useId();
  const [name, setName] = useState("");
  const [rueckruf, setRueckruf] = useState("");
  const [anliegen, setAnliegen] = useState(f.anliegenOptionen[0]?.wert ?? "");
  const [nachricht, setNachricht] = useState("");
  const [fehler, setFehler] = useState<string | null>(null);
  const [vorbereitet, setVorbereitet] = useState(false);

  const betreff = `Anfrage über die Website: ${f.anliegenOptionen.find((o) => o.wert === anliegen)?.titel ?? anliegen}`;
  const text = [`Name: ${name.trim()}`, rueckruf.trim() ? `Rückrufnummer: ${rueckruf.trim()}` : null, `Anliegen: ${f.anliegenOptionen.find((o) => o.wert === anliegen)?.titel ?? anliegen}`, nachricht.trim() ? `\n${nachricht.trim()}` : null].filter(Boolean).join("\n");
  const mailto = `mailto:${e.email}?subject=${encodeURIComponent(betreff)}&body=${encodeURIComponent(text)}`;

  return (
    <form
      className="karte grid gap-5 p-6 sm:p-8"
      action={`mailto:${e.email}`}
      method="get"
      encType="text/plain"
      noValidate
      onSubmit={(ev) => {
        ev.preventDefault();
        if (!name.trim()) {
          setFehler(f.fehlerName);
          document.getElementById(`${id}-name`)?.focus();
          return;
        }
        setFehler(null);
        window.location.href = mailto;
        setVorbereitet(true);
      }}
    >
      <div>
        <h3 className="titel-3">{f.titel}</h3>
        <p className="klein mt-2 text-tinte-2">{f.einleitung}</p>
        <p className="klein mt-2 rounded-[var(--radius-klein)] bg-hinweis px-3 py-2 text-tinte-2">{f.warnung}</p>
      </div>
      <div className="feld">
        <label htmlFor={`${id}-name`}>{f.name} <span aria-hidden="true">*</span></label>
        <input id={`${id}-name`} name="Name" type="text" autoComplete="name" required aria-required="true" aria-invalid={fehler ? "true" : undefined} aria-describedby={fehler ? `${id}-fehler` : undefined} value={name} onChange={(ev) => setName(ev.target.value)} />
        {fehler ? <p id={`${id}-fehler`} className="fehler klein" role="alert">{fehler}</p> : null}
      </div>
      <div className="feld">
        <label htmlFor={`${id}-rueckruf`}>{f.rueckruf}</label>
        <input id={`${id}-rueckruf`} name="Rueckrufnummer" type="tel" autoComplete="tel" inputMode="tel" value={rueckruf} onChange={(ev) => setRueckruf(ev.target.value)} />
      </div>
      <div className="feld">
        <label htmlFor={`${id}-anliegen`}>{f.anliegen}</label>
        <select id={`${id}-anliegen`} name="Anliegen" value={anliegen} onChange={(ev) => setAnliegen(ev.target.value)}>
          {f.anliegenOptionen.map((o) => (
            <option key={o.wert} value={o.wert}>{o.titel}</option>
          ))}
        </select>
      </div>
      <div className="feld">
        <label htmlFor={`${id}-nachricht`}>{f.nachricht}</label>
        <textarea id={`${id}-nachricht`} name="Nachricht" rows={4} aria-describedby={`${id}-hilfe`} value={nachricht} onChange={(ev) => setNachricht(ev.target.value)} />
        <p id={`${id}-hilfe`} className="feld-hilfe">{f.nachrichtHilfe}</p>
      </div>
      <p className="klein text-grau">{f.pflicht}</p>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="knopf knopf-primaer">
          <EnvelopeSimple size={20} weight="bold" aria-hidden="true" />
          {f.emailVorbereiten}
        </button>
        <p role="status" aria-live="polite" className="klein text-tinte-2">{vorbereitet ? f.hinweisNachher : ""}</p>
      </div>
    </form>
  );
}
