# Prüfbericht White Smyle Website-Demo

Stand 23. September 2026. Alle Zahlen stammen aus tatsächlich ausgeführten Läufen (Skripte in `werkzeuge/qa/`, Rohdaten in `pruefung/`, nicht versioniert).
Nicht ausgeführte Prüfungen stehen unter «Nicht geprüft».

## 1. Umgebung
- macOS, Node 26, Chrome (headless über puppeteer-core), npm-Pakete gemäss `package-lock.json`.
- Lokal: `npm run build` → `npm run vorschau:pages` (statischer Export unter `http://localhost:4321/white-smyle-website/`).
- Live: https://nick8952.github.io/white-smyle-website/ (GitHub Pages, Workflow-Lauf 1 grün).

## 2. Build- und Datenprüfungen
| Prüfung | Ergebnis |
|---|---|
| `npm run inhalt:pruefen` | 46 Seiten, 7 Leistungen, 4 Kombipakete, 1 Aktion, 56 Kundenmeinungen, 5 Fragebögen, 177 Bilder, 127 interne Links, 0 Hinweise |
| `npm run lint` | 0 Fehler, 0 Warnungen |
| `npm run typecheck` | fehlerfrei |
| `npm run build:pages` + `export:pruefen` | 49 HTML-Dateien, 3331 interne Verweise unter `/white-smyle-website`, noindex auf allen Seiten, `404.html` vorhanden |
| Vercel-Probebuild (`build:vercel`, Platzhalter-Projekt-ID) | kompiliert; Routen `/studio/[[...tool]]`, `/api/revalidate`, `/api/vorschau/*` erzeugt |
| `npm run seed -- --probe` | Trockenlauf listet alle Dokumente; kein Upload |
| Generator-Parität | `ZIEL=/tmp/… node werkzeuge/inhalte/gen.mjs` + `diff` gegen `data/`: identisch |
| `npm audit --omit=dev` | 15 Hinweise (3 hoch, 12 mittel), **alle** in der Sanity-Werkzeugkette (`adm-zip`, `js-yaml`, `smol-toml`, `uuid` über `@sanity/cli`, Module Federation). Kein Bezug zum statischen Export (Sanity-Code ist nicht im Browser-Bundle, geprüft per Grep in `out/_next/static/chunks`). Behebung nur durch Major-Wechsel; bei Sanity-Einrichtung erneut prüfen. |

## 3. Browser-Audit (DOM), alle Seiten
`node werkzeuge/qa/audit.mjs` prüft je Seite und Breite: HTTP-Status, horizontalen Überlauf, Touch-Ziele < 44 px, Bilder ohne `alt`, genau ein `h1`,
`robots`-Meta, externe Anfragen vor Einwilligung, Konsolenfehler, localStorage/Cookies.

| Lauf | Umfang | Befunde |
|---|---|---|
| lokal | 47 Seiten (46 + 404) × 360/390/768/1440 px = 188 Prüfungen | 0 |
| live | 47 Seiten × 390/1440 px = 94 Prüfungen | 0 (nur die erwartete 404-Konsolenmeldung der Fehlerseite) |

Ausnahmen der Touch-Ziel-Regel, bewusst: Skip-Link (erst bei Fokus sichtbar), Links im Fliesstext, Checkbox innerhalb eines ≥ 44 px hohen `<label>`.

## 4. Sichtprüfung (Screenshots)
`node werkzeuge/qa/screenshots.mjs`: Viewport-Schritte statt Full-Page, damit Sticky-Kopfzeile und Scroll-Einblendungen realistisch erscheinen.
Geprüft: Start, Dentalhygiene, Kombipaket, Preise, Kontakt, Team, Ratgeber Mundgeruch, Bleaching-Test, Cookie-Einstellungen bei 360/768/1440 (je bis 8 Bilder).
Gefundene und behobene Fehler siehe Abschnitt 9.

