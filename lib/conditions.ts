// 12 skin conditions → treatment slugs (from the content brief's quiz map).
// Used by the Skin Quiz and the Guides index filter.
export interface Condition {
  slug: string;
  name: string;
  question: string;
  treatments: string[];
}

export const conditions: Condition[] = [
  {
    slug: "acne",
    name: "Breakouts & Acne",
    question: "Do you deal with breakouts, blackheads, or inflamed spots?",
    treatments: ["hydrafacial", "chemical-peels", "laser-genesis", "picosure", "acne-shot", "pdt"],
  },
  {
    slug: "pigmentation",
    name: "Pigmentation & Sun Spots",
    question: "Are sun spots, melasma patches, or uneven tone a concern?",
    treatments: ["picosure", "lumecca", "m22-ipl", "chemical-peels", "laser-genesis", "co2-laser"],
  },
  {
    slug: "fine-lines",
    name: "Fine Lines & Wrinkles",
    question: "Are expression lines or etched-in wrinkles bothering you?",
    treatments: ["botox", "dermal-fillers", "ultherapy", "thermage", "laser-genesis", "forma"],
  },
  {
    slug: "scars",
    name: "Acne Scars",
    question: "Do you have pitted, rolling, or textured acne scars?",
    treatments: ["fractora", "co2-laser", "subcision", "picosure", "chemical-peels", "dermal-fillers"],
  },
  {
    slug: "pores",
    name: "Visible Pores",
    question: "Do enlarged-looking pores bother you, especially around the nose and cheeks?",
    treatments: ["botox", "laser-genesis", "picosure", "fractora", "hydrafacial", "chemical-peels"],
  },
  {
    slug: "redness",
    name: "Redness & Rosacea",
    question: "Do you flush easily, or live with persistent redness or visible vessels?",
    treatments: ["lumecca", "m22-ipl", "laser-genesis"],
  },
  {
    slug: "slimming",
    name: "Sagging & Laxity",
    question: "Is mild sagging along the jawline, neck, or body your main concern?",
    treatments: ["ultherapy", "thermage", "forma", "fractora", "botox", "minifx"],
  },
  {
    slug: "stubborn-fat",
    name: "Stubborn Fat Pockets",
    question: "Are there small, localised areas of fat that won't shift?",
    treatments: ["lipolysis", "minifx"],
  },
  {
    slug: "tattoo-removal",
    name: "Tattoo Removal",
    question: "Is there ink you'd like faded or removed?",
    treatments: ["picosure"],
  },
  {
    slug: "mole-removal",
    name: "Mole Removal",
    question: "A small benign mole you'd like assessed for removal? (Anything suspicious needs a physician first.)",
    treatments: ["co2-laser"],
  },
  {
    slug: "hyperhidrosis",
    name: "Excess Sweating",
    question: "Do you struggle with excessive underarm or palm sweating?",
    treatments: ["botox"],
  },
  {
    slug: "dullness",
    name: "Dull, Dry or Dehydrated Skin",
    question: "Does your skin look tired, feel tight, or lack its usual glow?",
    treatments: ["hydrafacial", "dermal-fillers", "chemical-peels", "laser-genesis"],
  },
];
