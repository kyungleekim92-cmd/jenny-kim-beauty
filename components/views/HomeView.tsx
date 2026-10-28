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
      <main>
        <Hero lang={lang} />
        <Statement>
          {lang === "ko" ? (
            <>
              피부는 매일의 연습이에요.
              <br />
              집에서는 꾸준하게,
              <br />
              시술이 필요할 땐 제대로 안내받으면서요.
              <br />
              이 페이지들은 그런 마음으로 만들었어요.
            </>
          ) : (
            <>
              Skin is a daily practice.
              <br />
              Homecare, guided well when a treatment is right.
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
