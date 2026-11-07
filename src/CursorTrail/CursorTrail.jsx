
import { useEffect, useRef } from 'react';
import './CursorTrail.scss';

const MAX_PARTICLES = 20;
const PARTICLES_PER_BURST = 2;

const CYAN = '#1EF1FE';
const MAGENTA = 'rgb(229, 45, 244)';

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function CursorTrail({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );

    if (reducedMotion.matches || !finePointer.matches) return;

    let particles = [];
    let animationFrame = null;

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      const pixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const createParticles = (x, y) =>
      Array.from({ length: PARTICLES_PER_BURST }, (_, index) => ({
        x,
        y,
        dx: random(-2, 2),
        dy: random(-2, 2),
        life: 1,
        color: index === 0 ? CYAN : MAGENTA,
      }));

    const animate = () => {
      const { width, height } = container.getBoundingClientRect();

      context.clearRect(0, 0, width, height);

      particles = particles.filter((particle) => particle.life > 0);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.life = Math.max(0, particle.life - 0.01);

        context.globalAlpha = particle.life;
        context.fillStyle = particle.color;
        context.shadowColor = particle.color;
        context.shadowBlur = 6;

        context.beginPath();
        context.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;

      if (particles.length > 0) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        animationFrame = null;
      }
    };

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();

      particles.push(
        ...createParticles(
          event.clientX - rect.left,
          event.clientY - rect.top
        )
      );

      if (particles.length > MAX_PARTICLES) {
        particles = particles.slice(-MAX_PARTICLES);
      }

      if (animationFrame === null) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    container.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('pointermove', handlePointerMove);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="CursorTrail">
      <div className="CursorTrail__content">
        {children}
      </div>

      <canvas
        ref={canvasRef}
        className="CursorTrail__canvas"
        aria-hidden="true"
      />
    </div>
  );
}
