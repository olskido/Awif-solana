import { useState } from "react";

// To add more memes: just add their filenames here
const ALL_MEMES = [
  { src: "/images/meme1.jpg", alt: "Sunrise Silhouette" },
  { src: "/images/meme2.jpg", alt: "Area 51 Reveal" },
  { src: "/images/meme3.jpg", alt: "NASA Control Room" },
  { src: "/images/meme4.jpg", alt: "Deep Sea Discovery" },
  { src: "/images/meme5.jpg", alt: "Museum Exhibit" },
  { src: "/images/meme6.jpg", alt: "Mountain Summit" },
  { src: "/images/meme7.jpg", alt: "Boardroom Takeover" },
  { src: "/images/meme8.jpg", alt: "Fashion Week" },
  // Add more: { src: "/images/meme9.jpg", alt: "..." },
];

const INITIAL_SHOW = 6;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null);

  const visible = showAll ? ALL_MEMES : ALL_MEMES.slice(0, INITIAL_SHOW);

  return (
    <section id="gallery" style={{ position: "relative", zIndex: 1, padding: "120px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 36px" }}>
        <div className="section-header reveal" style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="section-label">// meme vault</span>
          <h2 className="section-title">The Gallery</h2>
          <p className="section-sub">The ones that hit different. More dropping soon.</p>
        </div>

        <div className="gallery-grid reveal">
          {visible.map((m, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setLightbox(m)}
            >
              <img src={m.src} alt={m.alt} loading="lazy" />
              <div className="gallery-overlay"><span>👽 {m.alt}</span></div>
            </div>
          ))}
        </div>

        {!showAll && ALL_MEMES.length > INITIAL_SHOW && (
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <button onClick={() => setShowAll(true)} className="view-more-btn">
              View More Memes ↓
            </button>
          </div>
        )}
        {showAll && (
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <button onClick={() => setShowAll(false)} className="view-more-btn">
              Show Less ↑
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox active" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox.src} alt={lightbox.alt} onClick={e => e.stopPropagation()} />
        </div>
      )}

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .gallery-item {
          position: relative; border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(244,167,195,0.1);
          background: rgba(255,255,255,0.02);
          aspect-ratio: 1; cursor: pointer;
          transition: transform 0.3s, border-color 0.3s;
        }
        .gallery-item:hover { transform: scale(1.03); border-color: #f4a7c3; box-shadow: 0 0 28px rgba(244,167,195,0.18); }
        .gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(6,4,15,0.88) 0%, transparent 55%);
          opacity: 0; transition: opacity 0.3s;
          display: flex; align-items: flex-end; padding: 16px;
        }
        .gallery-item:hover .gallery-overlay { opacity: 1; }
        .gallery-overlay span { font-size: 0.62rem; letter-spacing: 2px; color: #f4a7c3; text-transform: uppercase; }
        .view-more-btn {
          background: transparent;
          border: 1px solid rgba(244,167,195,0.4);
          color: #f4a7c3;
          padding: 13px 36px;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem; letter-spacing: 3px;
          text-transform: uppercase; cursor: pointer;
          border-radius: 6px; transition: all 0.3s;
        }
        .view-more-btn:hover {
          background: rgba(244,167,195,0.08);
          border-color: #f4a7c3;
          box-shadow: 0 0 20px rgba(244,167,195,0.3);
        }
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 500px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
