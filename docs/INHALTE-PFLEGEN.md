# Inhalte lokal pflegen (ohne CMS)

Alle Inhalte liegen als JSON in `data/`. Die Website liest sie beim Build über `lib/content/local.ts`. Nach jeder Änderung:

```bash
npm run inhalt:pruefen   # Struktur, Verweise, Preise, Links, Gedankenstriche
npm run build && npm run export:pruefen
```

## Wo steht was?

| Inhalt | Datei | Hinweise |
|---|---|---|
| Praxisdaten (Name, Adresse, Telefon, E-Mail, Cituro-Link, Shop, Social, Öffnungszeiten, Kennzahlen, Bewilligung) | `data/einstellungen.json` | Öffnungszeiten als Liste `tage`/`zeiten`; `oeffnungszeitenHinweis` unterdrückt `openingHours` im JSON-LD |
| Navigation, Footer-Links, Rechtslinks, Demo-Hinweis, UI-Texte, Einwilligungstexte, Formulartexte | `data/texte.json` | Navigationsziele sind interne Pfade (`/dentalhygiene/`) oder externe URLs |
| Einzelleistungen mit Preis | `data/leistungen.json` | `preisArt`: `fix` (Preis nötig), `ab`, `anfrage` (kein Preis). `voraussetzungen`, `hinweise`, `dauer` |
| Kombipakete | `data/kombinationen.json` | `leistungen` = IDs aus leistungen.json; `preisChf`; `preisHinweis` für Widersprüche |
| Aktionen | `data/aktionen.json` | `aktionspreisChf`, `vergleichspreisChf`, `vergleichBasis`, `status` (`aktiv-bestaetigt`, `gueltigkeit-ungeklaert`, `geplant`, `abgelaufen`), `gueltigVon/Bis` nur mit Beleg |
| Team | `data/team.json` | Bilder über `bild`-ID |
| Kundenmeinungen | `data/kundenmeinungen.json` | wörtlich; `sterne` nur wenn in der Quelle vorhanden; `quelle` |
| Medienstimmen | `data/medienstimmen.json` | |
| Fragebögen | `data/fragebogen.json` | Fragen nur anzeigen; `originalUrl` zeigt auf whitesmyle.ch |
| Downloads | `data/downloads.json` + `public/downloads/` | |
| Zahlungsarten | `data/zahlungsarten.json` | |
| Rechtstexte | `data/rechtstexte/{impressum,datenschutz,agb}.json` | AGB wörtlich; Impressum/Datenschutz für die Demo angepasst |
| Seiten | `data/seiten/<slug mit __ statt />.json` | z. B. `dentalhygiene__kinder.json`; enthält Hero, SEO, Bausteine |
| Weiterleitungen alt → neu | `data/weiterleitungen.json` | wirkt nur im Vercel-Modus (`redirects()`); auf Pages dokumentarisch |
| Bilder | `assets/originale/**`, `scripts/bilder-liste.json`, `data/bilder.json` (generiert) | siehe unten |

## Seiten bearbeiten: zwei Wege

**Weg A (empfohlen): Generator.** Die Seiten sind als lesbare Quellen in `werkzeuge/inhalte/seiten/*.mjs` hinterlegt
(Markdown-ähnliche Absätze, `**fett**`, Listen, Zwischentitel, Links). `node werkzeuge/inhalte/gen.mjs` schreibt daraus alle
`data/seiten/*.json` und `data/rechtstexte/*.json` neu. Vorteil: Portable Text muss nicht von Hand geschrieben werden.
Achtung: Der Generator überschreibt die JSON-Dateien; Handänderungen in `data/seiten/` gehen dabei verloren. Also entweder Weg A
oder Weg B je Datei, nicht beides.

**Weg B: JSON direkt.** Kleine Korrekturen (Tippfehler, Preis-Hinweis) direkt in `data/seiten/*.json`. Textfelder in Bausteinen sind
Portable-Text-Blöcke (`{"_type":"block","style":"normal","children":[{"_type":"span","text":"…","marks":[]}]}`).

