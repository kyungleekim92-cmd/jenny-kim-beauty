// The Edit (/shop): skincare Jenny recommends, with affiliate links for clients in Canada
// (Olive Young Global, Amazon.ca, Sephora) and in Korea (Olive Young Korea curator links).
//
// A product appears once it has a name, a note and at least one store link; the shop (page,
// nav link, sitemap entry) stays hidden until at least one product is ready.
// Store rules: keep the disclosure on /shop, keep rel="sponsored" on links, never show store
// prices or copy photos from store listings. Product images are brand-approved packshots
// (the owner has each brand's permission), re-toned onto the site's beige ground.

export const amazon = {
  store: "https://www.amazon.ca",
  // Jenny's Amazon Associates tracking ID (Store ID). Amazon links need it.
  tag: "byjennykim-20",
};

export interface ShopProduct {
  slug: string;
  brand: string;
  name: string;
  /** One or two sentences in Jenny's voice. Measured language; no medical claims. */
  note: string;
  /** Olive Young Global affiliate link from the "Creating Content" page (gives buyers 5% off). */
  oliveYoungUrl: string;
  /** Olive Young Korea "쇼핑 큐레이터" link, for clients in Korea (Global does not deliver in Korea). */
  oliveYoungKoreaUrl: string;
  /** Sephora affiliate link (Sephora Canada program, Rakuten, or a creator platform). */
  sephoraUrl: string;
  /** Ulike official-store affiliate link (Awin deep link). */
  ulikeUrl?: string;
  /** Amazon.ca product code (10 characters after /dp/ in the product URL). */
  asin: string;
  /** Brand-approved packshot on the site's beige ground, 1200×1500 (4:5), in public/images/shop. */
  image: string;
}

export const products: ShopProduct[] = [
  {
    slug: "biodance-real-deep-mask",
    brand: "Biodance",
    name: "Bio-Collagen Real Deep Mask",
    note: "Jenny's favourite. A hydrogel mask worn overnight that turns clear as it settles in, for skin that looks plump and dewy by morning.",
    oliveYoungUrl: "https://global.oliveyoung.com/if/rd?su=Y3B21P6I",
    oliveYoungKoreaUrl: "",
    sephoraUrl: "",
    asin: "B0B2RM68G2",
    image: "/images/shop/biodance-real-deep-mask.jpg",
  },
  {
    slug: "arocell-super-collagen-mask",
    brand: "Arocell",
    name: "Super Collagen Mask 2.0",
    note: "A two-piece hydrogel mask with collagen, chosen for deep hydration and skin that looks fresh and glowing afterwards.",
    oliveYoungUrl: "https://global.oliveyoung.com/if/rd?su=YWG9M4FG",
    oliveYoungKoreaUrl: "",
    sephoraUrl: "",
    asin: "B0D9LDNJ26",
    image: "/images/shop/arocell-super-collagen-mask.jpg",
  },
  {
    slug: "rejuran-turnover-mask",
    brand: "Rejuran",
    name: "Turnover Mask (c-PDRN)",
    note: "A c-PDRN sheet mask for days when skin needs deep hydration and a fresh, glowing look.",
    oliveYoungUrl: "",
    oliveYoungKoreaUrl: "",
    sephoraUrl: "",
    asin: "B0CYMZC3C6",
    image: "/images/shop/rejuran-turnover-mask.jpg",
  },
  {
    slug: "rejuran-dual-effect-ampoule-mask",
    brand: "Rejuran",
    name: "Dual Effect Ampoule In Mask",
    note: "An ampoule-soaked sheet mask with c-PDRN, hyaluronic acid and niacinamide, for days when skin could look firmer and more radiant.",
    oliveYoungUrl: "https://global.oliveyoung.com/if/rd?su=SGLBJGEB",
    oliveYoungKoreaUrl: "",
    sephoraUrl: "",
    asin: "",
    image: "/images/shop/rejuran-dual-effect-ampoule-mask.jpg",
  },
  {
    slug: "kerastase-genesis-bain-hydra-fortifiant",
    brand: "Kérastase",
    name: "Genesis Bain Hydra-Fortifiant",
    note: "The pink bottle in Jenny's shower. A fortifying shampoo for weakened hair prone to falling from breakage, with ginger root and edelweiss — for hair that looks and feels stronger.",
    oliveYoungUrl: "",
    oliveYoungKoreaUrl: "",
    sephoraUrl: "",
    asin: "B0DQTZ2PDD",
    image: "",
  },
  {
    slug: "kerastase-gloss-absolu-glaze-milk",
    brand: "Kérastase",
    name: "Gloss Absolu Anti-Frizz Glaze Milk",
    note: "An all-in-one smoothing spray for long hair prone to frizz. Hyaluronic acid, glycolic acid and wild rose in oil, in a leave-in formula — for hair that looks glossy and feels soft.",
    oliveYoungUrl: "",
    oliveYoungKoreaUrl: "",
    sephoraUrl: "",
    asin: "B0DQTXH4S8",
    image: "",
  },
  {
    slug: "ulike-reglow-led-mask",
    brand: "Ulike",
    name: "ReGlow LED Light Therapy Mask",
    note: "Four light modes in one mask — red and infrared for firmness, yellow to calm, blue for breakouts. The one Jenny recommends for starting LED therapy at home: full-featured, at a gentler price.",
    oliveYoungUrl: "",
    oliveYoungKoreaUrl: "",
    sephoraUrl: "",
    asin: "",
    ulikeUrl: "https://www.awin1.com/cread.php?awinmid=33267&awinaffid=3121335&ued=https%3A%2F%2Fwww.ulike.com%2Fproducts%2Fulike-reglow-led-light-therapy-mask",
    image: "/images/shop/ulike-reglow-led-mask.jpg",
  },
];

