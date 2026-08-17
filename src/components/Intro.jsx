import { useEffect, useRef, useState } from "react";
import { IMAGES, NAME } from "../data/content";

// Frames shown during the burst — pull from your existing image set so it
// stays in sync with real work. Add/remove keys to change the sequence.
const BURST_FRAMES = [IMAGES.hero, IMAGES.work1, IMAGES.about, IMAGES.work2, IMAGES.work3];

const FRAME_MS = 140; // how long each frame is shown during the burst
const HOLD_MS = 650; // how long the title card holds before closing
const EXIT_MS = 900; // duration of the iris-close reveal

export default function Intro() {
  const [phase, setPhase] = useState("burst"); // burst -> hold -> exit -> (unmounted)
  const [frame, setFrame] = useState(0);
  const [ready, setReady] = useState(false); // false = decide-on-mount hasn't run yet
  const skippedRef = useRef(false);

  // Decide once, on mount, whether to run the intro at all.
  useEffect(() => {
    const seen = sessionStorage.getItem("intro-played");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reducedMotion) {
      skippedRef.current = true;
      setPhase("exit");
      setReady(true);
      return;
    }
    sessionStorage.setItem("intro-played", "1");
    setReady(true);
  }, []);

  // Lock scroll while the intro is up.
  useEffect(() => {
    if (phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  // Burst: advance one frame at a time.
  useEffect(() => {
    if (!ready || skippedRef.current || phase !== "burst") return;
    if (frame >= BURST_FRAMES.length - 1) {
      const t = setTimeout(() => setPhase("hold"), FRAME_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setFrame((f) => f + 1), FRAME_MS);
    return () => clearTimeout(t);
  }, [ready, phase, frame]);

  // Hold on the title card, then start the iris close.
  useEffect(() => {
    if (phase !== "hold") return;
    const t = setTimeout(() => setPhase("exit"), HOLD_MS);
    return () => clearTimeout(t);
  }, [phase]);

  // Unmount once the iris close finishes.
  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(() => setPhase("done"), skippedRef.current ? 0 : EXIT_MS);
    return () => clearTimeout(t);
  }, [phase]);

  function skip() {
    if (phase === "done") return;
    setPhase("exit");
  }

  if (!ready || phase === "done") return null;

  const closing = phase === "exit";

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[100] bg-ink"
      style={{
        clipPath: closing ? "circle(0% at 50% 50%)" : "circle(150% at 50% 50%)",
        transition: `clip-path ${EXIT_MS}ms cubic-bezier(0.76, 0, 0.24, 1)`,
      }}
    >
      <style>{`
        @keyframes intro-punch {
          from { opacity: 0; transform: scale(1.08); }
          to { opacity: 1; transform: scale(1); }
        }
        .intro-frame { animation: intro-punch ${FRAME_MS + 40}ms ease-out; }
        @keyframes intro-card {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .intro-card { animation: intro-card 500ms ease-out both; }
      `}</style>

      {/* Letterbox bars */}
      <div className="absolute top-0 inset-x-0 h-5 sm:h-8 bg-ink z-20" />
      <div className="absolute bottom-0 inset-x-0 h-5 sm:h-8 bg-ink z-20" />

      {/* Burst frame */}
      {phase === "burst" && (
        <img
          key={frame}
          src={BURST_FRAMES[frame]}
          alt=""
          className="intro-frame absolute inset-0 h-full w-full object-cover grayscale-[10%] contrast-[1.08]"
        />
      )}

      {/* Hold on last frame beneath the title card */}
      {(phase === "hold" || phase === "exit") && (
        <img
          src={BURST_FRAMES[BURST_FRAMES.length - 1]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover grayscale-[10%] contrast-[1.08] opacity-40"
        />
      )}
      {(phase === "hold" || phase === "exit") && (
        <div className="absolute inset-0 bg-ink/40" />
      )}

      {/* Title card */}
      {(phase === "hold" || phase === "exit") && (
        <div className="intro-card absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] text-lime mb-4">
            ROLL 001 · OPENING REEL
          </span>
          <h1 className="font-display uppercase leading-none text-[13vw] sm:text-6xl lg:text-7xl">
            {NAME}
          </h1>
          <p className="mt-4 font-serif italic text-bone-dim text-base sm:text-lg">
            Filmmaker · Editor · Visual Storyteller
          </p>
        </div>
      )}

      {/* REC + frame counter, only during the burst */}
      {phase === "burst" && (
        <>
          <div className="absolute top-9 sm:top-12 left-5 sm:left-10 z-20 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse-rec" />
            <span className="font-mono text-[10px] tracking-widest text-bone-dim">REC</span>
          </div>
          <span className="absolute bottom-9 sm:bottom-12 left-5 sm:left-10 z-20 font-mono text-[10px] tracking-widest text-bone-dim">
            FRAME {String(frame + 1).padStart(2, "0")} / {String(BURST_FRAMES.length).padStart(2, "0")}
          </span>
        </>
      )}

      {/* Skip */}
      <button
        onClick={skip}
        className="absolute bottom-9 sm:bottom-12 right-5 sm:right-10 z-20 font-mono text-[10px] tracking-widest text-bone-dim hover:text-lime transition-colors"
      >
        SKIP →
      </button>
    </div>
  );
}