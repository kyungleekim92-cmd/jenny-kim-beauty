"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { site } from "@/lib/site";
import { navHref, navItems } from "@/lib/nav";
import { langLabels, langNames, langs, localePath, type Lang } from "@/lib/i18n";
import { useScrollProgress, useScrolledPast, useScrollSpy } from "@/components/motion";

// Every section the nav can point at, in page order (#consult is the CTA).
const spyIds = ["top", "how", "guides", "quiz", "consult", "about", "partners", "faq", "contact"] as const;

const copy = {
  en: { reserve: "Book a consultation", open: "Open menu", close: "Close menu", language: "Language" },
  ko: { reserve: "상담 예약", open: "메뉴 열기", close: "메뉴 닫기", language: "언어" },
};

type NavProps = {
  lang: Lang;
  /** The current page's language-neutral path ("/", "/guides/botox"), for the EN | KO switch. */
  path: string;
  /** Off the home page (e.g. a guide), section links point back to the home page. */
  home?: boolean;
};

// Discreet EN | KO switch: links to the same page in the other language.
function LangToggle({ lang, path }: { lang: Lang; path: string }) {
  return (
    <div className="lang-toggle" role="group" aria-label={copy[lang].language}>
      {langs.map((l, i) => (
        <span key={l}>
          {i > 0 && <span className="lang-sep" aria-hidden="true">|</span>}
          {l === lang ? (
            <span className="is-current" aria-current="true" title={langNames[l]}>
              {langLabels[l]}
            </span>
          ) : (
            <a href={localePath(l, path)} hrefLang={l} lang={l} title={langNames[l]}>
              {langLabels[l]}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Nav({ lang, path, home = true }: NavProps) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  const items = navItems(lang);
  const to = (href: string) => navHref(href, home, lang);
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
          <a href={home ? "#top" : localePath(lang, "/")} className="nav-wordmark" onClick={close}>
            {site.brand}
            <small>{site.brandLine}</small>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {items.map((item) => (
              <a key={item.href} href={to(item.href)} {...activeProps(item.href)}>
                {item.label}
              </a>
            ))}
            <a
              href={to("#consult")}
              className={`nav-cta${isActive("#consult") ? " is-active" : ""}`}
              aria-current={isActive("#consult") ? "true" : undefined}
            >
              {t.reserve}
            </a>
          </nav>
          <LangToggle lang={lang} path={path} />
          <button
            type="button"
            className="nav-burger"
            aria-label={open ? t.close : t.open}
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
        <a
          href={home ? "#top" : localePath(lang, "/")}
          className="menu-wordmark"
          onClick={close}
          style={{ "--i": 0 } as CSSProperties}
        >
          {site.brand}
          <small>{site.brandLine}</small>
        </a>
        {items.map((item, i) => (
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
          style={{ "--i": items.length + 1 } as CSSProperties}
        >
          {t.reserve}
        </a>
      </div>
    </>
  );
}
