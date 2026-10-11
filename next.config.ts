import type { NextConfig } from "next";

// Addresses people commonly type or link to (e.g. /contact, /book) point to the matching part
// of the site instead of a 404. Temporary (307) so a real page can take the address later.
const sectionAliases: Record<string, string> = {
  contact: "/#contact",
  "contact-us": "/#contact",
  about: "/#about",
  "about-me": "/#about",
  "about-jenny": "/#about",
  book: "/#consult",
  booking: "/#consult",
  consult: "/#consult",
  consultation: "/#consult",
  consultations: "/#consult",
  appointment: "/#consult",
  reserve: "/#consult",
  faq: "/#faq",
  faqs: "/#faq",
  quiz: "/#quiz",
  "skin-quiz": "/#quiz",
  partners: "/#partners",
  "how-it-works": "/#how",
  approach: "/#how",
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
      { source: `/${alias}`, destination: dest, permanent: false },
      { source: `/ko/${alias}`, destination: toKo(dest), permanent: false },
    ]);
  },
};

export default nextConfig;
