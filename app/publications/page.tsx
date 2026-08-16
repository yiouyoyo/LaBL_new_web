"use client";

import { useState } from "react";
import { publications } from "@/data/publications";

function AccordionRow({
  category,
  citations,
}: {
  category: string;
  citations: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Row trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className="text-lg font-semibold text-navy group-hover:text-navy/70 transition-colors duration-150"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          {category}
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

      {/* Expandable citation list — CSS grid height animation */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="pb-6 space-y-5">
            {citations.length === 0 ? (
              <p className="text-sm text-navy/40 italic">No entries yet.</p>
            ) : (
              citations.map((cite, i) => (
                <p
                  key={i}
                  className="text-sm text-navy/75 leading-relaxed"
                >
                  {cite}
                </p>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-navy/10" />
    </div>
  );
}

export default function Publications() {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-12 py-20">

      {/* Page heading */}
      <h1
        className="text-5xl md:text-6xl font-bold text-navy mb-6"
        style={{ fontFamily: "var(--font-bricolage)" }}
      >
        Publications
      </h1>

      {/* Top divider */}
      <div className="h-px bg-navy/15 mb-2" />

      {/* Accordion rows */}
      {publications.map((pub) => (
        <AccordionRow
          key={pub.category}
          category={pub.category}
          citations={pub.citations}
        />
      ))}

    </div>
  );
}
