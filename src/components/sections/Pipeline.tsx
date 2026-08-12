"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: 1,
    label: "ADMIT",
    desc: "Durably recorded in SQLite before anything is allowed to start.",
  },
  {
    n: 2,
    label: "CLASSIFY",
    desc: "Ordered policy rules score risk and cap the requested limits.",
  },
  {
    n: 3,
    label: "SELECT",
    desc: "Capability-matched backend: a local process group or the sandbox.",
  },
  {
    n: 4,
    label: "APPROVE",
    desc: "A fingerprinted scope you can see, and cannot be widened by the UI.",
  },
  {
    n: 5,
    label: "LAUNCH",
    desc: "Resource identity committed to audit before a byte executes.",
  },
  {
    n: 6,
    label: "RECORD",
    desc: "One arbitrated terminal outcome, hashed and made immutable.",
  },
];

export default function Pipeline() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const el = rowRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setActive(true);
      setLitCount(STEPS.length);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const timers = STEPS.map((_, i) =>
      setTimeout(() => setLitCount(i + 1), i * 220)
    );
    return () => timers.forEach(clearTimeout);
  }, [active]);

  return (
    <section id="pipeline" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">The execution plane</span>
          <h2 className="section-title">
            A command doesn&apos;t run until it has earned trust.
          </h2>
          <p className="lede">
            Shell execution is a security event, not a subprocess call. Six
            gates stand between a model deciding to run something and that
            thing actually executing.
          </p>
        </Reveal>

        <div className="pipeline-row" ref={rowRef}>
          <div className={`pipeline-fill${active ? " filled" : ""}`} />
          {STEPS.map((step, i) => (
            <div key={step.n} className={`pnode${i < litCount ? " lit" : ""}`}>
              <div className="circ">{step.n}</div>
              <div className="textblock">
                <div className="label">{step.label}</div>
                <div className="desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <Reveal>
          <p className="pipeline-note">
            &quot;Policy denial and approval rejection all still reach one
            durable terminal row. No route escapes audit.&quot;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
