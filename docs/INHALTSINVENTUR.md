# Inhaltsinventur whitesmyle.ch → Demo

Quelle: https://www.whitesmyle.ch/ (Weebly, 49 erreichbare HTML-Seiten, gecrawlt am 23.09.2026). Alle Seiten wurden vollständig gelesen.
Die Hash-Adressen der alten Website (`/#/`) sind ein Weebly-Artefakt ohne eigene Inhalte; die kanonischen `.html`-Adressen sind unten aufgeführt.
Die Zuordnung alt → neu steht zusätzlich maschinenlesbar in `data/weiterleitungen.json` (für die spätere Vercel-Umstellung) und in `alteUrls` jeder Seite.

Status: **ü** = vollständig übernommen · **z** = zusammengeführt (Inhalte erhalten, Duplikate entfernt) · **t** = teilweise, Rest dokumentiert · **–** = bewusst nicht übernommen

| Alte Adresse | Inhalt | Neue Seite | Status | Anmerkung |
|---|---|---|---|---|
| `/` (index) | Startseite: 3 Angebotskacheln, Praxistext, «Warum WHITE SMYLE», FAQ, 3 Kombis, 4 Kundenmeinungen, Lachen-Galerie, natürliche Zahnpflege + Q&A, Footer | `/`, `/ratgeber/natuerliche-zahnpflege/` | z | Testimonial-Portraits nicht übernommen (Zuordnung unbelegt); Galerie 13 Bilder |
| `/team.html` | Tünde Obenauer (Dipl. DH HF, Bleaching-Spezialistin, Leitung DH), Andreas Obenauer (Praxisleitung), Sprachen | `/team/` | ü | Meta-Beschreibung nennt «allgemeine Zahnarztleistungen, Implantate» – kein Zahnarzt im Team → nicht übernommen, offen |
| `/tests.html` | Übersicht 5 Tests | `/tests/` | ü | Als «Fragen zur Vorbereitung» ohne Formularfunktion |
| `/dentalhygiene-test.html`, `/bleaching-test.html`, `/zahn-knirsch-test.html`, `/mundgeruch-test.html`, `/zahnpasta-test.html` | Weebly-Formulare (Fragen + Name/E-Mail/Telefon → E-Mail an Praxis, manuelle Auswertung) | `/tests/<slug>/` | t | Fragen vollständig, wörtlich; keine Eingabe/Auswertung/Speicherung; Link zur Originalfunktion. Kontaktfelder (Name, E-Mail, Telefon, Mitteilung) bewusst nicht nachgebaut |
| `/aktuelle-dental-tipps.html` | 60 KB Sammelseite: Immunsystem, Bleaching-Weiss, orale Bakterien/Fitness, Knirschen (dup), Corona-Hygiene, Nuggi, Schwangerschaft (dup), Megasonex (dup), Pflanzenwirkstoffe, Sport, Kaugummi/Säure, Krankheiten (mundgesund.ch), Sport vs. Gingivitis, Süssigkeiten | `/ratgeber/dental-tipps/` (+ eigene Ratgeber) | t | **Corona-Abschnitt (2020) nicht übernommen** (zeitgebunden, zahnärztliche Massnahmen); Satz «Nahrungszusätze … unumgänglich» nicht übernommen (fachliche Prüfung); fresh4life-Produktfotos nicht übernommen, Links erwähnt |
| `/schwangerschaft.html` | Parodontitis & Schwangerschaft, Präventionsplan, Quelle SDJ 2019 | `/ratgeber/schwangerschaft/` | z | Zwei Planfassungen (Schwangerschaft-Seite vs. Tipps) zusammengeführt, dokumentiert |
| `/zahnknirschen.html` | Knirschen/Pressen, Schiene, Physio | `/ratgeber/zahnknirschen/` | ü | Hinweis, dass Schiene zahnärztlich beschrieben wird |
| `/anbieterauswahl.html` | DH vs. PA, Bleaching nur Dentalpraxen >6 % H2O2, Auswahlkriterien, Tagesanzeiger | `/ratgeber/anbieterauswahl/` | ü | |
| `/kundenmeinungen.html` | 4 Kundengrafiken, 8 Kurzstatements, 28 Erfahrungsberichte, 2 Galerien | `/kundenmeinungen/` | t | Texte wörtlich (Grafiken transkribiert: Benjamin, Daniel, Sarah); Portraits/Grafiken als Bilder nicht übernommen |
| `/medienstimmen.html` | Tagesanzeiger-Logo, Artikelscan, Quartier-Echo-Logo, PDF | `/medienstimmen/` | ü | Fremdartikel nur verlinkt/als PDF der Praxis |
| `/zahlungsmoumlglichkeiten.html` | 7 Zahlungslogos | `/preise/` (Preistafel) | z | |
| `/dentalhygiene.html` | Hauptseite DH: Unterschied DH/Zahnreinigung, FAQ, Ablauf, Phasen des Zahnverfalls (4 Grafiken), 8 Behandlungsfotos, Angebot, Kombis, Empfehlung, Krankenkassen | `/dentalhygiene/` | z | Kombi-Varianten ZOOM/SOFT ohne Preis → offen (PREISPRUEFUNG) |
| `/dentalhygienezurich.html` | SEO-Variante DH (FAQ dupliziert, «Gamechanger», DH intensiv/regular/Kinder) | `/dentalhygiene/` | z | Duplikate entfernt, DH-Varianten intensiv/regular ohne Preis → offen |
| `/zahnreinigung-zuerich.html` | SEO-Variante Zahnreinigung (FAQ) | `/dentalhygiene/`, `/dentalhygiene/fragen-und-antworten/` | z | |
| `/kombiangebote.html` | Kombipaket-Verkaufsseite, Preise, 3 Kundenmeinungen, Galerie | `/kombipaket/` | ü | Preis DH & Home 514 vs. 549 dokumentiert |
| `/orales-mikrobiom.html` | Mikrobiom, FAQ | `/ratgeber/orales-mikrobiom/` | ü | Widerspruch 6–12 vs. 3–6 Monate im FAQ benannt |
| `/zahnreinigung-dh-oder-pa.html` | DH vs. PA (25 KB), Ausbildungstabelle, Video (about:blank), FAQ | `/ratgeber/dentalhygienikerin-oder-prophylaxeassistentin/` | ü | Das eingebettete Video hatte `src=about:blank` (defekt) → nicht übernommen |
| `/dentalhygiene-kinder.html` | Kinder-DH, Zahnwechsel-Grafik, Elterntipps, Fissurenversiegelung | `/dentalhygiene/kinder/` | ü | Kein Preis → «auf Anfrage» |
| `/zahngesundheit--krankheiten.html` | Mund und Körper, 6 Studienverweise | `/ratgeber/zahngesundheit-und-koerper/` | ü | Studien nicht überprüft, als Angaben der Praxis gekennzeichnet |
| `/gingivitis.html` | Gingivitis, FAQ, Mayo-Clinic-Verweis | `/ratgeber/gingivitis/` | ü | |
| `/karies.html` | Karies, FAQ, «Nie wieder Karies» | `/ratgeber/karies/` | ü | |
| `/mundgeruch.html` | Mundgeruch, Zunge, Hilfsmittel, Tagesplan, Checkliste-PDF | `/ratgeber/mundgeruch/` | ü | PDF `mundgeruch_praevention.pdf` |
| `/dentalhygiene-hilfsmittel.html` | Zahnbürsten, Zahnpasta, Mundspülung, Zahnseide (Video about:blank) | `/ratgeber/hilfsmittel/` | ü | defektes Video nicht übernommen |
| `/parodontose-zuerich.html` | Parodontitis, FAQ | `/dentalhygiene/parodontitis/` | ü | |
| `/q--a-dentalhygiene.html` | 32 FAQ | `/dentalhygiene/fragen-und-antworten/` | ü | |
| `/recall-programm.html` | Recall-Service + Formular | `/dentalhygiene/recall/` | t | Formular → E-Mail-Weg (mailto) |
| `/mundgesundheit-canabis.html` | Cannabis, Rauchen/Kaffee, Zahnschmelz/HAP, Zahnzwischenräume, YouTube | `/ratgeber/cannabis-und-mundgesundheit/` | ü | YouTube nur nach Einwilligung |
| `/rauchen-zahnverfaerbungen.html` | Rauchen/Kaffee-Ratgeber | `/ratgeber/rauchen-und-kaffee/` | ü | |
| `/megasonex-ultraschall.html` | Produktseite Megasonex + YouTube + Shoplink | `/ratgeber/ultraschallzahnbuerste/` | ü | Als Ratgeber mit externem Shop-Link, Herstellerangaben gekennzeichnet |
| `/bleaching.html` | Hauptseite Bleaching: 3 Arten, Reihenfolge, 10 Kundenstimmen mit Sternen, 17 FAQ, 6 Fallbeispiele | `/bleaching/` | ü | Sterne nur weil Quelle sie zeigt; Herkunft der Stimmen unbelegt |
| `/power-bleaching-zuerich.html` | HEYDENT Power Bleaching (Herstellerangaben, FAQ) | `/bleaching/power-bleaching/` | ü | |
| `/home-bleaching.html` | Home Bleaching, Peroxid-Erklärung, ZOOM Day/Nite White, Shoplink | `/bleaching/home-bleaching/` | ü | |
| `/zahnbleaching-ratgeber.html` | Bleaching-Fakten, FAQ | `/ratgeber/zahnbleaching/` | ü | |
| `/bleaching-only.html` | Bleaching ohne DH, Empfindlichkeit, FAQ | `/bleaching/bleaching-ohne-dentalhygiene/` | ü | |
| `/bleaching-aktion.html` | Nicht in der Navigation; Seite mit Titel «Bleaching Aktion», ohne sichtbaren Inhalt | `/preise/aktion/` | – | Nur Weiterleitung |
| `/power-bleaching-aktion.html` | Aktion Power Bleaching plus 249, Galerie 9 Bilder, FAQ | `/preise/aktion/`, `/bleaching/power-bleaching/` | z | Galerie auf Power-Bleaching-Seite |
| `/aktion.html` | Kombi vs. Bleaching only (Preise) | `/preise/aktion/` | z | |
| `/hochzeitsbleaching.html` | Hochzeitsbleaching | `/bleaching/hochzeitsbleaching/` | ü | |
| `/preise.html` | Preisliste DH/Bleaching/Kombis, Storno | `/preise/` | ü | |
| `/termin.html`, `/online-termin.html` | Cituro-Link, «auch kurzfristige Termine möglich» | `/termin/` | z | Aussage «kurzfristige Termine» als Angabe der Praxis; keine Verfügbarkeit erfunden |
| `/kontakt.html` | Formular (mit Datei-Upload), Adresse, Telefon, WhatsApp | `/kontakt/` | t | Upload bewusst weggelassen; mailto-Formular ohne Gesundheitsdaten |
| `/standort.html` | Google-Maps-iframe (Weebly), Adresse «Buckhauserstrasse 17-19», Anfahrt, 12 Fotos | `/kontakt/` | z | Adresse: Impressum/Footer 17, Standortseite 17-19 → 17 verwendet, offen; Karte nur nach Einwilligung |
| `/agbs.html` | AGB Stand 05/2025 | `/agb/` | ü | wörtlich |
| `/datenschutzerklaerung.html` | Generator-Text (Stand 24.07.2024) mit Weebly, Borlabs, Social Media, Beschäftigtendaten, «premiumtext»-Platzhaltern | `/datenschutz/` | – | Für die Demo neu verfasst; Original in `docs/original/datenschutzerklaerung.md` |
| `/impressum.html` | KOMVITA AG, Andreas Obenauer, Bewilligung Tünde Obenauer, Mini-Datenschutz | `/impressum/` | z | Demo-Betreiber getrennt aufgeführt |

