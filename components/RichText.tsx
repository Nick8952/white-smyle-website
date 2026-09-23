import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { istExternerLink, sichererLink } from "@/lib/assets";
import type { RichText as RichTextTyp } from "@/lib/content/types";

/**
 * Portable-Text-Ausgabe. Blöcke: Absatz, h2/h3/h4, Listen, Zitat; Marken: fett, kursiv, Link;
 * eigener Block «quelle» (Quellenangabe, klein) und «tabelle» (einfache Tabelle, z. B. Ausbildungsvergleich).
 */
const komponenten: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children, value }) => <h2 id={value._key ? `t-${value._key}` : undefined}>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    quelle: ({ children }) => <p className="quelle">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    link: ({ children, value }) => {
      const ziel = sichererLink((value?.href as string) ?? "#");
      if (istExternerLink(ziel)) {
        const http = /^https?:/.test(ziel);
        return (
          <a href={ziel} target={http ? "_blank" : undefined} rel={http ? "noopener noreferrer" : undefined}>
            {children}
            {http ? <ArrowUpRight size={14} weight="bold" aria-hidden="true" className="ml-0.5 inline align-[-0.1em]" /> : null}
          </a>
        );
      }
      return <Link href={ziel}>{children}</Link>;
    },
  },
  types: {
    tabelle: ({ value }) => {
      const t = value as { kopf?: string[]; zeilen?: { _key: string; zellen: string[] }[]; beschriftung?: string };
      return (
        <div className="overflow-x-auto">
          <table>
            {t.beschriftung ? <caption className="klein mb-2 text-left text-grau">{t.beschriftung}</caption> : null}
            {t.kopf?.length ? (
              <thead>
                <tr>{t.kopf.map((k, i) => <th key={i} scope="col">{k}</th>)}</tr>
              </thead>
            ) : null}
            <tbody>
              {(t.zeilen ?? []).map((z) => (
                <tr key={z._key}>{z.zellen.map((c, i) => (i === 0 ? <th key={i} scope="row" className="font-semibold">{c}</th> : <td key={i}>{c}</td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

export function RichText({ inhalt, className = "" }: { inhalt: RichTextTyp; className?: string }) {
  return (
    <div className={`lesetext ${className}`}>
      <PortableText value={inhalt} components={komponenten} />
    </div>
  );
}
