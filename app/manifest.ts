import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bedste Danske Casinosider - Bedste danske casinoer",
    short_name: "Bedste Danske Casinosider",
    description:
      "Uafhængig guide til de bedste danske casinoer med licens fra Spillemyndigheden. 18+.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#c8102e",
    lang: "da-DK",
    dir: "ltr",
    categories: ["entertainment", "lifestyle"],
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  }
}