## Nicht übernommene Funktionen der alten Website

- Facebook-Pixel (ID 1451391311565247), Google Analytics (UA-118965272-1, UA-36268901-1), Weebly-Tracking, appjustable-Terminknopf (Popup) – kein Tracking auf der Demo.
- Weebly-Formulare (Kontakt mit Upload, Recall, 5 Tests) – Weebly-eigene Verwaltungsfunktion, nicht übertragbar.
- Google-Maps-iframe über weebly.com – ersetzt durch Google-Maps-Embed nach Einwilligung.
- Weebly-Menüstruktur (12 Hauptpunkte, 92 Unterpunkte, teils mit absoluten URLs) – ersetzt durch 6 Hauptbereiche.

## Navigation alt → neu

Alt: Home (Team, Tests, Dental Tipps, Anbieterauswahl, Kundenmeinungen, Medienstimmen, Zahlungsmöglichkeiten, Zahnpastashop) · Dentalhygiene (14 Unterpunkte) ·
Bleaching (8) · Preise (Aktion) · Termin (Online Termin) · Kontakt (Standort).

Neu: **Dentalhygiene** (Übersicht, Kombipaket, Kinder, Parodontitis, Fragen & Antworten, Recall) · **Bleaching** (Übersicht, Power Bleaching, Home Bleaching,
Bleaching ohne DH, Hochzeitsbleaching, Kombipaket) · **Preise** (Übersicht, Aktion, Kombipaket) · **Ratgeber** (alle 16 + Fragen zur Vorbereitung) ·
**Praxis** (Team, Kundenmeinungen, Medienstimmen, Kontakt, Zahnpastashop extern) · **Kontakt** + Knopf «Termin buchen» (Cituro, extern).
Preise, Kontakt und Buchung sind auf jeder Seite direkt erreichbar (Kopfzeile, Footer, Aufruf-Bänder).

