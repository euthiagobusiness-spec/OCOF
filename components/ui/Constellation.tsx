"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  color: string;
  phase: number;
  drift: number;
  rotation: number;
};

const palette = ["#8052ff", "#ffb829", "#15846e", "#c86bff", "#5d8cff"];

function random(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const lobe = index % 2 === 0 ? -1 : 1;
    const angle = random(index + 3) * Math.PI * 2;
    const radius = Math.pow(random(index + 17), 0.62);
    const ambient = index % 9 === 0;

    return {
      x: ambient
        ? random(index + 41)
        : 0.5 + lobe * 0.14 + Math.cos(angle) * radius * 0.23,
      y: ambient
        ? random(index + 71)
        : 0.5 + Math.sin(angle) * radius * 0.25,
      size: 0.9 + random(index + 29) * 2.2,
      color: palette[index % palette.length],
      phase: random(index + 53) * Math.PI * 2,
      drift: 0.5 + random(index + 67) * 1.4,
      rotation: random(index + 83) * Math.PI * 2,
    };
  });
}

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let particles = createParticles(window.innerWidth < 700 ? 170 : 390);
    let frame = 0;
    let visible = true;
    let pageVisible = !document.hidden;
    let previousTime = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, window.innerWidth < 700 ? 1.15 : 1.5);
      const width = Math.max(1, Math.round(parent.clientWidth * dpr));
      const height = Math.max(1, Math.round(parent.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
      }
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawTriangle = (x: number, y: number, size: number, rotation: number, color: string, opacity: number) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      context.beginPath();
      context.moveTo(0, -size);
      context.lineTo(size * 0.87, size * 0.5);
      context.lineTo(-size * 0.87, size * 0.5);
      context.closePath();
      context.strokeStyle = color;
      context.globalAlpha = opacity;
      context.lineWidth = 0.8;
      context.stroke();
      context.restore();
    };

    const draw = (time: number) => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        const pulse = reducedMotion ? 0 : Math.sin(time * 0.00028 * particle.drift + particle.phase);
        const x = particle.x * width + pulse * (index % 9 === 0 ? 8 : 2.5);
        const y = particle.y * height + Math.cos(time * 0.00022 + particle.phase) * (index % 9 === 0 ? 9 : 2);
        const edge = Math.min(1, Math.max(0.14, 1 - Math.hypot(particle.x - 0.5, particle.y - 0.5)));
        drawTriangle(x, y, particle.size, particle.rotation + pulse * 0.12, particle.color, (index % 9 === 0 ? 0.2 : 0.5) * edge);
      });
    };

    const render = (time: number) => {
      frame = 0;
      if (time - previousTime > 32) {
        previousTime = time;
        draw(time);
      }
      if (!reducedMotion && visible && pageVisible) frame = requestAnimationFrame(render);
    };

    const start = () => {
      if (!frame && visible && pageVisible) frame = requestAnimationFrame(render);
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      particles = createParticles(window.innerWidth < 700 ? 170 : 390);
      draw(0);
    });
    resizeObserver.observe(parent);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    }, { threshold: 0.01 });
    intersectionObserver.observe(canvas);

    const onVisibilityChange = () => {
      pageVisible = !document.hidden;
      if (pageVisible) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    resize();
    draw(0);
    if (!reducedMotion) start();

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="constellation" aria-hidden="true" />;
}
