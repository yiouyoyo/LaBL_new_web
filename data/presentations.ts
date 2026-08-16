// ── Presentations data ─────────────────────────────────────────────────────
// Each year has a label and an array of presentation strings.
// Paste each full presentation citation/entry as a string in the
// matching year's entries[] array.
// To add a new year: append a new { year, entries: [] } object.

export interface PresentationYear {
  year: string;
  entries: string[];
}

export const presentations: PresentationYear[] = [
  {
    year: "2026",
    entries: [
      // Paste presentations here, one string per entry. Example:
      // "Wolff, P. (2026). Talk title. Conference Name, City, Country.",
    ],
  },
  {
    year: "2025",
    entries: [],
  },
  {
    year: "2024",
    entries: [],
  },
];
