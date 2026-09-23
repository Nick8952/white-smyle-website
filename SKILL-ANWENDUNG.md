# Skill-Anwendung

Ehrliche Übersicht, welche installierten Claude-Code-Skills in diesem Projekt gelesen und wie sie angewendet wurden. «gelesen: ja» heisst:
die SKILL.md wurde in der Sitzung vollständig geladen; «überflogen» heisst: Kopf und Anwendungsregeln gelesen, um die Relevanz zu beurteilen.
Der `Skill`-Befehl (Slash-Aufruf) wurde nicht verwendet; die Skills wurden als Dateien gelesen und ihre Anleitungen manuell befolgt.

## Projekt-Skills (`.claude/skills/`)

| Skill | gelesen | konkrete Anwendung | betroffene Dateien | durchgeführte Prüfung | Einschränkungen |
|---|---|---|---|---|---|
| ui-ux-pro-max | ja (+ `search.py` mehrfach ausgeführt) | Recherche zu Schriftpaarung, Farbwelt und UX-Mustern für Zahnmedizin/Kosmetik. Übernommen: Figtree als Textschrift, Karten mit feinen Linien, Sticky-Kopfzeile ≤ 80 px, Akkordeon-FAQ. **Nicht übernommen:** vorgeschlagene Cyan-Palette (Markenfarben Orange/Lime bleiben). | `app/globals.css`, `components/*` | Kontrast der Token gerechnet (rost/grau auf Weiss ≥ 4.5:1), Touch-Ziele im Audit | Vorschläge sind generisch; Markenbindung ging vor |
| frontend-design | ja | Designplan vor dem Code (Signatur Farbskala, Tokens, Bewegung, Selbstkritik gegen «Cream + Serif + Terracotta»-Default). Hero als These, Typografie Gabarito/Figtree, Bewegung nur als Scroll-Einblendung | `docs/DESIGN.md`, `components/Farbring.tsx`, `components/Hero.tsx`, `app/globals.css` | Sichtprüfung der Screenshots 360/768/1440 | Kein Stitch/Bildgenerierung (Vorgabe) |
| brand | ja | Markenanalyse aus Logo und Quelle: Orange als Handlungsfarbe, Lime nur Logo, Ansprache «Sie», Tonalität ruhig/präzise | `data/texte.json`, `components/Logo.tsx`, `docs/DESIGN.md` | Wortmarke gegen Original-Screenshots verglichen | Logo ist Nachbau; Vektor fehlt |
| banner-design | ja | Nur zur Einordnung gelesen; kein Banner erstellt (keine Bildgenerierung) | – | – | nicht angewendet |
| api-and-interface-design | ja | Inhaltsschnittstelle `Inhaltsquelle` mit zwei Adaptern (lokal/Sanity), deutsche Typnamen, `Baustein`-Union, Preis-Entitäten mit Status | `lib/content/types.ts`, `local.ts`, `sanity.ts`, `index.ts` | `tsc --noEmit`, `seed --probe`, Vercel-Probebuild | Sanity-Adapter nie mit Daten ausgeführt |
| browser-testing-with-devtools | ja | Browser-QA mit puppeteer-core statt DevTools-MCP: DOM-Audit (Überlauf, Touch-Ziele, Alt, h1, robots, externe Anfragen, Konsole), Viewport-Screenshots, Funktionsprüfungen (Einwilligung, Tastatur, Menü, Bewegung, mailto, Downloads, 404) | `werkzeuge/qa/*.mjs`, `pruefung/` | 4 Breiten × alle Seiten; 36 Funktionsprüfungen | Keine echten Geräte; Chrome headless |
| ci-cd-and-automation | ja | Workflow mit Prüfkette (inhalt → lint → typecheck → build → export-prüfung), Vercel-Probebuild als zweiter Job, minimale Berechtigungen, Pages-Deploy nur auf `main` | `.github/workflows/pages.yml`, `scripts/export-pruefen.mjs` | Lokal alle Schritte ausgeführt; Workflow-Lauf nach Push | – |
| code-review-and-quality | ja | Selbstreview entlang der fünf Achsen; zusätzlich zwei Codex-Reviews (Architektur früh, Schlussreview) | `docs/PRUEFBERICHT.md` | Befunde umgesetzt/dokumentiert | – |
| security-and-hardening | überflogen (Threat-Model-Abschnitt) | Kurzes STRIDE über die Vertrauensgrenzen: Inhalte (Repo, vertrauenswürdig), Formulareingaben (nur `encodeURIComponent` in mailto, kein Server), externe Links (`sichererLink` mit Schema-Allowlist, `rel=noopener`), localStorage (versioniert, defensiv gelesen), Workflow (`contents: read`), keine Geheimnisse | `lib/assets.ts`, `lib/einwilligung.ts`, `components/Anfrageformular.tsx`, `.github/workflows/pages.yml`, `.env.example`, `.gitignore` | `npm audit --omit=dev`, Grep nach Tokens, Codex-Sicherheitsreview | GitHub Pages erlaubt keine eigenen Security-Header (CSP/HSTS) |
| shipping-and-launch | überflogen (Checkliste) | Pre-Launch-Checkliste angewendet: Lint/Typen/Build grün, keine Geheimnisse, Audit, Rollback = vorheriger Pages-Stand, noindex bis Freigabe | `docs/UEBERGABE.md`, `docs/UMSTELLUNG-VERCEL.md` | siehe `docs/PRUEFBERICHT.md` | Demo, kein Produktions-Launch |
| documentation-and-adrs | überflogen | Entscheidungen als kompakte ADRs; CLAUDE.md als Regelwerk; Übergabe-/Pflege-Dokumente | `docs/ENTSCHEIDUNGEN.md`, `CLAUDE.md`, `docs/*.md` | – | Einzeldateien pro ADR bewusst nicht (Umfang) |
| git-workflow-and-versioning | überflogen | Thematisch getrennte Erstcommits statt eines Riesencommits; `main` bleibt deploybar (CI-Gate) | Git-Historie | – | Kein Branch-Workflow bei Erstanlage |
| performance-optimization | überflogen | Messung statt Vermutung: Startseite lokal 1.1 MB mobil / 1.25 MB Desktop, LCP < 0.4 s lokal, CLS 0; Hero mit `fetchpriority=high`; Bilder in 3 Breiten | `components/Bild.tsx`, `scripts/bilder-optimieren.mjs` | Puppeteer-Netzwerkmessung | Kein Lighthouse, keine RUM-Daten |
| design-system | überflogen | Token-Schicht in `@theme static` (Primitive mit semantischen Namen), Komponentenklassen, dokumentiert | `app/globals.css`, `docs/DESIGN.md` | – | Keine dritte Token-Ebene (Komponenten-Tokens) |
| ui-styling | überflogen | Tailwind v4 Utility-First plus wenige Komponentenklassen; **kein shadcn/ui** (native `<dialog>`/`<details>` reichen) | `app/globals.css`, `components/*` | – | – |
| frontend-ui-engineering | überflogen | Barrierefreiheit: Skip-Link, `aria-expanded`/Pfeiltasten/Escape im Menü, natives `<dialog>` mit Fokusfang, Fokusring, Alt-Texte Pflicht | `components/Navigation.tsx`, `Einwilligung.tsx`, `Faq.tsx` | Funktionsprüfungen Tastatur/Menü | Kein Screenreader-Test mit echter Software |
| test-driven-development | überflogen | Für Daten: `inhalt:pruefen` als Regressionsprüfung; für Browser: Funktionsprüfungen zuerst geschrieben, dann Fehler (Escape-Fokus) behoben | `scripts/inhalt-pruefen.mts`, `werkzeuge/qa/funktionen.mjs` | 36/36 grün | Keine Unit-Tests mit Test-Runner |
| debugging-and-error-recovery | überflogen | Stop-the-line bei Build-Fehlern (Tailwind-`@apply`, Typen, Vercel-Route, Tailwind-Klassenkollision `h-2`); Ursachen statt Symptome behoben | siehe `docs/PRUEFBERICHT.md` «Fehler und Behebung» | Rebuild + Audit nach jedem Fix | – |
| code-simplification | überflogen | Lint-Warnungen beseitigt, unbenutzte Importe entfernt, `mk()`-Helfer statt Casts | `werkzeuge/inhalte/*`, `lib/content/*` | `npm run lint` 0 Warnungen | – |
| deprecation-and-migration | überflogen | Alt→Neu-URL-Zuordnung, Migrationscheckliste Pages→Vercel | `data/weiterleitungen.json`, `docs/UMSTELLUNG-VERCEL.md`, `docs/INHALTSINVENTUR.md` | `inhalt:pruefen` prüft Weiterleitungsziele | Weiterleitungen auf Pages nicht aktiv |
| observability-and-instrumentation | überflogen | Bewusst **keine** Telemetrie (Datenschutz-Entscheid); Sichtbarkeit über CI-Logs und `export:pruefen` | – | – | nicht angewendet |
| constraint-driven-development | überflogen | Nicht interaktiv anwendbar; Qualitätsbar stattdessen in CLAUDE.md festgehalten (Touch ≥ 44 px, noindex, keine externen Anfragen vor Einwilligung, Lint/Typen grün) | `CLAUDE.md` | – | Kein `CONSTRAINTS.md` |
| context-engineering | überflogen | Projekt-CLAUDE.md nach Kontext-Hierarchie (Regeln → Architektur → Befehle → Verweise) | `CLAUDE.md` | – | – |
| doubt-driven-development | überflogen | Frischer Blick durch Codex (Architektur- und Schlussreview) statt Selbstbestätigung | `docs/PRUEFBERICHT.md` | Befunde geprüft und umgesetzt | – |
| incremental-implementation | überflogen | Aufbau in Scheiben: Inventur → Datenmodell → Bausteine → Design → QA → Docs → Deploy | – | Build nach jeder Scheibe | – |
| planning-and-task-breakdown / spec-driven-development | überflogen | Spezifikation kam vollständig vom Auftraggeber; Rückfragen gebündelt (Bilder, Repo, Bildgenerierung, Impressum); Architektur mit Codex geprüft | `scratchpad/codex-arch.md` (nicht im Repo), `docs/ENTSCHEIDUNGEN.md` | – | Kein separates `tasks/plan.md` |
| interview-me / idea-refine | überflogen | nicht angewendet (Auftrag war eindeutig; keine interaktive Sitzung) | – | – | – |
| source-driven-development | überflogen | Framework-APIs gegen die installierten Typdefinitionen geprüft (next-sanity Draft Mode, Next 16 `output: export`), nicht gegen Online-Dokumentation | `server-routes/app/api/vorschau/*`, `next.config.ts` | Typecheck, Probebuild | Ohne Netzwerkzugriff auf Doku |
| using-agent-skills | überflogen | Zuordnung Aufgabe → Skill nach dem Entscheidungsbaum dieser Datei | diese Tabelle | – | – |
| design (Sammel-Skill) | überflogen | Nur Routing gelesen; Logo-/Bildgenerierung nicht genutzt (Vorgabe: keine Bildgenerierung) | – | – | nicht angewendet |
| slides | überflogen | nicht relevant | – | – | nicht angewendet |

