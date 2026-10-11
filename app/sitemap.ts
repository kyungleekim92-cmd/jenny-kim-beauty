import type { MetadataRoute } from "next";
import { abs, guidePath, sortedTreatments } from "@/lib/seo";

// Fixed date: new Date() during prerender is disallowed with cacheComponents. Bump when content changes.
const UPDATED = "2026-10-11";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: abs("/"), lastModified: UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: abs("/guides"), lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    ...sortedTreatments.map((t) => ({
      url: abs(guidePath(t)),
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
