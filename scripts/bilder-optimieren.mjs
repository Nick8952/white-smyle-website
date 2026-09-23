// Erzeugt aus den Originalen in assets/originale/ die Web-Varianten in public/bilder/
// und schreibt das Bildverzeichnis data/bilder.json (Masse, Varianten).
// Aufruf: npm run bilder   (idempotent – public/bilder wird neu aufgebaut)
// Dateinamen tragen einen Inhalts-Hash, damit Browser nach Bildwechseln nichts Altes zeigen.
// Zuordnung id → Originaldatei: scripts/bilder-liste.json. Herkunft jeder Datei: assets/originale/HERKUNFT.md
import sharp from "sharp";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const WURZEL = path.resolve(import.meta.dirname, "..");
const QUELLE = path.join(WURZEL, "assets/originale");
const ZIEL = path.join(WURZEL, "public/bilder");
const BREITEN = [480, 960, 1600];
const BILDER = JSON.parse(await readFile(path.join(WURZEL, "scripts/bilder-liste.json"), "utf8"));

await mkdir(ZIEL, { recursive: true });
for (const alt of await readdir(ZIEL)) await rm(path.join(ZIEL, alt));
const verzeichnis = {};
for (const [id, cfg] of Object.entries(BILDER)) {
  const eingabe = sharp(path.join(QUELLE, cfg.datei), { animated: false }).rotate();
  const meta = await eingabe.metadata();
  const gewuenscht = cfg.breiten ?? BREITEN;
  const breiten = [...new Set(gewuenscht.map((b) => Math.min(b, meta.width)))];
  const quellen = [];
  for (const b of breiten) {
    let pipe = eingabe.clone().resize({ width: b, withoutEnlargement: true });
    pipe = cfg.format === "png" ? pipe.png({ compressionLevel: 9, palette: true }) : pipe.webp({ quality: 80 });
    const { data, info } = await pipe.toBuffer({ resolveWithObject: true });
    const hash = createHash("sha1").update(data).digest("hex").slice(0, 8);
    const dateiname = `${id}-${info.width}-${hash}.${cfg.format === "png" ? "png" : "webp"}`;
    await writeFile(path.join(ZIEL, dateiname), data);
    quellen.push({ breite: info.width, url: `/bilder/${dateiname}` });
  }
  quellen.sort((a, b) => a.breite - b.breite);
  verzeichnis[id] = { id, original: `assets/originale/${cfg.datei}`, breite: meta.width, hoehe: meta.height, quellen };
}
await mkdir(path.join(WURZEL, "data"), { recursive: true });
await writeFile(path.join(WURZEL, "data/bilder.json"), JSON.stringify(verzeichnis, null, 2) + "\n");
console.log(`${Object.keys(verzeichnis).length} Bilder → data/bilder.json, ${(await readdir(ZIEL)).length} Dateien in public/bilder`);
