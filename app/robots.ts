import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";

// Open to every crawler, including AI answer engines (GPTBot, ClaudeBot, PerplexityBot,
// Google-Extended), so the guides can be cited in AI search results.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: abs("/sitemap.xml"),
    host: abs("/"),
  };
}
