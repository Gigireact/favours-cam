import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}

// Formats a 0..1 progress value as a film timecode HH:MM:SS:FF
// against a nominal reel length — purely presentational.
export function formatTimecode(progress, totalSeconds = 180, fps = 24) {
  const totalFrames = Math.floor(totalSeconds * fps);
  const currentFrame = Math.floor(progress * totalFrames);
  const h = Math.floor(currentFrame / (fps * 3600));
  const m = Math.floor((currentFrame / (fps * 60)) % 60);
  const s = Math.floor((currentFrame / fps) % 60);
  const f = Math.floor(currentFrame % fps);
  const pad = (n) => String(n).padStart(2, "0");
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}
