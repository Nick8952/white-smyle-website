# Inhaltsgenerator

`seiten/*.mjs` enthalten die Seiten als lesbare Quellen (Markdown-ähnlich, Hilfsfunktionen aus `pt.mjs`: `text`, `faq`, `hinweis`,
`aufruf`, `bild`, `b`). `node werkzeuge/inhalte/gen.mjs` schreibt daraus `data/seiten/*.json` und `data/rechtstexte/*.json`
(Portable Text). Mit `ZIEL=/pfad` kann in einen anderen Ordner geschrieben werden (z. B. zum Vergleichen).

Regel: Entweder hier ändern und generieren, oder die JSON-Datei direkt ändern. Der Generator überschreibt die JSON-Dateien vollständig.
Nach dem Generieren immer `npm run inhalt:pruefen`.
