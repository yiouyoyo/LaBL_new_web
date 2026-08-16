// ── Research grid items (3-column grid on /research) ──────────────────────
// Each item: rectangular illustrated graphic + bold title
// → swap image src/alt/width/height and title for real content

export interface GridProject {
  id: string;
  title: string;
  image: { src: string; alt: string; width: number; height: number };
}

export const gridProjects: GridProject[] = [
  {
    id: "psychosis",
    title: "Placeholder Project Title One",
    image: { src: "/images/graphic/graphic_psychosis.png", alt: "Psychosis research illustration", width: 1316, height: 916 },
  },
  {
    id: "sensation",
    title: "Placeholder Project Title Two",
    image: { src: "/images/graphic/graphic_sensation_move.png", alt: "Sensation and movement illustration", width: 1311, height: 913 },
  },
  {
    id: "question",
    title: "Placeholder Project Title Three",
    image: { src: "/images/graphic/graphic_brian_language.png", alt: "Brain and language illustration", width: 1314, height: 916 },
  },
];


// ── Featured projects (prominent section below the grid) ───────────────────
// Round graphic, name, subtitle, full paragraph, optional external link

export interface FeaturedProject {
  id: string;
  name: string;
  subtitle: string;
  // Full paragraph — paste real copy here when ready
  body: string;
  image: { src: string; alt: string; width: number; height: number; objectPosition?: string };
  href?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "pronet",
    name: "ProNET",
    subtitle: "Psychosis Risk Outcomes Network",
    body: "A project of the Accelerating Medicines Partnership for Schizophrenia. Placeholder — paste the full paragraph text here when ready.",
    image: { src: "/images/logo/logo_pronet_2.png", alt: "ProNET logo", width: 154, height: 168 },
    href: undefined,
  },
  {
    id: "anna-pr",
    name: "ANNA-PR",
    subtitle: "Automated Neural Network Assessment of Psychosis Risk",
    body: "An AI-driven system designed to automate the assessment of psychosis risk. Placeholder — paste the full paragraph text here when ready.",
    image: { src: "/images/logo/logo_annapr.png", alt: "ANNA-PR logo", width: 1299, height: 1152 },
    href: undefined,
  },
];