## Benutzer-Skills (`~/.claude/skills/`)

| Skill | gelesen | Anwendung | Einschränkungen |
|---|---|---|---|
| high-end-visual-design, design-taste-frontend (+v1), gpt-taste, minimalist-ui | ja | Kalibrierung gegen «Template-Look»: eine Signatur (Farbskala), ruhige Flächen, keine Deko-Nummerierung, Typografie trägt Charakter | Geschmacksregeln, keine Prüfschritte |
| brandkit | ja | Marken-Tokens aus Logo abgeleitet (Orange/Lime), Wortmarke als Pfad | Kein Kunden-Brandbook vorhanden |
| stitch-design-taste | ja | gelesen; Stitch **nicht** verwendet (kein Zugang/kein Bedarf) | nicht angewendet |
| redesign-existing-projects | ja | Vorgehen für Neuaufbau bestehender Sites: Inhalt vollständig inventarisieren, IA neu, alte URLs zuordnen | – |
| image-to-code | ja | Original-Screenshots als Referenz für Logo-Nachbau und Inhaltsstruktur | Kein Pixel-Nachbau (eigenständiges Design gefordert) |
| imagegen-frontend-web / imagegen-frontend-mobile | ja | **nicht angewendet** (Auftraggeber: keine Bildgenerierung) | – |
| industrial-brutalist-ui | ja | nicht passend zur Marke, verworfen | – |
| find-skills, full-output-enforcement | ja | Skill-Übersicht; vollständige Ausgaben ohne Kürzungen in Docs und Daten | – |

## Plugins
- `vercel` (offizielles Plugin, aktiviert): Agenten `vercel:deployment-expert` etc. **nicht** eingesetzt, weil kein Vercel-Projekt angelegt werden darf. Die Vorbereitung folgt der Next.js-Standardkonfiguration.
- MCP-Konnektoren (Canva, Google Drive, Figma, Notion u. a.) sind nicht autorisiert und wurden nicht benötigt.
