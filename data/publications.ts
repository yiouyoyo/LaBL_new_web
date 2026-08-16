// ── Publications data ──────────────────────────────────────────────────────
// Each category has a name and an array of citation strings.
// To add citations: paste each full citation as a string into the
// citations[] array for the matching category.
// To add a new category: append a new { category, citations: [] } object.

export interface PublicationCategory {
  category: string;
  citations: string[];
}

export const publications: PublicationCategory[] = [
  {
    category: "In Preparation",
    citations: [
      // Paste citations here, one string per entry. Example:
      // "Wolff, P., & Smith, J. (in prep). Title of paper. Journal Name.",
    ],
  },
  {
    category: "Refereed Paper in 2026",
    citations: [],
  },
  {
    category: "Refereed Paper in 2025",
    citations: [],
  },
  {
    category: "Refereed Paper in 2024",
    citations: [],
  },
  {
    category: "Refereed Paper in 2023 and Before 2023",
    citations: [],
  },
  {
    category: "Poster Directly Associated with AMP SCZ",
    citations: [],
  },
];
