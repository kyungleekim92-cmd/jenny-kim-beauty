export const DISCLAIMER =
  "Jenny is an independent consultant, not a medical practitioner. Treatment details are educational, not medical advice; your plan is confirmed with a licensed practitioner at a partner spa. Individual results vary.";

export interface Treatment {
  slug: string;
  category: string;
  number: string;
  name: string;
  tagline: string;
  explainer: string[];
  quickFacts: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
  concerns: string[];
  cta: string;
}

export const treatments: Treatment[] = [
  {
    slug: "botox",
    category: "skincare",
    number: "01",
    name: "Botox & Targeted Toxin",
    tagline: "Quiet the muscles behind the lines.",
    explainer: [
      "Botulinum toxin type A is a purified protein that temporarily relaxes overactive muscles. Because many expression lines are shaped by repeated movement, softening that movement may ease forehead lines, crow's feet and frown lines over time. Health Canada authorizes specific products for specific uses, so the product name on the vial matters.",
      "You may also hear about variations. SkinTox uses a diluted, superficial placement that many clients explore for oil and the look of pores. Barbie Tox or TrapTox targets the trapezius for a slimmer neck-and-shoulder line or tension relief, and CalfTox is used for calf contouring. These are outside standard labelled uses, and a practitioner decides whether they suit you. Please discuss your options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 10–20 minutes" },
      { label: "Sessions", value: "Maintenance typically every 3–6 months (calf, 6–12 months); full effect may take 1–4 weeks" },
      { label: "Downtime", value: "Minimal to none" },
      { label: "Ideal for", value: "Expression lines, and, off-label, oil and pore concerns, trapezius or calf contouring, as assessed by a practitioner" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Is it right for everyone?", a: "No. It is generally not recommended during pregnancy or breastfeeding, with certain neuromuscular conditions, or with a known allergy to the toxin. A practitioner reviews your history first." },
      { q: "What side effects can happen?", a: "Bruising and swelling at injection points are possible, and nearby muscles may temporarily weaken. Your practitioner explains what to watch for." },
      { q: "Are SkinTox, Barbie Tox and CalfTox standard uses?", a: "They are outside standard labelled uses. Whether they are appropriate for you is a decision for the licensed practitioner after assessment." }
    ],
    concerns: ["fine-lines", "pores", "hyperhidrosis", "slimming"],
    cta: "Talk through which toxin approach fits your expressions"
  },
  {
    slug: "dermal-fillers",
    category: "skincare",
    number: "02",
    name: "Dermal Fillers",
    tagline: "Restore volume, hydration and soft contour.",
    explainer: [
      "Fillers are not one product but a family. Hyaluronic acid (HA) fillers add volume or hydration and can be dissolved if needed. Radiesse uses calcium hydroxylapatite to lift and prompt collagen, and Sculptra uses poly-L-lactic acid to build collagen gradually, including in areas such as hip dips. Skin boosters like SkinVive place micro-droplets of HA for hydration rather than volume, and neckline fillers address horizontal tech-neck lines.",
      "Many clients find it helpful to separate what they want, such as lift, softness, glow or smoother texture, from the product names. The right choice depends on your anatomy and goals, and a good plan is often gradual. Please discuss options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 30–60 minutes including numbing" },
      { label: "Sessions", value: "HA and Radiesse: usually one session plus touch-ups. Sculptra: typically 2–3 sessions 4–6 weeks apart. Boosters: a short series, then maintenance" },
      { label: "Downtime", value: "Minimal; swelling or bruising may last a few days" },
      { label: "Ideal for", value: "Volume loss, hydration, fine lines, texture, tech-neck lines. Longevity varies: HA 6 months–2 years, Radiesse 12–18 months, Sculptra 2+ years, SkinVive about 6 months, neckline about 9–12 months" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Can filler be undone?", a: "HA fillers can be dissolved by a practitioner. Other fillers, such as Radiesse and Sculptra, cannot be dissolved in the same way, so planning matters." },
      { q: "Will I look overdone?", a: "Not if the plan is conservative. Starting modestly and adding later is a common approach." },
      { q: "Will it hurt?", a: "Numbing is typically used, though you may feel pressure. Bruising and swelling for a few days are common." }
    ],
    concerns: ["fine-lines", "scars", "dullness"],
    cta: "Compare filler types before you book a practitioner"
  },
  {
    slug: "ultherapy",
    category: "skincare",
    number: "03",
    name: "Ultherapy",
    tagline: "Lift from beneath, without a scalpel.",
    explainer: [
      "Ultherapy uses focused ultrasound to deliver heat to deeper tissue layers, which may stimulate the body to build new collagen. Imaging lets the practitioner see the layers they are treating. It is typically used for mild to moderate laxity on the face, neck and décolletage.",
      "It tends to suit people who notice early softening along the jawline or brow but are not ready for surgery. It is not a substitute for a facelift, and significant laxity may need a surgical conversation. Please discuss whether it fits your goals with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 60–90 minutes" },
      { label: "Sessions", value: "Usually one; results may peak at 2–3 months and can last a year or more" },
      { label: "Downtime", value: "None to minimal; redness may last a few hours" },
      { label: "Ideal for", value: "Mild to moderate laxity of the face, neck and décolletage" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "What does it feel like?", a: "Many clients describe warmth and prickling. Ask your practitioner about comfort options beforehand." },
      { q: "When will I see results?", a: "Gradually. Collagen remodelling takes time, with changes typically building over two to three months." },
      { q: "Is it right if my skin is quite loose?", a: "Possibly not. Significant laxity may be better addressed surgically, and an honest assessment will tell you." }
    ],
    concerns: ["fine-lines", "slimming"],
    cta: "Ask whether focused ultrasound suits your jawline"
  },
  {
    slug: "thermage",
    category: "skincare",
    number: "04",
    name: "Thermage",
    tagline: "Radiofrequency warmth for firmer-feeling skin.",
    explainer: [
      "Thermage uses radiofrequency energy to heat deep layers of skin, which may cause existing collagen to contract and prompt new collagen over the following months. A cooling mechanism helps protect the surface. A dedicated eye version treats the delicate eye area, with protective shields in place.",
      "It tends to suit those who notice early crepey texture or softening and want a non-surgical, low-downtime option. Body areas such as the abdomen, arms and thighs can also be treated. Please discuss whether it is appropriate for you with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 30–90 minutes depending on area" },
      { label: "Sessions", value: "Usually one; full effect may take 2–6 months and typically lasts about 1–2 years (eyes, 12–18 months)" },
      { label: "Downtime", value: "None; redness typically fades within hours" },
      { label: "Ideal for", value: "Early skin laxity, fine lines, eye area, and some body areas" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Does it hurt?", a: "Many clients describe bursts of warmth followed by cooling. Sensation varies by person and area." },
      { q: "Why wait months for results?", a: "New collagen forms slowly. Some tightening may be noticed early, but fuller changes typically unfold over several months." },
      { q: "Can it treat the eye area?", a: "A specific eye treatment exists and uses protective shields. Your practitioner determines suitability." }
    ],
    concerns: ["fine-lines", "slimming"],
    cta: "Learn what radiofrequency tightening can and cannot do"
  },
  {
    slug: "picosure",
    category: "skincare",
    number: "05",
    name: "PicoSure",
    tagline: "Picosecond precision for ink and pigment.",
    explainer: [
      "PicoSure is a picosecond laser, meaning it delivers extremely short pulses that shatter ink or pigment into tiny particles the body then clears. It may also stimulate collagen. It is used for tattoo removal, including blue and green inks, as well as sun spots, acne scars and general skin rejuvenation.",
      "Results depend on tattoo size, colour and depth, and on your skin. Those with darker skin tones carry a higher risk of pigment changes, so an experienced practitioner is essential, and sun protection afterwards is critical. Please discuss your options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 15–45 minutes" },
      { label: "Sessions", value: "Tattoos: multiple sessions spaced weeks apart, varying with size, colour, depth and skin. Rejuvenation: a series" },
      { label: "Downtime", value: "Minimal; redness, swelling or light bruising may last a few days" },
      { label: "Ideal for", value: "Tattoo removal, sun spots, acne scars, rejuvenation" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Will my tattoo disappear completely?", a: "Not always. Some inks fade more readily than others, and a full clearance cannot be promised." },
      { q: "Is it suitable for darker skin?", a: "It can carry a higher risk of pigment change, so choose an experienced practitioner and expect a careful assessment." },
      { q: "What aftercare matters most?", a: "Sun protection. Skipping it raises the risk of pigmentation problems." }
    ],
    concerns: ["pigmentation", "scars", "tattoo-removal", "pores"],
    cta: "Ask how a tattoo removal plan would unfold for your ink"
  },
  {
    slug: "hydrafacial",
    category: "skincare",
    number: "06",
    name: "Hydrafacial",
    tagline: "A clean, glowing reset in an hour.",
    explainer: [
      "Hydrafacial is a multi-step facial: cleansing, exfoliation, suction-based extraction and serum infusion, with optional add-ons such as LED light and lymphatic massage. A related variant, Venus Glow, uses rotating tips and water jets. It is a gentle way to refresh the surface without harsh intervention.",
      "Many clients find it suits dull, congested or dehydrated skin, blackheads, a pre-event glow, or as a first step into skincare treatments. One session may show visible freshness, while monthly visits tend to build on it. Please discuss what suits your skin with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "About 60 minutes" },
      { label: "Sessions", value: "One session may show results; monthly sessions typically build on them" },
      { label: "Downtime", value: "None to minimal" },
      { label: "Ideal for", value: "Dull, congested or dehydrated skin, blackheads, event glow, a first treatment" },
      { label: "Investment", value: "From about $100 CAD per 60 min (partner pricing varies)" }
    ],
    faqs: [
      { q: "Will I peel afterwards?", a: "Typically not. Some people notice mild pinkness that settles quickly." },
      { q: "How often should I go?", a: "Many clients choose monthly, but your needs and budget set the rhythm." },
      { q: "Does it treat acne?", a: "It may help clear congestion, but active or severe acne usually needs a broader plan from a practitioner." }
    ],
    concerns: ["dullness", "acne", "pores"],
    cta: "Plan a Hydrafacial ahead of your next event"
  },
  {
    slug: "chemical-peels",
    category: "skincare",
    number: "07",
    name: "Chemical Peels",
    tagline: "Renew the surface, layer by layer.",
    explainer: [
      "Chemical peels use acid solutions to remove damaged outer layers and encourage renewal. Glycolic acid is often chosen for brightness and texture, salicylic for oily or acne-prone skin, and lactic for gentler care on sensitive or dry skin. TCA CROSS is a targeted, high-strength TCA technique used on individual ice-pick or boxcar scars.",
      "Depth matters: superficial peels are done in series with little downtime, while deeper peels mean days of peeling. People with darker skin face a higher risk of pigmentation or scarring with TCA, so caution is needed. Please discuss which peel suits you with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 30–45 minutes (TCA CROSS is shorter)" },
      { label: "Sessions", value: "Superficial: a series. TCA CROSS: typically 2–6 sessions 4–6 weeks apart, with crusting for 7–10 days" },
      { label: "Downtime", value: "Superficial: minimal. Deeper peels: several days of peeling" },
      { label: "Ideal for", value: "Dullness, texture, acne, pigmentation, pores, certain acne scars" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Will my face peel?", a: "It depends on the depth. Light peels may cause fine flaking, while deeper ones cause visible peeling for days." },
      { q: "Are peels risky for darker skin?", a: "Stronger peels, especially TCA, can raise the risk of pigmentation changes or scarring, so practitioner expertise matters." },
      { q: "Can I wear sun afterwards?", a: "Peeled skin is more sensitive, so sun protection is essential." }
    ],
    concerns: ["dullness", "acne", "pigmentation", "scars", "pores"],
    cta: "Talk through whether peels suit your skin"
  },
  {
    slug: "lumecca",
    category: "skincare",
    number: "08",
    name: "Lumecca IPL",
    tagline: "Targeted light for sun marks and redness.",
    explainer: [
      "Lumecca is a higher-intensity form of intense pulsed light (IPL). Pigment and tiny vessels absorb the light, and the resulting heat breaks them down so the body can clear them. Changes may be visible within one to two weeks.",
      "Many clients consider it for sun damage, freckles, age spots, rosacea-related redness and vascular lesions, typically on lighter to medium skin. Preparation matters: avoid sun and tanning for two weeks, shave rather than wax, and disclose any photosensitizing medications. Darker skin carries a higher risk, and other options may suit better. Please discuss suitability with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 15–30 minutes" },
      { label: "Sessions", value: "Typically 1–3; changes may appear within 1–2 weeks" },
      { label: "Downtime", value: "None to minimal" },
      { label: "Ideal for", value: "Sun damage, freckles, age spots, rosacea redness, vascular lesions; lighter to medium skin" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "How should I prepare?", a: "Avoid sun and tanning for two weeks, shave rather than wax, and tell your practitioner about any photosensitizing medications." },
      { q: "Will spots look darker first?", a: "Pigmented spots may darken before flaking away, which is typically part of the process." },
      { q: "Can darker skin be treated?", a: "There is a higher risk of complications, so alternatives may suit better. A practitioner will advise." }
    ],
    concerns: ["pigmentation", "redness"],
    cta: "Find out if IPL suits your sun spots or redness"
  },
  {
    slug: "m22-ipl",
    category: "skincare",
    number: "09",
    name: "M22 IPL",
    tagline: "A versatile light for tone and clarity.",
    explainer: [
      "M22 is a versatile IPL platform used for pigmentation, redness and broken capillaries. The heat it generates may also encourage collagen production. Sessions are brief, with cooling gel and a sensation many describe as mild snapping or warm tingling.",
      "It tends to suit people with sun-related spots or visible redness who want a short appointment and little downtime. It is not recommended with a recent tan, very dark skin or photosensitizing medications. Please discuss whether it fits with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 10–20 minutes" },
      { label: "Sessions", value: "Typically 3–5, spaced 3–4 weeks apart" },
      { label: "Downtime", value: "Little to none" },
      { label: "Ideal for", value: "Pigmentation, redness, broken capillaries, some acne-related concerns" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Who should avoid it?", a: "Those with a recent tan, very dark skin or photosensitizing medications are generally not suitable." },
      { q: "Does it hurt?", a: "Many clients describe mild snapping or warm tingling, softened by cooling gel." },
      { q: "How many sessions will I need?", a: "Often three to five, but your practitioner tailors the plan." }
    ],
    concerns: ["pigmentation", "redness", "acne"],
    cta: "Ask how a short IPL series could even out your tone"
  },
  {
    slug: "laser-genesis",
    category: "skincare",
    number: "10",
    name: "Laser Genesis",
    tagline: "Gentle warmth, cumulative radiance.",
    explainer: [
      "Laser Genesis is a gentle, non-ablative laser that warms the skin to encourage collagen and improve microcirculation. It does not damage the surface, so results tend to be subtle and build over a series.",
      "Many clients consider it for general redness, fine lines, visible pores, mild scarring and dullness, especially when they want something comfortable and low-key. Suitability varies by skin, and a practitioner assesses this. Please discuss your options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically about 30 minutes" },
      { label: "Sessions", value: "Typically 4–6, spaced weeks apart; results are gradual and cumulative" },
      { label: "Downtime", value: "None to minimal" },
      { label: "Ideal for", value: "Redness, fine lines, pores, mild scarring, dullness" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Is it comfortable?", a: "Many clients describe a comfortable warmth." },
      { q: "Will I see changes right away?", a: "Changes tend to be gradual. Expect them to build across the series." },
      { q: "Is it right for my skin?", a: "That varies. A practitioner assesses your skin before recommending it." }
    ],
    concerns: ["redness", "fine-lines", "pores", "scars", "dullness"],
    cta: "Explore a gentle laser series for calmer, brighter skin"
  },
  {
    slug: "co2-laser",
    category: "skincare",
    number: "11",
    name: "CO2 Laser",
    tagline: "Serious resurfacing for lasting renewal.",
    explainer: [
      "CO2 is an ablative fractional laser. It vaporizes microscopic columns of skin and heats the tissue beneath, which may resurface texture, tighten skin and renew collagen. It can also be used to remove small, superficial moles.",
      "This is one of the more intensive options, with significant downtime: roughly 7–10 days of initial healing with redness, swelling and possible scabbing, and weeks for full recovery. Mole removal may take 1–2 weeks to heal, and strict sun protection is vital. Any suspicious mole needs physician assessment, and possibly a biopsy, first. Please discuss options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 30–90 minutes including numbing" },
      { label: "Sessions", value: "Often one; results may last years" },
      { label: "Downtime", value: "Significant: about 7–10 days of initial healing (redness, swelling, possible scabbing) and weeks for full recovery; mole removal about 1–2 weeks" },
      { label: "Ideal for", value: "Fine lines, scarring, pigmentation, texture, and small superficial moles after physician clearance" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "How long is recovery really?", a: "Plan for a week to ten days of visible healing, with the skin continuing to settle for weeks." },
      { q: "Can any mole be removed?", a: "No. A suspicious mole needs physician assessment, possibly a biopsy, before any removal." },
      { q: "What about sun?", a: "Strict sun protection is needed during and after healing." }
    ],
    concerns: ["fine-lines", "scars", "pigmentation", "mole-removal", "pores"],
    cta: "Plan the recovery window before you consider CO2 resurfacing"
  },
  {
    slug: "fractora",
    category: "skincare",
    number: "12",
    name: "Fractora",
    tagline: "Fine needles, radiofrequency, renewed texture.",
    explainer: [
      "Fractora is a radiofrequency microneedling treatment. Fine needles enter the skin while radiofrequency heat is delivered beneath the surface, prompting collagen remodelling over time.",
      "Many clients consider it for acne scarring, fine lines, enlarged-looking pores and mild loosening. Numbing cream is applied first, and you may feel pressure or heat. Makeup can typically resume after a few days, as your practitioner advises. Please discuss whether it suits you with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 45–60 minutes including numbing" },
      { label: "Sessions", value: "A series spaced weeks apart; results are gradual" },
      { label: "Downtime", value: "Minimal; redness or swelling may last a few days" },
      { label: "Ideal for", value: "Scarring, fine lines, pores, early laxity" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Will it be painful?", a: "Numbing cream is applied first. You may still feel pressure and heat." },
      { q: "When can I wear makeup?", a: "Often after a few days, but follow your practitioner's guidance." },
      { q: "How soon will I see results?", a: "Gradually. Collagen changes take weeks to months." }
    ],
    concerns: ["scars", "fine-lines", "pores", "slimming"],
    cta: "Ask whether RF microneedling could soften your scarring"
  },
  {
    slug: "forma",
    category: "skincare",
    number: "13",
    name: "Forma",
    tagline: "Comfortable heat for a firmer look.",
    explainer: [
      "Forma uses a handheld radiofrequency device to warm the deeper layers of skin without damaging the surface. The heat may firm the skin and stimulate collagen.",
      "It tends to suit people who want gradual, comfortable tightening with no downtime. Results typically build over months, and maintenance sessions are common. Please discuss whether it fits your goals with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 30–60 minutes" },
      { label: "Sessions", value: "A series spaced weeks apart; builds over months, with maintenance typical" },
      { label: "Downtime", value: "None" },
      { label: "Ideal for", value: "Early laxity, fine lines, a gradual firming approach" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Is it comfortable?", a: "Many clients describe a pleasant, comfortable warmth." },
      { q: "Do results last?", a: "Collagen continues to age naturally, so maintenance sessions are typical." },
      { q: "Can I return to my day afterwards?", a: "Generally yes, as there is no downtime." }
    ],
    concerns: ["fine-lines", "slimming"],
    cta: "Discuss a gentle firming series that fits your calendar"
  },
  {
    slug: "prf",
    category: "skincare",
    number: "14",
    name: "PRF",
    tagline: "Pulsed heat to tighten and renew.",
    explainer: [
      "In this context, PRF refers to pulsed radiofrequency, which heats deeper layers to roughly 60–62°C. This may cause immediate contraction of collagen fibres and prompt new collagen over time. Note that PRF can also stand for platelet-rich fibrin, a different treatment, so confirm the device and wording with the practitioner before booking.",
      "Duration and number of sessions vary, so ask the partner spa. Downtime is typically minimal, though rare burns or pigment changes are possible, which is why screening matters. Please discuss your options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Varies; ask your partner spa" },
      { label: "Sessions", value: "Varies; ask your partner spa" },
      { label: "Downtime", value: "Minimal" },
      { label: "Ideal for", value: "Early laxity, fine lines, pores, contouring concerns" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Is this the same as platelet-rich fibrin?", a: "Not necessarily. The abbreviation can mean either, so confirm with the practitioner which treatment is being offered." },
      { q: "Are there risks?", a: "Rare burns or pigment changes are possible. Proper screening and an experienced practitioner reduce the likelihood." },
      { q: "How many sessions do I need?", a: "It varies, so ask the partner spa for their protocol." }
    ],
    concerns: ["fine-lines", "pores", "slimming"],
    cta: "Clarify exactly which PRF your partner spa offers"
  },
  {
    slug: "minifx",
    category: "skincare",
    number: "15",
    name: "MiniFX",
    tagline: "Targeted body contouring, no incisions.",
    explainer: [
      "MiniFX is a non-invasive treatment combining radiofrequency with suction massage to heat deep tissue. It may reduce localized fat and improve the appearance of cellulite.",
      "It is not a weight-loss method and tends to suit people at a stable weight with specific areas they would like to refine. Results may last longer alongside a healthy lifestyle. Please discuss whether it suits you with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 15–30 minutes per session" },
      { label: "Sessions", value: "A series is recommended; changes appear gradually over weeks" },
      { label: "Downtime", value: "None" },
      { label: "Ideal for", value: "Localized fat and cellulite at a stable weight" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Is it for weight loss?", a: "No. It addresses localized areas rather than overall body weight." },
      { q: "What does it feel like?", a: "Many clients describe warmth and a comfortable suction sensation." },
      { q: "How long do results last?", a: "They may last longer with stable weight and a healthy lifestyle, though nothing is guaranteed." }
    ],
    concerns: ["stubborn-fat", "slimming"],
    cta: "See whether body contouring fits your goals and timeline"
  },
  {
    slug: "lipolysis",
    category: "skincare",
    number: "16",
    name: "Lipolysis Injections",
    tagline: "Small pockets, precisely addressed.",
    explainer: [
      "Lipolysis injections place a solution into small, localized fat deposits to break down fat cells, with the body clearing the contents afterwards. Results typically appear over weeks, and several sessions are possible.",
      "They tend to suit a double chin or small pockets on the abdomen, hips, thighs or arms, not large volumes. Swelling, bruising, redness and soreness are common and temporary. Ask about the specific product, its regulatory status in Canada and the evidence behind it, and expect a medical screen if you are pregnant or taking medications. Please discuss options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 30–45 minutes" },
      { label: "Sessions", value: "Multiple sessions possible; results develop over weeks" },
      { label: "Downtime", value: "Minimal; swelling, bruising or redness are temporary and soreness is common" },
      { label: "Ideal for", value: "Double chin and small localized pockets on the abdomen, hips, thighs and arms" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Can it treat large areas?", a: "It is generally not suited to large volumes. Localized deposits are the usual focus." },
      { q: "What should I ask?", a: "Ask which product is used, what its regulatory status is in Canada, and what evidence supports it." },
      { q: "Is it comfortable?", a: "Soreness is common, along with temporary swelling and bruising." }
    ],
    concerns: ["stubborn-fat", "slimming"],
    cta: "Bring your questions about product and evidence to a consultation"
  },
  {
    slug: "acne-shot",
    category: "skincare",
    number: "17",
    name: "Acne Shot",
    tagline: "Fast relief for a single painful cyst.",
    explainer: [
      "An acne shot is a small injection of corticosteroid directly into a large, painful cyst to reduce inflammation quickly. It takes only minutes, and improvement is often noticed within 24–48 hours.",
      "It is used as needed for severe individual breakouts, not as a routine treatment, and is not suited to minor acne. Overuse may risk skin thinning, discoloration or a lasting indentation. Please discuss whether it is appropriate with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "A few minutes" },
      { label: "Sessions", value: "As needed for severe breakouts; not routine" },
      { label: "Downtime", value: "None" },
      { label: "Ideal for", value: "Large, painful cysts, such as before an important event" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "How quickly does it work?", a: "Improvement is often seen within 24–48 hours." },
      { q: "Can I get one for every pimple?", a: "No. It is meant for large, painful cysts, not minor blemishes." },
      { q: "Are there downsides?", a: "Overuse may risk skin thinning, discoloration or indentation, so a practitioner should decide when it is appropriate." }
    ],
    concerns: ["acne"],
    cta: "Ask when a cortisone injection is worth considering"
  },
  {
    slug: "subcision",
    category: "skincare",
    number: "18",
    name: "Subcision",
    tagline: "Release the bands that hold scars down.",
    explainer: [
      "Subcision uses a fine needle or cannula beneath the skin to release fibrous bands that tether rolling or depressed acne scars. As the skin lifts, collagen may also be stimulated. Local anaesthetic is used, and you may feel pressure or tugging.",
      "It tends to suit rolling scars specifically, and it is usually one part of a broader scar plan. Improvement may begin within weeks and smoothing may continue over 3–6 months. Please discuss whether it suits your scars with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Typically 30–60 minutes" },
      { label: "Sessions", value: "Improvement in weeks, with smoothing over 3–6 months; plan set by your practitioner" },
      { label: "Downtime", value: "Minimal; swelling and bruising may last about 5–7 days" },
      { label: "Ideal for", value: "Rolling or depressed acne scars" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Will it feel painful?", a: "Local anaesthetic is used, but pressure or tugging is common." },
      { q: "Does it work on every scar type?", a: "No. It tends to suit rolling scars, while other scar types may need different approaches." },
      { q: "Will I bruise?", a: "Swelling and bruising for about five to seven days are common." }
    ],
    concerns: ["scars"],
    cta: "Identify your scar type before choosing a treatment"
  },
  {
    slug: "pdt",
    category: "skincare",
    number: "19",
    name: "PDT (Photodynamic Therapy)",
    tagline: "Light-activated care for stubborn skin concerns.",
    explainer: [
      "Photodynamic therapy applies a light-sensitizing agent to the skin, which is then activated by a specific wavelength of light to treat targeted cells. In aesthetics, it is used for stubborn acne, sun damage and rejuvenation. Time varies from minutes to an hour or more, including incubation.",
      "Downtime is moderate: redness, peeling and sunburn-like soreness for days, with light sensitivity lasting longer, so strict sun avoidance is needed before and after. Any suspicious lesion needs a physician first, and Jenny does not advise on skin cancer. Please discuss options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "Minutes to an hour or more, including incubation" },
      { label: "Sessions", value: "Repeatable; plans vary" },
      { label: "Downtime", value: "Moderate: redness, peeling and sunburn-like soreness for days; light sensitivity may last longer" },
      { label: "Ideal for", value: "Stubborn acne, sun damage, rejuvenation, after physician clearance of any suspicious lesion" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "How careful must I be with sun?", a: "Very. Strict avoidance is needed before and after treatment." },
      { q: "Can it treat a suspicious spot?", a: "A suspicious lesion needs a physician's assessment first. Jenny does not advise on skin cancer." },
      { q: "What will my skin look like afterwards?", a: "Expect redness, peeling and sunburn-like soreness for several days." }
    ],
    concerns: ["acne", "pigmentation", "dullness"],
    cta: "Understand the sun-avoidance commitment before you book PDT"
  },
  {
    slug: "iv-therapy",
    category: "skincare",
    number: "20",
    name: "IV Vitamin Therapy",
    tagline: "Nutrients delivered by drip, tailored to you.",
    explainer: [
      "IV vitamin therapy delivers vitamins and minerals through a drip, with formulas tailored after a health assessment. Sessions range from about thirty minutes to a few hours, and there is no downtime.",
      "It tends to appeal to people seeking a nutrient top-up, such as athletes or those in recovery. It is not a skin treatment on its own, and it should not be assumed to outperform supplements. Risks include IV-site infection, vein inflammation and allergic reaction, and the clinician decides whether it is appropriate. Please discuss options with a licensed practitioner at a partner spa."
    ],
    quickFacts: [
      { label: "Duration", value: "From about 30 minutes to a few hours" },
      { label: "Sessions", value: "Varies by formula and individual" },
      { label: "Downtime", value: "None" },
      { label: "Ideal for", value: "Nutrient top-ups, such as athletes or recovery, as judged by a clinician" },
      { label: "Investment", value: "Set by partner spas — confirmed at your consultation." }
    ],
    faqs: [
      { q: "Will it improve my skin?", a: "It is not a skin treatment on its own. Any glow is a bonus, not a promise." },
      { q: "Is it better than supplements?", a: "There is no basis for assuming so. A clinician can explain what suits your needs." },
      { q: "What are the risks?", a: "IV-site infection, vein inflammation and allergic reaction are possible, so a health assessment comes first." }
    ],
    concerns: ["dullness"],
    cta: "Ask whether an IV nutrient top-up fits your wellness goals"
  }
];
