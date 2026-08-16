// ── Open positions / "Join LaBL" data ─────────────────────────────────────
// Edit role descriptions here; layout lives in app/contact/page.tsx.
// Add new roles by appending { role, description } objects to the array.

export interface Position {
  role: string;
  description: string;
}

export const positions: Position[] = [
  {
    role: "Post-Doctoral Researcher",
    description:
      "Description and application info coming soon. Replace with real copy about qualifications, expectations, and how to apply.",
  },
  {
    role: "Software Engineer",
    description:
      "Description and application info coming soon. Replace with real copy about qualifications, expectations, and how to apply.",
  },
  {
    role: "Undergraduate Research Assistant",
    description:
      "Description and application info coming soon. Replace with real copy about qualifications, expectations, and how to apply.",
  },
  {
    role: "PhD Student",
    description:
      "Description and application info coming soon. Replace with real copy about qualifications, expectations, and how to apply.",
  },
];
