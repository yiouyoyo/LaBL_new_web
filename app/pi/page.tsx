import Image from "next/image";
import { pi } from "@/data/pi";

// ── Shared heading style ───────────────────────────────────────────────────
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl md:text-3xl font-bold text-navy mb-6"
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      {children}
    </h2>
  );
}

// ── Grant entry component ──────────────────────────────────────────────────
function GrantEntry({
  projectNumber,
  pi: piName,
  title,
  startDate,
  endDate,
}: {
  projectNumber: string;
  pi: string;
  title: string;
  startDate: string;
  endDate: string;
}) {
  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short" });

  return (
    <div className="mb-8 pb-8 border-b border-navy/10 last:border-0 last:mb-0 last:pb-0">
      <p className="text-sm font-bold text-navy mb-1">{projectNumber}</p>
      <p className="text-sm text-navy/60 mb-1">PD/PI: {piName}</p>
      <p className="text-sm italic text-navy/80 mb-1">{title}</p>
      <p className="text-xs text-navy/50">
        {fmt(startDate)} – {fmt(endDate)}
      </p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function PrincipalInvestigator() {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12 py-20">

      {/* ── Section 1: Bio ─────────────────────────────────────────────── */}
      <section className="mb-24">
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-stretch">

          {/* Left — text */}
          <div className="flex-1">
            <h1
              className="text-5xl md:text-6xl font-bold text-navy mb-8"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              {pi.name}
            </h1>

            <p className="text-base text-navy/70 leading-relaxed mb-8">
              {pi.introParagraph}
            </p>

            {/* Research domains — numbered list */}
            <ol className="mb-8 space-y-3 list-none">
              {pi.researchDomains.map((domain, i) => (
                <li key={i} className="flex gap-3 text-base text-navy/70 leading-relaxed">
                  <span
                    className="flex-shrink-0 w-6 font-bold text-navy"
                    style={{ fontFamily: "var(--font-bricolage)" }}
                  >
                    {i + 1}.
                  </span>
                  <span>
                    <strong className="text-navy">{domain.title}</strong>
                    {" – "}
                    {domain.description}
                  </span>
                </li>
              ))}
            </ol>

            {pi.bioParagraphs.map((p, i) => (
              <p key={i} className="text-base text-navy/70 leading-relaxed mb-5">
                {p}
              </p>
            ))}
          </div>

          {/* Right — photo fills full height of text column */}
          <div className="flex-shrink-0 w-full md:w-[460px] self-stretch">
            <Image
              src={pi.photo.src}
              alt={pi.photo.alt}
              width={pi.photo.width}
              height={pi.photo.height}
              priority
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* ── Section 2: Grants ──────────────────────────────────────────── */}
      <section>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Left — Active grants */}
          <div className="flex-1">
            <H2>Active</H2>
            {pi.activeGrants.map((g) => (
              <GrantEntry key={g.projectNumber} {...g} />
            ))}
          </div>

          {/* Right — Overview + Completed */}
          <div className="flex-1">
            <H2>Grants Overview</H2>
            <p className="text-base text-navy/70 leading-relaxed mb-12">
              {pi.grantsOverview}
            </p>

            <H2>Recently Completed</H2>
            {pi.completedGrants.map((g) => (
              <GrantEntry key={g.projectNumber} {...g} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
