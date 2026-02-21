import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Tokenomics from "./components/Tokenomics";
import Community from "./components/Community";
import Footer from "./components/Footer";
import Background from "./components/Background";
import "./index.css";

export default function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const dot = document.getElementById("cursorDot");
    let mx = 0, my = 0, cx = 0, cy = 0;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dot) { dot.style.left = mx + "px"; dot.style.top = my + "px"; }
    };
    document.addEventListener("mousemove", onMove);
    let raf;
    const animate = () => {
      cx += (mx - cx) * 0.12; cy += (my - cy) * 0.12;
      if (cursor) { cursor.style.left = (cx - 10) + "px"; cursor.style.top = (cy - 10) + "px"; }
      raf = requestAnimationFrame(animate);
    };
    animate();

    // Scroll reveal
    const revealAll = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const obs = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
        }, { threshold: 0.1 });
        obs.observe(el);
      });
    };
    revealAll();

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor" />
      <div id="cursorDot" />
      <Background />
      <Navbar />
      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Gallery />
        <div className="divider" />
        <Tokenomics />
        <div className="divider" />
        <Community />
      </main>
      <Footer />
    </>
  );
}
