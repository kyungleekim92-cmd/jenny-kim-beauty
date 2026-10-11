// 12 skin conditions → treatment slugs (from the content brief's quiz map).
// Used by the Skin Quiz, and each has its own page at /concerns/[page].
export interface Condition {
  slug: string;
  /** URL segment for /concerns/[page] — descriptive for search, independent of `slug`. */
  page: string;
  name: string;
  question: string;
  /** Educational overview for the concern page. Measured language: Jenny is not a practitioner. */
  overview: string[];
  treatments: string[];
}

export const conditions: Condition[] = [
  {
    slug: "acne",
    page: "acne-breakouts",
    name: "Breakouts & Acne",
    question: "Do you deal with breakouts, blackheads, or inflamed spots?",
    overview: [
      "Breakouts form when oil, dead skin cells and bacteria collect in pores, and hormones, stress, products and habits can all play a part. Persistent, painful or scarring acne deserves a physician's or dermatologist's assessment first, since prescription care is often the foundation.",
      "Alongside that care, in-clinic treatments may help keep pores clearer, calm active spots or address the marks breakouts leave behind. The right choice depends on whether your concern is congestion, inflammation or post-acne marks, and on your skin tone.",
    ],
    treatments: ["hydrafacial", "chemical-peels", "laser-genesis", "picosure", "acne-shot", "pdt"],
  },
  {
    slug: "pigmentation",
    page: "pigmentation-sun-spots",
    name: "Pigmentation & Sun Spots",
    question: "Are sun spots, melasma patches, or uneven tone a concern?",
    overview: [
      "Uneven tone usually has one of a few sources: sun spots and freckles from UV exposure, melasma linked to hormones and heat, or marks left after inflammation such as acne. They can look alike but respond very differently to treatment.",
      "Light- and laser-based options may fade some types of pigment, while others, melasma especially, can worsen with the wrong heat or intensity. Daily sun protection underpins any plan. Skin tone matters a great deal here, so a practitioner's assessment comes first.",
    ],
    treatments: ["picosure", "lumecca", "m22-ipl", "chemical-peels", "laser-genesis", "co2-laser"],
  },
  {
    slug: "fine-lines",
    page: "fine-lines-wrinkles",
    name: "Fine Lines & Wrinkles",
    question: "Are expression lines or etched-in wrinkles bothering you?",
    overview: [
      "Lines tend to come in two kinds. Dynamic lines appear with expression, such as frown lines and crow's feet. Static lines remain at rest and often reflect changes in collagen, volume and skin quality over time.",
      "Because the causes differ, so do the approaches: relaxing movement, restoring lost volume, or encouraging collagen through energy-based devices. Many people find a combination, planned gradually, looks most natural.",
    ],
    treatments: ["botox", "dermal-fillers", "ultherapy", "thermage", "laser-genesis", "forma"],
  },
  {
    slug: "scars",
    page: "acne-scars",
    name: "Acne Scars",
    question: "Do you have pitted, rolling, or textured acne scars?",
    overview: [
      "Acne scars vary in shape. Rolling scars have soft, sloping edges; boxcar scars have defined walls; ice-pick scars are narrow and deep. Most people have a mix, which is why a single treatment rarely addresses all of them.",
      "Options range from resurfacing and collagen-stimulating devices to releasing tethered scars or adding support beneath them. Improvement is usually gradual over several sessions, and active acne is best controlled first.",
    ],
    treatments: ["fractora", "co2-laser", "subcision", "picosure", "chemical-peels", "dermal-fillers"],
  },
  {
    slug: "pores",
    page: "enlarged-pores",
    name: "Visible Pores",
    question: "Do enlarged-looking pores bother you, especially around the nose and cheeks?",
    overview: [
      "Pore size is largely set by genetics, but pores can look larger with oil, congestion, sun damage and the loss of firmness that comes with time.",
      "Treatments cannot shrink a pore's structure permanently, yet they may refine how pores look by clearing congestion, moderating oil or improving the firmness of the surrounding skin. Consistent home care helps results last.",
    ],
    treatments: ["botox", "laser-genesis", "picosure", "fractora", "hydrafacial", "chemical-peels"],
  },
  {
    slug: "redness",
    page: "redness-rosacea",
    name: "Redness & Rosacea",
    question: "Do you flush easily, or live with persistent redness or visible vessels?",
    overview: [
      "Persistent redness can come from rosacea, visible broken capillaries, sensitivity or sun damage. Rosacea often flares with heat, alcohol, spicy food or stress, and is worth confirming with a physician, who may also recommend prescription care.",
      "Light-based treatments may reduce the look of visible vessels and background redness over a short series. Identifying your triggers, and choosing gentle skincare, makes any in-clinic treatment more effective.",
    ],
    treatments: ["lumecca", "m22-ipl", "laser-genesis"],
  },
  {
    slug: "slimming",
    page: "sagging-skin",
    name: "Sagging & Laxity",
    question: "Is mild sagging along the jawline, neck, or body your main concern?",
    overview: [
      "Mild laxity along the jawline, neck or brow is a natural part of collagen and elastin changing over time, often accelerated by sun exposure and weight change.",
      "Energy-based devices may tighten and lift mild to moderate laxity without surgery by stimulating new collagen, with results building over months. Significant sagging may need a surgical conversation, and an honest assessment of which group you fall into saves time and money.",
    ],
    treatments: ["ultherapy", "thermage", "forma", "fractora", "botox", "minifx"],
  },
  {
    slug: "stubborn-fat",
    page: "stubborn-fat",
    name: "Stubborn Fat Pockets",
    question: "Are there small, localised areas of fat that won't shift?",
    overview: [
      "Small, localised pockets, such as under the chin or along the bra line, can persist despite a healthy routine. In-clinic treatments are designed for contouring these areas, not for weight loss.",
      "Options include injectables that break down fat cells and devices that combine fat reduction with skin tightening. Suitability depends on the area, skin quality and your expectations, all assessed by a practitioner.",
    ],
    treatments: ["lipolysis", "minifx"],
  },
  {
    slug: "tattoo-removal",
    page: "tattoo-removal",
    name: "Tattoo Removal",
    question: "Is there ink you'd like faded or removed?",
    overview: [
      "Modern picosecond lasers break ink into very fine particles that the body gradually clears. Black ink tends to respond most readily; some colours take longer, and a few may not fully clear.",
      "Removal usually takes several sessions spaced weeks apart, depending on the ink, its depth and age, and your skin tone. A patch test and a realistic session estimate are part of a good start.",
    ],
    treatments: ["picosure"],
  },
  {
    slug: "mole-removal",
    page: "mole-removal",
    name: "Mole Removal",
    question: "A small benign mole you'd like assessed for removal? (Anything suspicious needs a physician first.)",
    overview: [
      "Any mole that is new, changing, irregular, itchy or bleeding must be assessed by a physician or dermatologist before anything else. Cosmetic removal is only for moles a physician has confirmed to be benign.",
      "For those, laser or other methods may remove or flatten a raised mole, with attention to healing and the risk of a mark or pigment change. A practitioner explains what to expect for your skin.",
    ],
    treatments: ["co2-laser"],
  },
  {
    slug: "hyperhidrosis",
    page: "excess-sweating",
    name: "Excess Sweating",
    question: "Do you struggle with excessive underarm or palm sweating?",
    overview: [
      "Excessive sweating, known as hyperhidrosis, most often affects the underarms, palms and feet, and can be surprisingly disruptive day to day. It is worth mentioning to a physician, who can rule out underlying causes.",
      "Injections that temporarily block the nerve signals to sweat glands are an established option for underarm sweating, with effects typically lasting several months. A practitioner confirms whether it suits you.",
    ],
    treatments: ["botox"],
  },
  {
    slug: "dullness",
    page: "dull-dehydrated-skin",
    name: "Dull, Dry or Dehydrated Skin",
    question: "Does your skin look tired, feel tight, or lack its usual glow?",
    overview: [
      "Skin can look dull when dead cells build up, when it lacks water, or after stress, travel and poor sleep. Dehydration, a lack of water, is different from dryness, a lack of oil, and the distinction shapes the right care.",
      "Exfoliating and hydrating treatments may restore radiance quickly, while skin boosters aim to improve hydration from within over a short series. Gentle, consistent home care keeps the glow.",
    ],
    treatments: ["hydrafacial", "dermal-fillers", "chemical-peels", "laser-genesis"],
  },
];
