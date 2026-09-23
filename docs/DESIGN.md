# Design «Farbring»

Eigenständiges Design für die White-Smyle-Demo. Kein Reskin früherer Demos; von früheren Projekten wurde nur die technische
Referenzarchitektur (Static Export, Sanity/Vercel-Kopiermuster) übernommen, kein CSS und kein Layout.

## Idee
Die **Farbskala** («shade guide») aus der Zahnaufhellung ist das Signaturelement: ein Streifen aus Zahnfarb-Plättchen von warm bis
kühlweiss (`components/Farbring.tsx`). Er taucht als Akzent unter dem Hero-Bild, in Preistafeln und Kombikarten auf. Die Marke bringt
Lime und Orange aus dem Logo mit; Orange trägt die Handlungsaufforderungen, Lime bleibt dem Logo vorbehalten (zu wenig Kontrast auf Weiss).
Ton: ruhig, hell, präzise; grosse Serifenlose Überschriften, viel Weissraum, Karten mit feinen Linien statt Schatten.

## Regler
VARIANCE 5 (kontrollierte Asymmetrie: Farbstreifen, versetzte Bilder) · MOTION 3 (leise Scroll-Einblendungen, Hero-Auftritt) · DENSITY 4 (luftig, dennoch viel Inhalt pro Seite).

## Tokens (`app/globals.css`, `@theme static`)
| Token | Wert | Verwendung |
|---|---|---|
| `--color-papier` | `#ffffff` | Seitenhintergrund |
| `--color-emaille` | `#f6f4f0` | Flächen, abwechselnde Abschnitte (`.flaeche`) |
| `--color-apricot` | `#fbe9d7` | warme Flächen (Hero rechts, Hinweise, Aktion) |
| `--color-linie` | `#e6e2dc` | Rahmen, Trennlinien |
| `--color-tinte` | `#1c1b1a` | Text, primäre Knöpfe |
| `--color-tinte-2` | `#4a4744` | Fliesstext zweiter Ebene |
| `--color-grau` | `#6b6762` | Nebentexte (Kontrast ≥ 4.5:1 auf Weiss) |
| `--color-mandarine` | `#e9803b` | Marke, oranger Knopf, Akzentstrich |
| `--color-rost` | `#b04a10` | Textlinks und Akzenttext auf Weiss (Kontrast ≥ 4.5:1) |
| `--color-lime` | `#7ac943` | nur Logo |
| `--color-fokus` | `#1d5fd1` | Fokusring |
| `--radius-mittel` / `--radius-gross` | 14px / 22px | Karten, Bilder |
| `--ease-aus` | `cubic-bezier(.2,.7,.2,1)` | Bewegung |

## Schrift
- Display: **Gabarito Variable** (Überschriften, Knöpfe, Navigation), Fliesstext: **Figtree Variable**. Beide lokal über `@fontsource-variable/*`,
  keine externen Anfragen. Grössen fluid mit `clamp()`: `.h-display`, `.titel-1`, `.titel-2`, `.titel-3`, `.vorspann`, `.klein`, `.winzig`.
- Preise: `.preis` (Gabarito, tabellarische Ziffern), Format «CHF 175.–» über `chf()`.
- Wortmarke: Pfade aus der OFL-Schrift Cinzel (`lib/wortmarke.ts`), Bildmarke als SVG-Nachbau (`components/Logo.tsx`). Original-Vektordatei beim Kunden anfordern.

## Komponentenklassen
`.behaelter` (max 1200px, 16px Gutter) · `.behaelter-schmal` (Lesebreite) · `.abschnitt` (vertikaler Rhythmus) · `.titel-strich` (oranger Strich links) ·
`.karte`/`.karte-orange` · `.flaeche` · `.etikett` · `.knopf` mit `-primaer` (schwarz), `-orange`, `-sekundaer` (Rahmen), `-hell`, `-klein` (min 44px) ·
`.textlink` · `.lesetext` (Portable Text, Silbentrennung, Umbruch langer Wörter) · `.bild-rahmen` · `.akkordeon` · `.preiszeile` · `.nav-link`/`.nav-untermenue` · `.feld` · `.demo-hinweis`.

## Bewegung
- `.auftauchen`: Scroll-gesteuert (`animation-timeline: view()`, `entry 0% → 35%`), 18px nach oben + Opazität. Fällt ohne Unterstützung und bei
  `prefers-reduced-motion: reduce` komplett weg (kein Flackern, Inhalt sofort sichtbar).
- `.hero-auftritt`: gestaffelter Auftritt der Hero-Kinder (80ms Versatz), ebenfalls mit Reduced-Motion-Ausnahme.
- Keine Parallaxe, keine Autoplay-Medien, keine Countdowns.

## Layout-Regeln
- Mobile zuerst: 360px ohne horizontalen Scroll; Kopfzeile mobil = kompaktes Logo + Buchungsicon + Menüknopf; ab 640px Buchungstext, ab 768px Telefon,
  ab 1024px vollständige Navigation mit Untermenüs, ab 1280px Telefonnummer ausgeschrieben.
- Touch-Ziele ≥ 44px (Knöpfe, Menüeinträge, Akkordeon-Köpfe). Fokusring 3px `--color-fokus` mit Versatz.
- Helles Theme fix; kein Dark Mode (Fotos und Marke sind für Weiss gestaltet).
- Bilder über `<img srcset>` (480/960/1600 WebP) mit festen Seitenverhältnissen gegen Layout-Sprünge.

## Icons
Phosphor Icons (`@phosphor-icons/react/dist/ssr`), Gewicht `bold` für Knöpfe, `regular` in Listen. Dekorative Icons `aria-hidden`.
