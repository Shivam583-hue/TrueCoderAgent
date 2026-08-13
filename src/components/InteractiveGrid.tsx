"use client";

import { useEffect, useRef } from "react";

const SPACING = 30;
const RADIUS = 140;
const MAX_PUSH = 11;
const DOT_BASE = 1.1;
const DOT_MAX = 2.6;
const EASE = 0.18;
const FALLBACK_RGB = { r: 91, g: 143, b: 239 };

function hexToRgb(hex: string) {
  const clean = hex.trim().replace("#", "");
  if (clean.length !== 3 && clean.length !== 6) return null;
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = parseInt(full, 16);
  if (Number.isNaN(num)) return null;
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

export default function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context2d = canvas?.getContext("2d");
    if (!canvas || !context2d) return;
    const ctx: CanvasRenderingContext2D = context2d;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let baseX = new Float32Array(0);
    let baseY = new Float32Array(0);
    let offX = new Float32Array(0);
    let offY = new Float32Array(0);
    let mouseX = -9999;
    let mouseY = -9999;
    let rafId = 0;
    let color = FALLBACK_RGB;

    function readAccentColor() {
      const raw = getComputedStyle(document.documentElement).getPropertyValue("--accent");
      color = hexToRgb(raw) ?? FALLBACK_RGB;
    }

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;
      const count = cols * rows;
      baseX = new Float32Array(count);
      baseY = new Float32Array(count);
      offX = new Float32Array(count);
      offY = new Float32Array(count);
      let i = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          baseX[i] = c * SPACING;
          baseY[i] = r * SPACING;
          i++;
        }
      }
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }
    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    function drawFrame(animate: boolean) {
      ctx.clearRect(0, 0, width, height);
      const n = baseX.length;
      for (let i = 0; i < n; i++) {
        const bx = baseX[i];
        const by = baseY[i];
        let t = 0;
        if (animate) {
          const dx = bx - mouseX;
          const dy = by - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let targetOffX = 0;
          let targetOffY = 0;
          if (dist < RADIUS) {
            t = 1 - dist / RADIUS;
            const eased = t * t;
            const push = eased * MAX_PUSH;
            const nx = dist === 0 ? 0 : dx / dist;
            const ny = dist === 0 ? 0 : dy / dist;
            targetOffX = nx * push;
            targetOffY = ny * push;
          }
          offX[i] += (targetOffX - offX[i]) * EASE;
          offY[i] += (targetOffY - offY[i]) * EASE;
        }
        const size = DOT_BASE + (DOT_MAX - DOT_BASE) * t;
        const alpha = 0.14 + 0.5 * t;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
        ctx.arc(bx + offX[i], by + offY[i], size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop() {
      drawFrame(true);
      rafId = requestAnimationFrame(loop);
    }

    readAccentColor();
    resize();
    window.addEventListener("resize", resize);

    const themeObserver = new MutationObserver(readAccentColor);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    const schemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    schemeQuery.addEventListener("change", readAccentColor);

    if (reduceMotion) {
      drawFrame(false);
    } else {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseleave", onMouseLeave);
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      schemeQuery.removeEventListener("change", readAccentColor);
      themeObserver.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-grid" aria-hidden="true" />;
}
