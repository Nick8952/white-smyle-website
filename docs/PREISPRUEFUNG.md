# Gegenprüfung Preise, Aktionen und Angebotsbedingungen

Stand der Quelle: whitesmyle.ch, abgerufen 23.09.2026. Kanonische Grundlage der Demo ist die Preisseite `/preise.html`.
Abweichungen anderer Seiten werden hier dokumentiert und in der Demo sichtbar als Fussnote bzw. Preishinweis geführt – es wurde
kein Preis stillschweigend ausgewählt. Die Online-Buchung (Cituro, app.cituro.com/booking/2814276) ist eine JavaScript-Anwendung;
die dort hinterlegten Leistungen und Preise konnten ohne Buchungsvorgang nicht ausgelesen werden (keine echten Buchungen ausgelöst).

## Einzelleistungen

| Leistung | /preise.html | Andere Seiten | Demo | Status |
|---|---|---|---|---|
| Dentalhygiene | CHF 175.– | Startseite 175.–, /dentalhygiene.html 175 (Richtpreise 170–220), /dentalhygienezurich.html «ab 175», /q--a 170–230 (Zürich allgemein) | CHF 175.– fix | bestätigt (übereinstimmend) |
| Frontpolish | CHF 100.– | /mundgesundheit-canabis.html «30 minütige Dentalhygiene» | CHF 100.–, Dauer ca. 30 Min. | bestätigt |
| Kinder-Zahnreinigung | – | /dentalhygiene.html, /dentalhygienezurich.html, /dentalhygiene-kinder.html (ohne Preis, Dauer 30–45 Min.) | «auf Anfrage» | **offen: Preis fehlt** |
| Power Bleaching | CHF 249.– | /aktion.html 249.– | CHF 249.– | bestätigt |
| Power Bleaching plus | CHF 299.– | Startseite/Aktionsseite: «Aktion 249.–, Du sparst 50.–»; /aktion.html 299.– | CHF 299.– regulär; Aktion 249.– mit Status «Gültigkeit ungeklärt» | **offen: Aktionsgültigkeit** |
| EXPRESS Refresher Bleaching | CHF 199.– | /bleaching.html (ohne Preis, 30–45 Min.); Fallbeispiele «20–30 Min.» | CHF 199.–, Dauer ca. 30–45 Min. | bestätigt; Dauerangabe uneinheitlich (30–45 vs. 20–30 Min.) |
| Home Bleaching (Schiene, exkl. Gel) | CHF 399.– | /aktion.html «Home Bleaching Schiene 399.–» | CHF 399.– + Hinweis «exkl. Gel» | bestätigt |
| Bleaching-Gel Philips ZOOM, 1 Spritze | CHF 15.– | – | als Preishinweis bei Home Bleaching | bestätigt |

Auf /dentalhygiene.html und /dentalhygienezurich.html werden zusätzlich «Dentalhygiene & Philips ZOOM Bleaching Kombipaket», «& SOFT Bleaching
Kombipaket», «DENTALHYGIENE INTENSIV / REGULAR» genannt – ohne Preise, nicht auf der Preisliste. Kundenmeinungen erwähnen «Soft Bleaching» und
«ZOOM Bleaching». **Offen:** Werden diese Varianten noch angeboten? In der Demo nicht als aktuelle Angebote geführt (Hinweis auf der Kundenmeinungsseite).

## Kombipakete

| Kombipaket | /preise.html | /kombiangebote.html | /aktion.html | Startseite | Summe Einzelpreise | Demo |
|---|---|---|---|---|---|---|
| DH & Power Bleaching | 399.– | 399.– | 399.– | Tipp 399.– | 424.– (Ersparnis 25.–) | 399.– |
| DH & Power Bleaching plus | 474.– | 474.– | 474.– | «Kombipaket 399.– Du sparst 75.–» (= Aktion) | 474.– | 474.– regulär; Aktion 399.– statt 474.– (Ersparnis 75.– belegbar) |
| DH & EXPRESS Refresher | 349.– | – | – | – | 374.– (Ersparnis 25.–) | 349.– |
| DH & Home Bleaching | **549.–** | **514.–** | **514.–** | – | 574.– | 549.– mit sichtbarem Hinweis «Kombiangebote/Aktion nennen 514.–» |

Das Muster «Kombipreis = Summe − 25» spricht für 549.–; die Praxis muss bestätigen. Ersparnisse werden in der Demo nur angezeigt, wenn alle
Einzelpreise fix auf der Preisliste stehen (Komponente berechnet sie aus den Daten; keine erfundenen Streichpreise).

## Aktion

- Quelle: Startseite («HEYDENT POWER BLEACHING plus 249.- AKTION – Du sparst 50.-», «KOMBIPAKET 399.- Du sparst 75.-»), /power-bleaching-aktion.html
  («weiss und unaufhaltbar cool», «Für Deine weissen Zähne im Frühling» in der Meta-Beschreibung), /aktion.html.
- Kein Start-/Enddatum, keine Bedingungen ausser den allgemeinen (20 Zähne, DH ≤ 6 Monate für Bleaching only).
- Demo: Aktion als eigenes Dokument (`data/aktionen.json`) mit Status `gueltigkeit-ungeklaert`; sichtbar mit Hinweis «Gültigkeit wird von der Praxis bestätigt».
  Keine Countdowns, keine Verknappung. Status wird redaktionell gepflegt; keine automatische Datumslogik (bewusst, siehe Codex-Review).

## Bedingungen

- Storno: Preisseite «mindestens 48 Stunden im Voraus und innerhalb der Praxis-Arbeitszeiten … voller Preis»; AGB «spätestens 48 Stunden vorher …
  nach der üblichen Gebührenliste verrechnet». Beide Fassungen sind in der Demo (Preisseite + AGB) wiedergegeben. Keine neuen Fristen erfunden.
- Zahlung: Kreditkarte, Postcard/PostFinance, TWINT, bar; Rechnung nur nach Absprache (AGB). Logos gemäss /zahlungsmoumlglichkeiten.html
  (Maestro, PostFinance, Cash, V PAY, Mastercard, Visa, TWINT).
- Bleaching only: letzte DH ≤ 6 Monate (Raucher 2–3 Monate) – /bleaching-only.html, Startseite, /aktion.html.
- «Krankenkassen anerkannt» (Badge + Text /dentalhygiene.html): übernommen als Aussage der Praxis; keine Zusage einer Kostenübernahme.
- Cituro-Bedingungen wurden nicht geprüft (kein Buchungsvorgang ausgelöst) – Widersprüche zur Website sind nicht ausschliessbar.

## Zu bestätigen durch die Praxis

1. Preis Kombipaket Dentalhygiene & Home Bleaching (549.– oder 514.–).
2. Gültigkeit, Zeitraum und Bedingungen der Aktion Power Bleaching plus 249.–.
3. Preis der Kinder-Zahnreinigung.
4. Angebotsstatus von Philips-ZOOM-Bleaching, Soft Bleaching, DH intensiv/regular.
5. Dauer Refresher (30–45 vs. 20–30 Minuten) und Unterschied Power Bleaching / Power Bleaching plus.
6. Preise und Leistungen in Cituro mit der Website abgleichen.
