"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion";
import SectionHead from "@/components/SectionHead";
import { bookingCopy } from "@/components/Booking";
import { localePath, type Lang } from "@/lib/i18n";

const button = { en: "Book a consultation", ko: "상담 예약하기" };

// Slim call-to-action on the home page: Booking's own heading, then a button to /book.
export default function BookCta({ lang }: { lang: Lang }) {
  const t = bookingCopy[lang];

  return (
    <section id="consult" className="section band-cream2 book-cta" aria-labelledby="consult-title">
      <div className="wrap-narrow">
        <SectionHead id="consult-title" eyebrow={t.eyebrow} title={t.title} center />
        <Reveal delay={400} className="book-cta-action">
          <Link href={localePath(lang, "/book")} className="btn-outline">
            {button[lang]}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
