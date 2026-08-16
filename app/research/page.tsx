import Image from "next/image";
import { gridProjects, featuredProjects } from "@/data/projects";

export default function ResearchProjects() {
  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12 py-20">

      {/* ── Page heading ─────────────────────────────────────────────────── */}
      <h1
        className="text-5xl md:text-6xl font-bold text-navy mb-12"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        Research Projects
      </h1>

      {/* ── Intro text ───────────────────────────────────────────────────── */}
      <section className="max-w-3xl mb-20 space-y-5">
        <p className="text-base text-navy/75 leading-relaxed">
          Placeholder intro paragraph one. Replace with real copy describing the lab's
          overall research direction. <strong>Bold emphasis text goes here</strong> to
          highlight key themes or findings.
        </p>
        <p className="text-base text-navy/75 leading-relaxed">
          Placeholder intro paragraph two. Replace with real copy. You can use{" "}
          <em>italics</em> or <strong>bold</strong> inline as needed.
        </p>
        <p className="text-base text-navy/75 leading-relaxed">
          Placeholder intro paragraph three. Replace with real copy.
        </p>
      </section>

      {/* ── 3-column illustrated grid ────────────────────────────────────── */}
      <section className="mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridProjects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <div className="rounded-xl overflow-hidden bg-navy/5">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  className="w-full h-56 object-cover"
                />
              </div>
              <p
                className="mt-4 text-base font-bold text-navy"
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ────────────────────────────────────────────── */}
      <section>
        <h2
          className="text-3xl md:text-4xl font-bold text-navy mb-12"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Featured Projects
        </h2>

        <div className="flex flex-col gap-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col md:flex-row gap-10 items-start"
            >
              {/* Round logo / graphic */}
              <div className="flex-shrink-0 w-36 h-36 rounded-full overflow-hidden bg-navy/5 flex items-center justify-center">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  className="w-full h-full object-cover"
                  style={project.image.objectPosition ? { objectPosition: project.image.objectPosition } : undefined}
                />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold text-navy mb-1"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-sm font-semibold text-baby-blue mb-4"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  {project.subtitle}
                </p>
                <p className="text-base text-navy/70 leading-relaxed">
                  {project.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
