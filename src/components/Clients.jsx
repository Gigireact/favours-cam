// import { CLIENTS } from "../data/content";

// export default function Clients() {
//   const doubled = [...CLIENTS, ...CLIENTS];

//   return (
//     <section className="relative bg-ink border-t border-line py-10 overflow-hidden">
//       <div className="flex whitespace-nowrap animate-marquee">
//         {doubled.map((name, i) => (
//           <span
//             key={i}
//             className="mx-8 font-mono text-sm sm:text-base tracking-[0.3em] text-bone-dim/50"
//           >
//             {name}
//           </span>
//         ))}
//       </div>
//     </section>
//   );
// }



import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CLIENTS } from "../data/content";

function Dot() {
  return (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime/50 mx-6 sm:mx-8 shrink-0" />
  );
}

function MarqueeRow({ items, direction = 1, speed = 25 }) {
  // Repeat enough times for a continuous loop
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="w-full overflow-hidden relative"
      style={{
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <motion.div
        animate={{
          x:
            direction === 1
              ? ["0%", "-33.333%"]
              : ["-33.333%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center whitespace-nowrap w-max will-change-transform"
      >
        {repeated.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="inline-flex items-center shrink-0"
          >
            <span className="font-mono text-lg sm:text-2xl lg:text-3xl tracking-[0.2em] uppercase text-bone-dim/50 transition-colors duration-300 hover:text-lime cursor-default select-none">
              {name}
            </span>

            <Dot />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Clients() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Gives the ticker a subtle movement as the user scrolls past it
  const y = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section
      ref={ref}
      className="relative bg-ink border-y border-line overflow-hidden py-12 sm:py-16"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(207,255,61,0.04)_0%,transparent_70%)]" />

      <motion.div style={{ y }} className="relative">
        {/* First row */}
        <div className="py-3">
          <MarqueeRow
            items={CLIENTS}
            direction={1}
            speed={22}
          />
        </div>
      </motion.div>
    </section>
  );
}
