// Externe Links aus dem Export (out/) sammeln und per HEAD/GET prüfen. Ruft nur Seiten ab, löst nichts aus.
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const dateien = [];
function lauf(d) { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) lauf(p); else if (p.endsWith(".html")) dateien.push(p); } }
lauf("out");
const eigene = /^https:\/\/nick8952\.github\.io\//; // Canonical-URLs der Demo selbst: erst nach dem Deploy prüfbar (EIGENE=1)
const links = new Map();
for (const f of dateien) for (const m of readFileSync(f, "utf8").matchAll(/href="(https?:\/\/[^"]+)"/g)) { const u = m[1].replaceAll("&amp;", "&"); if (!links.has(u) && (process.env.EIGENE === "1" || !eigene.test(u))) links.set(u, f.replace(/^out/, "").replace(/index\.html$/, "")); }
const ergebnis = [];
for (const [url, quelle] of links) {
  let status = "?", hinweis = "";
  try { const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 15000);
    let r = await fetch(url, { method: "HEAD", redirect: "follow", signal: ctrl.signal, headers: { "user-agent": "Mozilla/5.0 (Linkpruefung White Smyle Demo)" } });
    if (r.status === 405 || r.status === 403 || r.status === 404) r = await fetch(url, { method: "GET", redirect: "follow", signal: ctrl.signal, headers: { "user-agent": "Mozilla/5.0 (Linkpruefung White Smyle Demo)" } });
    clearTimeout(t); status = r.status; if (r.url !== url) hinweis = "→ " + r.url.slice(0, 80);
  } catch (e) { status = "Fehler"; hinweis = e.name; }
  ergebnis.push({ url, status, hinweis, quelle });
  console.log(`${status} ${url.slice(0, 90)} ${hinweis}`);
}
writeFileSync("pruefung/links.json", JSON.stringify(ergebnis, null, 1));
console.log(`\n${ergebnis.length} externe Ziele, ${ergebnis.filter((e) => e.status !== 200).length} ohne 200 → pruefung/links.json`);
