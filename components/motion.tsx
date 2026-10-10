"use client";

/**
 * Motion primitives — dependency-free (CSS + IntersectionObserver + rAF).
 * Pair with the utility classes in app/animations.css.
 *
 * PUBLIC API
 *
 *   <Reveal delay={0} as="div" className="">…</Reveal>
 *     Fades + rises (22px, 800ms, --ease) its children into view once.
 *     - delay:     ms before the transition starts (use 80–120ms steps to stagger siblings)
 *     - as:        wrapper tag, default "div" (see RevealTag for allowed tags)
 *     - className: extra classes on the wrapper
 *     Elements already in the viewport on load reveal immediately.
 *     Uses the .reveal / .is-visible classes from globals.css.
 *
 *   useParallax(ref, speed = 0.06)
 *     Subtle scroll-linked translateY on ref.current, written directly to
 *     style.transform (no re-renders). speed is the fraction of the element's
 *     distance from viewport centre; keep it between 0.03 and 0.1.
 *     No-op under prefers-reduced-motion or when speed is 0. Apply to a wrapper, not to an
 *     element that has its own CSS transform animation.
 *
 *   useScrollProgress(): number
 *     0–1 page scroll progress, rAF-throttled. Re-renders the caller at most
 *     once per frame while scrolling.
 *
 *   useScrolledPast(px = 40): boolean
 *     True once window.scrollY > px. Only re-renders when the boolean flips.
 *
 *   usePrefersReducedMotion(): boolean
 *     Live prefers-reduced-motion media query (false during SSR).
 *
 *   useScrollSpy(ids): string | null
 *     Id of the section crossing a reading line 35% down the viewport, or null
 *     (e.g. above the first id). IntersectionObserver-driven, state written at
 *     most once per frame. Only re-renders when the active id changes.
 */

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function reducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia(REDUCED_QUERY).matches;
}

export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(REDUCED_QUERY);
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/* ---------- Reveal ---------- */

export type RevealTag =
  | "div" | "section" | "article" | "aside" | "header" | "footer"
  | "ul" | "ol" | "li" | "p" | "span" | "figure"
  | "h1" | "h2" | "h3" | "h4" | "blockquote";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: RevealTag;
  className?: string;
};

export function Reveal({ children, delay = 0, as = "div", className = "" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion() || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    // Already on screen at mount (e.g. above the fold, or restored scroll position).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  return createElement(
    as,
    { ref, className: `reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`, style },
    children
  );
}

/* ---------- useParallax ---------- */

export function useParallax<T extends HTMLElement>(ref: RefObject<T | null>, speed = 0.06): void {
  useEffect(() => {
    const el = ref.current;
    if (!el || !speed || reducedMotion()) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -vh * 0.5 || rect.top > vh * 1.5) return; // far off-screen
      const offset = rect.top + rect.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(-offset * speed).toFixed(2)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      el.style.transform = "";
    };
  }, [ref, speed]);
}

/* ---------- scroll hooks ---------- */

function useRafScroll(read: () => void): void {
  const readRef = useRef(read);
  useEffect(() => {
    readRef.current = read;
  });
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      frame = 0;
      readRef.current();
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);
  useRafScroll(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
  });
  return progress;
}

export function useScrolledPast(px = 40): boolean {
  const [past, setPast] = useState(false);
  useRafScroll(() => setPast(window.scrollY > px));
  return past;
}

/* ---------- useScrollSpy ---------- */

export function useScrollSpy(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const key = ids.join("|");

  useEffect(() => {
    const els = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length || typeof IntersectionObserver === "undefined") return;

    // A 1px-tall band 35% down the viewport: whichever section overlaps it is "in view".
    const crossing = new Set<string>();
    let frame = 0;
    const commit = () => {
      frame = 0;
      const current = els.find((el) => crossing.has(el.id));
      setActive(current ? current.id : null);
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) crossing.add(e.target.id);
          else crossing.delete(e.target.id);
        }
        if (!frame) frame = requestAnimationFrame(commit);
      },
      { rootMargin: "-35% 0px -64% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [key]);

  return active;
}