## 5. Funktionsprüfungen (`werkzeuge/qa/funktionen.mjs`), lokal und live je 36/36 bestanden
**Einwilligung**
- Erstbesuch: keine externe Anfrage, Banner sichtbar, kein Speicher, keine Cookies, keine Karte.
- «Alle akzeptieren»: Banner weg; `localStorage.white-smyle-einwilligung = {version:1, zeitpunkt, kategorien:{medien:true}}`; Google-Maps-iframe geladen; Anfragen an `www.google.com/maps` erst jetzt.
- Neu laden: kein Banner, Karte bleibt.
- Widerruf auf `/datenschutz-einstellungen/`: Speicher gelöscht; Kontaktseite danach ohne Karte und ohne Google-Anfragen.
- «Nur notwendige»: `medien:false`; Platzhalter «Karte laden und Auswahl merken»; keine Anfragen.
- «Einstellungen»: nativer `<dialog>` mit Fokus im Dialog, Medien-Schalter, «Auswahl speichern» → `medien:false`, Dialog geschlossen.
- Kein Cookie wird gesetzt (Prüfung `document.cookie` leer in allen Zuständen).

**Tastatur (1440 px)**: erster Tab = Skip-Link; Menüknopf mit `aria-expanded` erreichbar; Enter öffnet; Pfeil ab fokussiert ersten Eintrag; Escape schliesst und gibt den Fokus an den Knopf zurück; Fokusring sichtbar.
**Mobiles Menü (360 px)**: Knopf ≥ 44 px; `<dialog>` öffnet mit aufgeklappter aktiver Gruppe; alle Ziele ≥ 44 px; Escape schliesst.
**Bewegung**: `prefers-reduced-motion: reduce` → `animation-name: none` auf Einblendungen und Hero; sonst Scroll-Timeline (`view()`) aktiv.
**Formular** (fiktive Daten «Testperson Fiktiv», «000 000 00 00»): `action="mailto:…"`, `method="get"` als No-JS-Fallback; Felder Name, Rückrufnummer, Anliegen, Nachricht (kein Upload, keine Gesundheitsfelder); Absenden erzeugt `mailto:kontakt@whitesmyle.ch?subject=Anfrage über die Website: …&body=Name: …`; nichts in Storage, URL ohne Formulardaten. **Es wurde keine E-Mail versendet.**
**Downloads**: beide PDFs 200 mit `application/pdf`. **404**: Status 404, gestaltete Seite mit Kopfzeile, `noindex`.

## 6. Live-Prüfung GitHub Pages (curl)
- 46/46 Seiten direkt aufrufbar (200), `lang="de-CH"`, `noindex, nofollow`, absolute Canonical-URL, gzip.
- `/gibt-es-nicht/` → 404 (eigene Seite), `/Preise/` → 404 (Pfade sind gross-/kleinschreibungssensitiv, alle internen Links kleingeschrieben), `robots.txt` lesbar (Allow, Hinweis auf Meta-noindex), Downloads 200.

## 7. Externe Links (`werkzeuge/qa/links.mjs`)
77 externe Ziele aus dem Export (inkl. 49 eigene Canonical-URLs, alle 200 live). Nicht 200:
| Ziel | Status | Einordnung |
|---|---|---|
| tagesanzeiger.ch … Was-wenn-die-Dentalhygiene-gar-keine-ist | Abbruch (TLS/Bot-Schutz im Skript) | Quellenangabe der Medienstimme; Artikel-URL stammt von der Quelle; manuell zu prüfen |
| tandfonline.com/doi/abs/10.1080/19424396.2017.12222492 | 403 | Verlag blockiert automatische Abrufe; Link ist eine Studienquelle aus dem Ratgeber |
| pubmed.ncbi.nlm.nih.gov/31182493 | 203 | Erreichbar (203 = nicht-autoritative Antwort) |
Cituro-Buchungsseite, zahnpastashop.ch, whitesmyle.ch-Fragebögen, YouTube, Mayo Clinic, helvident.ch, Nature, Springer, VU Amsterdam, dms6.info: 200. **Es wurde nichts gebucht oder bestellt.**

