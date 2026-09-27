import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: "https://ocof.vercel.app", lastModified, priority: 1 },
    { url: "https://ocof.vercel.app/privacidade", lastModified, priority: 0.3 },
    { url: "https://ocof.vercel.app/termos", lastModified, priority: 0.3 },
  ];
}
