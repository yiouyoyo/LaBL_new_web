// ── Principal Investigator page data ──────────────────────────────────────
// Edit copy and grant entries here; layout lives in app/pi/page.tsx

export const pi = {
  // ── Bio ───────────────────────────────────────────────────────────────
  name: "Dr. Phillip Wolff",

  photo: {
    src: "/images/people/people_wolff.png",
    alt: "Dr. Phillip Wolff",
    width: 1309,
    height: 871,
  },

  // Opening paragraph — paste real copy here
  introParagraph:
    "Placeholder intro paragraph. Replace with Dr. Wolff's biography — background, academic position, and research overview.",

  // Five numbered research domain areas
  // Each: { title: bold label, description: one-line explanation }
  researchDomains: [
    {
      title: "Language Semantics",
      description: "Exploring the structure and meaning of language.",
    },
    {
      title: "Psychosis Risk",
      description: "Placeholder — replace with real description.",
    },
    {
      title: "Neurodegenerative Disease",
      description: "Placeholder — replace with real description.",
    },
    {
      title: "Computational Linguistics",
      description: "Placeholder — replace with real description.",
    },
    {
      title: "Clinical AI",
      description: "Placeholder — replace with real description.",
    },
  ],

  // Additional paragraphs below the research domain list
  bioParagraphs: [
    "Placeholder bio paragraph two. Replace with real copy.",
    "Placeholder bio paragraph three. Replace with real copy.",
  ],

  // ── Grants ────────────────────────────────────────────────────────────

  // Short summary shown in the right column under "Grants Overview"
  grantsOverview:
    "Placeholder grants overview paragraph. Replace with a summary of the lab's funding history and research support.",

  // Active grants — add/remove entries freely
  // Each: { projectNumber, pi, title, startDate, endDate }
  activeGrants: [
    {
      projectNumber: "1R01XXXXXXX-01",
      pi: "Wolff, Phillip",
      title: "Placeholder active grant title — replace with real title",
      startDate: "2024-01-01",
      endDate: "2028-12-31",
    },
    {
      projectNumber: "1R01XXXXXXX-02",
      pi: "Wolff, Phillip",
      title: "Placeholder active grant title two — replace with real title",
      startDate: "2023-06-01",
      endDate: "2027-05-31",
    },
  ],

  // Recently completed grants — same shape as activeGrants
  completedGrants: [
    {
      projectNumber: "1R01XXXXXXX-00",
      pi: "Wolff, Phillip",
      title: "Placeholder completed grant title — replace with real title",
      startDate: "2018-01-01",
      endDate: "2023-12-31",
    },
  ],
};
