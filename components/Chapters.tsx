"use client";

import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import Photo from "@/components/Photo";
import { localePath, type Lang } from "@/lib/i18n";
import { disclaimer, getTreatments } from "@/lib/i18n/content";
import { treatments } from "@/lib/treatments";

// Other sections open a guide with:
//   window.dispatchEvent(new CustomEvent("open-chapter", { detail: { slug }, cancelable: true }))
// Chapters calls preventDefault() when it handles the event, so dispatchEvent() returns false.
export type OpenChapterDetail = { slug: string };

const NAV_OFFSET = 96;
const slugs = new Set(treatments.map((t) => t.slug));

const copy = {
  en: {
    eyebrow: "Treatment guides",
    title: "Understanding is the first treatment.",
    lede: "Twenty short essays on the treatments you've heard of — and what each one is really for.",
    alt: "Close-up of a soft, swirled cream in warm ivory tones",
    faqs: "Questions clients ask",
    readGuide: (name: string) => `Read the full ${name} guide`,
    viewAll: "View all guides",
  },
  ko: {
    eyebrow: "시술 가이드",
    title: "시술 전에, 먼저 알아두세요.",
    lede: "한 번쯤 들어본 시술 20가지. 각 시술이 어떤 고민에 맞는지, 무엇을 기대할 수 있는지 담았어요.",
    alt: "따뜻한 아이보리색 크림의 부드러운 결을 가까이에서 찍은 사진",
    faqs: "자주 받는 질문",
    readGuide: (name: string) => `${name} 가이드 자세히 보기`,
    viewAll: "가이드 전체 보기",
  },
};
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

function prefersReduced(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Document offset that ignores transforms (a not-yet-revealed row is still shifted by .reveal).
function layoutTop(el: HTMLElement): number {
  let y = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) y += n.offsetTop;
  return y;
}

// Height the open panel will give up if it sits above `slug`, so scroll can be
// corrected for the collapse before it happens.
function collapseShiftAbove(prev: string | null, slug: string): number {
  if (!prev || prev === slug) return 0;
  const prevEl = document.getElementById(`chapter-${prev}`);
  const target = document.getElementById(`chapter-${slug}`);
  if (!prevEl || !target) return 0;
  const isAbove = prevEl.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING;
  if (!isAbove) return 0;
  return prevEl.querySelector(".acc-panel")?.getBoundingClientRect().height ?? 0;
}

export default function Chapters({ lang }: { lang: Lang }) {
  const ordered = getTreatments(lang);
  const c = copy[lang];
  const [open, setOpen] = useState<string | null>(null);
  const openRef = useRef<string | null>(null);

  const openAndScroll = useCallback((slug: string) => {
    const el = document.getElementById(`chapter-${slug}`);
    if (!el) return;
    const shift = collapseShiftAbove(openRef.current, slug);
    const top = layoutTop(el) - shift - NAV_OFFSET;
    openRef.current = slug;
    setOpen(slug);
    window.scrollTo({ top, behavior: prefersReduced() ? "auto" : "smooth" });
  }, []);

  const toggle = (slug: string) => {
    if (openRef.current === slug) {
      openRef.current = null;
      setOpen(null);
      return;
    }
    // Keep the clicked row steady while a panel above it collapses.
    const shift = collapseShiftAbove(openRef.current, slug);
    openRef.current = slug;
    setOpen(slug);
    if (shift > 0) window.scrollBy({ top: -shift, behavior: prefersReduced() ? "auto" : "smooth" });
  };

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<OpenChapterDetail>).detail;
      if (!detail || !slugs.has(detail.slug)) return;
      e.preventDefault();
      openAndScroll(detail.slug);
    };
    window.addEventListener("open-chapter", onOpen);

    // Deep link: /#chapter-botox opens that guide on load.
    const hash = window.location.hash;
    const slug = hash.startsWith("#chapter-") ? hash.slice("#chapter-".length) : "";
    let frame = 0;
    if (slugs.has(slug)) frame = requestAnimationFrame(() => openAndScroll(slug));

    return () => {
      window.removeEventListener("open-chapter", onOpen);
      cancelAnimationFrame(frame);
    };
  }, [openAndScroll]);

  return (
    <section id="guides" className="section chapters" aria-labelledby="guides-title">
      <div className="wrap">
        <SectionHead
          id="guides-title"
          eyebrow={c.eyebrow}
          title={c.title}
          lede={c.lede}
        />

        <Reveal delay={150} className="guides-strip">
          <Photo
            src="/images/texture.jpg"
            alt={c.alt}
            ratio="169"
            sizes="(max-width: 1200px) 92vw, 1200px"
            parallax={0.03}
          />
        </Reveal>

        <div className="acc-list mt-4">
          {ordered.map((t, i) => {
            const isOpen = open === t.slug;
            const triggerId = `chapter-trigger-${t.slug}`;
            const panelId = `chapter-panel-${t.slug}`;
            return (
              <Reveal
                key={t.slug}
                delay={(i % 3) * 80}
                className={`acc-item${isOpen ? " is-open" : ""}`}
              >
                <article id={`chapter-${t.slug}`}>
                  <h3>
                    <button
                      type="button"
                      id={triggerId}
                      className="acc-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(t.slug)}
                    >
                      <span className="chapter-num" aria-hidden="true">
                        {t.number}
                      </span>
                      <span className="chapter-titles">
                        <span className="chapter-name">{t.name}</span>
                        <span className="chapter-tag">{t.tagline}</span>
                      </span>
                      <span className="acc-icon" aria-hidden="true" />
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className="acc-panel"
                    inert={!isOpen}
                  >
                    <div className="acc-inner">
                      <div className="chapter-body">
                        <p className="chapter-lead" style={stagger(0)}>
                          {t.tagline}
                        </p>

                        <div className="chapter-explainer" style={stagger(1)}>
                          {t.explainer.map((p) => (
                            <p key={p.slice(0, 40)}>{p}</p>
                          ))}
                        </div>

                        <dl className="facts" style={stagger(2)}>
                          {t.quickFacts.map((f) => (
                            <div className="fact" key={f.label}>
                              <dt>{f.label}</dt>
                              <dd>{f.value}</dd>
                            </div>
                          ))}
                        </dl>

                        <div style={stagger(3)}>
                          <p className="eyebrow chrome">{c.faqs}</p>
                          <dl className="chapter-faqs mt-2">
                            {t.faqs.map((f) => (
                              <Fragment key={f.q}>
                                <dt>{f.q}</dt>
                                <dd>{f.a}</dd>
                              </Fragment>
                            ))}
                          </dl>
                        </div>

                        <p className="chapter-cta" style={stagger(4)}>
                          {t.cta}
                        </p>

                        <p style={stagger(4)}>
                          <Link href={localePath(lang, `/guides/${t.slug}`)} className="quiet-link">
                            {c.readGuide(t.name)}
                          </Link>
                        </p>

                        <p className="disclaimer" style={stagger(5)}>
                          {disclaimer[lang]}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-4">
          <Link href={localePath(lang, "/guides")} className="quiet-link">
            {c.viewAll}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