## 8. Leistung (lokal, Puppeteer-Netzwerkmessung, Startseite)
| | Anfragen | Übertragen (unkomprimiert) | LCP | CLS |
|---|---|---|---|---|
| 1440 px | 29 | 1.25 MB | < 0.1 s | 0.000 |
| 360 px | 24 | 1.12 MB | 0.34 s | 0.000 |
Grösste Posten: HTML 292 KB (RSC-Daten eingebettet; live gzip), JS 489 KB (Next/React-Laufzeit, kein Sanity), RSC-Prefetch 198 KB, Schriften 54 KB, Bilder 51 KB (480er-WebP auf Mobil).
Hero-Bild mit `fetchpriority="high"`. Kein Lighthouse-Lauf, keine Felddaten.

## 9. Während der Prüfung gefundene und behobene Fehler
| Befund | Ursache | Behebung |
|---|---|---|
| Wortmarke zeigte nur «WHITE SMY», Konsolenfehler `<path> d: Expected number` | NaN-Koordinate in einem generierten Pfad | Koordinate korrigiert (`lib/wortmarke.ts`), Grep auf `NaN` |
| Kopfzeile bei 360/390 px überlief, Menüknopf ausserhalb des Bildschirms | `Logo` setzte `inline-flex` fest, `hidden` von aussen verlor; beide Logos sichtbar | Display-Klasse nur von aussen; kompaktes Logo kleiner; Buchungsknopf unter 640 px nur Icon mit `aria-label` |
| Überschriften kollabierten, Folgetext überlappte (alle Seiten) | eigene Klassen `.h-1/.h-2/.h-3` kollidierten mit Tailwind-Höhen | umbenannt in `.titel-1/2/3` |
| Ratgeber Mundgeruch bei 768 px 13 px horizontaler Überlauf | 3-Spalten-Karten mit unbrechbaren Wörtern | Raster `sm:2 / lg:3`, `overflow-wrap: anywhere; hyphens: auto` im Lesetext |
| Escape im Untermenü schloss, Fokus blieb im Nichts | kein Fokus-Rückgabe | Escape-Behandlung in der Gruppe mit `focus()` auf den Knopf |
| Touch-Ziele 40–42 px (Logo-Links, Telefonlink im Infostreifen, Fragebogen-Link) | fehlende Mindesthöhe | `min-h-11` |
| Vercel-Probebuild scheiterte («SANITY_API_READ_TOKEN fehlt») | Vorschau-Client wurde beim Modulimport erzeugt | Client mit `token: process.env…` ohne Wurf beim Import |
| Hero-Zweitknopf und Next-`preconnect` in `export:pruefen` als Fehler | rohes `<a>` ohne basePath; Prüfskript zu streng | `SmartLink`; Prüfskript ignoriert Next-eigenes preconnect, Fehlerseiten ohne Canonical |
| 16 SEO-Beschreibungen > 170 Zeichen | zu lang | gekürzt (Quelle und JSON synchron) |

## 10. Nicht geprüft
- Echte Geräte (iOS Safari, Android Chrome), echte Screenreader (VoiceOver/NVDA), Farbsehschwäche-Simulation.
- Sanity gegen echte Daten (Studio, GROQ, Draft Mode, Webhook), Vercel-Deploy, Weiterleitungen alt→neu (nur im Vercel-Modus aktiv).
- Lighthouse/Core Web Vitals im Feld.
- Rechtliche Prüfung der Texte (AGB, Datenschutz, Impressum): nicht anwaltlich geprüft.
- Medizinische Richtigkeit der übernommenen Aussagen (Freigabe der Praxis ausstehend, `docs/MEDIZINISCHE-TEXTE.md`).

