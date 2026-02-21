import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Token", href: "#tokenomics" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 48px",
        background: scrolled ? "rgba(6,4,15,0.88)" : "rgba(6,4,15,0.5)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(244,167,195,0.12)",
        transition: "background 0.3s",
      }}>
        <a href="/" onClick={goHome} style={{
          fontFamily: "'Orbitron', monospace",
          fontSize: "1.35rem", fontWeight: 900,
          background: "linear-gradient(90deg, #f4a7c3, #7fff6e)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          letterSpacing: "3px", textDecoration: "none",
        }}>$AWIF</a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: 34, listStyle: "none" }} className="nav-desktop">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleNav(e, l.href)} style={{
                color: "rgba(255,255,255,0.65)", textDecoration: "none",
                fontSize: "0.72rem", letterSpacing: "2px", textTransform: "uppercase",
                transition: "color 0.25s",
              }}
                onMouseEnter={e => e.target.style.color = "#7fff6e"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: "none", flexDirection: "column", gap: 5,
            background: "none", border: "none", cursor: "pointer", padding: 4,
          }}>
          <span style={{ width: 24, height: 2, background: open ? "var(--pink)" : "#fff", display: "block", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ width: 24, height: 2, background: open ? "var(--pink)" : "#fff", display: "block", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ width: 24, height: 2, background: open ? "var(--pink)" : "#fff", display: "block", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className="mobile-menu" style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
        background: "rgba(6,4,15,0.97)", backdropFilter: "blur(20px)",
        zIndex: 90, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 36,
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.77,0,0.18,1)",
      }}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)} style={{
            fontFamily: "'Orbitron', monospace", fontSize: "1.4rem",
            fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase",
            color: "#fff", textDecoration: "none", transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = "#f4a7c3"}
            onMouseLeave={e => e.target.style.color = "#fff"}
          >{l.label}</a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
        nav { padding: 16px 48px; }
        @media (max-width: 480px) {
          nav { padding: 14px 20px !important; }
        }
      `}</style>
    </>
  );
}
