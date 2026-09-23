import { readdirSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const HIER = path.dirname(fileURLToPath(import.meta.url));
const ZIEL = process.env.ZIEL ?? path.join(HIER, "..", "..", "data"); // Zielordner (Standard: data/ im Projekt)
mkdirSync(path.join(ZIEL, "seiten"), { recursive: true }); mkdirSync(path.join(ZIEL, "rechtstexte"), { recursive: true });
let n = 0;
for (const f of readdirSync(path.join(HIER, "seiten")).filter((x) => x.endsWith(".mjs")).sort()) {
  const mod = await import(`file://${path.join(HIER, "seiten")}/${f}`);
  for (const seite of [].concat(mod.default)) {
    if (seite.art === "rechtstext") { const rest = { ...seite }; delete rest.art; writeFileSync(path.join(ZIEL, "rechtstexte", `${rest.artRecht}.json`), JSON.stringify({ id: `rechtstext-${rest.artRecht}`, art: rest.artRecht, titel: rest.titel, stand: rest.stand, hinweis: rest.hinweis, inhalt: rest.inhalt }, null, 1) + "\n"); n++; continue; }
    const datei = `${seite.slug.replaceAll("/", "__")}.json`;
    writeFileSync(path.join(ZIEL, "seiten", datei), JSON.stringify({ id: `seite-${seite.slug.replaceAll("/", "-")}`, ...seite }, null, 1) + "\n"); n++;
  }
}
console.log(n, "Dateien geschrieben");
