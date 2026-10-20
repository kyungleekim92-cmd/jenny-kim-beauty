"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import { shopIsLive } from "@/lib/shop";
import { localePath, type Lang } from "@/lib/i18n";

// The home page's table of contents: one numbered line per chapter page.
const copy = {
  en: {
    eyebrow: "Contents",
    title: (
      <>
        Five chapters, <em>read</em> in any order.
      </>
    ),
    label: "Chapters",
    chapters: [
      {
        href: "/guides",
        title: "Treatment guides",
        line: "Twenty treatments explained plainly: what each is for, the downtime, and the questions to ask.",
      },
      {
        href: "/begin",
        title: "Where to Begin",
        line: "A few questions about your skin, then the guides worth reading first.",
      },
      {
        href: "/about",
        title: "About Jenny",
        line: "Who Jenny is, how she works, and the Toronto medi spas she introduces.",
      },
      {
        href: "/faq",
        title: "Questions & Contact",
        line: "Answers to what clients ask most, and a way to reach Jenny directly.",
      },
      {
        href: "/shop",
        title: "The Edit",
        line: "A short list of the skincare Jenny recommends.",
      },
    ],
  },
  ko: {
    eyebrow: "목차",
    title: (
      <>
        다섯 개의 장, <em>편한</em> 순서대로.
      </>
    ),
    label: "챕터",
    chapters: [
      {
        href: "/guides",
        title: "시술 가이드",
        line: "한 번쯤 들어본 시술 20가지를, 어떤 고민에 맞는지와 회복 기간까지 쉽게 풀어 두었어요.",
      },
      {
        href: "/begin",
        title: "당신에게 맞는 시술",
        line: "피부 고민 몇 가지를 고르면, 먼저 읽어 볼 가이드를 알려 드려요.",
      },
      {
        href: "/about",
        title: "제니 소개",
        line: "제니가 어떤 사람인지, 어떻게 상담하는지, 소개하는 토론토 파트너 스파까지 담았어요.",
      },
      {
        href: "/faq",
        title: "질문과 문의",
        line: "많이 물어보시는 질문에 답하고, 제니에게 바로 연락하는 방법을 안내해요.",
      },
      {
        href: "/shop",
        title: "추천 제품",
        line: "제니가 직접 써 보고 고른 스킨케어를 짧게 모았어요.",
      },
    ],
  },
};

export default function Contents({ lang }: { lang: Lang }) {
  const t = copy[lang];
  // The Edit is listed only once the shop has live products (same rule as the nav).
  const chapters = t.chapters.filter((c) => c.href !== "/shop" || shopIsLive);

  return (
    <section id="contents" className="section contents" aria-labelledby="contents-title">
      <div className="wrap-narrow">
        <SectionHead id="contents-title" eyebrow={t.eyebrow} title={t.title} />

        <ol className="contents-list mt-4" aria-label={t.label}>
          {chapters.map((c, i) => (
            <Reveal as="li" key={c.href} delay={(i % 5) * 80}>
              <Link href={localePath(lang, c.href)} className="contents-row">
                <span className="contents-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="contents-body">
                  <span className="contents-title">{c.title}</span>
                  <span className="contents-line">{c.line}</span>
                </span>
                <span className="contents-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
