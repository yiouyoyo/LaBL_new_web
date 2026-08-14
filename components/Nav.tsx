import Link from "next/link";
import Image from "next/image";

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
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#EBEEF2",
        boxShadow: "0 4px 20px 0 rgba(235,238,242,0.9), 0 1px 0 0 rgba(50,49,122,0.08)",
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
            style={{ borderRadius: "50%", filter: "drop-shadow(0 0 6px #EBEEF2) drop-shadow(0 0 10px #EBEEF2)" }}
          />
          <span className="font-bold text-navy text-base leading-none group-hover:opacity-80 transition-opacity duration-200">
            Language Biomarker Lab (LaBL)
          </span>
        </Link>

        {/* Page links — right side */}
        <ul className="flex flex-wrap items-center gap-x-9 gap-y-1.5 justify-end ml-auto pl-16">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-navy/80 hover:text-navy transition-colors duration-150 relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-baby-blue after:transition-all after:duration-200 hover:after:w-full"
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
