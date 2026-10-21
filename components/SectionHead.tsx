"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  id?: string;
  titleAs?: "h1" | "h2";
};

// Eyebrow, serif title, drawn chrome hairline and lede — staggered 100ms apart.
export default function SectionHead({ eyebrow, title, lede, center = false, id, titleAs = "h2" }: SectionHeadProps) {
  return (
    <header className={`section-head${center ? " center" : ""}`}>
      <Reveal as="p" className="eyebrow chrome">
        {eyebrow}
      </Reveal>
      <Reveal as={titleAs} delay={100} className="display-sm mt-2">
        <span id={id}>{title}</span>
      </Reveal>
      <Reveal delay={200} className="section-rule-wrap">
        <span className="hairline-draw section-rule" aria-hidden="true" />
      </Reveal>
      {lede && (
        <Reveal as="p" delay={300} className="lede">
          {lede}
        </Reveal>
      )}
    </header>
  );
}
