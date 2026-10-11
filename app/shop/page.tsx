// The Edit — products Jenny recommends, with affiliate links (Olive Young, Sephora, Amazon).
// Hidden until lib/shop.ts has at least one complete product.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SHOP_DISCLOSURE, hasOliveYoung, liveProducts, productLinks, shopIsLive } from "@/lib/shop";

const title = "The Edit — Skincare Jenny Recommends";
const description =
  "A short edit of K-beauty skincare Toronto beauty consultant Jenny Kim recommends, from Biodance and more, with 5% off through her Olive Young links.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/shop" },
  openGraph: { title, description, url: "/shop" },
};

export default function ShopPage() {
  if (!shopIsLive) notFound();

  return (
    <>
      <Nav home={false} />
      <main id="top" className="guide">
        <section className="section">
          <div className="wrap-narrow">
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">The Edit</span>
            </nav>

            <header className="mt-4">
              <p className="eyebrow chrome">The Edit · Shop</p>
              <h1 className="display-sm mt-2">
                A short edit, chosen with <em>care</em>.
              </h1>
              <p className="lede mt-3">
                Skincare Jenny recommends.
                {hasOliveYoung && " Shop through her Olive Young links for 5% off."}
              </p>
              <p className="shop-disclosure mt-3">{SHOP_DISCLOSURE}</p>
            </header>

            <ul className="shop-list guide-block">
              {liveProducts.map((p) => (
                <li key={p.slug} className="shop-item">
                  <p className="eyebrow">{p.brand}</p>
                  <h2 className="shop-name">{p.name}</h2>
                  <p className="shop-note">{p.note}</p>
                  <div className="shop-links">
                    {productLinks(p).map((l) => (
                      <a
                        key={l.store}
                        href={l.href}
                        className="quiet-link"
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                      >
                        Shop at {l.store} <span aria-hidden="true">→</span>
                        {l.perk && <span className="shop-perk">{l.perk}</span>}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <p className="disclaimer guide-block">
              Product notes are personal recommendations, not medical advice. Patch test new
              products, and check ingredients if you have sensitivities. {SHOP_DISCLOSURE}
              {hasOliveYoung &&
                " Olive Young's 5% discount is set by Olive Young and may change. Olive Young Global ships from Korea; duties may apply."}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
