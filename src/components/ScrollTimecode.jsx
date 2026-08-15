import { useScrollProgress, formatTimecode } from "../hooks/useScrollProgress";

export default function ScrollTimecode() {
  const progress = useScrollProgress();
  const tc = formatTimecode(progress);

  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3"
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] tracking-widest text-bone-dim rotate-90 whitespace-nowrap origin-center mb-6">
        SCROLL
      </span>
      <div className="relative h-40 w-px bg-line overflow-hidden">
        <div
          className="absolute left-0 top-0 w-px bg-lime transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <span className="font-mono text-[10px] tracking-widest text-lime">{tc}</span>
    </div>
  );
}
