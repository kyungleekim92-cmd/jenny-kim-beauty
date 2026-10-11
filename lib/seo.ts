// Structured data (schema.org JSON-LD) and copy helpers shared by the home page, the
// guide pages, the sitemap and llms.txt. Search engines and AI answer engines read these.
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import { treatments, type Treatment } from "@/lib/treatments";
import { conditions } from "@/lib/conditions";

export const abs = (path = "/") => new URL(path, site.url).toString();

const ids = {
  website: abs("/#website"),
  business: abs("/#business"),
  person: abs("/#jenny"),
};

export const guidePath = (t: Treatment) => `/guides/${t.slug}`;

export const sortedTreatments = [...treatments].sort((a, b) => a.number.localeCompare(b.number));

export function concernNames(t: Treatment): string[] {
  return t.concerns
    .map((slug) => conditions.find((c) => c.slug === slug)?.name)
    .filter((n): n is string => Boolean(n));
}

// Up to three guides that share a concern with `t`, in guide order.
export function relatedGuides(t: Treatment): Treatment[] {
  return sortedTreatments
    .filter((o) => o.slug !== t.slug && o.concerns.some((c) => t.concerns.includes(c)))
    .slice(0, 3);
}

function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
}

export function guideDescription(t: Treatment): string {
  return `${firstSentence(t.explainer[0])} An independent Toronto guide to ${t.name}: downtime, sessions and the questions to ask.`;
}

const address = {
  "@type": "PostalAddress",
  streetAddress: site.venue.address,
  addressLocality: site.venue.city,
  addressRegion: "ON",
  addressCountry: "CA",
};

// Site-wide entities: the website, the consultancy (a local business) and Jenny herself.
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: abs("/"),
        name: `${site.brand}, ${site.brandLine}`,
        inLanguage: "en-CA",
        publisher: { "@id": ids.business },
      },
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": ids.business,
        name: `${site.brand}, ${site.brandLine}`,
        url: abs("/"),
        image: abs("/images/jenny-portrait.jpg"),
        description:
          "Independent skincare consultations in Toronto. Jenny Kim explains aesthetic treatments such as Botox, dermal fillers, lasers and facials, builds a personal plan, and refers clients to vetted medi spas. She does not perform treatments.",
        address,
        areaServed: { "@type": "City", name: "Toronto" },
        sameAs: [site.contact.instagram],
        founder: { "@id": ids.person },
        knowsAbout: sortedTreatments.map((t) => t.name),
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: site.brand,
        jobTitle: "Independent Beauty Consultant",
        image: abs("/images/jenny-portrait.jpg"),
        worksFor: { "@id": ids.business },
        sameAs: [site.contact.instagram],
        knowsAbout: ["Skincare", "Aesthetic treatments", ...sortedTreatments.map((t) => t.name)],
      },
      {
        "@type": "FAQPage",
        "@id": abs("/#faq"),
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export function guideJsonLd(t: Treatment, title: string) {
  const url = abs(guidePath(t));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: guideDescription(t),
        inLanguage: "en-CA",
        isPartOf: { "@id": ids.website },
        author: { "@id": ids.person },
        publisher: { "@id": ids.business },
        about: { "@type": "MedicalProcedure", name: t.name },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: t.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
          { "@type": "ListItem", position: 2, name: "Treatment guides", item: abs("/guides") },
          { "@type": "ListItem", position: 3, name: t.name, item: url },
        ],
      },
    ],
  };
}

export function guidesIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": abs("/guides#webpage"),
    url: abs("/guides"),
    name: "Aesthetic treatment guides",
    isPartOf: { "@id": ids.website },
    author: { "@id": ids.person },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sortedTreatments.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        url: abs(guidePath(t)),
      })),
    },
  };
}
