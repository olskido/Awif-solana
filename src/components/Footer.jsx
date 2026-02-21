export default function Footer() {
  return (
    <footer style={{
      position: "relative", zIndex: 1,
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "36px 46px",
      display: "flex", alignItems: "center",
      justifyContent: "space-between", flexWrap: "wrap", gap: 18,
    }}>
      <div style={{
        fontFamily: "'Orbitron',monospace", fontSize: "1rem", fontWeight: 900,
        background: "linear-gradient(90deg,#f4a7c3,#7fff6e)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        letterSpacing: "3px",
      }}>$AWIF</div>

      <div style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.22)", letterSpacing: "1px", textAlign: "center" }}>
        © 2026 DogWifAlien · Built by degens for degens
      </div>

      <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.18)", letterSpacing: "1px", textAlign: "right", maxWidth: 240 }}>
        Not financial advice. This is a meme coin. Do your own research.
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer { flex-direction: column; align-items: center; text-align: center; padding: 28px 22px; }
          footer div:last-child { text-align: center; }
        }
      `}</style>
    </footer>
  );
}