## 11. Codex-Reviews
### Architektur-Review (früh, vor der Umsetzung)
Empfehlungen, die übernommen wurden: kein `Dentist`-Typ in Schema.org (Praxis ist keine Zahnarztpraxis) → `LocalBusiness` + `HealthAndBeautyBusiness`;
Preise als eigene Entitäten `Leistung`/`Kombination`/`Aktion` mit `status` und ganzen CHF-Beträgen; Fragebögen nur lesend; Zwei-Klick und keine
externen Anfragen vor Einwilligung; beide Build-Modi in der CI; Pfad-Prüfung gross-/kleinschreibungssensitiv; versionierter localStorage-Eintrag.

### Schlussreview (Codex, read-only, nach Abschluss der QA)
Gesamturteil Codex: keine Befunde mit Schweregrad hoch; «keine kritische Sicherheitslücke, keine erfundenen Preise oder Termine, keine Erfassung von
Gesundheitsdaten und keine Drittanfragen vor Einwilligung». 8 mittlere und 10 niedrige Befunde. Umsetzung:

| Befund (Codex) | Schwere | Umsetzung |
|---|---|---|
| AGB als «wörtlich» bezeichnet, tatsächlich sprachlich vereinheitlicht; Storno-Regel der Preisseite in die AGB eingefügt | mittel | Kennzeichnung überall auf «inhaltlich unverändert, Schreibweise vereinheitlicht» geändert; Storno-Ergänzung als getrennter, grau gesetzter Hinweis «nicht Teil der AGB»; Original bleibt in `docs/original/agbs.md` |
| Ungeklärte Aktion mit «Aktion nutzen» und direkter Buchung präsentiert | mittel | Aktionsbox zeigt bei `gueltigkeit-ungeklaert` keinen Buchungsknopf und keine Ersparnis, sondern «Gültigkeit anfragen» (Telefon) und den Vergleichspreis als Angabe der bisherigen Website; Aufruf-Band der Aktionsseite ebenso |
| Zwei Empfehlungen der Mundgeruch-Seite (Darmreinigung, Vitamine) still weggelassen | mittel | in `docs/MEDIZINISCHE-TEXTE.md` dokumentiert, Inventur auf «teilweise» |
| Touch-Ziele Footer 32 px, Sprungliste 36 px, WhatsApp-/Routenlink ohne Mindesthöhe | mittel | überall `min-h-11` (44 px) |
| `pages: write`/`id-token: write` auf Workflow-Ebene | mittel | nur noch im Deploy-Job; global `contents: read` |
| Webhook-Anleitung mit `?secret=` passt nicht zur signaturprüfenden Route | mittel | Anleitung korrigiert (Secret im Sanity-Webhook-Feld) |
| JSON-LD-Bild-URL würde Sanity-CDN-URL doppelt präfixieren | mittel | `absolut()`-Helfer wie bei Open Graph |
| Gelöschte Referenzen (null) könnten den Sanity-Adapter zum Absturz bringen | mittel | `liste()` filtert `null`; Rechtstext-Abfrage nach `_updatedAt` |
| Visual Editing dokumentiert, `<VisualEditing />` nicht gerendert | mittel | im Draft Mode (nur Vercel) gerendert; im Export greift der Stub; bewusst ohne Live Content API, dokumentiert |
| Unbekannte Bausteintypen verschwinden still | niedrig | Renderer exhaustiv (`never`), Adapter werfen bei unbekanntem Typ mit Seite/Key |
| Layout lädt alle Seiten ohne Nutzen | niedrig | Abfrage und Prop entfernt |
| Lokaler Adapter liest JSON-Dateien wiederholt | niedrig | Promise-Cache pro Datei |
| `BASE_PATH`/`SITE_URL` unvalidiert | niedrig | Formatprüfung mit klarer Fehlermeldung |
| `assetUrl` akzeptiert jeden Host, `//host`, `data:`; Links erlauben `http://` | niedrig | nur lokale Pfade und `https://cdn.sanity.io/`, sonst Fehler; Links nur `https:` |
| Pfeil-nach-unten öffnet, fokussiert aber nicht | niedrig | fokussiert nach dem Rendern den ersten Eintrag |
| Exportprüfer: Canonical nur «absolut», Fragmente ungeprüft, Einrückung | niedrig | erwarteter Canonical exakt, `#anker`-Ziele geprüft, Einrückung korrigiert |
| `robots.txt` liegt unter dem Unterpfad, nicht am Ursprung | niedrig | Kommentar präzisiert; Meta-noindex bleibt massgeblich |
| Rechtstext-Art nicht eindeutig | niedrig | asynchrone Eindeutigkeitsvalidierung im Schema |
| Standortfotos 6 von 12, Zahnpasta-Test Allergiefrage zusammengefasst | niedrig | Inventur präzisiert; Allergiefrage wie im Original zweigeteilt |

