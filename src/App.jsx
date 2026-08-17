import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Process from "./components/Process";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FilmStrip from "./components/FilmStrip";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <div className="grain" />

      <div className="flex">
        {/* Main website */}
        <div className="min-w-0 flex-1">
          <Navbar />

          <main>
            <Hero />
            <Clients />
            <SelectedWork />
            <About />
            <Capabilities />
            <Process />
            <Clients />
            <Contact />
          </main>

          <Footer />
        </div>

        {/* Reserved space for film strip */}
        <aside className="w-8 sm:w-10 md:w-12 shrink-0">
          <FilmStrip />
        </aside>
      </div>
    </div>
  );
}