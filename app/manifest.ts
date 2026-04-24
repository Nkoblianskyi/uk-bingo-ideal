import type { MetadataRoute } from "next"
import { SITE_DISPLAY_NAME, SITE_DOMAIN } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_DISPLAY_NAME} — ${SITE_DOMAIN}`,
    short_name: SITE_DISPLAY_NAME,
    description:
      "Independent guide to licensed UK online bingo rooms, offers, and safer play. 18+ UK only.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#e91e63",
    lang: "en-GB",
    dir: "ltr",
    categories: ["entertainment", "lifestyle"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  }
}
