# Sanity und Vercel einrichten (später, Schritt für Schritt)

Stand: **nichts davon ist eingerichtet.** Es existieren kein Sanity-Projekt, kein Vercel-Projekt, keine Tokens. Der Code ist so
vorbereitet, dass die Einrichtung ohne Codeänderungen möglich sein sollte. Getestet wurde: Vercel-Probebuild mit Platzhalter-Projekt-ID
(`build:vercel` kompiliert, Studio-Route wird erzeugt), Seed-Script im Trockenlauf (`seed --probe`). **Nicht getestet**: echte Sanity-Abfragen,
Studio im Browser, Draft-Vorschau, Webhook. Rechnen Sie mit Kleinigkeiten, die beim ersten echten Lauf angepasst werden müssen.

## 1. Sanity-Projekt (ca. 20 Minuten)
1. Konto auf sanity.io anlegen (Nick oder Kunde; Empfehlung: Konto des Kunden, Nick als Mitglied), Projekt «White Smyle Website», Dataset `production`.
2. Projekt-ID notieren. In den Projekteinstellungen unter «API» → «CORS origins» eintragen: `http://localhost:3000` und später die Vercel-Domain, jeweils mit Credentials.
3. Tokens anlegen (API → Tokens):
   - `SANITY_API_WRITE_TOKEN` (Editor) nur lokal für den Import (`npm run seed`), danach löschen oder sicher aufbewahren.
   - `SANITY_API_READ_TOKEN` (Viewer) für Draft-Vorschau auf Vercel.
4. Lokal `.env.local` anlegen (nie committen), Werte gemäss `.env.example`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=…
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-09-01
   SANITY_API_WRITE_TOKEN=…   (nur für Import)
   ```

## 2. Inhalte importieren
```bash
npm run seed -- --probe   # zeigt, welche Dokumente angelegt würden
npm run seed              # legt alle Dokumente mit festen IDs an (Einstellungen, Texte, Leistungen, Kombinationen, Aktionen, Team,
                          # Kundenmeinungen, Medienstimmen, Fragebögen, Downloads, Zahlungsarten, Rechtstexte, Seiten) und lädt Bilder hoch
npm run seed -- --force   # überschreibt bestehende Dokumente (Vorsicht: Redaktionsänderungen gehen verloren)
```
Die IDs sind deterministisch (`seite-dentalhygiene-kinder`, `leistung-dentalhygiene` …), ein zweiter Lauf ohne `--force` überspringt vorhandene Dokumente.
Bilder werden aus `assets/originale/` über `scripts/bilder-liste.json` hochgeladen; die Zuordnung `{bild: id}` wird in Referenzen auf `sanity.imageAsset` umgesetzt.

## 3. Studio starten und prüfen
```bash
npm run dev:vercel      # kopiert server-routes/app nach app/ und startet im Vercel-Modus
# http://localhost:3000/studio
```
Prüfen: Singletons «Einstellungen» und «Texte» vorhanden, Seitenbaum, deutsche Feldnamen und Hilfetexte, Validierungen (Preise ganze Zahlen,
Aktion mit Vergleichspreis, Alt-Text Pflicht). Vision-Tool für GROQ-Tests. Presentation-Tool erwartet die Vorschau-Routen (Schritt 5).
Danach `node scripts/vercel-routen.mjs --entfernen` (oder einfach `npm run dev`), damit `app/studio` und `app/api` wieder verschwinden (sie sind in `.gitignore`).

## 4. Frontend auf Sanity umschalten (lokal testen)
```
CONTENT_SOURCE=sanity npm run dev:vercel
```
Alle Seiten müssen identisch aussehen wie mit lokalen Daten. Unterschiede deuten auf Lücken im GROQ-Adapter (`lib/content/sanity.ts`) hin.
Danach `CONTENT_SOURCE=sanity npm run build:vercel` als Build-Probe.

## 5. Vercel-Projekt
1. Auf vercel.com «Import Git Repository» → `Nick8952/white-smyle-website`. Framework: Next.js. Build-Command: `npm run build:vercel`. Output: Standard.
2. Umgebungsvariablen (Production + Preview):
   `DEPLOY_TARGET=vercel`, `CONTENT_SOURCE=sanity`, `SITE_URL=https://<domain>`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`,
   `NEXT_PUBLIC_SANITY_API_VERSION`, `SANITY_API_READ_TOKEN`, `SANITY_REVALIDATE_SECRET` (zufällige Zeichenkette), `INDEXIERUNG=1` erst beim Go-Live.
3. Deploy auslösen. Prüfen: Startseite, tiefe URL direkt laden, `/studio`, `/api/vorschau/aktivieren` ohne gültigen Aufruf → Fehler (erwartet).
4. Webhook in Sanity (API → Webhooks): URL `https://<domain>/api/revalidate?secret=<SANITY_REVALIDATE_SECRET>`, Trigger create/update/delete,
   Projection `{ "_type": _type, "slug": slug.current }`. Danach eine Änderung im Studio speichern und prüfen, ob die Seite ohne Redeploy aktualisiert.
5. Presentation-Tool: In `sanity.config.ts` ist `previewUrl` auf `SITE_URL` bzw. localhost gesetzt; Draft Mode über `/api/vorschau/aktivieren` (next-sanity prüft das Secret).

## 6. Domain
Eigene Domain in Vercel hinzufügen, DNS beim Registrar (CNAME `www` → `cname.vercel-dns.com`, A-Record Apex → Vercel-IP gemäss Anleitung).
`SITE_URL` anpassen, Sanity-CORS ergänzen. Erst wenn die Praxis freigegeben hat: `INDEXIERUNG=1` setzen (sonst bleibt `noindex`).

## Was nur vorbereitet ist (Kennzeichnung)
| Bereich | Stand |
|---|---|
| Sanity-Schemas (`sanity/schemas/`) | geschrieben, typgeprüft, nie gegen ein echtes Studio geladen |
| Studio-Config (Struktur, Presentation, Vision, de-DE) | geschrieben, Probebuild ok, nicht im Browser geöffnet |
| GROQ-Adapter (`lib/content/sanity.ts`) | geschrieben, Typen konsistent zum lokalen Adapter, **nie mit Daten ausgeführt** |
| Seed-Script | Trockenlauf ok, Upload nie ausgeführt |
| Draft Mode / Visual Editing (stega) | Routen vorhanden, nicht getestet |
| Webhook-Revalidierung | Route vorhanden, Cache-Tag `inhalt`, nicht getestet |
| Weiterleitungen alt→neu | `next.config.ts` `redirects()` nur im Vercel-Modus, nicht getestet |
