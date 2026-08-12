"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [pulse, setPulse] = useState(false);

  function toggle() {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const current = root.getAttribute("data-theme") ?? (prefersDark ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("truecoder-theme", next);
    } catch {}
    setPulse((p) => !p);
  }

  return (
    <button
      className="theme-btn"
      onClick={toggle}
      aria-label="Toggle color theme"
      type="button"
      data-pulse={pulse}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7" />
      </svg>
    </button>
  );
}
