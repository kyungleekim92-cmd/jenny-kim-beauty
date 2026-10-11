"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { site } from "@/lib/site";
import { useScrollProgress, useScrolledPast, useScrollSpy } from "@/components/motion";

// Every section the nav can point at, in page order (#consult is the CTA).
const spyIds = ["top", "how", "guides", "quiz", "consult", "about", "partners", "faq", "contact"] as const;

// Off the home page (e.g. a guide), section links point back to the home page.
export default function Nav({ home = true }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const to = (hash: string) => (home ? hash : `/${hash}`);
  const scrolled = useScrolledPast(40);
  const progress = useScrollProgress();
  const active = useScrollSpy(spyIds);

  // Lock page scroll and allow Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) => active !== null && href === `#${active}`;
  const activeProps = (href: string) =>
    isActive(href) ? { className: "is-active", "aria-current": "true" as const } : {};

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
        <span className="nav-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
        <div className="nav-inner">
          <a href={home ? "#top" : "/"} className="nav-wordmark" onClick={close}>
            {site.brand}
            <small>{site.brandLine}</small>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {site.nav.map((item) => (
              <a key={item.href} href={to(item.href)} {...activeProps(item.href)}>
                {item.label}
              </a>
            ))}
            <a
              href={to("#consult")}
              className={`nav-cta${isActive("#consult") ? " is-active" : ""}`}
              aria-current={isActive("#consult") ? "true" : undefined}
            >
              Reserve your hour
            </a>
          </nav>
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <p className="eyebrow" style={{ "--i": 0 } as CSSProperties}>
          {site.brand} · {site.brandLine}
        </p>
        {site.nav.map((item, i) => (
          <a
            key={item.href}
            href={to(item.href)}
            onClick={close}
            style={{ "--i": i + 1 } as CSSProperties}
            {...activeProps(item.href)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={to("#consult")}
          className="mobile-cta"
          onClick={close}
          style={{ "--i": site.nav.length + 1 } as CSSProperties}
        >
          Reserve your hour
        </a>
      </div>
    </>
  );
}
