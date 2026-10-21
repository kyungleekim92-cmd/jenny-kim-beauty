// Page metadata in both languages: titles, descriptions, canonical URL and hreflang alternates.
import type { Metadata } from "next";
import type { Treatment } from "@/lib/treatments";
import type { Condition } from "@/lib/conditions";
import { site } from "@/lib/site";
import { languageAlternates, localePath, ogLocale, type Lang } from "@/lib/i18n";
import { concernDescription, concernPath, guideDescription, guidePath } from "@/lib/seo";

function pageMetadata(
  lang: Lang,
  path: string,
  title: string | { absolute: string },
  description: string,
  type: "website" | "article" = "website",
): Metadata {
  const url = localePath(lang, path);
  const ogTitle = typeof title === "string" ? title : title.absolute;
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type,
      siteName: `${site.brand}, ${site.brandLine}`,
      locale: ogLocale[lang],
      alternateLocale: [ogLocale[lang === "en" ? "ko" : "en"]],
      images: [
        {
          url: "https://www.byjennykim.com/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Jenny Kim, Beauty Consultant",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["https://www.byjennykim.com/opengraph-image.jpg"],
    },
  };
}

const home = {
  en: {
    title: `${site.brand} — Independent Skincare & Aesthetics Consultant, Toronto`,
    description:
      "Private skincare consultations at Bay & Adelaide, in Toronto's Financial District, with Jenny Kim. Independent guidance on Botox, dermal fillers, lasers, Ultherapy, HydraFacial and more, with introductions to trusted medi spas.",
  },
  ko: {
    title: "제니 킴 | 토론토 스킨케어·미용 시술 독립 컨설턴트",
    description:
      "토론토 금융가 Bay & Adelaide의 1:1 프라이빗 스킨케어 상담. 시술 전에 꼭 알아야 할 것들 — 보톡스, 필러, 레이저, 울쎄라, 하이드라페이셜까지 — 당신의 피부에 맞는 선택을 안내하고, 믿을 수 있는 메디 스파를 연결해 드려요.",
  },
};

export const homeMetadata = (lang: Lang) =>
  pageMetadata(lang, "/", { absolute: home[lang].title }, home[lang].description);

const guidesIndex = {
  en: {
    title: "Aesthetic Treatment Guides — Botox, Fillers, Lasers & More",
    description:
      "Twenty independent guides to aesthetic treatments available in Toronto, from Botox and dermal fillers to Ultherapy, lasers and HydraFacial: what each does, downtime, sessions and questions to ask.",
  },
  ko: {
    title: "미용 시술 가이드: 보톡스, 필러, 레이저 외",
    description:
      "토론토에서 받을 수 있는 미용 시술 20가지. 보톡스와 필러부터 울쎄라, 레이저, 하이드라페이셜까지 — 효과와 회복 기간, 시술 횟수, 상담 때 물어볼 질문을 담았어요.",
  },
};

export const guidesIndexMetadata = (lang: Lang) =>
  pageMetadata(lang, "/guides", guidesIndex[lang].title, guidesIndex[lang].description);

export const guideTitle = (t: Treatment, lang: Lang) =>
  lang === "ko" ? `토론토 ${t.name} 가이드: 시술 전에 알아 둘 것` : `${t.name} in Toronto — An Independent Guide`;

export const guideMetadata = (t: Treatment, lang: Lang) =>
  pageMetadata(lang, guidePath(t), guideTitle(t, lang), guideDescription(t, lang), "article");

export const concernTitle = (c: Condition, lang: Lang) =>
  lang === "ko" ? `${c.name}: 토론토에서 받을 수 있는 시술` : `${c.name}: Treatment Options in Toronto`;

export const concernMetadata = (c: Condition, lang: Lang) =>
  pageMetadata(lang, concernPath(c), concernTitle(c, lang), concernDescription(c, lang), "article");

const shop = {
  en: {
    title: "The Edit — Skincare Jenny Recommends",
    description:
      "A short edit of K-beauty skincare Toronto beauty consultant Jenny Kim recommends, from Biodance and more, with 5% off through her Olive Young links.",
  },
  ko: {
    title: "제니의 추천 스킨케어",
    description: "토론토 뷰티 컨설턴트 제니 킴이 직접 써 보고 추천하는 K-뷰티 스킨케어. 올리브영 링크로 구매하시면 5% 할인돼요.",
  },
};

export const shopMetadata = (lang: Lang) => pageMetadata(lang, "/shop", shop[lang].title, shop[lang].description);

const begin = {
  en: {
    title: "Where to Begin — Find Treatments for Your Skin Concerns",
    description:
      "A short questionnaire from Toronto beauty consultant Jenny Kim: choose your skin concerns and downtime, and see which treatment guides to read first.",
  },
  ko: {
    title: "당신에게 맞는 시술 찾기",
    description:
      "토론토 뷰티 컨설턴트 제니 킴의 간단한 질문지. 피부 고민과 회복 기간을 고르면, 어떤 시술 가이드부터 읽으면 좋을지 알려 드려요.",
  },
};

export const beginMetadata = (lang: Lang) => pageMetadata(lang, "/begin", begin[lang].title, begin[lang].description);

const book = {
  en: {
    title: "Book a Private Skincare Consultation in Toronto",
    description:
      "Request a private 30 to 60 minute skincare consultation with Jenny Kim at Bay & Adelaide, in Toronto's Financial District. Jenny replies personally within one business day.",
  },
  ko: {
    title: "토론토 1:1 스킨케어 상담 예약",
    description:
      "토론토 금융가 Bay & Adelaide에서 30분에서 한 시간, 제니 킴과 1:1 스킨케어 상담을 신청해 보세요. 영업일 기준 하루 안에 직접 답장 드려요.",
  },
};

export const bookMetadata = (lang: Lang) => pageMetadata(lang, "/book", book[lang].title, book[lang].description);

const about = {
  en: {
    title: "About Jenny Kim — Independent Beauty Consultant, Toronto",
    description:
      "Meet Jenny Kim, an independent skincare and aesthetics consultant in Toronto, and the partner medi spas she introduces clients to. She is a consultant, not a medical practitioner.",
  },
  ko: {
    title: "제니 킴 소개 | 토론토 독립 뷰티 컨설턴트",
    description:
      "토론토 독립 스킨케어·미용 시술 컨설턴트 제니 킴과, 제니가 소개하는 파트너 메디 스파를 만나 보세요. 제니는 의료인이 아닌 컨설턴트예요.",
  },
};

export const aboutMetadata = (lang: Lang) => pageMetadata(lang, "/about", about[lang].title, about[lang].description);

const faq = {
  en: {
    title: "Frequently Asked Questions — Skincare Consultations in Toronto",
    description:
      "Answers to the questions clients ask most before a first consultation with Toronto beauty consultant Jenny Kim, plus how to get in touch.",
  },
  ko: {
    title: "자주 묻는 질문 | 토론토 스킨케어 상담",
    description: "첫 상담 전에 많이 물어보시는 질문을 모았어요. 토론토 뷰티 컨설턴트 제니 킴에게 문의하는 방법도 함께 안내해 드려요.",
  },
};

export const faqMetadata = (lang: Lang) => pageMetadata(lang, "/faq", faq[lang].title, faq[lang].description);
