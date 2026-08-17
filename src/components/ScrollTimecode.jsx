import { useScrollProgress, formatTimecode } from "../hooks/useScrollProgress";

export default function ScrollTimecode() {
  const progress = useScrollProgress();

  const timecode = formatTimecode(progress);

  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center"
      aria-hidden="true"
    >
      {/* SCROLL */}
      <span className="font-mono text-[10px] tracking-widest text-bone-dim rotate-90 whitespace-nowrap mb-8">
        SCROLL
      </span>

      {/* Progress track */}
      <div className="relative h-40 w-px bg-line overflow-hidden">
        <div
          className="absolute left-0 top-0 w-full bg-lime transition-[height] duration-100"
          style={{
            height: `${progress * 100}%`,
          }}
        />
      </div>

      {/* Timecode */}
      <span className="mt-4 font-mono text-[10px] tracking-widest text-lime whitespace-nowrap">
        {timecode}
      </span>
    </div>
  );
}