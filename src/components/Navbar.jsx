import { useEffect, useState } from "react";
import { NAME } from "../data/content";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-sm border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-5 sm:px-8 lg:px-12 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse-rec" />
          <span className="font-mono text-[14px] tracking-[0.2em] text-bone-dim">REC</span>
          <span className="font-display text-2xl tracking-wide ml-2 group-hover:text-lime transition-colors">
            {NAME.toUpperCase()}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-lime text-[14px] hover:text-bone transition-colors"
              >
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center gap-1.5 h-8 w-8"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-bone transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span className={`h-px w-6 bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-bone transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-6 px-6 pb-8 pt-2 font-mono text-sm tracking-widest bg-ink border-b border-line">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-bone-dim hover:text-bone"
              >
                <span className="text-lime mr-2">{String(i + 1).padStart(2, "0")}</span>
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
