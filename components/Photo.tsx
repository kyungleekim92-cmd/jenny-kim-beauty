"use client";

import Image from "next/image";
import { useRef } from "react";
import { useParallax } from "@/components/motion";

type PhotoProps = {
  src: string;
  alt: string;
  ratio: "45" | "169" | "11" | "34";
  sizes: string;
  /** Scroll-linked drift on the frame (0.03–0.1). Omit for a still frame. */
  parallax?: number;
  /** Slow ambient zoom to 1.03 (hero). Otherwise the image settles 1.03 → 1 on reveal and zooms on hover. */
  drift?: boolean;
  /** Above-the-fold image: load eagerly with high fetch priority. */
  eager?: boolean;
  className?: string;
};

// Art-directed photograph in a fixed-ratio frame. Place inside <Reveal> for the settle-in.
export default function Photo({ src, alt, ratio, sizes, parallax, drift = false, eager = false, className = "" }: PhotoProps) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, parallax ?? 0);

  return (
    <div ref={ref} className={className}>
      <div className={`photo ratio-${ratio}${drift ? "" : " zoom-frame"}`}>
        <div className={drift ? "photo-drift" : "photo-settle"}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className={`photo-img${drift ? "" : " zoom-media"}`}
            {...(eager ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
          />
        </div>
      </div>
    </div>
  );
}
