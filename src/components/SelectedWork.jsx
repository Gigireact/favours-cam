import { WORK } from "../data/content";

function GeneratedPlate() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1d2b06_0%,#0a0a0b_60%)]">
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(207,255,61,0.08) 0px, rgba(207,255,61,0.08) 1px, transparent 1px, transparent 4px)",
        }}
      />
      <span className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-lime/70">
        SYNTHETIC PLATE — NO SOURCE FRAME
      </span>
    </div>
  );
}

function WorkRow({ item, index }) {
  const reversed = index % 2 === 1;

  return (
    <div className="relative border-t border-line first:border-t-0">
      <div
        className={`flex flex-col lg:flex-row lg:items-center ${reversed ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Image */}
        <div className="relative w-full lg:w-1/2 h-[46vh] sm:h-[56vh] lg:h-[72vh] overflow-hidden group">
          {item.video ? (
            <video
              src={item.video}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              className="h-full w-full object-cover grayscale-[10%] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <GeneratedPlate />
          )}
          <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
        </div>

        {/* Text */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-10 lg:px-14 py-10 lg:py-14">
  
          {/* Framed text panel */}
          <div className="relative rounded-2xl border border-line/80 bg-ink-soft/40 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 overflow-hidden">

            {/* Subtle lime glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-lime/5 blur-3xl rounded-full pointer-events-none" />

            {/* Small corner accent */}
            <span className="absolute top-0 left-0 h-8 w-8 border-t border-l border-lime/50 rounded-tl-2xl" />
            <span className="absolute bottom-0 right-0 h-8 w-8 border-b border-r border-lime/50 rounded-br-2xl" />

            <span className="font-mono text-xs tracking-widest text-lime">
              {item.code}
            </span>

            <h3 className="mt-4 font-display uppercase leading-[0.95] text-[11vw] sm:text-[6vw] lg:text-[4.4vw] tracking-tight">
              {item.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs tracking-widest text-bone-dim">
              <span>{item.category}</span>
              <span className="text-line">/</span>
              <span>{item.year}</span>
            </div>

            <p className="mt-5 max-w-md text-bone-dim leading-relaxed">
              {item.blurb}
            </p>

            <p className="mt-3 font-mono text-[11px] tracking-widest text-bone-dim/70">
              {item.role}
            </p>

            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-bone group w-fit"
            >
              <span className="relative">
                VIEW PROJECT
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </span>

              <span className="text-lime transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>
        </div>
      </div>

      <span className="absolute top-4 left-4 lg:left-1/2 lg:-translate-x-1/2 font-mono text-[10px] tracking-widest text-bone-dim/60 z-10">
        {item.id} / {String(WORK.length).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" className="relative bg-ink py-24 sm:py-32">
      <div className="px-5 sm:px-10 lg:px-14 mb-14 sm:mb-20 flex items-end justify-between flex-wrap gap-4">
        <div>
          <span className="font-mono text-xs tracking-widest text-lime">SCENE 02</span>
          <h2 className="mt-3 font-display uppercase text-[11vw] sm:text-6xl lg:text-7xl leading-none">
            Selected Work
          </h2>
        </div>
        <p className="max-w-xs font-serif italic text-bone-dim text-lg">
          Six frames from a longer reel — commercial, documentary and
          experimental.
        </p>
      </div>

      <div>
        {WORK.map((item, i) => (
          <WorkRow item={item} index={i} key={item.id} />
        ))}
      </div>
    </section>
  );
}
