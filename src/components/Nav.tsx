"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const REPO_URL = "https://github.com/Shivam583-hue/TrueCoder";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="cursor" aria-hidden="true" />
          TRUE<span className="dim">CODER</span>
        </a>
        <nav className="nav-links">
          <a href="#pipeline">Pipeline</a>
          <a href="#features">Features</a>
          <a href="#scorecard">Scorecard</a>
          <a href="#architecture">Architecture</a>
          <a href="#sandbox">Sandbox</a>
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <a className="btn btn-ghost btn-sm" href={REPO_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="btn btn-primary btn-sm" href="#install">
            Install
          </a>
        </div>
      </div>
    </div>
  );
}
