// Structured data (schema.org JSON-LD) and copy helpers shared by the home page, the guide and
// concern pages, the sitemap and llms.txt, in English and Korean. Search engines and AI answer
// engines read these.
import { site } from "@/lib/site";
import { treatments, type Treatment } from "@/lib/treatments";
import type { Condition } from "@/lib/conditions";
import { localePath, schemaLang, type Lang } from "@/lib/i18n";
import { getConditions, getFaqs, getTreatments } from "@/lib/i18n/content";

// Content review date shown on guides and used in the sitemap. Bump when content changes.
// A fixed value: new Date() during prerender is disallowed with cacheComponents.
export const REVIEWED = "2026-10-11";
export const REVIEWED_LABEL: Record<Lang, string> = { en: "October 2026", ko: "2026년 10월" };

export const abs = (path = "/") => new URL(path, site.url).toString();

const ids = {
  website: abs("/#website"),
  business: abs("/#business"),
  person: abs("/#jenny"),
};

// Language-neutral paths; wrap with localePath(lang, …) for links.
export const guidePath = (t: Treatment) => `/guides/${t.slug}`;
export const concernPath = (c: Condition) => `/concerns/${c.page}`;

export const sortedTreatments = [...treatments].sort((a, b) => a.number.localeCompare(b.number));

export function concernsFor(t: Treatment, lang: Lang = "en"): Condition[] {
  const list = getConditions(lang);
  return t.concerns
    .map((slug) => list.find((c) => c.slug === slug))
    .filter((c): c is Condition => Boolean(c));
}

export const concernNames = (t: Treatment) => concernsFor(t).map((c) => c.name);

export function treatmentsFor(c: Condition, lang: Lang = "en"): Treatment[] {
  const list = getTreatments(lang);
  return c.treatments
    .map((slug) => list.find((t) => t.slug === slug))
    .filter((t): t is Treatment => Boolean(t));
}

// Up to three guides that share a concern with `t`, in guide order.
export function relatedGuides(t: Treatment, lang: Lang = "en"): Treatment[] {
  return getTreatments(lang)
    .filter((o) => o.slug !== t.slug && o.concerns.some((c) => t.concerns.includes(c)))
    .slice(0, 3);
}

function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
}

export function guideDescription(t: Treatment, lang: Lang = "en"): string {
  const lead = firstSentence(t.explainer[0]);
  return lang === "ko"
    ? `${lead} 토론토의 독립 뷰티 컨설턴트 제니가 정리한 ${t.name} 가이드: 회복 기간, 시술 횟수, 상담 때 물어볼 질문.`
    : `${lead} An independent Toronto guide to ${t.name}: downtime, sessions and the questions to ask.`;
}

export function concernDescription(c: Condition, lang: Lang = "en"): string {
  const lead = firstSentence(c.overview[0]);
  return lang === "ko"
    ? `${lead} 토론토에서 선택할 수 있는 시술을 제니가 독립적으로 안내합니다.`
    : `${lead} Treatment options in Toronto, explained independently by Jenny Kim.`;
}

const labels = {
  en: { home: "Home", guides: "Treatment guides", guidesIndex: "Aesthetic treatment guides", for: "Treatments often considered for" },
  ko: { home: "홈", guides: "시술 가이드", guidesIndex: "미용 시술 가이드", for: "추천 시술:" },
};

const businessDescription: Record<Lang, string> = {
  en: "Independent skincare consultations in Toronto. Jenny Kim explains aesthetic treatments such as Botox, dermal fillers, lasers and facials, builds a personal plan, and refers clients to vetted medi spas. She does not perform treatments.",
  ko: "토론토의 독립 스킨케어 상담. 제니 킴은 보톡스, 필러, 레이저, 피부 관리 등 미용 시술을 설명하고 개인 맞춤 플랜을 세워, 검증된 메디 스파를 연결해 드립니다. 직접 시술은 하지 않습니다.",
};

const address = {
  "@type": "PostalAddress",
  streetAddress: site.venue.address,
  addressLocality: site.venue.city,
  addressRegion: "ON",
  addressCountry: "CA",
};

