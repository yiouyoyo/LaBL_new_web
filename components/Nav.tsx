"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research Projects" },
  { href: "/pi", label: "Principal Investigator" },
  { href: "/publications", label: "Publications" },
  { href: "/presentations", label: "Presentations" },
  { href: "/people", label: "People" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#32317A",
        boxShadow: "0 6px 24px 0 rgba(50,49,122,0.22)",
      }}
    >
      <div className="w-full pl-6 pr-4 flex items-center justify-between h-16">
        {/* Lockup — far left */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
          <Image
            src="/images/graphic/graphic_main.png"
            alt=""
            width={36}
            height={36}
            priority
            className="w-9 h-9 object-cover transition-opacity duration-200 group-hover:opacity-80"
            style={{ borderRadius: "50%", filter: "drop-shadow(0 0 6px #32317A) drop-shadow(0 0 10px #32317A)" }}
          />
          <span className="font-bold text-cream text-base leading-none group-hover:opacity-80 transition-opacity duration-200" style={{ fontFamily: "var(--font-bricolage)" }}>
            Language Biomarker Lab (LaBL)
          </span>
        </Link>

        {/* Page links — centered in remaining space */}
        <ul className="flex flex-wrap items-center gap-x-9 gap-y-1.5 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[15px] font-medium transition-colors duration-150 relative ${
                  isActive(link.href)
                    ? "text-cream border-b-4 border-yellow pb-0.5"
                    : "text-cream/80 hover:text-cream after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-baby-blue after:transition-all after:duration-200 hover:after:w-full"
                }`}
                style={{ fontFamily: "var(--font-bricolage)" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
