// Jenny Kim, Beauty Consultant — the short home, in either language: hero, a book-style table
// of contents linking to the chapter pages, and a slim booking call-to-action.
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import Contents from "@/components/Contents";
import BookCta from "@/components/BookCta";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import LangRoot from "@/components/views/LangRoot";
import { homeJsonLd } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";

export default function HomeView({ lang }: { lang: Lang }) {
  return (
    <LangRoot lang={lang}>
      <JsonLd data={homeJsonLd(lang)} />
      <Nav lang={lang} path="/" />
      <main className="home">
        <Hero lang={lang} />
        <Statement>
          {lang === "ko" ? (
            <>
              당신의 피부는 하루하루 쌓이는 습관으로 달라져요.
              <br />
              홈케어를 기본으로, 시술은 꼭 필요할 때 충분한 상담과 함께요.
            </>
          ) : (
            <>
              Your skin changes through small, daily rituals.
              <br />
              Homecare is the foundation; treatment comes only when necessary, and always after a
              proper consultation.
            </>
          )}
        </Statement>
        <Contents lang={lang} />
        <BookCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </LangRoot>
  );
}