## Widersprüche und veraltete Inhalte (zur Klärung durch die Praxis)

1. Adresse Buckhauserstrasse 17 (Impressum, Footer) vs. 17-19 (Standortseite).
2. Name der Dentalhygienikerin: Obenauer (Team, Impressum) vs. Tauber (Medienbeitrag, eine Kundenmeinung) – vermutlich Namensänderung.
3. «Bleaching seit 2011» (Meta-Titel /bleaching.html) vs. «seit 2012» (Text überall) – Demo verwendet 2012.
4. E-Mail: Footer-Icon `info@whitesmyle.ch` vs. sichtbar `kontakt@whitesmyle.ch` – Demo verwendet kontakt@.
5. Datenschutz-Kontakt `marketing@whitesmyle.ch` (alte Datenschutzerklärung).
6. «Zahnarzt»/«Zahnarztpraxis», Implantate, Wurzelbehandlung, Kontrollen (Team-Meta, Standort «mit Zahnarzt», Tipps) – kein Zahnarzt im Team; AGB: DH-Karieskontrolle ersetzt Zahnarztkontrolle nicht.
7. Mikrobiom-FAQ: DH alle 6–12 Monate vs. 3–6 Monate.
8. Corona-Abschnitt 2020 (veraltet); basefit.ch-Empfehlung; fresh4life-Produkte.
9. Preise: siehe `docs/PREISPRUEFUNG.md`.
10. Ansprache: alte Website mischt Du und Sie – Demo durchgehend «Sie» (Entscheidung, umkehrbar).
