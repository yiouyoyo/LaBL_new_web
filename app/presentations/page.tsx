"use client";

import { useState } from "react";
import { presentations } from "@/data/presentations";

function AccordionRow({
  year,
  entries,
}: {
  year: string;
  entries: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="text-lg font-semibold text-navy group-hover:text-navy/70 transition-colors duration-150"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          {year}
        </span>
        <span
          className="flex-shrink-0 ml-6 text-2xl font-light text-navy/50 group-hover:text-navy transition-colors duration-150 select-none"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            display: "inline-block",
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="pb-6 space-y-5">
            {entries.length === 0 ? (
              <p className="text-sm text-navy/40 italic">No entries yet.</p>
            ) : (
              entries.map((entry, i) => (
                <p key={i} className="text-sm text-navy/75 leading-relaxed">
                  {entry}
                </p>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="h-px bg-navy/10" />
    </div>
  );
}

export default function Presentations() {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-12 py-20">

      <h1
        className="text-5xl md:text-6xl font-bold text-navy mb-6"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        Presentations
      </h1>

      <div className="h-px bg-navy/15 mb-2" />

      {presentations.map((p) => (
        <AccordionRow key={p.year} year={p.year} entries={p.entries} />
      ))}

    </div>
  );
}