Codex konnte nicht prüfen: frischen Build, Lint/Typecheck, `seed --probe` (tsx braucht im Read-only-Sandbox einen IPC-Socket), Darstellung bei 360 px,
Screenreader, reales Sanity-Projekt, Git-Historie. Diese Punkte sind durch die Abschnitte 2 bis 6 dieses Berichts abgedeckt.

### Nachtrag 24.09.2026: Vercel-Import durch Nick, Root-URL 404
Nick hat das Repo eigenständig in Vercel importiert (`vercel.com/nick-3488/white-smyle-website`). Die Startseite lieferte 404, weil der
Standard-Build (`npm run build`) den GitHub-Pages-Modus ausführt (Unterpfad `/white-smyle-website`), auf der Vercel-Domain aber die Wurzel
erwartet wird. Zusätzlich hätte ein echter Server-Build ohne Sanity-Projekt gebrochen: `server-routes/app/api/vorschau/aktivieren/route.ts`
baute den Sanity-Client beim Laden des Moduls statt erst beim Aufruf.

Behoben:
- `vercel.json` neu im Repo: setzt `buildCommand: npm run build:vercel` und `DEPLOY_TARGET=vercel` für Build und Laufzeit. Damit baut jeder
  künftige Vercel-Import automatisch im richtigen Modus, ganz ohne Dashboard-Konfiguration; `SITE_URL` muss nicht gesetzt werden (Fallback
  passt exakt zur `.vercel.app`-Domain).
- Draft-Mode-Route macht den Sanity-Client jetzt lazy (baut ihn erst im Request-Handler). Ein `build:vercel` ohne jede Sanity-Umgebungsvariable
  wurde lokal verifiziert (Build grün, Startseite 200, Preisseite 200, Download 200). `/studio` und `/api/vorschau/aktivieren` liefern ohne
  echtes Sanity-Projekt weiterhin einen Fehler – das ist erwartet und betrifft nur diese zwei Routen, nicht die übrige Seite.
- `docs/SANITY-VERCEL-EINRICHTUNG.md` und `docs/UMSTELLUNG-VERCEL.md` entsprechend präzisiert.

Nach diesem Push löst der bestehende, bereits mit GitHub verbundene Vercel-Import automatisch ein neues Deployment aus; kein manuelles Eingreifen im Vercel-Dashboard nötig.

### Nachtrag 24.09.2026: Design-Bereinigung auf Wunsch von Nick
Nick fand das Seitenende zu unruhig (Zahnfarbskala-Streifen im orangen Aufruf-Band und als Trenner über dem Footer) und wünschte
insgesamt einen cleaneren Auftritt, passend zu einer Zahnpraxis. Umgesetzt: Farbskala-Grafik («Farbring») an allen sechs Stellen entfernt
(Hero, Aufruf-Band, Footer, Kombikarten, Preistafel, 404), Komponente gelöscht; Aufruf-Band von Orange auf helles Emaille mit orangem
Primärknopf; Footer weiss mit einer Hairline statt Grau + Streifen. Audit und 36 Funktionsprüfungen danach erneut grün.

