"use client";
/**
 * Sanity Studio – wird unter /studio eingebettet, sobald DEPLOY_TARGET=vercel gesetzt ist (siehe server-routes/app/studio).
 * In der GitHub-Pages-Demo ist das Studio nicht enthalten. Status: vorbereitet, nicht gegen ein echtes Projekt getestet.
 * Struktur: Praxisdaten und Website-Texte als Einzeldokumente, danach Angebote (Leistungen, Kombipakete, Aktionen), Seiten, Team, Meinungen usw.
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { deDELocale } from "@sanity/locale-de-de";
import { schemaTypes } from "./sanity/schemas";
import { apiVersion, dataset, projectId, studioUrl } from "./sanity/env";

const EINZELN = ["einstellungen", "texte"];

export default defineConfig({
  name: "white-smyle",
  title: "WHITE SMYLE dental – Inhalte",
  basePath: studioUrl,
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    templates: (vorlagen) => vorlagen.filter((v) => !EINZELN.includes(v.schemaType)),
  },
  document: {
    actions: (aktionen, ctx) => (EINZELN.includes(ctx.schemaType) ? aktionen.filter((a) => !["unpublish", "delete", "duplicate"].includes(a.action ?? "")) : aktionen),
  },
  plugins: [
    deDELocale(),
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhalte")
          .items([
            S.listItem().title("Praxisdaten").id("einstellungen").child(S.document().schemaType("einstellungen").documentId("einstellungen")),
            S.listItem().title("Website-Texte").id("texte").child(S.document().schemaType("texte").documentId("texte")),
            S.divider(),
            S.listItem().title("Angebot").child(S.list().title("Angebot").items([S.documentTypeListItem("leistung").title("Leistungen"), S.documentTypeListItem("kombination").title("Kombipakete"), S.documentTypeListItem("aktion").title("Aktionen"), S.documentTypeListItem("zahlungsart").title("Zahlungsmöglichkeiten")])),
            S.documentTypeListItem("seite").title("Seiten"),
            S.documentTypeListItem("teammitglied").title("Team"),
            S.documentTypeListItem("kundenmeinung").title("Kundenmeinungen"),
            S.documentTypeListItem("medienstimme").title("Medienstimmen"),
            S.documentTypeListItem("fragebogen").title("Fragebögen (Anzeige)"),
            S.documentTypeListItem("download").title("Downloads"),
            S.documentTypeListItem("rechtstext").title("Rechtstexte"),
          ]),
    }),
    presentationTool({
      previewUrl: { previewMode: { enable: "/api/vorschau/aktivieren", disable: "/api/vorschau/beenden" } },
      resolve: {
        locations: {
          seite: { select: { titel: "titel", slug: "slug.current" }, resolve: (doc) => ({ locations: [{ title: (doc?.titel as string) ?? "Seite", href: doc?.slug === "start" ? "/" : `/${doc?.slug}/` }] }) },
        },
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
