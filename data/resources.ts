// ── Resources data ─────────────────────────────────────────────────────────
// Edit titles, descriptions, icons, and links here.
// icon: any lucide-react icon name (PascalCase), e.g. "Cpu", "Sparkles"
// loginGated: true adds a lock indicator to the link

export interface Resource {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  loginGated: boolean;
}

export const resources: Resource[] = [
  {
    id: "gpu",
    icon: "Cpu",
    title: "Lab Resources GPU",
    description:
      "Placeholder — replace with a short description of the GPU cluster, access instructions, or compute allocation process.",
    linkLabel: "Access GPU resources",
    href: "#",
    loginGated: false,
  },
  {
    id: "ai-tool",
    icon: "Sparkles",
    title: "Lab AI Tool",
    description:
      "Placeholder — replace with a short description of the lab's AI tool and what it helps with.",
    linkLabel: "Sign in to access",
    href: "#",
    loginGated: true,
  },
  {
    id: "finance",
    icon: "Wallet",
    title: "Lab Finance Tool",
    description:
      "Placeholder — replace with a short description of the finance tool and who should use it.",
    linkLabel: "Sign in to access",
    href: "#",
    loginGated: true,
  },
];
