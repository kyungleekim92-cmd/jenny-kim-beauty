// The Edit (/shop): skincare Jenny recommends, with affiliate links to Olive Young Global,
// Sephora and Amazon.ca.
//
// A product appears once it has a name, a note and at least one store link; the shop (page,
// nav link, sitemap entry) stays hidden until at least one product is ready.
// Store rules: keep the disclosure on /shop, keep rel="sponsored" on links, never show store
// prices or copy store product photos.

export const amazon = {
  store: "https://www.amazon.ca",
  // Amazon Associates tracking ID (Store ID), e.g. "byjennykim-20". Amazon links need it.
  tag: "",
};

export interface ShopProduct {
  slug: string;
  brand: string;
  name: string;
  /** One or two sentences in Jenny's voice. Measured language; no medical claims. */
  note: string;
  /** Olive Young Global affiliate link from the "Creating Content" page (gives buyers 5% off). */
  oliveYoungUrl: string;
  /** Sephora affiliate link (Sephora Canada program, Rakuten, or a creator platform). */
  sephoraUrl: string;
  /** Amazon.ca product code (10 characters after /dp/ in the product URL). */
  asin: string;
}

export const products: ShopProduct[] = [
  {
    slug: "biodance-real-deep-mask",
    brand: "Biodance",
    name: "Bio-Collagen Real Deep Mask",
    note: "Jenny's favourite. A hydrogel mask worn overnight that turns clear as it settles in, for skin that looks plump and dewy by morning.",
    oliveYoungUrl: "",
    sephoraUrl: "",
    asin: "B0B2RM68G2",
  },
  {
    slug: "arocell",
    brand: "Arocell",
    // Confirm the exact product with Jenny before publishing.
    name: "",
    note: "",
    oliveYoungUrl: "",
    sephoraUrl: "",
    asin: "",
  },
  {
    slug: "rejuran",
    brand: "Rejuran",
    // Confirm the exact product with Jenny before publishing.
    name: "",
    note: "",
    oliveYoungUrl: "",
    sephoraUrl: "",
    asin: "",
  },
];

export type StoreName = "Olive Young" | "Sephora" | "Amazon";

export interface ShopLink {
  store: StoreName;
  href: string;
  /** Short perk shown on the button, e.g. the Olive Young follower discount. */
  perk?: string;
}

export const OLIVE_YOUNG_PERK = "5% off with Jenny's link";

// Store links for a product, in display order: Olive Young first (it carries the discount).
export function productLinks(p: ShopProduct): ShopLink[] {
  const links: ShopLink[] = [];
  if (p.oliveYoungUrl) links.push({ store: "Olive Young", href: p.oliveYoungUrl, perk: OLIVE_YOUNG_PERK });
  if (p.sephoraUrl) links.push({ store: "Sephora", href: p.sephoraUrl });
  if (p.asin && amazon.tag) {
    links.push({
      store: "Amazon",
      href: `${amazon.store}/dp/${p.asin}?tag=${encodeURIComponent(amazon.tag)}`,
    });
  }
  return links;
}

export const liveProducts = products.filter((p) => p.name && p.note && productLinks(p).length > 0);
export const shopIsLive = liveProducts.length > 0;

const storesInUse = new Set(liveProducts.flatMap((p) => productLinks(p).map((l) => l.store)));
export const hasOliveYoung = storesInUse.has("Olive Young");

// Affiliate disclosure, adapted to the stores actually linked. Amazon requires its exact line.
export const SHOP_DISCLOSURE = [
  "Jenny may earn a commission on purchases made through links on this page, at no extra cost to you.",
  storesInUse.has("Amazon") ? "As an Amazon Associate, Jenny Kim earns from qualifying purchases." : "",
]
  .filter(Boolean)
  .join(" ");