### Bausteine (Auswahl)
`textBaustein` (Fliesstext), `spaltenBaustein` (2 bis 3 Karten), `hinweisBaustein` (Info/Warnung/Quelle), `leistungenBaustein`,
`kombinationenBaustein`, `preistafelBaustein`, `aktionBaustein`, `ablaufBaustein` (Schritte), `faqBaustein`, `vergleichBaustein`,
`stufenBaustein`, `teamBaustein`, `kundenmeinungenBaustein`, `galerieBaustein`, `bildBaustein`, `fallbeispieleBaustein`,
`aufrufBaustein` (CTA-Band mit Cituro-Knopf), `fragebogenBaustein`, `fragebogenListeBaustein`, `karteBaustein` (Zwei-Klick Google Maps),
`videoBaustein` (Zwei-Klick YouTube), `downloadsBaustein`, `kontaktBaustein` (Kontaktkarten + mailto-Formular), `rechtstextBaustein`,
`zahlungsartenBaustein`, `ratgeberListeBaustein`, `medienstimmenBaustein`, `linkkartenBaustein`, `kennzahlenBaustein`,
`datenschutzEinstellungenBaustein`. Die vollständige Typdefinition steht in `lib/content/types.ts`; die Sanity-Schemas in
`sanity/schemas/bausteine.ts` haben zu jedem Feld einen deutschen Hilfetext.

## Neue Seite anlegen
1. Quelle in `werkzeuge/inhalte/seiten/` ergänzen (oder JSON in `data/seiten/`), `slug` z. B. `ratgeber/neues-thema`.
2. `seo.titel` (≤ 60 Zeichen) und `seo.beschreibung` (≤ 160 Zeichen) setzen.
3. In `data/texte.json` in der Navigation oder im Footer verlinken, sonst ist die Seite nur direkt erreichbar.
4. Falls eine alte URL ersetzt wird: `alteUrls` in der Seite und Eintrag in `data/weiterleitungen.json`.
5. `npm run inhalt:pruefen`, `npm run build`, `npm run export:pruefen`. Die Seite erscheint automatisch im Export (Catch-all-Route).

## Preise ändern
- Einzelpreis: `data/leistungen.json` → `preisChf` (ganze Zahl). Kombipreise werden **nicht** automatisch berechnet; `data/kombinationen.json` anpassen.
- Aktion beenden: `status` auf `abgelaufen` setzen; die Aktion verschwindet aus den Bausteinen, der reguläre Preis bleibt.
- Neue Aktion: nur mit belegtem Aktions- und Vergleichspreis; `bedingungen` ausfüllen; `gueltigBis` nur mit Beleg, sonst leer lassen.
- Danach `docs/PREISPRUEFUNG.md` aktualisieren.

## Bilder
1. Original nach `assets/originale/<ordner>/` legen und in `assets/originale/HERKUNFT.md` Herkunft und Rechte eintragen.
2. In `scripts/bilder-liste.json` eine ID zuordnen (`"id": {"datei": "ordner/datei.jpg"}`; optional `breiten`, `format`).
3. `npm run bilder` erzeugt WebP-Varianten in `public/bilder/` und aktualisiert `data/bilder.json` (Breite/Höhe, Hash-Namen).
4. In Daten mit `{"bild": "id", "alt": "Beschreibung"}` referenzieren. Alt-Texte sind Pflicht; dekorative Bilder erhalten `alt: ""`.
Personenfotos nur mit dokumentierter Einwilligung; Stockbilder nie als Team oder Patienten ausgeben.

## Texte: Stil
Sie-Form, Schweizer Schreibweise (ss statt ß), Anführungszeichen «…», keine Gedankenstriche (– und — werden von `inhalt:pruefen`
gemeldet; Halbgeviertstrich in Preisen wie «CHF 175.–» und in Zahlenspannen ist erlaubt). Medizinische Aussagen: siehe `CLAUDE.md`
und `docs/MEDIZINISCHE-TEXTE.md`.
