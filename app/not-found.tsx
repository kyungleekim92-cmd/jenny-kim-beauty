import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Shown for any address that doesn't exist (and for unknown guide or concern slugs).
// It can't tell which language the visitor came from, so it offers both.
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Nav lang="en" path="/" home={false} />
      <main id="top" className="guide">
        <section className="section">
          <div className="wrap-narrow">
            <p className="eyebrow chrome">404</p>
            <h1 className="display-sm mt-2">This page couldn&apos;t be found.</h1>
            <p className="lede mt-3">
              The address may have changed. Everything is still here, starting from the home page.
            </p>
            <p className="mt-3">
              <Link href="/" className="quiet-link">Home</Link>
              {"  ·  "}
              <Link href="/guides" className="quiet-link">Treatment guides</Link>
              {"  ·  "}
              <Link href="/book" className="quiet-link">Book a consultation</Link>
            </p>

            <div lang="ko" className="mt-4">
              <p className="lede">찾으시는 페이지가 없어요. 주소가 바뀌었을 수 있어요.</p>
              <p className="mt-3">
                <Link href="/ko" className="quiet-link">홈으로</Link>
                {"  ·  "}
                <Link href="/ko/guides" className="quiet-link">시술 가이드</Link>
                {"  ·  "}
                <Link href="/ko/book" className="quiet-link">상담 예약하기</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
