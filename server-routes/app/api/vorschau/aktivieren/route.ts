import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/client";
import { studioUrl } from "@/sanity/env";

/**
 * Draft Mode einschalten – wird vom Presentation-Tool im Studio aufgerufen (Geheimnisprüfung durch next-sanity).
 * Der Client wird erst beim tatsächlichen Aufruf gebaut, nicht beim Laden des Moduls: `client()` wirft ohne
 * NEXT_PUBLIC_SANITY_PROJECT_ID/DATASET, und das darf den Server-Build auf Vercel nicht brechen, solange Sanity
 * nur vorbereitet, aber nicht eingerichtet ist. Ohne SANITY_API_READ_TOKEN schlägt der Aufruf zur Laufzeit mit
 * einer Fehlermeldung von next-sanity fehl (docs/SANITY-VERCEL-EINRICHTUNG.md).
 */
export async function GET(req: Request) {
  const { GET: handler } = defineEnableDraftMode({
    client: client().withConfig({ token: process.env.SANITY_API_READ_TOKEN, useCdn: false, perspective: "drafts", stega: { enabled: true, studioUrl } }),
  });
  return handler(req);
}
