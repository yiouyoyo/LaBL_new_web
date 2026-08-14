import Image from "next/image";
import Link from "next/link";

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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="stage">
        {/* Mesh gradient — blobs share one filter on the .mesh container */}
        <div className="mesh">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
        </div>

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

          <Link href="/research" className="hero-cta">
            Explore research at LaBL
          </Link>
        </div>

      </div>
    </>
  );
}
