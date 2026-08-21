import { useEffect, useRef, useState } from "react";
import { PODCAST_MEDIA } from "../data/content";

function PodcastMedia({ item, index }) {
const videoRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
if (item.type !== "video") return;

const video = videoRef.current;
if (!video) return;

const observer = new IntersectionObserver(
  ([entry]) => {
    setIsVisible(entry.isIntersecting);
  },
  {
    threshold: 0.4,
  }
);

observer.observe(video);

return () => observer.disconnect();

}, [item.type]);

useEffect(() => {
if (item.type !== "video") return;

const video = videoRef.current;
if (!video) return;

if (isVisible) {
  video.play().catch(() => {});
} else {
  video.pause();
}

}, [isVisible, item.type]);

return (
  <div className={`group relative overflow-hidden rounded-xl border border-line bg-ink-raised ${index === 0 ? "sm:col-span-2 lg:row-span-2" : ""}`}>
  <div className={ index === 0 ? "aspect-video lg:h-full min-h-[280px]" : "aspect-video"}>
    {item.type === "video" ? (
      <video
      ref={videoRef}
      src={item.src}
      poster={item.poster || undefined}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      className="h-full w-full object-cover"
      />
      ) : ( <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
       />
      )} </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink via-ink/50 to-transparent">
        <span className="font-mono text-[10px] tracking-widest text-lime">
          {item.label}
        </span>

        <h3 className="mt-1 font-display uppercase text-xl sm:text-2xl">
          {item.title}
        </h3>
      </div>

      {item.type === "video" && (
        <span
          className={`pointer-events-none absolute top-4 right-4 rounded-full border border-lime/50 bg-ink/70 px-3 py-1 font-mono text-[10px] tracking-widest text-lime transition-opacity ${
            isVisible ? "opacity-100" : "opacity-50"
          }`}
        >
          {isVisible ? "PLAYING" : "VIDEO"}
        </span>
      )}
    </div>

  );
}

export default function Process() {
  return ( 
    <section id="podcast" className="relative bg-ink-soft border-t border-line py-24 sm:py-28"> 
      <div className="px-5 sm:px-10 lg:px-14"> 
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"> 
          <div> <span className="font-mono text-xs tracking-widest text-lime">
            SCENE 05 </span>

            <h2 className="mt-3 font-display uppercase text-[11vw] sm:text-6xl lg:text-7xl leading-none">
              Podcast Zone
            </h2>
          </div>

          <p className="max-w-md font-serif italic text-bone-dim text-lg leading-relaxed">
            Leading conversations, asking the questions and bringing real stories to life through the lens.
          </p>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PODCAST_MEDIA.map((item, index) => (
              <PodcastMedia
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
