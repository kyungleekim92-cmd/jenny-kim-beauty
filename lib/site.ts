// Brand & business constants — Jenny Kim, Beauty Consultant
export const site = {
  brand: "Jenny Kim",
  brandLine: "Beauty Consultant",
  url: "https://www.byjennykim.com",
  tagline: "Independent skincare guidance, privately given.",
  venue: {
    address: "311 Bay St., 32nd floor",
    city: "Toronto",
    blurb:
      "Private consultations by appointment.",
  },
  // Consultation hours, by appointment only. `days` feeds structured data (schema.org day names);
  // `opens`/`closes` are 24-hour times.
  hours: [
    { label: "Monday – Friday", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00", display: "10 am – 7 pm" },
    { label: "Saturday – Sunday", days: ["Saturday", "Sunday"], opens: "11:00", closes: "16:00", display: "11 am – 4 pm" },
  ],
  // Extensible category system: skincare now; hair, nail, fashion, travel later.
  categories: [
    { slug: "skincare", name: "Skin", active: true },
    { slug: "hair", name: "Hair", active: false },
    { slug: "nail", name: "Nails", active: false },
    { slug: "fashion", name: "Style", active: false },
    { slug: "travel", name: "Travel", active: false },
  ],
  // Section anchors, in page order. #top (wordmark) and #consult (CTA) are linked separately.
  nav: [
    { href: "#how", label: "Approach" },
    { href: "#guides", label: "Guides" },
    { href: "#quiz", label: "Skin Quiz" },
    { href: "#about", label: "About" },
    { href: "#partners", label: "Partners" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ],
  contact: {
    instagramHandle: "kyunglxx",
    instagram: "https://www.instagram.com/kyunglxx/",
  },
  // Web3Forms access key — booking requests and quiz emails are delivered to the inbox
  // it was created with. Get one free at https://web3forms.com (no account needed).
  // It is public by design (it can only send to that inbox), so it lives here, not in env.
  // While empty, forms tell visitors to message Jenny on Instagram instead.
  formsAccessKey: "",
  // Search engine ownership checks. Paste the code from each console's "HTML tag" option
  // (just the content="…" value). Empty values are left out of the page.
  verification: {
    google: "L-Or8XREXo1I6P05Yf90VIbVe58xNo9YDOe2UxqcHiI",
    bing: "",
  },
  // IndexNow key (Bing, Yandex and others): served at /<key>.txt from public/.
  // scripts/indexnow.mjs submits every sitemap URL so new pages are crawled within hours.
  indexNowKey: "96158b1402228e6704311920118d015b",
};

export const VENUE_LINE = `${site.venue.address}, ${site.venue.city}`;
