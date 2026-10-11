import type { MetadataRoute } from "next";
import { conditions } from "@/lib/conditions";
import { shopIsLive } from "@/lib/shop";
import { REVIEWED as UPDATED, abs, concernPath, guidePath, sortedTreatments } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: abs("/"), lastModified: UPDATED, changeFrequency: "monthly", priority: 1 },
    { url: abs("/guides"), lastModified: UPDATED, changeFrequency: "monthly", priority: 0.8 },
    ...(shopIsLive
      ? [{ url: abs("/shop"), lastModified: UPDATED, changeFrequency: "monthly" as const, priority: 0.6 }]
      : []),
    ...sortedTreatments.map((t) => ({
      url: abs(guidePath(t)),
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...conditions.map((c) => ({
      url: abs(concernPath(c)),
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
