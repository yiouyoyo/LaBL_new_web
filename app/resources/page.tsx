import { Cpu, Sparkles, Wallet, Lock, ArrowRight, type LucideProps } from "lucide-react";
import Link from "next/link";
import { resources, type Resource } from "@/data/resources";

// ── Icon resolver — maps string names from data file to lucide components ──
const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Cpu,
  Sparkles,
  Wallet,
};

// ── Card component ─────────────────────────────────────────────────────────
function ResourceCard({ card }: { card: Resource }) {
  const Icon = ICONS[card.icon] ?? Cpu;

  return (
    <div className="flex flex-col rounded-2xl border border-baby-blue/30 bg-baby-blue/5 p-8 gap-6">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0">
        <Icon size={22} className="text-navy" strokeWidth={1.6} />
      </div>

      {/* Title */}
      <h2
        className="text-xl font-bold text-navy"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        {card.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-navy/65 leading-relaxed flex-1">
        {card.description}
      </p>

      {/* Link */}
      <Link
        href={card.href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy border-b-2 border-baby-blue pb-0.5 w-fit hover:text-navy/70 transition-colors duration-150"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        {card.loginGated && <Lock size={12} strokeWidth={2} className="flex-shrink-0" />}
        {card.linkLabel}
        <ArrowRight size={13} strokeWidth={2} className="flex-shrink-0" />
      </Link>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function Resources() {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12 py-20">

      <h1
        className="text-5xl md:text-6xl font-bold text-navy mb-16"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        Resources
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((card) => (
          <ResourceCard key={card.id} card={card} />
        ))}
      </div>

    </div>
  );
}
