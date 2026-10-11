// The Edit (/shop, /ko/shop) — products Jenny recommends, with affiliate links.
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LangRoot from "@/components/views/LangRoot";
import { pageCopy } from "@/components/views/copy";
import { localePath, type Lang } from "@/lib/i18n";
import { shopCopy } from "@/lib/i18n/content";
import { SHOP_DISCLOSURE, hasOliveYoung, liveProducts, productLinks, storeNames } from "@/lib/shop";

const copy = {
  en: {
    crumb: "The Edit",
    eyebrow: "The Edit · Shop",
    title: (
      <>
        A short edit, chosen with <em>care</em>.
      </>
    ),
    lede: "Skincare Jenny recommends.",
    ledeOliveYoung: " Shop through her Olive Young links for 5% off.",
    shopAt: (store: string) => `Shop at ${store}`,
    notes:
      "Product notes are personal recommendations, not medical advice. Patch test new products, and check ingredients if you have sensitivities.",
    oliveYoungNote:
      " Olive Young's 5% discount is set by Olive Young and may change. Olive Young Global ships from Korea; duties may apply.",
  },
  ko: {
    crumb: "디 에디트",
    eyebrow: "디 에디트 · 숍",
    title: (
      <>
        정성껏 고른 <em>짧은</em> 셀렉션.
      </>
    ),
    lede: "제니가 추천하는 스킨케어.",
    ledeOliveYoung: " 제니의 올리브영 링크로 구매하시면 5% 할인됩니다.",
    shopAt: (store: string) => `${store}에서 구매`,
    notes:
      "제품 소개는 개인적인 추천이며 의학적 조언이 아닙니다. 새 제품은 패치 테스트를 먼저 해 보시고, 민감한 성분이 있다면 전성분을 확인해 주세요.",
    oliveYoungNote:
      " 올리브영의 5% 할인은 올리브영의 정책으로 변경될 수 있습니다. 올리브영 글로벌은 한국에서 발송되며 관세가 부과될 수 있습니다.",
  },
};

export default function ShopView({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const p = pageCopy[lang];

  return (
    <LangRoot lang={lang}>
      <Nav lang={lang} path="/shop" home={false} />
      <main id="top" className="guide">
        <section className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href={localePath(lang, "/")}>{p.home}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{t.crumb}</span>
            </nav>

            <header className="mt-4">
              <p className="eyebrow chrome">{t.eyebrow}</p>
              <h1 className="display-sm mt-2">{t.title}</h1>
              <p className="lede mt-3">
                {t.lede}
                {hasOliveYoung && t.ledeOliveYoung}
              </p>
              <p className="shop-disclosure mt-3">{SHOP_DISCLOSURE[lang]}</p>
            </header>

            <ul className="shop-list guide-block">
              {liveProducts.map((product) => {
                const local = shopCopy[lang][product.slug];
                return (
                  <li key={product.slug} className="shop-item">
                    <p className="eyebrow">{product.brand}</p>
                    <h2 className="shop-name">{local?.name ?? product.name}</h2>
                    <p className="shop-note">{local?.note ?? product.note}</p>
                    <div className="shop-links">
                      {productLinks(product).map((l) => (
                        <a
                          key={l.store}
                          href={l.href}
                          className="quiet-link"
                          target="_blank"
                          rel="sponsored noopener noreferrer"
                        >
                          {t.shopAt(storeNames[l.store][lang])} <span aria-hidden="true">→</span>
                          <span className="shop-perk">{l.perk[lang]}</span>
                        </a>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>

            <p className="disclaimer guide-block">
              {t.notes} {SHOP_DISCLOSURE[lang]}
              {hasOliveYoung && t.oliveYoungNote}
            </p>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </LangRoot>
  );
}
