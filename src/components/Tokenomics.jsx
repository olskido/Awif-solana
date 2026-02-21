const tokens = [
  { value: "SOL", key: "Blockchain" },
  { value: "0%", key: "Buy Tax" },
  { value: "0%", key: "Sell Tax" },
  { value: "AWIF", key: "Ticker" },
  { value: "🔥", key: "Renounced" },
  { value: "∞", key: "Vibes" },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" style={{ position: "relative", zIndex: 1, padding: "120px 0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 30px", textAlign: "center" }}>
        <div className="section-header reveal" style={{ marginBottom: 56 }}>
          <span className="section-label">// the token</span>
          <h2 className="section-title">Tokenomics</h2>
          <p className="section-sub">Simple. Clean. No BS.</p>
        </div>

        <div className="token-grid reveal">
          {tokens.map((t) => (
            <div key={t.key} className="token-item">
              <span className="token-value">{t.value}</span>
              <span className="token-key">{t.key}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .token-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: rgba(244,167,195,0.1);
          border-radius: 12px; overflow: hidden;
          border: 1px solid rgba(244,167,195,0.14);
        }
        .token-item {
          background: rgba(6,4,15,0.92);
          padding: 38px 20px;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          transition: background 0.3s;
        }
        .token-item:hover { background: rgba(244,167,195,0.05); }
        .token-value {
          font-family: 'Orbitron', monospace;
          font-size: 1.9rem; font-weight: 900;
          background: linear-gradient(135deg, #f4a7c3, #7fff6e);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .token-key {
          font-size: 0.62rem; letter-spacing: 3px;
          color: rgba(255,255,255,0.38); text-transform: uppercase;
        }
        @media (max-width: 600px) {
          .token-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 360px) {
          .token-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
