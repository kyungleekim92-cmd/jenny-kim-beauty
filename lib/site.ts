// Brand & business constants — Jenny Kim, Beauty Consultant
export const site = {
  brand: "Jenny Kim",
  brandLine: "Beauty Consultant",
  tagline: "Independent skincare guidance, privately given.",
  venue: {
    name: "St. Regis Hotel and Residences",
    address: "311 Bay St., 32nd floor",
    city: "Toronto",
    blurb:
      "Private consultations by appointment.",
  },
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
    // PLACEHOLDERS — replace with real details before launch
    email: "hello@jennykimbeauty.example",
    phone: "+1 (416) 555-0132",
    instagram: "https://instagram.com/",
  },
};

export const VENUE_LINE = `${site.venue.name}, ${site.venue.address}, ${site.venue.city}`;
