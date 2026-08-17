import { useScrollProgress, formatTimecode } from "../hooks/useScrollProgress";

const HOLE_COUNT = 20;
const FRAME_LINES = 9;

export default function FilmStrip() {
  const progress = useScrollProgress();
  const tc = formatTimecode(progress);
  const pct = Math.round(progress * 100);

  return (
    <div
        className="
            sticky
            top-0
            h-screen
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:gap-4
            pointer-events-none"
        aria-hidden="true"
        >
        {/* Film strip body */}
        <div
            className="relative h-screen w-5 sm:w-6 md:w-7 lg:w-8 bg-ink-soft border-l border-line overflow-hidden shadow-[0_0_24px_rgba(0,0,0,0.55)]">
            {/* Scroll progress glow */}
            <div
            className="
                absolute
                inset-x-0
                top-0
                bg-gradient-to-b
                from-lime/90
                via-lime/40
                to-transparent
                transition-[height]
                duration-150
            "
            style={{ height: `${progress * 100}%` }}
            />

        {/* Film frame divider lines */}
        <div className="absolute inset-0 flex flex-col justify-between py-1.5 pointer-events-none">
          {Array.from({ length: FRAME_LINES }).map((_, i) => (
            <span
              key={i}
              className="h-px w-full bg-ink/50"
            />
          ))}
        </div>

        {/* Left sprocket holes */}
        <div className="absolute inset-y-0 left-[2px] sm:left-[3px] flex flex-col justify-around py-2 pointer-events-none">
          {Array.from({ length: HOLE_COUNT }).map((_, i) => (
            <span
              key={i}
              className="
                h-[3px] w-[3px]
                sm:h-[4px] sm:w-[4px]
                lg:h-[5px] lg:w-[5px]
                rounded-[1px]
                bg-ink
              "
            />
          ))}
        </div>

        {/* Right sprocket holes */}
        <div className="absolute inset-y-0 right-[2px] sm:right-[3px] flex flex-col justify-around py-2 pointer-events-none">
          {Array.from({ length: HOLE_COUNT }).map((_, i) => (
            <span
              key={i}
              className="
                h-[3px] w-[3px]
                sm:h-[4px] sm:w-[4px]
                lg:h-[5px] lg:w-[5px]
                rounded-[1px]
                bg-ink
              "
            />
          ))}
        </div>

        {/* Moving playhead */}
        <div
          className="absolute inset-x-0 transition-[top] duration-150"
          style={{ top: `${progress * 100}%` }}
        >
          <div className="relative -translate-y-1/2">
            <span className="block h-[1px] sm:h-[2px] w-full bg-bone shadow-[0_0_8px_2px_rgba(207,255,61,0.7)]" />

            <span
              className="
                absolute
                -right-1
                sm:-right-1.5
                top-1/2
                -translate-y-1/2
                h-1.5 w-1.5
                sm:h-2 sm:w-2
                rotate-45
                bg-lime
              "
            />
          </div>
        </div>
      </div>

      {/* Optional progress percentage */}
      <span className="font-mono text-[8px] sm:text-[9px] lg:text-[10px] tracking-widest text-lime">
        {pct}%
      </span>
    </div>
  );
}