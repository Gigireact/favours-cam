import { IMAGES, NAME } from "../data/content";

export default function About() {
  return (
    <section id="about" className="relative bg-ink-soft border-t border-line">
      <div className="flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-[44%] h-[56vh] lg:h-auto lg:min-h-[100vh] overflow-hidden">
          <img
            src={IMAGES.about}
            alt={`${NAME} behind a video camera`}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-soft/40 via-transparent to-ink-soft/60" />
        </div>

        <div className="relative w-full lg:w-[56%] px-5 sm:px-10 lg:px-16 py-16 sm:py-24 flex flex-col justify-center">
          <span className="font-mono text-xs tracking-widest text-lime">SCENE 03</span>

          <p className="mt-6 font-serif italic text-2xl sm:text-3xl lg:text-4xl leading-snug text-bone max-w-2xl">
            "For me, every project starts with a story, whether I'm behind the camera, in the edit, or building a world that doesn't exist yet."
          </p>

          <div className="mt-10 max-w-xl space-y-5 text-bone-dim leading-relaxed">
            <p>
              {NAME} is a filmmaker, video editor and visual storyteller creating work across commercials, event coverage, documentaries, product launches and social content. From covering moments on the ground at Solana events to shaping campaigns, product ads and long-form content, the focus is always on creating visuals that connect and leave an impression.
            </p>
            <p>
              The process extends beyond the camera into storytelling, editing and colour, with AI-generated visuals now becoming another creative tool in the workflow. Not as a replacement for real-world filmmaking, but as another way to imagine, build and bring a story to life.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-xl">
            {[
              ["2+", "Years shooting & cutting"],
              ["30+", "Projects delivered"],
              ["15+", "Brands & studios"],
              // ["4", "Festival selections"],
            ].map(([n, label]) => (
              <div key={label}>
                <div className="font-display text-3xl sm:text-4xl text-lime">{n}</div>
                <div className="mt-1 font-mono text-[10px] tracking-widest text-bone-dim uppercase">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
