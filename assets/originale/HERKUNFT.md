# Herkunft der Originalmedien

Alle Dateien in diesem Ordner stammen von der bisherigen Website **https://www.whitesmyle.ch/** (Weebly, Pfad `/uploads/1/4/5/8/14583594/…`),
heruntergeladen am 23.09.2026 nach ausdrücklicher Freigabe durch Nick Holzbecher (Auftraggeber der Demo). Die Zuordnung Kennung → Datei steht in
`scripts/bilder-liste.json`, die Web-Varianten erzeugt `npm run bilder` nach `public/bilder/`.

**Öffentlich sichtbar heisst nicht frei verwendbar.** Vor einem produktiven Einsatz muss der Kunde (KOMVITA AG / WHITE SMYLE dental) bestätigen,
dass er die Nutzungsrechte besitzt (docs/UEBERGABE.md). Nicht bearbeitet: keine Retusche, keine Veränderung von Zahnfarben, nur Skalierung/Format.

| Ordner | Inhalt | Einschätzung |
|---|---|---|
| `praxis/`, `standort/`, `team/` | Praxis- und Standortfotos (Schaufenster, Eingang, Innenhof, Tram, Bus, Parkplätze), Teamportraits Tünde und Andreas Obenauer, Behandlungsraum | eigene Aufnahmen der Praxis, wahrscheinlich unproblematisch; Teamportraits nur mit Einverständnis der Personen |
| `behandlung/`, `bleaching/` | Behandlungsfotos (Dentalhygiene-Schritte, Bleaching-Lampe, Farbring), Motivfotos zu Angeboten | teils eigene Praxisfotos, teils erkennbar Stockmotive (z. B. Lachen vor weissem Hintergrund) – **nicht** als Patientinnen beschriften |
| `fallbeispiele/` | 6 Bildreihen «Fallbeispiele» (vorher / nach Power Bleaching / nach Refresher), Original-Beschriftung der Praxis | Patientenaufnahmen: Einwilligung der abgebildeten Personen ist durch die Praxis zu bestätigen |
| `lachen/` | Nahaufnahmen lachender Münder (Galerien der alten Website) | Stock- oder Praxisaufnahmen, Herkunft unklar |
| `grafik/` | Schemazeichnungen (Zahnaufbau, Parodontitis, Karies, Zahnwechsel), Textgrafiken der Praxis («Dental Info», «you love it») | Zahnaufbau-Grafiken tragen keinen Urheberhinweis; Parodont-Grafik nennt «Deutsches Krebsforschungszentrum, Stabsstelle Krebsprävention 2011» |
| `ratgeber/` | Motivfotos zu Ratgeberthemen | grösstenteils Stockmotive |
| `produkte/` | Produktfotos SPLAT, Megasonex, Zungenreiniger, Shop-Logo zahnpastashop.ch | Fremdmarken; Shop wird von denselben Betreibern geführt (Angabe der Quelle), Freigabe klären |
| `zahlung/` | Logos Maestro, PostFinance, Cash, V PAY, Mastercard, Visa, TWINT | Fremdmarken; Nutzung als Hinweis auf akzeptierte Zahlungsmittel üblich |
| `medien/` | Logo Tages-Anzeiger, Logo Quartier-Echo, Scan des Unternehmensbeitrags | Fremdmedien; Scan = Unternehmensbeitrag der Praxis, Nutzung durch Praxis anzunehmen |

Bewusst **nicht** übernommen: Portraits neben Kundenmeinungen (jessica, nicolas, mona, carla, 510-3, 583, 215-3) und die vier
Kundengrafiken «Ich gehe zu WHITE SMYLE…» als Bilder (Zuordnung Bild ↔ Person nicht belegt, wirken wie Stockfotos); Produktfotos
fresh4life (Immunbooster, Tautona) – nur Links; Weebly-Buttons («Termin buchen», «Terminanfrage»), WhatsApp-Logo (eigenes Icon).

Logo: Auf der alten Website erscheint kein Logo als Datei; die Bildmarke (Kreis Lime/Orange mit weisser Welle) ist nur in Grafiken
(`grafik/dental-info-banner.jpg`, `medien/artikel-scan.jpg`, Teamfoto `team/tuende-obenauer-logo.jpg`) enthalten. `components/Logo.tsx`
ist ein **SVG-Nachbau** dieser Marke; die Original-Vektordatei ist beim Kunden anzufordern.

PDFs (`public/downloads/`): `artikel_quartiers_echo.pdf` (Medienbeitrag), `mundgeruch_praevention.pdf` («Checkliste frischer Atem», 165 kB) – beide von whitesmyle.ch.
