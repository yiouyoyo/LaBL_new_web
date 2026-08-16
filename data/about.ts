// ── About Our Lab section — edit copy here, layout lives in app/page.tsx ──

export const about = {
  heading: "About LaBL",

  // Short tagline shown below the heading
  tagline: "Placeholder tagline — replace with real copy.",

  // Two body paragraphs
  paragraphs: [
    "Placeholder paragraph one. Replace with real copy about the lab's mission, approach, and history.",
    "Placeholder paragraph two. Replace with real copy about the team, methods, or impact.",
  ],

  // Bold callout line + supporting sentence
  callout: {
    bold: "Placeholder bold callout line.",
    text: "Placeholder supporting sentence — replace with real copy.",
  },

  // "Learn more" link destination
  learnMoreHref: "/pi",

  // Partner / funder logos — now rendered as a marquee strip in app/page.tsx
  // Add or reorder logos here; width/height are the source pixel dimensions.
  partnerLogos: [
    { src: "/images/logo/logo_nih.png",       alt: "NIH",                    width: 335, height: 116 },
    { src: "/images/logo/logo_nimh.png",      alt: "NIMH",                   width: 149, height: 113 },
    { src: "/images/logo/logo_google.png",    alt: "Google",                 width: 283, height: 122 },
    { src: "/images/logo/logo_worldecon.png", alt: "World Economic Forum",   width: 147, height: 147 },
    { src: "/images/logo/logo_psyh.png",      alt: "PsychCentral",           width: 393, height:  85 },
    { src: "/images/logo/logo_ibm.png",       alt: "IBM",                    width: 220, height: 133 },
    { src: "/images/logo/logo_partner.png",   alt: "Partner organization",   width: 692, height: 186 },
  ],
};