export type StoreName = "Olive Young" | "Amazon" | "Sephora" | "Ulike" | "Olive Young Korea";

export interface ShopLink {
  store: StoreName;
  href: string;
  /** Short line under the button: who it is for, or the Olive Young follower discount. */
  perk: { en: string; ko: string };
}

export const storeNames: Record<StoreName, { en: string; ko: string }> = {
  "Olive Young": { en: "Olive Young", ko: "올리브영 글로벌" },
  Amazon: { en: "Amazon", ko: "아마존" },
  Sephora: { en: "Sephora", ko: "세포라" },
  Ulike: { en: "Ulike", ko: "Ulike" },
  "Olive Young Korea": { en: "Olive Young Korea", ko: "올리브영" },
};

export const OLIVE_YOUNG_PERK = {
  en: "5% off with Jenny's link · ships to Canada",
  ko: "제 링크로 5% 할인 · 캐나다 배송",
};

// Store links for a product, in display order: Canada first (Olive Young Global carries the
// discount), then Korea.
export function productLinks(p: ShopProduct): ShopLink[] {
  const links: ShopLink[] = [];
  if (p.oliveYoungUrl) links.push({ store: "Olive Young", href: p.oliveYoungUrl, perk: OLIVE_YOUNG_PERK });
  if (p.asin && amazon.tag) {
    links.push({
      store: "Amazon",
      href: `${amazon.store}/dp/${p.asin}?tag=${encodeURIComponent(amazon.tag)}`,
      perk: { en: "Amazon.ca · fast delivery in Canada", ko: "Amazon.ca · 캐나다 빠른 배송" },
    });
  }
  if (p.sephoraUrl) links.push({ store: "Sephora", href: p.sephoraUrl, perk: { en: "Sephora Canada", ko: "세포라 캐나다" } });
  if (p.ulikeUrl) links.push({ store: "Ulike", href: p.ulikeUrl, perk: { en: "Ulike's official store", ko: "Ulike 공식 스토어" } });
  if (p.oliveYoungKoreaUrl) {
    links.push({
      store: "Olive Young Korea",
      href: p.oliveYoungKoreaUrl,
      perk: { en: "For delivery in Korea · 국내 배송", ko: "한국 국내 배송" },
    });
  }
  return links;
}

export const liveProducts = products.filter((p) => p.name && p.note && productLinks(p).length > 0);
export const shopIsLive = liveProducts.length > 0;

const storesInUse = new Set(liveProducts.flatMap((p) => productLinks(p).map((l) => l.store)));
export const hasOliveYoung = storesInUse.has("Olive Young");

// Affiliate disclosure, adapted to the stores actually linked. Amazon requires its exact
// English line, so it stays in English on the Korean page too.
const amazonLine = storesInUse.has("Amazon") ? "As an Amazon Associate, Jenny Kim earns from qualifying purchases." : "";
export const SHOP_DISCLOSURE = {
  en: ["Jenny may earn a commission on purchases made through links on this page, at no extra cost to you.", amazonLine]
    .filter(Boolean)
    .join(" "),
  ko: ["이 페이지의 링크로 구매하시면 제니가 수수료를 받을 수 있어요. 추가로 내시는 비용은 없어요.", amazonLine]
    .filter(Boolean)
    .join(" "),
};
