import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const CA = "EogtR3RcBkt5xw8d8BcYTBHpEJzJqrChTzZdv2Zupump";

  const copy = () => {
    navigator.clipboard.writeText(CA).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      textAlign: "center", padding: "120px 20px 80px",
      position: "relative", zIndex: 1,
    }}>
      <div className="hero-badge reveal">
        🛸 LIVE ON SOLANA
      </div>

      <h1 className="hero-title reveal">
        <span className="word-dog">DOG</span>
        <span className="word-wif">WIF</span>
        <span className="word-alien">ALIEN</span>
      </h1>

      <div className="hero-ticker reveal">$AWIF</div>

      <p className="hero-sub reveal">Two narratives. One coin. Zero hesitation.</p>

      <div className="hero-buttons reveal">
        <a href="https://pump.fun" target="_blank" rel="noreferrer" className="btn-primary">
          Buy $AWIF
        </a>
        <button onClick={() => scrollTo("#gallery")} className="btn-secondary">
          View Memes
        </button>
      </div>

      <div className="ca-box reveal">
        <span className="ca-label">CA</span>
        <span className="ca-address">{CA}</span>
        <button onClick={copy} className="ca-copy" style={copied ? { color: "#7fff6e", borderColor: "#7fff6e" } : {}}>
          {copied ? "COPIED!" : "COPY"}
        </button>
      </div>

      {/* Hero character */}
      <div className="hero-char-wrap reveal">
        <div className="scene-glow" />
        <img
          src="/images/hero-char.png"
          alt="Dog Wif Alien"
          className="hero-char-img"
          loading="eager"
        />
      </div>

      <div className="scroll-hint">SCROLL</div>

      <style>{`
        .hero-badge {
          display: inline-block;
          background: rgba(127,255,110,0.1);
          border: 1px solid #7fff6e;
          color: #7fff6e;
          font-size: 0.63rem;
          letter-spacing: 4px;
          padding: 6px 18px;
          border-radius: 20px;
          margin-bottom: 28px;
          animation: pulse-badge 2s ease-in-out infinite;
        }
        @keyframes pulse-badge {
          0%,100% { box-shadow: 0 0 10px rgba(127,255,110,0.4); }
          50% { box-shadow: 0 0 25px rgba(127,255,110,0.7); }
        }
        .hero-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(3rem, 10vw, 8rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -2px;
          margin-bottom: 10px;
        }
        .word-dog {
          display: block;
          background: linear-gradient(135deg, #fff 0%, #f4a7c3 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: float-t 4s ease-in-out infinite;
        }
        .word-wif {
          display: block;
          background: linear-gradient(135deg, #f4a7c3, #c084fc);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: float-t 4s ease-in-out infinite 0.3s;
        }
        .word-alien {
          display: block;
          background: linear-gradient(135deg, #c084fc, #7fff6e);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          animation: float-t 4s ease-in-out infinite 0.6s;
        }
        @keyframes float-t {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .hero-ticker {
          font-family: 'Orbitron', monospace;
          font-size: clamp(1.4rem, 4vw, 2.8rem);
          font-weight: 700;
          color: #7fff6e;
          letter-spacing: 8px;
          margin-bottom: 20px;
          animation: glow-t 2s ease-in-out infinite;
        }
        @keyframes glow-t {
          0%,100% { text-shadow: 0 0 20px rgba(127,255,110,0.5); }
          50% { text-shadow: 0 0 50px rgba(127,255,110,0.9); }
        }
        .hero-sub {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 2px;
          margin-bottom: 44px;
          max-width: 480px;
        }
        .hero-buttons {
          display: flex; gap: 18px; flex-wrap: wrap; justify-content: center;
        }
        .btn-primary {
          background: linear-gradient(135deg, #f4a7c3, #c084fc);
          color: #fff; border: none;
          padding: 15px 38px;
          font-family: 'Orbitron', monospace;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; border-radius: 4px; text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 28px rgba(244,167,195,0.5);
        }
        .btn-primary:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 0 50px rgba(244,167,195,0.7); }
        .btn-secondary {
          background: transparent; color: #7fff6e;
          border: 1px solid #7fff6e;
          padding: 15px 38px;
          font-family: 'Orbitron', monospace;
          font-size: 0.78rem; font-weight: 700;
          letter-spacing: 3px; text-transform: uppercase;
          cursor: pointer; border-radius: 4px;
          transition: all 0.2s;
        }
        .btn-secondary:hover { background: rgba(127,255,110,0.1); box-shadow: 0 0 28px rgba(127,255,110,0.4); transform: translateY(-3px); }
        .ca-box {
          margin-top: 44px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(244,167,195,0.2);
          border-radius: 8px;
          padding: 14px 26px;
          display: flex; align-items: center; gap: 14px;
          max-width: 680px; width: 100%;
        }
        .ca-label {
          font-size: 0.58rem; letter-spacing: 3px;
          color: #f4a7c3; white-space: nowrap; text-transform: uppercase;
        }
        .ca-address {
          font-size: 0.68rem; color: rgba(255,255,255,0.55);
          word-break: break-all; flex: 1; text-align: left;
        }
        .ca-copy {
          background: rgba(127,255,110,0.12);
          border: 1px solid #7fff6e;
          color: #7fff6e; padding: 6px 13px;
          font-size: 0.62rem; letter-spacing: 2px;
          cursor: pointer; border-radius: 4px;
          white-space: nowrap;
          font-family: 'Space Mono', monospace;
          transition: all 0.2s;
        }
        .ca-copy:hover { background: rgba(127,255,110,0.28); }
        .hero-char-wrap {
          position: relative;
          margin-top: 50px;
          display: flex; align-items: center; justify-content: center;
        }
        .scene-glow {
          position: absolute;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(244,167,195,0.13) 0%, transparent 70%);
          animation: sg 3s ease-in-out infinite;
        }
        @keyframes sg { 0%,100% { transform: scale(1); opacity:0.7; } 50% { transform: scale(1.12); opacity:1; } }
        .hero-char-img {
          width: 320px; max-width: 88vw;
          position: relative; z-index: 2;
          animation: char-float 4s ease-in-out infinite;
          filter: drop-shadow(0 0 24px rgba(244,167,195,0.35));
        }
        @keyframes char-float {
          0%,100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-14px) rotate(1deg); }
          75% { transform: translateY(-7px) rotate(-1deg); }
        }
        .scroll-hint {
          position: absolute; bottom: 36px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.28); font-size: 0.58rem; letter-spacing: 3px;
          animation: bounce 2s ease-in-out infinite;
        }
        .scroll-hint::after {
          content: ''; width: 1px; height: 44px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.28), transparent);
        }
        @keyframes bounce {
          0%,100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(7px); }
        }
        @media (max-width: 600px) {
          .ca-box { flex-direction: column; text-align: center; }
          .ca-address { text-align: center; }
        }
      `}</style>
    </section>
  );
}
