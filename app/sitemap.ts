import type { MetadataRoute } from "next";
import { conditions } from "@/lib/conditions";
import { shopIsLive } from "@/lib/shop";
import { langs, localePath } from "@/lib/i18n";
import { REVIEWED as UPDATED, abs, concernPath, guidePath, sortedTreatments } from "@/lib/seo";

// Every page in English and Korean, each listing its other-language version (hreflang).
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/guides", priority: 0.8 },
    { path: "/begin", priority: 0.7 },
    { path: "/book", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.7 },
    ...(shopIsLive ? [{ path: "/shop", priority: 0.6 }] : []),
    ...sortedTreatments.map((t) => ({ path: guidePath(t), priority: 0.7 })),
    ...conditions.map((c) => ({ path: concernPath(c), priority: 0.7 })),
  ];

  return pages.flatMap(({ path, priority }) =>
    langs.map((lang) => ({
      url: abs(localePath(lang, path)),
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: lang === "en" ? priority : priority * 0.9,
      alternates: {
        languages: { en: abs(localePath("en", path)), ko: abs(localePath("ko", path)) },
      },
    })),
  );
}
