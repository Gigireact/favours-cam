// import { useState } from "react";
// import { CAPABILITIES } from "../data/content";

// export default function Capabilities() {
//   const [active, setActive] = useState(null);

//   return (
//     <section id="capabilities" className="relative bg-ink py-24 sm:py-32 border-t border-line">
//       <div className="px-5 sm:px-10 lg:px-14 mb-14">
//         <span className="font-mono text-xs tracking-widest text-lime">SCENE 04</span>
//         <h2 className="mt-3 font-display uppercase text-[11vw] sm:text-6xl lg:text-7xl leading-none">
//           Capabilities
//         </h2>
//         <p className="mt-5 max-w-md font-serif italic text-bone-dim text-lg">
//           Read like a shot list — pick a line, see what it covers.
//         </p>
//       </div>

//       <div className="border-t border-line">
//         {CAPABILITIES.map((c, i) => (
//           <div
//             key={c.tag}
//             onMouseEnter={() => setActive(i)}
//             onMouseLeave={() => setActive(null)}
//             className="group relative border-b border-line px-5 sm:px-10 lg:px-14 py-7 sm:py-9 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 overflow-hidden transition-colors duration-300 hover:bg-ink-soft"
//           >
//             <span className="font-mono text-xs tracking-widest text-lime w-14 shrink-0">
//               {c.tag}
//             </span>

//             <h3 className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl leading-none sm:w-[38%] shrink-0">
//               {c.title}
//             </h3>

//             <p className="text-bone-dim leading-relaxed sm:max-w-sm">{c.desc}</p>

//             <span className="ml-0 sm:ml-auto font-mono text-[11px] tracking-widest text-bone-dim/60 whitespace-nowrap">
//               {c.tools}
//             </span>

//             <span
//               className={`absolute left-0 bottom-0 h-px bg-lime transition-all duration-500 ${
//                 active === i ? "w-full" : "w-0"
//               }`}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }








import { useState } from "react";
import { CAPABILITIES } from "../data/content";

export default function Capabilities() {
  const [active, setActive] = useState(null);

  const toggleCapability = (index) => {
    setActive((current) => (current === index ? null : index));
  };

  return (
    <section
      id="capabilities"
      className="relative bg-ink py-24 sm:py-32 border-t border-line"
    >
      {/* Heading */}
      <div className="px-5 sm:px-10 lg:px-14 mb-14">
        <span className="font-mono text-xs tracking-widest text-lime">
          SCENE 04
        </span>

        <h2 className="mt-3 font-display uppercase text-[11vw] sm:text-6xl lg:text-7xl leading-none">
          Capabilities
        </h2>

        <p className="mt-5 max-w-md font-serif italic text-bone-dim text-lg">
          Read like a shot list — hover a line to see what it covers.
        </p>
      </div>

      {/* Capability rows */}
      <div className="border-t border-line">
        {CAPABILITIES.map((c, i) => {
          const isActive = active === i;

          return (
            <div
              key={c.tag}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => toggleCapability(i)}
              className={`group relative cursor-pointer border-b border-line px-5 sm:px-10 lg:px-14 py-7 sm:py-9 transition-colors duration-500 ${
                isActive ? "bg-ink-soft" : ""
              }`}
            >
              {/* Always visible content */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                <span className="font-mono text-xs tracking-widest text-lime w-14 shrink-0">
                  {c.tag}
                </span>

                <h3 className="font-display uppercase text-2xl sm:text-3xl lg:text-4xl leading-none">
                  {c.title}
                </h3>

                {/* Plus / minus indicator */}
                <span
                  className={`sm:ml-auto text-lime text-xl transition-transform duration-500 ${
                    isActive ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </div>

              {/* Expandable content */}
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pt-6 pl-0 sm:pl-[88px]">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-12">
                      {/* Description */}
                      <p className="max-w-xl text-bone-dim leading-relaxed">
                        {c.desc}
                      </p>

                      {/* Tools */}
                      <span className="font-mono text-[11px] tracking-widest text-lime-dim leading-relaxed">
                        {c.tools}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated bottom line */}
              <span
                className={`absolute left-0 bottom-0 h-px bg-lime transition-all duration-500 ${
                  isActive ? "w-full" : "w-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
