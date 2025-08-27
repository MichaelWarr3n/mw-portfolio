import './CursorTrail.scss';
import { useRef, useEffect, useState } from "react";

export default function CursorTrail({ children }) {
  const containerRef = useRef(null);
  const particlesRef = useRef([]);
  const [, tick] = useState(0); // force re-render

  const MAX_PARTICLES = 20;
  const PARTICLES_PER_BURST = 2;

  // Helpers
  const random = (min, max) => Math.random() * (max - min) + min;

  const createParticles = (x, y) => {
    return Array.from({ length: PARTICLES_PER_BURST }).map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      x,
      y,
      dx: random(-2, 2),
      dy: random(-2, 2),
      life: 1,
    }));
  };

  // Spawn particles on mouse move
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    particlesRef.current.push(...createParticles(x, y));

    // Cap total particles
    if (particlesRef.current.length > MAX_PARTICLES) {
      particlesRef.current = particlesRef.current.slice(-MAX_PARTICLES);
    }
  };

  // Animate particles
  useEffect(() => {
  let animationFrame;

  const animate = () => {
    particlesRef.current = particlesRef.current
      .map((p) => ({
        ...p,
        x: p.x + p.dx,
        y: p.y + p.dy,
        life: Math.max(0, p.life - 0.01),
      }))
      .filter((p) => p.life > 0); // remove particles that are fully faded

    tick((t) => t + 1); // trigger render
    animationFrame = requestAnimationFrame(animate);
  };

  animate();
  return () => cancelAnimationFrame(animationFrame);
}, []);

  return (
    <div
      ref={containerRef}
      className="CursorTrail"
      onMouseMove={handleMouseMove}
    >
      <div className="CursorTrail__content">{children}</div>

      {particlesRef.current.map(p => (
        <span
          key={p.id}
          className="CursorTrail__dot"
          style={{
            left: p.x,
            top: p.y,
            opacity: p.life
          }}
        />
      ))}
    </div>
  );
}
