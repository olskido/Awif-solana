import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.3,
      opacity: Math.random(),
      tDir: 1,
      tSpeed: Math.random() * 0.015 + 0.004,
    }));

    const ufos = Array.from({ length: 4 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: 50 + Math.random() * 180,
      w: 48 + Math.random() * 38,
      speed: 0.35 + Math.random() * 0.55,
      dir: i % 2 === 0 ? 1 : -1,
      bob: Math.random() * Math.PI * 2,
      glow: Math.random() * Math.PI * 2,
    }));

    const shoots = [];
    const spawnShoot = () =>
      shoots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * (canvas.height * 0.45),
        len: 80 + Math.random() * 110,
        speed: 9 + Math.random() * 10,
        opacity: 1,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
      });
    const shootInterval = setInterval(spawnShoot, 2600);

    const nebulae = [
      { x: 0.15, y: 0.2, r: 0.28, color: "rgba(244,167,195,0.04)" },
      { x: 0.8, y: 0.55, r: 0.32, color: "rgba(127,255,110,0.03)" },
      { x: 0.5, y: 0.88, r: 0.22, color: "rgba(192,132,252,0.04)" },
    ];

    const drawUFO = (u, t) => {
      const bobY = u.y + Math.sin(t * 0.001 + u.bob) * 11;
      const glowA = 0.5 + 0.5 * Math.sin(t * 0.003 + u.glow);
      ctx.save();
      ctx.translate(u.x, bobY);
      if (u.dir < 0) ctx.scale(-1, 1);

      const beam = ctx.createLinearGradient(0, 0, 0, 75);
      beam.addColorStop(0, `rgba(127,255,110,${0.14 * glowA})`);
      beam.addColorStop(1, "rgba(127,255,110,0)");
      ctx.beginPath();
      ctx.moveTo(-u.w * 0.28, 8);
      ctx.lineTo(-u.w * 0.58, 75);
      ctx.lineTo(u.w * 0.58, 75);
      ctx.lineTo(u.w * 0.28, 8);
      ctx.fillStyle = beam;
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(0, 0, u.w * 0.5, u.w * 0.14, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(175,188,210,0.72)";
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(0, -u.w * 0.09, u.w * 0.21, u.w * 0.17, 0, Math.PI, 0);
      ctx.fillStyle = `rgba(155,215,255,${0.48 + 0.28 * glowA})`;
      ctx.fill();

      const lc = ["#f4a7c3", "#7fff6e", "#fff", "#c084fc"];
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc((i - 2) * u.w * 0.2, 4, 2.8, 0, Math.PI * 2);
        ctx.fillStyle = lc[i % lc.length];
        ctx.globalAlpha = 0.55 + 0.4 * Math.sin(t * 0.005 + i * 1.2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.restore();
    };

    let raf;
    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const bg = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.3, 0,
        canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.85
      );
      bg.addColorStop(0, "#0d0820");
      bg.addColorStop(0.5, "#06040f");
      bg.addColorStop(1, "#030209");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nebulae.forEach((n) => {
        const ng = ctx.createRadialGradient(
          n.x * canvas.width, n.y * canvas.height, 0,
          n.x * canvas.width, n.y * canvas.height, n.r * canvas.width
        );
        ng.addColorStop(0, n.color);
        ng.addColorStop(1, "transparent");
        ctx.fillStyle = ng;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      stars.forEach((s) => {
        s.opacity += s.tSpeed * s.tDir;
        if (s.opacity >= 1 || s.opacity <= 0.08) s.tDir *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
        ctx.fill();
      });

      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i];
        const ex = s.x - Math.cos(s.angle) * s.len;
        const ey = s.y - Math.sin(s.angle) * s.len;
        const g = ctx.createLinearGradient(s.x, s.y, ex, ey);
        g.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.02;
        if (s.opacity <= 0) shoots.splice(i, 1);
      }

      ufos.forEach((u) => {
        u.x += u.speed * u.dir;
        if (u.x > canvas.width + 110) u.x = -110;
        if (u.x < -110) u.x = canvas.width + 110;
        drawUFO(u, t);
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(shootInterval);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
    />
  );
}
