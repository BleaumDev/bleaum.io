import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bleaum",
    short_name: "Bleaum",
    description:
      "Bleaum is your business in a box: POS, invoicing, inventory, ordering, delivery and AI on one real-time platform.",
    start_url: "/",
    display: "standalone",
    background_color: "#020917",
    theme_color: "#020917",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
