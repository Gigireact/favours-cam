import { EMAIL } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink border-t border-line px-5 sm:px-10 lg:px-14 py-28 sm:py-36 flex flex-col items-start"
    >
      <span className="font-mono text-xs tracking-widest text-lime">SCENE 05 · FINAL</span>

      <h2 className="mt-6 font-display uppercase leading-[0.92] text-[13vw] sm:text-7xl lg:text-8xl">
        Let's make
        <br />
        something<span className="text-lime">.</span>
      </h2>

      <a
        href={`mailto:${EMAIL}`}
        className="group mt-10 inline-flex items-baseline gap-3 font-mono text-lg sm:text-2xl tracking-tight text-bone-dim hover:text-lime transition-colors"
      >
        {EMAIL}
        <span className="text-lime transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>

      <p className="mt-6 max-w-md text-bone-dim leading-relaxed">
        Currently booking commercial and documentary projects. Based in
        Abuja, available for travel worldwide.
      </p>
    </section>
  );
}
