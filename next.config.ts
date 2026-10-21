import type { NextConfig } from "next";

// Addresses people commonly type or link to (e.g. /contact, /booking) point to the matching
// page instead of a 404. Real pages (/about, /faq, /book, /guides, /begin, /shop) are not
// listed. Temporary (307) so a real page can take the address later.
const sectionAliases: Record<string, string> = {
  contact: "/faq",
  "contact-us": "/faq",
  "about-me": "/about",
  "about-jenny": "/about",
  booking: "/book",
  consult: "/book",
  consultation: "/book",
  consultations: "/book",
  appointment: "/book",
  reserve: "/book",
  faqs: "/faq",
  quiz: "/begin",
  "skin-quiz": "/begin",
  partners: "/about",
  "how-it-works": "/book",
  approach: "/book",
  services: "/guides",
  treatments: "/guides",
  guide: "/guides",
  concerns: "/guides#by-concern-title",
  "the-edit": "/shop",
  edit: "/shop",
  products: "/shop",
  store: "/shop",
  home: "/",
  "index.html": "/",
};

// Korean twin of a destination: "/#x" → "/ko#x", "/guides" → "/ko/guides".
const toKo = (dest: string) => (dest.startsWith("/#") || dest === "/" ? `/ko${dest.slice(1)}` : `/ko${dest}`);

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return Object.entries(sectionAliases).flatMap(([alias, dest]) => [
      { source: `/${alias}`, destination: dest, permanent: true },
      { source: `/ko/${alias}`, destination: toKo(dest), permanent: true },
    ]);
  },
};

export default nextConfig;
