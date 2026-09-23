# Architekturentscheidungen (ADR-Kurzform)

Format je Eintrag: Kontext, Entscheidung, Folgen. Neue Einträge unten anfügen, bestehende nicht umschreiben (bei Änderung: neuer Eintrag mit Verweis).

## E1 · Statischer Export auf GitHub Pages jetzt, Sanity + Vercel nur vorbereitet (2026-09-22)
**Kontext:** Verkaufs-Demo ohne Kundenzugänge; keine Server, keine Kosten, sofort öffentlich prüfbar. Der Kunde soll später ein CMS erhalten, ohne Neubau.
**Entscheidung:** Next.js 16 `output: "export"` mit `basePath` unter dem Repo-Namen; Inhalte aus JSON über eine Inhaltsschnittstelle
(`lib/content/`), gegen die ein Sanity-Adapter dieselben Typen liefert. Server-only-Routen (Studio, Draft Mode, Webhook) leben in
`server-routes/` und werden nur im Vercel-Modus in `app/` kopiert.
**Folgen:** Zwei Build-Modi (`DEPLOY_TARGET`), beide in der CI geprüft. Keine Weiterleitungen auf Pages (nur dokumentiert). Der Sanity-Pfad ist
ungetestet gegen echte Daten; die Typen sind der Vertrag zwischen beiden Adaptern.

## E2 · Preise als eigene Entitäten mit Status statt Zahlen im Text (2026-09-22, Codex-Empfehlung)
**Kontext:** Die Quelle nennt widersprüchliche Preise (549/514) und eine Aktion ohne Enddatum. Der Auftrag verbietet erfundene Rabatte und stilles Entscheiden.
**Entscheidung:** `Leistung`, `Kombination`, `Aktion` als getrennte Dokumente; Aktion mit `aktionspreis`, `vergleichspreis`, `status`
(`aktiv-bestaetigt | gueltigkeit-ungeklaert | geplant | abgelaufen`), `gueltigVon/Bis` optional, `bedingungen` Pflicht. Ganze CHF-Beträge.
**Folgen:** Widersprüche werden als Hinweis gerendert; `inhalt:pruefen` prüft Plausibilität; die Praxis kann später im Studio den Status setzen.

## E3 · Tests als reine Anzeige, ohne Auswertung und Erfassung (2026-09-22)
**Kontext:** Die «Tests» der Quelle sind Formulare mit Kontaktfeldern und dem Versprechen einer Auswertung. Auf einer statischen Demo ohne Backend
wäre jede Auswertung erfunden, jede Erfassung ein Gesundheitsdatenrisiko.
**Entscheidung:** Fragen als nummerierte Vorbereitungsliste (`FragebogenAnzeige`), Verweis auf das Original und auf Telefon/Buchung. Keine Eingabefelder.
**Folgen:** Kein Funktionsverlust für den Verkauf (Inhalt sichtbar), keine Datenerhebung. Falls der Kunde die Formulare will: eigener Dienst mit AVV, nicht in der Demo.

## E4 · Einwilligung mit einer Kategorie, Zwei-Klick, localStorage (2026-09-22)
**Kontext:** Nur Google Maps und YouTube brauchen Einwilligung; die Quelle nutzte zusätzlich Facebook-Pixel und Google Analytics.
**Entscheidung:** Kein Tracking übernehmen. Banner mit drei gleichwertigen Knöpfen, Kategorie `medien`, versionierter localStorage-Eintrag,
Platzhalter mit «Einmal laden», Widerruf über Footer-Seite. Vor Zustimmung keine Anfrage an Dritte (kein preconnect, kein Vorschaubild).
**Folgen:** Kein Cookie nötig, kein CMP-Dienst. Datenschutzerklärung beschreibt genau dieses Verhalten. Bei neuen Diensten Version erhöhen.

## E5 · Kontaktformular als mailto-Vorbereitung (2026-09-22)
**Kontext:** Kein Backend, kein Formulardienst gewünscht; Gesundheitsdaten dürfen nicht über die Demo laufen.
**Entscheidung:** Formular baut einen `mailto:`-Link (Name, Rückrufnummer, Anliegen, Nachricht) und öffnet das Mailprogramm; ohne JS per `GET` auf `mailto:`.
Warnhinweis, keine Uploads, keine Speicherung.
**Folgen:** Zustellung hängt vom Mailprogramm der Besucherin ab. Für den Live-Betrieb ggf. Formulardienst mit AVV ergänzen.

## E6 · Eigenes Design «Farbring», lokale Schriften, `<img srcset>` statt `next/image` (2026-09-22)
**Kontext:** Auftrag verlangt eigenständiges Design und funktionierende Bilder im statischen Export ohne Loader.
**Entscheidung:** Farbskala als Signatur, Gabarito/Figtree lokal, Bilder mit `sharp` vorgerendert (WebP 480/960/1600, Hash-Namen) und über `data/bilder.json` referenziert.
**Folgen:** Keine externen Anfragen für Schrift oder Bilder; Build ist deterministisch; Bildwechsel brauchen `npm run bilder`.

## E7 · Inhalte über Generator aus lesbaren Quellen (2026-09-23)
**Kontext:** Portable Text in JSON ist von Hand kaum pflegbar; ohne CMS braucht der Betreiber einen Weg, Texte zu ändern.
**Entscheidung:** `werkzeuge/inhalte/seiten/*.mjs` als Quelle, `gen.mjs` erzeugt `data/seiten/*.json`. Der Generator muss `data/` exakt reproduzieren (Prüfung mit `ZIEL=/tmp/... && diff`).
**Folgen:** Zwei Bearbeitungswege (Quelle oder JSON), nie beide für dieselbe Datei. Bei Sanity-Umstieg wird das Studio die Quelle.
