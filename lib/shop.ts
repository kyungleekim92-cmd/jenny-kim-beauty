// The Edit (/shop): skincare Jenny recommends, linked to Amazon.ca through her Amazon Associates ID.
//
// A product appears on the site only once it has an `asin` AND `amazon.tag` is set, so the shop
// (page, nav link, sitemap entry) stays hidden until it is ready. Links are built from the ASIN
// and tag, so every link carries the affiliate ID. Amazon rules: show SHOP_DISCLOSURE wherever
// these links appear; do not show Amazon prices or copy Amazon product photos.

export const amazon = {
  store: "https://www.amazon.ca",
  // Amazon Associates tracking ID (Store ID), e.g. "byjennykim-20". Empty = shop hidden.
  tag: "",
};

export interface ShopProduct {
  slug: string;
  brand: string;
  name: string;
  /** One or two sentences in Jenny's voice. Measured language; no medical claims. */
  note: string;
  /** Amazon.ca product code (10 characters, from the product page URL after /dp/). */
  asin: string;
}

export const products: ShopProduct[] = [
  {
    slug: "biodance-real-deep-mask",
    brand: "Biodance",
    name: "Bio-Collagen Real Deep Mask",
    note: "Jenny's favourite. A hydrogel mask worn overnight that turns clear as it settles in, for skin that looks plump and dewy by morning.",
    asin: "",
  },
  {
    slug: "arocell",
    brand: "Arocell",
    // Confirm the exact product name with Jenny before publishing.
    name: "",
    note: "",
    asin: "",
  },
  {
    slug: "rejuran-recover-soothing-mask",
    brand: "Rejuran",
    // Confirm the exact product name with Jenny before publishing.
    name: "Recover Soothing Mask",
    note: "",
    asin: "",
  },
];

export const SHOP_DISCLOSURE = "As an Amazon Associate, Jenny Kim earns from qualifying purchases.";

export const liveProducts = amazon.tag ? products.filter((p) => p.asin && p.name && p.note) : [];
export const shopIsLive = liveProducts.length > 0;

export const amazonUrl = (p: ShopProduct) =>
  `${amazon.store}/dp/${p.asin}?tag=${encodeURIComponent(amazon.tag)}`;
