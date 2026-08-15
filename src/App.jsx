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

return ( <div className="relative"> <div className="grain" />

  <Navbar />

  <main>
    <Hero />
    <SelectedWork />
    <About />
    <Capabilities />
    <Process />
    <Clients />
    <Contact />
  </main>

  <Footer />
</div>

);
}
