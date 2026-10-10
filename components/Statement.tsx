"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/motion";

type StatementProps = {
  children: ReactNode;
  /** Extra classes on the band (e.g. "band-cream2" to match a neighbouring section). */
  className?: string;
};

// Full-width editorial pause between sections: one short line in Jenny's voice,
// set large in the serif, signed with the letterspaced wordmark.
export default function Statement({ children, className = "" }: StatementProps) {
  return (
    <div className={`statement${className ? ` ${className}` : ""}`}>
      <figure className="wrap center">
        <Reveal>
          <span className="hairline-draw statement-rule" aria-hidden="true" />
        </Reveal>
        <Reveal as="blockquote" delay={120} className="statement-text">
          <p>{children}</p>
        </Reveal>
        <figcaption className="statement-sign">
          <Reveal as="span" delay={260}>
            Jenny Kim
          </Reveal>
        </figcaption>
      </figure>
    </div>
  );
}
