# White Smyle – Website-Demo

Verkaufs-Demo für WHITE SMYLE dental (Dentalhygiene & Bleaching, Zürich Altstetten), gebaut mit Next.js 16, TypeScript und Tailwind CSS v4.
Live (noindex): https://nick8952.github.io/white-smyle-website/

- Inhalte: vollständig von whitesmyle.ch übernommen (Inventur in `docs/INHALTSINVENTUR.md`, Preise in `docs/PREISPRUEFUNG.md`).
- Hosting jetzt: statischer Export auf GitHub Pages (GitHub Actions). Später: Sanity (CMS) + Vercel – vorbereitet, nicht eingerichtet.
- Buchung extern über Cituro, Shop extern (zahnpastashop.ch), Kontakt per vorbereiteter E-Mail. Keine Erfassung von Gesundheitsdaten.

## Schnellstart

```bash
npm ci
npm run dev            # http://localhost:3000/white-smyle-website/
npm run pruefen        # Inhalte, Lint, Typen
npm run build          # statischer Export nach out/
npm run vorschau:pages # out/ wie auf GitHub Pages: http://localhost:4321/white-smyle-website/
```

## Dokumentation

| Datei | Inhalt |
|---|---|
| `CLAUDE.md` | Architektur, Befehle, verbindliche Regeln (Medizin, Preise, Buchung, Datenschutz, Design, Deployment) |
| `SKILL-ANWENDUNG.md` | Welche Claude-Code-Skills wie eingesetzt wurden |
| `docs/UEBERGABE.md` | Übergabe: Links, offene Fragen an die Praxis, Freigaben, Backup und Wartung |
| `docs/INHALTSINVENTUR.md` | Alle 49 Quellseiten mit Ziel-URL und Status |
| `docs/PREISPRUEFUNG.md` | Preis-Querprüfung aller Seiten, Widersprüche |
| `docs/MEDIZINISCHE-TEXTE.md` | Medizinisch relevante Textänderungen (vorher/nachher) und offene fachliche Freigaben |
| `docs/INHALTE-PFLEGEN.md` | Inhalte lokal ändern (JSON, Generator, Bilder, Preise, Aktionen) |
| `docs/SANITY-VERCEL-EINRICHTUNG.md` | Sanity und Vercel Schritt für Schritt einrichten, Import, Vorschau |
| `docs/UMSTELLUNG-VERCEL.md` | Migrationscheckliste GitHub Pages → Vercel |
| `docs/PRUEFBERICHT.md` | Testbericht (Browser 360/390/768/1440, Einwilligung, Tastatur, Links) und Codex-Review |
| `docs/DESIGN.md` | Designsystem «Farbring»: Tokens, Schriften, Komponenten, Bewegung |
| `assets/originale/HERKUNFT.md` | Herkunft aller Bilder |

## Lizenz und Rechte

Code: privat (Nick Holzbecher). Texte, Bilder und Logo gehören WHITE SMYLE dental / KOMVITA AG und werden nur für diese Demo verwendet.
