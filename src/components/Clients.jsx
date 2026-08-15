import { CLIENTS } from "../data/content";

export default function Clients() {
  const doubled = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative bg-ink border-t border-line py-10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="mx-8 font-mono text-sm sm:text-base tracking-[0.3em] text-bone-dim/50"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
