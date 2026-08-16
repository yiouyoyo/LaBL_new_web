"use client";

import { useState } from "react";
import { positions } from "@/data/positions";

// ── Shared input styles ────────────────────────────────────────────────────
const pillInput =
  "w-full rounded-full border border-navy/25 bg-transparent px-5 py-3 text-sm text-navy placeholder:text-navy/35 focus:outline-none focus:border-navy/60 transition-colors duration-150";

const rectInput =
  "w-full rounded-2xl border border-navy/25 bg-transparent px-5 py-3 text-sm text-navy placeholder:text-navy/35 focus:outline-none focus:border-navy/60 transition-colors duration-150 resize-y";

const label =
  "block text-sm font-semibold text-navy mb-2";

const muted = "font-normal text-navy/45 ml-1";

// ── Accordion row ──────────────────────────────────────────────────────────
function AccordionRow({ role, description }: { role: string; description: string }) {
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
          {role}
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
          <div className="pb-6">
            <p className="text-sm text-navy/70 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      <div className="h-px bg-navy/10" />
    </div>
  );
}

// ── Contact form ───────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <p className="text-lg font-semibold text-navy" style={{ fontFamily: "var(--font-bricolage)" }}>
          Message sent!
        </p>
        <p className="text-sm text-navy/60 mt-2">We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      {/* Name row */}
      <div>
        <label className={label}>
          Name
        </label>
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={set("firstName")}
              className={pillInput}
            />
            <p className="mt-1 text-xs text-navy/40 pl-4">required</p>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Last Name"
              required
              value={form.lastName}
              onChange={set("lastName")}
              className={pillInput}
            />
            <p className="mt-1 text-xs text-navy/40 pl-4">required</p>
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={label}>
          Email<span className={muted}>(required)</span>
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={set("email")}
          className={pillInput}
        />
      </div>

      {/* Message */}
      <div>
        <label className={label}>
          Message<span className={muted}>(required)</span>
        </label>
        <textarea
          placeholder="Write your message here…"
          required
          rows={6}
          value={form.message}
          onChange={set("message")}
          className={rectInput}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-red-500">Something went wrong — please try again.</p>
      )}

      {/* Submit */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-10 py-2.5 text-xs font-semibold tracking-widest uppercase text-navy border border-navy rounded-md hover:bg-navy hover:text-cream transition-colors duration-200 disabled:opacity-50"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          {status === "sending" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-8 md:px-12 py-20">

      {/* Section 1 — Contact form */}
      <section className="mb-24">
        <h1
          className="text-5xl md:text-6xl font-bold text-navy mb-12"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Contact
        </h1>
        <ContactForm />
      </section>

      {/* Section 2 — Join LaBL accordion */}
      <section>
        <h2
          className="text-3xl md:text-4xl font-bold text-navy mb-2"
          style={{ fontFamily: "var(--font-bricolage)" }}
        >
          Join LaBL at Emory
        </h2>
        <div className="h-px bg-navy/15 mb-2" />
        {positions.map((p) => (
          <AccordionRow key={p.role} role={p.role} description={p.description} />
        ))}
      </section>

    </div>
  );
}
