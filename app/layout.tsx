import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import "./animations.css";
import { site } from "@/lib/site";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const title = `${site.brand}, ${site.brandLine} — Private Skincare Consultations in Toronto`;
const description =
  "Jenny Kim is an independent beauty consultant in Toronto. Private, unhurried skincare consultations, honest treatment guidance, and referrals to vetted medi spas.";

// No metadataBase yet: on Vercel, Next.js resolves the share image against the deployment URL.
// Set it here once the site has its own domain.
export const metadata: Metadata = {
  title,
  description,
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
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
