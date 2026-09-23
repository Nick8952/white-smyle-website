// Nach dem statischen Export: GitHub Pages liefert bei unbekannten Adressen out/404.html aus.
// Next schreibt die gestaltete Fehlerseite (app/not-found.tsx) mit trailingSlash nach out/404/index.html – hier zusätzlich als out/404.html ablegen.
import { copyFile, access } from "node:fs/promises";
import path from "node:path";
const out = path.resolve(import.meta.dirname, "..", "out");
const quelle = path.join(out, "404", "index.html");
try { await access(quelle); } catch { console.error("✗ out/404/index.html fehlt – Export unvollständig."); process.exit(1); }
await copyFile(quelle, path.join(out, "404.html"));
console.log("✓ out/404.html geschrieben (aus out/404/index.html).");
