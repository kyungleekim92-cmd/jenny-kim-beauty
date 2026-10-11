import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import "./animations.css";
import { site } from "@/lib/site";

// Latin fonts first; the Korean fonts only cover Hangul (unicode-range), so browsers download
// them only on pages with Korean text. globals.css combines them into --font-serif / --font-sans.
const serif = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serifKo = Noto_Serif_KR({
  variable: "--font-serif-kr",
  weight: ["300", "400", "500"],
  preload: false,
});

const sansKo = Noto_Sans_KR({
  variable: "--font-sans-kr",
  weight: ["400", "500"],
  preload: false,
});

const title = `${site.brand} — Independent Skincare & Aesthetics Consultant, Toronto`;
const description =
  "Private skincare consultations in Toronto with Jenny Kim. Independent guidance on Botox, dermal fillers, lasers, Ultherapy, HydraFacial and more, with introductions to trusted medi spas.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Other pages set their own title; the brand is appended to each.
  title: { default: title, template: `%s | ${site.brand}` },
  description,
  alternates: { canonical: "/" },
  verification: {
    google: site.verification.google || undefined,
    other: site.verification.bing ? { "msvalidate.01": site.verification.bing } : undefined,
  },
  openGraph: {
    title,
    description,
    siteName: `${site.brand}, ${site.brandLine}`,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${serifKo.variable} ${sansKo.variable}`}>
      <body>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
