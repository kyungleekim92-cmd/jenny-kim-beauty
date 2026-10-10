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
      "Every consultation takes place in a private suite at the St. Regis Hotel and Residences — unhurried, discreet, and entirely about you.",
  },
  // Extensible category system: skincare now; hair, nail, fashion, travel later.
  categories: [
    { slug: "skincare", name: "Skin", active: true },
    { slug: "hair", name: "Hair", active: false },
    { slug: "nail", name: "Nails", active: false },
    { slug: "fashion", name: "Style", active: false },
    { slug: "travel", name: "Travel", active: false },
  ],
  nav: [
    { href: "/guides", label: "Guides" },
    { href: "/quiz", label: "Skin Quiz" },
    { href: "/about", label: "About" },
    { href: "/partners", label: "Partners" },
  ],
  contact: {
    // PLACEHOLDERS — replace with real details before launch
    email: "hello@jennykimbeauty.example",
    phone: "+1 (416) 555-0132",
    instagram: "https://instagram.com/",
  },
};

export const VENUE_LINE = `${site.venue.name}, ${site.venue.address}, ${site.venue.city}`;
