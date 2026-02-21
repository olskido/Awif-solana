const socials = [
  {
    href: "https://x.com/i/communities/2025022958641811475",
    icon: "𝕏",
    name: "Twitter / X",
    desc: "Follow the narrative",
    cls: "twitter",
    isEmoji: true,
  },
  {
    href: "#",
    icon: "/images/telegram-logo.png",
    name: "Telegram",
    desc: "Coming soon",
    cls: "telegram",
    isEmoji: false,
  },
  {
    href: "https://pump.fun/coin/EogtR3RcBkt5xw8d8BcYTBHpEJzJqrChTzZdv2Zupump",
    icon: "/images/pumpfun-logo.png",
    name: "pump.fun",
    desc: "Buy $AWIF",
    cls: "pump",
    isEmoji: false,
  },
];

export default function Community() {
  return (
    <section id="community" style={{ position: "relative", zIndex: 1, padding: "120px 0", textAlign: "center" }}>
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 30px" }}>
        <div className="section-header reveal" style={{ marginBottom: 56 }}>
          <span className="section-label">// join the fleet</span>
          <h2 className="section-title">Join the Community</h2>
          <p className="section-sub">The dog and alien aren't going alone. Come with us.</p>
        </div>

        <div className="social-cards reveal">
          {socials.map((s) => (
            <a key={s.name} href={s.href} target={s.href !== "#" ? "_blank" : undefined} rel="noreferrer" className={`social-card ${s.cls}`}>
              <div className="social-icon">
                {s.isEmoji ? (
                  s.icon
                ) : (
                  <img src={s.icon} alt={s.name} className="social-icon-img" />
                )}
              </div>
              <div className="social-name">{s.name}</div>
              <div className="social-desc">{s.desc}</div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .social-cards {
          display: flex; gap: 22px; justify-content: center; flex-wrap: wrap;
        }
        .social-card {
          display: flex; flex-direction: column; align-items: center; gap: 14px;
          padding: 38px 46px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          text-decoration: none; color: #fff;
          transition: all 0.3s; flex: 1;
          min-width: 180px; max-width: 260px;
        }
        .social-card.twitter:hover {
          border-color: #1d9bf0; background: rgba(29,155,240,0.07);
          transform: translateY(-6px); box-shadow: 0 20px 40px rgba(29,155,240,0.14);
        }
        .social-card.telegram:hover {
          border-color: #29a8e0; background: rgba(41,168,224,0.07);
          transform: translateY(-6px); box-shadow: 0 20px 40px rgba(41,168,224,0.14);
        }
        .social-card.pump:hover {
          border-color: #7fff6e; background: rgba(127,255,110,0.05);
          transform: translateY(-6px); box-shadow: 0 20px 40px rgba(127,255,110,0.15);
        }
        .social-icon { font-size: 2.4rem; line-height: 1; display: flex; align-items: center; justify-content: center; }
        .social-icon-img {
          width: 48px; height: 48px;
          object-fit: contain;
          border-radius: 10px;
        }
        .social-name {
          font-family: 'Orbitron', monospace;
          font-size: 0.82rem; font-weight: 700; letter-spacing: 2px;
        }
        .social-desc {
          font-size: 0.62rem; letter-spacing: 1px;
          color: rgba(255,255,255,0.32); text-transform: uppercase;
        }
        @media (max-width: 480px) {
          .social-card { max-width: 100%; padding: 28px 24px; }
        }
      `}</style>
    </section>
  );
}
