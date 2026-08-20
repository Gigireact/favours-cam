import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SPLASH_IMAGES } from "../data/content";
import { CARD_CONFIGS } from "../data/content";

// ── Each card's starting 3D position / rotation ───────────────────────────────
// These spread cards all over the screen at wild angles, then they fly in


export default function SplashIntro({ onComplete }) {
  const [phase, setPhase] = useState("enter"); // "enter" | "hold" | "exit"

  useEffect(() => {
    // Cards fly in → hold briefly → all slam to centre and dissolve
    const t1 = setTimeout(() => setPhase("hold"), 1000);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => onComplete?.(), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1000px",
            overflow: "hidden",
          }}
        >

            {/* REC indicator */}
        <div className="absolute top-7 left-5 sm:top-10 sm:left-10 z-30 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse-rec" />

          <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/60">
            REC
          </span>
        </div>
        
          {/* ── Cards ── */}
          {SPLASH_IMAGES.map((src, i) => {
            const cfg = CARD_CONFIGS[i] || CARD_CONFIGS[0];
            const delay = i * 0.07;

            // Phase-based target transform
            const isExit = phase === "exit";
            const isHold = phase === "hold" || isExit;

            return (
              <motion.div
                key={i}
                initial={{
                  x: cfg.x,
                  y: cfg.y,
                  rotateX: cfg.rotateX,
                  rotateY: cfg.rotateY,
                  rotateZ: cfg.rotateZ,
                  scale: cfg.scale,
                  opacity: 0,
                }}
                animate={
                  isExit
                    ? {
                        x: 0,
                        y: 0,
                        rotateX: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        scale: 3.5,
                        opacity: 0,
                      }
                    : isHold
                    ? {
                        // Scattered but settled — each card finds its own spot
                        x: `${(i % 4 - 1.5) * 22}vw`,
                        y: `${Math.floor(i / 4) * 50 - 20}vh`,
                        rotateX: cfg.rotateX * 0.3,
                        rotateY: cfg.rotateY * 0.3,
                        rotateZ: cfg.rotateZ * 0.4,
                        scale: cfg.scale * 1.15,
                        opacity: 1,
                      }
                    : {
                        x: cfg.x,
                        y: cfg.y,
                        rotateX: cfg.rotateX,
                        rotateY: cfg.rotateY,
                        rotateZ: cfg.rotateZ,
                        scale: cfg.scale,
                        opacity: 1,
                      }
                }
                transition={
                  isExit
                    ? { duration: 0.7, ease: [0.4, 0, 1, 1], delay: delay * 0.3 }
                    : isHold
                    ? { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }
                    : { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }
                }
                style={{
                  position: "absolute",
                  width: cfg.w,
                  height: cfg.h,
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(20%) brightness(0.85)",
                    pointerEvents: "none",
                    userSelect: "none",
                    borderRadius: "24px",
                  }}
                />
                {/* Sheen overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
                    pointerEvents: "none",
                  }}
                />
              </motion.div>
            );
          })}

          {/* ── Centre logo / name that appears during hold ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: phase === "enter" ? 0 : phase === "exit" ? 0 : 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              pointerEvents: "none",
            }}
          >
            <p
              style={{
                fontSize: "clamp(38px, 10vw, 86px)",
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "#fff",
                fontFamily: "'Inter', system-ui, sans-serif",
                lineHeight: 1,
                mixBlendMode: "difference",
              }}
            >
              FAVOUR'S CAM<span style={{ color: "#a3e635" }}>.</span>
            </p>
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginTop: 12,
                fontFamily: "monospace",
              }}
            >
              Portfolio 2026
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

