import Image from "next/image";
import Link from "next/link";
import { about } from "@/data/about";

// ── Letter / Word helpers ─────────────────────────────────────────────────────

function Letters({ text, accent = false }: { text: string; accent?: boolean }) {
  return (
    <>
      {[...text].map((ch, i) => (
        <span key={i} className={`hero-letter${accent ? " accent" : ""}`}>
          {ch}
        </span>
      ))}
    </>
  );
}

function Word({ word, accent = false }: { word: string; accent?: boolean }) {
  return (
    <span className="hero-word">
      <Letters text={word} accent={accent} />
    </span>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      {/* ── Shared background wrapper — hero + about share one mesh ──────── */}
      <div className="relative overflow-hidden">
        {/* Single mesh gradient spanning both sections */}
        <div className="mesh" style={{ position: "absolute", inset: 0, height: "100%", zIndex: 0 }}>
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
        </div>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <div className="stage" style={{ position: "relative", zIndex: 1 }}>
        {/* Grain texture */}
        <div className="grain" aria-hidden="true" />

        {/* Content */}
        <div className="hero-content">
          {/* Lab logo — 1093×1107 px source, displayed at 110×111 */}
          <Image
            src="/images/graphic/graphic_main.png"
            alt="Language Biomarker Lab"
            width={110}
            height={111}
            priority
            style={{
              display: "block",
              marginBottom: "28px",
              borderRadius: "50%",
              filter: "drop-shadow(0 8px 24px rgba(50,49,122,0.18))",
            }}
          />

          <div className="hero-eyebrow">
            Language Biomarker Lab · Emory University
          </div>

          <h1 className="hero-h1">
            <Word word="Language" />{" "}
            <Word word="as" />{" "}
            <Word word="a" />{" "}
            <Word word="window" accent />
            <br />
            <Word word="into" />{" "}
            <Word word="the" />{" "}
            <Word word="mind." />
          </h1>

          <p className="hero-lede">
            We use language processing to understand psychosis risk, neurodegenerative
            disease, and the shape of human thought — combining clinical and
            computational lenses with AI to develop language biomarkers that help
            prevent disease.
          </p>

          <Link
            href="/research"
            className="inline-block text-lg font-semibold text-navy border-b-2 border-baby-blue pb-0.5 hover:text-navy/70 transition-colors duration-150"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Explore research at LaBL →
          </Link>
        </div>

        </div>{/* end .stage */}

        {/* ── Partner logo marquee strip ───────────────────────────────────── */}
        <div className="relative z-10 w-full pt-2 pb-5 overflow-hidden">
          <div className="marquee-track">
            {/* First copy */}
            {about.partnerLogos.map((logo) => (
              <div key={`a-${logo.src}`} className="flex-shrink-0 mx-10 flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto object-contain opacity-50"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {about.partnerLogos.map((logo) => (
              <div key={`b-${logo.src}`} className="flex-shrink-0 mx-10 flex items-center">
                <Image
                  src={logo.src}
                  alt=""
                  aria-hidden="true"
                  width={logo.width}
                  height={logo.height}
                  className="h-8 w-auto object-contain opacity-50"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── About Our Lab — same background, no seam ────────────────────── */}
        <section className="relative z-10 max-w-3xl mx-auto px-8 md:px-12 pt-10 pb-24 text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-bricolage)", color: "#20232B" }}
        >
          {about.heading}
        </h2>
        <p
          className="text-lg font-semibold text-navy/70 mb-8"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          {about.tagline}
        </p>

        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-base text-navy/70 leading-relaxed mb-5 text-left">
            {p}
          </p>
        ))}

        <div className="border-l-4 border-baby-blue pl-5 mt-8 mb-8 text-left">
          <p className="text-base text-navy leading-relaxed">
            <strong>{about.callout.bold}</strong>{" "}
            {about.callout.text}
          </p>
        </div>

        <Link
          href={about.learnMoreHref}
          className="inline-block text-lg font-semibold text-navy border-b-2 border-baby-blue pb-0.5 hover:text-navy/70 transition-colors duration-150"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Learn more →
        </Link>

      </section>
      </div>{/* end shared background wrapper */}
    </>
  );
}
