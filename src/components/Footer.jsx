import { NAME, SOCIAL_LINKS } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink border-t border-line px-5 sm:px-10 lg:px-14 py-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
      <div className="font-mono text-[11px] tracking-widest text-bone-dim/70">
        © {year} {NAME.toUpperCase()} — END OF REEL
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-widest">
        {SOCIAL_LINKS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-bone-dim hover:text-lime transition-colors"
            >
              {s.label.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
