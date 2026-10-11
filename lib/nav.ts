import { site } from "@/lib/site";
import { shopIsLive } from "@/lib/shop";

// Primary navigation: the home-page sections, plus "Shop" (/shop) before Contact once the
// shop has live products.
export const navItems: { href: string; label: string }[] = shopIsLive
  ? [...site.nav.slice(0, -1), { href: "/shop", label: "Shop" }, ...site.nav.slice(-1)]
  : site.nav;

// Section links ("#faq") work as-is on the home page and need "/" in front elsewhere;
// page links ("/shop") work everywhere.
export const navHref = (href: string, onHome: boolean) =>
  href.startsWith("/") || onHome ? href : `/${href}`;
