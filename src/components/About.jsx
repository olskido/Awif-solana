export default function About() {
  const stats = [
    { num: "SOL", label: "Chain" },
    { num: "2", label: "Narratives" },
    { num: "1", label: "Community" },
    { num: "∞", label: "Potential" },
  ];

  return (
    <section id="about" style={{ position: "relative", zIndex: 1, padding: "120px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }} className="about-grid">
        <div className="reveal">
          <p className="section-label">// origin story</p>
          <h2 style={{ fontFamily: "'Orbitron',monospace", fontSize: "clamp(1.8rem,4vw,3.2rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 22, background: "linear-gradient(135deg,#fff,#f4a7c3)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Where Dogwifhat Meets the Universe
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, fontSize: "0.85rem", marginBottom: 16 }}>
            The dog found the alien. The alien found the dog. Together they found Solana. What happened next was inevitable — a meme coin born from two of crypto's most powerful narratives fused into one unstoppable force.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.9, fontSize: "0.85rem" }}>
            $AWIF isn't just a token. It's a cultural moment. A community. A movement built by degens who saw the obvious play before everyone else.
          </p>
          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-box">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative right side — repeating hero char smaller */}
        <div className="reveal" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(127,255,110,0.1) 0%,transparent 70%)", animation: "sgAbout 3s ease-in-out infinite" }} />
            <img src="/images/hero-char.png" alt="AWIF" style={{ width: 260, maxWidth: "80vw", position: "relative", zIndex: 2, filter: "drop-shadow(0 0 20px rgba(127,255,110,0.25))", animation: "charAbout 5s ease-in-out infinite" }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sgAbout { 0%,100%{transform:scale(1);} 50%{transform:scale(1.1);} }
        @keyframes charAbout { 0%,100%{transform:translateY(0) rotate(0deg);} 50%{transform:translateY(-12px) rotate(1.5deg);} }
        .about-stats {
          display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 36px;
        }
        .stat-box {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(244,167,195,0.14);
          border-radius: 8px; padding: 20px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .stat-box:hover { border-color: #f4a7c3; transform: translateY(-4px); }
        .stat-num {
          font-family: 'Orbitron', monospace;
          font-size: 1.7rem; font-weight: 900; color: #7fff6e;
        }
        .stat-label {
          font-size: 0.62rem; letter-spacing: 2px;
          color: rgba(255,255,255,0.38); margin-top: 5px; text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 0 22px !important; }
        }
      `}</style>
    </section>
  );
}
