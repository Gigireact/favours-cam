import portp from "../assets/images/picsmile.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink">
      {/* Background photo */}
      <img
        src={portp}
        alt="Filmmaker operating a cinema camera on set"
        className="absolute inset-0 h-full w-full object-cover object-[65%_30%] grayscale-[15%] contrast-[1.05]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      {/* Frame corner marks */}
      <div className="absolute inset-6 sm:inset-10 pointer-events-none z-20">
        {[
          "top-0 left-0 border-t border-l",
          "top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((pos, i) => (
          <span
            key={i}
            className={`absolute  h-5 w-5 ${pos} border-bone-dim/150`}
          />
        ))}
      </div>

      {/* Eyebrow */}
      <div className="absolute top-24 text-black sm:top-28 left-5 sm:left-10 z-20 flex items-center gap-3 font-mono text-[15px] tracking-[0.25em]">
        <span>●</span>
        ROLL 01 
      </div>

      {/* Headline */}
      <div className="absolute bottom-16 sm:bottom-20 left-5 sm:left-10 right-5 sm:right-10 z-20 max-w-4xl">
        <h1 className="font-display leading-[1.2] tracking-tight text-[13vw] sm:text-[8vw] lg:text-[5.6vw] uppercase">
          <span className="block">Stories.</span>
          <span className="block text-lime">Motion..</span>
          <span className="block">Impact...</span>
        </h1>

        <p className="mt-6 max-w-md font-serif italic text-lg sm:text-xl text-bone-dim">
          Crafting commercials, documentaries and AI-driven video
          across every stage of the reel.
        </p>
      </div>

      {/* Scroll cue */}
      {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-widest text-bone-dim">
          SCROLL
        </span>

        <span className="block h-6 w-px bg-bone-dim animate-bounce" />
      </div> */}
    </section>
  );
}