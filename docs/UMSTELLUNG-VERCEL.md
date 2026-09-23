# Migrationscheckliste: GitHub Pages → Vercel (+ Sanity)

Voraussetzung: `docs/SANITY-VERCEL-EINRICHTUNG.md` Schritte 1 bis 5 erledigt.

## Vorher
- [ ] Praxis hat Inhalte freigegeben (`docs/MEDIZINISCHE-TEXTE.md`, `docs/PREISPRUEFUNG.md`, `docs/UEBERGABE.md` offene Fragen)
- [ ] Impressum/Datenschutz für den Live-Betrieb anpassen: Betreiber = Praxis (nicht Nick), Hosting Vercel statt GitHub, Sanity als Auftragsverarbeiter,
      Demo-Hinweis (`texte.demoHinweis`) entfernen, «Cookie-Einstellungen»-Text prüfen
- [ ] Logo als Vektordatei vom Kunden erhalten und `components/Logo.tsx` ersetzen
- [ ] Bildrechte/Einwilligungen für Team- und Patientenfotos schriftlich vorliegend

## Umschalten
- [ ] Vercel-Env: `DEPLOY_TARGET=vercel`, `CONTENT_SOURCE=sanity`, `SITE_URL`, Sanity-Variablen, `SANITY_REVALIDATE_SECRET`
- [ ] `INDEXIERUNG=1` nur wenn die Seite wirklich live sein soll
- [ ] Deploy prüfen: alle 46 Seiten (Liste in `docs/INHALTSINVENTUR.md`), 404-Seite, Downloads, Bilder (auf Vercel weiterhin aus `public/bilder/`, später optional Sanity-CDN)
- [ ] Weiterleitungen testen: jede alte URL aus `data/weiterleitungen.json` → 308 auf neue URL (im Pages-Modus nicht aktiv)
- [ ] Einwilligung: vor Zustimmung keine Anfragen an google.com/youtube.com (Netzwerk-Tab), Widerruf über Footer
- [ ] Sanity-Webhook: Änderung im Studio erscheint ohne Redeploy
- [ ] Studio-Zugang nur für berechtigte Personen (Sanity-Mitglieder), Rolle «Editor» für die Praxis

## Nachher
- [ ] GitHub-Pages-Demo abschalten oder mit Hinweis «Demo, ersetzt durch …» belassen (bleibt `noindex`)
- [ ] `lib/deploy-ziel.ts`: `siteUrl` für Vercel auf die echte Domain setzen (oder `SITE_URL`)
- [ ] Google Business Profile / Verzeichnisse auf neue Domain prüfen (nur wenn Domain wechselt)
- [ ] Backup: Sanity-Export (`sanity dataset export production`) monatlich; Repository ist die Sicherung des Codes und der Ausgangsdaten
- [ ] `docs/UEBERGABE.md` und Obsidian-Brain aktualisieren
