import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/client";
import { studioUrl } from "@/sanity/env";

/**
 * Draft Mode einschalten – wird vom Presentation-Tool im Studio aufgerufen (Geheimnisprüfung durch next-sanity).
 * Der Token wird erst zur Laufzeit gebraucht; ohne SANITY_API_READ_TOKEN baut die Route, die Vorschau schlägt dann
 * mit einer Fehlermeldung von next-sanity fehl (docs/SANITY-VERCEL-EINRICHTUNG.md).
 */
export const { GET } = defineEnableDraftMode({
  client: client().withConfig({ token: process.env.SANITY_API_READ_TOKEN, useCdn: false, perspective: "drafts", stega: { enabled: true, studioUrl } }),
});