### Nachtrag 24.09.2026: Startseiten-Hero neu (Interesse sofort wecken)
Auf Wunsch von Nick soll der erste Bildschirm sofort Interesse wecken. Umgesetzt: Headline «Saubere Zähne. Sichtbar weisser. Beides in einer
Sitzung.», vier belegte Vertrauensfakten mit Häkchen unter den Knöpfen (Krankenkassen anerkannt für Dentalhygiene, dipl. Dentalhygienikerin HF,
ca. 800 Bleachings pro Jahr, über 30 Jahre Berufserfahrung) und eine Angebotskarte über dem Bild (Kombipaket Dentalhygiene & Power Bleaching
CHF 399.–, Einzelpreise zusammen CHF 424.–, ca. 2 Stunden, Link zum Kombipaket). Neue optionale Hero-Felder `fakten` und `angebot` in Typen,
beiden Adaptern, Sanity-Schema und `inhalt:pruefen` (Preisformat wird geprüft).
Codex-Review (read-only): 1 hoch, 2 mittel, 1 niedrig, alle umgesetzt: Headline von «Gesunde Zähne … In einer Sitzung» auf «Saubere Zähne …
In einer Sitzung» (kein Gesundheitsversprechen pro Sitzung; «Beides in einer Sitzung» brach auf vier Zeilen um), «Krankenkassen anerkannt» mit Kontext «für Dentalhygiene», «seit 2012»
wegen des 2011/2012-Widerspruchs der Quelle aus dem Hero genommen, «Einzelpreise zusammen CHF 424.–» statt «Einzeln». Barrierefreiheit laut
Codex ohne Befund (Reihenfolge, Touch-Ziele, Fokus). Audit 360/390/768/1440 und 36 Funktionsprüfungen grün.

### Nachtrag 24.09.2026 (abends): Öffnungszeiten im Hero, weitere Fehlerbehebungen (gemeinsam mit Codex)
Nick meldete, dass die Öffnungszeiten auf der Startseite nicht lesbar waren. Ursache: Die Apricot-Fläche rechts im Hero war absolut über die
gesamte Sektion gelegt und verdeckte auf breiten Bildschirmen den Infostreifen (Öffnungszeiten endeten sichtbar bei «· S»).
Codex (Desktop-App, parallel im Repo) hat den Positionsrahmen der Fläche auf den oberen Teil begrenzt und ein neues Prüfskript
`werkzeuge/qa/ueberdeckung.mjs` geschrieben, das verdeckten Text erkennt (Ergebnis: 0 verdeckte Textstellen auf allen Seiten in 5 Breiten).
Claude hat darauf die Öffnungszeiten als Paare (Tag fett, Zeit normal) mit Uhr-Symbol statt als langen Satz gesetzt, Telefon und Adresse mit Symbolen.
Weitere Korrekturen aus Codex' Durchgang: Umbruch langer Wörter bei grosser Browserschrift (`overflow-wrap: anywhere` am Body, Navigation
ausgenommen), Karten-/Video-Platzhalter wachsen bei schmalen Bildschirmen mit statt abzuschneiden, Fragebogen-Links zu whitesmyle.ch nur noch,
wenn die Originalseite erreichbar ist (vier der fünf Testseiten liefern dort seit dem 24.09.2026 404, live geprüft; Typ, Schema und Prüfung angepasst).
Claude zusätzlich: Medienstimmen-Karten strecken sich nicht mehr auf gleiche Höhe (leere Fläche unter dem Tages-Anzeiger-Eintrag).
Prüfung danach: Audit 188/188 ohne Befund, Überdeckung 0, 36 Funktionsprüfungen grün, Export grün, Sichtprüfung von 12 weiteren Seiten bei 1440 und 390 px.