const faqPage = (id: string, items: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  "@id": id,
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

// Site-wide entities: the website, the consultancy (a local business) and Jenny herself.
export function homeJsonLd(lang: Lang = "en") {
  const treatmentNames = getTreatments(lang).map((t) => t.name);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: abs("/"),
        name: `${site.brand}, ${site.brandLine}`,
        inLanguage: ["en-CA", "ko"],
        publisher: { "@id": ids.business },
      },
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": ids.business,
        name: `${site.brand}, ${site.brandLine}`,
        url: abs(localePath(lang, "/")),
        image: abs("/images/jenny-portrait.jpg"),
        description: businessDescription[lang],
        address,
        areaServed: { "@type": "City", name: "Toronto" },
        knowsLanguage: ["en", "ko"],
        openingHoursSpecification: site.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        sameAs: [site.contact.instagram],
        founder: { "@id": ids.person },
        knowsAbout: treatmentNames,
      },
      {
        "@type": "Person",
        "@id": ids.person,
        name: site.brand,
        jobTitle: lang === "ko" ? "독립 뷰티 컨설턴트" : "Independent Beauty Consultant",
        image: abs("/images/jenny-portrait.jpg"),
        worksFor: { "@id": ids.business },
        sameAs: [site.contact.instagram],
        knowsLanguage: ["en", "ko"],
        knowsAbout: [lang === "ko" ? "스킨케어" : "Skincare", ...treatmentNames],
      },
      faqPage(abs(`${localePath(lang, "/")}#faq`), getFaqs(lang)),
    ],
  };
}

const breadcrumb = (lang: Lang, id: string, last: { name: string; item: string }) => ({
  "@type": "BreadcrumbList",
  "@id": id,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: labels[lang].home, item: abs(localePath(lang, "/")) },
    { "@type": "ListItem", position: 2, name: labels[lang].guides, item: abs(localePath(lang, "/guides")) },
    { "@type": "ListItem", position: 3, ...last },
  ],
});

export function guideJsonLd(t: Treatment, title: string, lang: Lang = "en") {
  const url = abs(localePath(lang, guidePath(t)));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: guideDescription(t, lang),
        inLanguage: schemaLang[lang],
        isPartOf: { "@id": ids.website },
        author: { "@id": ids.person },
        publisher: { "@id": ids.business },
        about: { "@type": "MedicalProcedure", name: t.name },
        reviewedBy: { "@id": ids.person },
        lastReviewed: REVIEWED,
        dateModified: REVIEWED,
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      faqPage(`${url}#faq`, t.faqs),
      breadcrumb(lang, `${url}#breadcrumb`, { name: t.name, item: url }),
    ],
  };
}

export function guidesIndexJsonLd(lang: Lang = "en") {
  const url = abs(localePath(lang, "/guides"));
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: labels[lang].guidesIndex,
    inLanguage: schemaLang[lang],
    isPartOf: { "@id": ids.website },
    author: { "@id": ids.person },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: getTreatments(lang).map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.name,
        url: abs(localePath(lang, guidePath(t))),
      })),
    },
  };
}

export function concernJsonLd(c: Condition, title: string, lang: Lang = "en") {
  const url = abs(localePath(lang, concernPath(c)));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description: concernDescription(c, lang),
        inLanguage: schemaLang[lang],
        isPartOf: { "@id": ids.website },
        author: { "@id": ids.person },
        publisher: { "@id": ids.business },
        reviewedBy: { "@id": ids.person },
        lastReviewed: REVIEWED,
        dateModified: REVIEWED,
        about: { "@type": "Thing", name: c.name },
        mainEntity: {
          "@type": "ItemList",
          name: `${labels[lang].for} ${c.name}`,
          itemListElement: treatmentsFor(c, lang).map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: t.name,
            url: abs(localePath(lang, guidePath(t))),
          })),
        },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      breadcrumb(lang, `${url}#breadcrumb`, { name: c.name, item: url }),
    ],
  };
}
