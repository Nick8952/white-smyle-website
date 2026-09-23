# Übergabe White Smyle Website-Demo

Stand: 23. September 2026 · Betreiber der Demo: Nick Holzbecher · Dargestellte Firma: WHITE SMYLE dental (KOMVITA AG)

## Links
- Demo (noindex): https://nick8952.github.io/white-smyle-website/
- Repository: https://github.com/Nick8952/white-smyle-website
- Quelle der Inhalte: https://www.whitesmyle.ch/ (Stand September 2026, 49 Seiten, Inventur in `docs/INHALTSINVENTUR.md`)

## Was die Demo ist und was nicht
- Vollständige Übernahme aller Inhalte der bestehenden Website in eine neue Struktur (46 Seiten statt 49; Zusammenlegungen und
  URL-Zuordnung in `docs/INHALTSINVENTUR.md` und `data/weiterleitungen.json`).
- Statischer Export auf GitHub Pages. Kein CMS, keine Datenbank, keine Server. Sanity und Vercel sind vorbereitet, **nicht eingerichtet**
  (Anleitung `docs/SANITY-VERCEL-EINRICHTUNG.md`, Checkliste `docs/UMSTELLUNG-VERCEL.md`).
- Buchung ausschliesslich über den bestehenden Cituro-Link (extern, mit Hinweis). Shop-Verweise gehen zu zahnpastashop.ch.
- Kontakt: Telefon, Mobil (SMS/WhatsApp wie auf der Quelle), E-Mail, Routenlink, und ein Formular, das eine E-Mail im Mailprogramm der
  Besucherin vorbereitet (`mailto`). Nichts wird über die Website gesendet oder gespeichert.
- Tests (Dentalhygiene, Bleaching, Knirschen, Mundgeruch, Zahnpasta): Originalfragen als Vorbereitung angezeigt, **ohne** Auswertung und
  ohne Erfassung. Verweis auf den Originalfragebogen und auf Telefon/Buchung.
- Einwilligung: echter Banner («Alle akzeptieren», «Nur notwendige», «Einstellungen»), einzige optionale Kategorie «Externe Medien»
  (Google Maps, YouTube). Vor Zustimmung keine Anfragen an Dritte. Widerruf über «Cookie-Einstellungen» im Footer. Kein Tracking.
- Demo-Kennzeichnung: Hinweisleiste im Footer, `noindex`, eigenes Impressum und eigene Datenschutzerklärung für die Demo.

## Offene Fragen an die Praxis (vor einem Go-Live zu klären)
| Nr. | Thema | Frage |
|---|---|---|
| 1 | Preis Kombi Home Bleaching | Preisliste sagt CHF 549, Seiten «Kombiangebote» und «Aktion» sagen CHF 514. Welcher gilt? |
| 2 | Aktion Power Bleaching plus | CHF 249 statt 299 (Kombi 399 statt 474): gilt sie noch, bis wann, mit welchen Bedingungen? |
| 3 | Zahnreinigung für Kinder | Kein Preis auf der Quelle. Preis oder «auf Anfrage» belassen? |
| 4 | Philips ZOOM, Soft Bleaching, Dentalhygiene intensiv | Werden erwähnt, aber ohne Preis bzw. Status. Angebot ja/nein, Preis? |
| 5 | Adresse | «Buckhauserstrasse 17» vs. «17–19» (Impressum). Welche Schreibweise? |
| 6 | Team | Praxisleitung heisst auf der Quelle teils «Obenauer», teils «Tauber». Aktuelle Namen, Funktionen, Fotos freigeben. |
| 7 | Zahnarzt-Erwähnungen | Team-Meta nannte «Zahnarztleistungen, Implantate»; Team führt keinen Zahnarzt. Was gilt? |
| 8 | Logo | Vektordatei (SVG/AI/PDF) des Logos. Die Demo verwendet einen SVG-Nachbau. |
| 9 | Bildrechte | Einwilligungen für Team- und Patientenfotos (Fallbeispiele, Kundenfotos) schriftlich; Lizenzen der Stockfotos. |
| 10 | Rechtsform, UID, Register | Für Impressum der Live-Site: KOMVITA AG UID/Handelsregister, verantwortliche Person, Berufsbewilligung (Kanton Zürich). |
| 11 | Medizinische Freigabe | Liste in `docs/MEDIZINISCHE-TEXTE.md` durch die dipl. Dentalhygienikerin HF prüfen und freigeben. |
| 12 | Kundenmeinungen | 56 Zitate wörtlich übernommen (mit Tippfehlern der Quelle). Weiterverwendung und Namensnennung ok? |
| 13 | Öffnungszeiten | Di–Do 11–19, Fr 9–13, Sa nach Vereinbarung, «weitere Termine auf Anfrage». Aktuell? |
| 14 | Google-Bewertung «über 2400 Behandlungen», «seit 2012», «über 30 Jahre» | Kennzahlen stammen von der Quelle; belegen oder streichen. |
| 15 | Datenschutz Live-Betrieb | Für die echte Website muss die Datenschutzerklärung auf die Praxis als Betreiberin und das gewählte Hosting umgeschrieben werden. |

## Fehlende Materialien
Logo-Vektor · hochauflösende Team-Fotos · Bildlizenzen · aktuelle Preisliste als PDF (Preisliste der Quelle ist HTML) · ggf. Videos
(die Quelle bettet YouTube ein; die IDs sind übernommen) · Google-Business-Daten für strukturierte Daten (Bewertungen werden nicht angezeigt).

## Freigaben, die noch fehlen
- Fachliche Freigabe aller medizinischen Aussagen (`pruefstatus` bleibt `sprachlich-angepasst`/`uebernommen`).
- Freigabe der Preise und der Aktion (`status: gueltigkeit-ungeklaert`).
- Rechtliche Prüfung von AGB (wörtlich übernommen, Stand 05/2025) und Datenschutzerklärung. Die Demo-Texte sind nicht anwaltlich geprüft.

## Betrieb, Backup, Wartung
- Code und Inhalte liegen vollständig im Git-Repository; jeder Stand ist wiederherstellbar. Bilder: Originale in `assets/originale/`, Ableitungen generierbar.
- Deployment: Push auf `main` → GitHub Actions baut, prüft und veröffentlicht. Fehlschlag = kein Deploy (vorheriger Stand bleibt online).
- Abhängigkeiten: `npm outdated` monatlich; Next.js-Sicherheitsupdates zeitnah. Node 20+.
- Inhalte pflegen: `docs/INHALTE-PFLEGEN.md`. QA nach Änderungen: `npm run pruefen && npm run build && npm run export:pruefen`, optional `werkzeuge/qa/*`.
- Kein Account ausser GitHub nötig. Für Sanity/Vercel später: Konten auf den Kunden ausstellen, Nick als Mitglied.

## Bekannte Einschränkungen
- Weiterleitungen alt→neu greifen erst auf Vercel; auf GitHub Pages sind alte `.html`-URLs nicht erreichbar (Demo hat eine andere Domain).
- Logo ist ein Nachbau; Schriftschnitt der Wortmarke (Cinzel) nähert das Original an.
- Der Sanity-Adapter ist nie gegen echte Daten gelaufen (siehe Kennzeichnung in `docs/SANITY-VERCEL-EINRICHTUNG.md`).
- Kundenmeinungen ohne Sternebewertung, da die Quelle keine Sterne zeigt. Keine Google-Bewertungen eingebunden.
- Der WhatsApp-Verweis ist ein einfacher Link (kein Widget) und verweist auf Metas Datenschutz.
