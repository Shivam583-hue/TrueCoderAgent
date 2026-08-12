import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const STATS = [
  {
    kind: "count" as const,
    target: 42214,
    label: "Physical source lines across 175 files",
  },
  {
    kind: "count" as const,
    target: 2520,
    label: "Automated test scenarios across unit, contract, integration, e2e, and sandbox",
  },
  {
    kind: "count" as const,
    target: 44743,
    label: "Test lines, roughly a 1.06:1 ratio to source",
  },
  {
    kind: "count" as const,
    target: 46,
    suffix: "%",
    label: "Of source is the execution & audit subsystem alone",
  },
  {
    kind: "static" as const,
    value: "3",
    unit: "-platform CI",
    label: "Linux, macOS, and Windows run the full matrix on every push",
  },
  {
    kind: "count" as const,
    target: 22,
    label: "Adversarial sandbox checks run against real Docker",
  },
];

export default function Scorecard() {
  return (
    <section id="scorecard" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Measured, not claimed</span>
          <h2 className="section-title">Scored, not vibed.</h2>
          <p className="lede">
            Figures below were measured directly from the working tree. No
            coverage percentage is claimed here, since none has been
            measured. That&apos;s left out on purpose, not forgotten.
          </p>
        </Reveal>

        <div className="stat-grid">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 3) * 40} className="stat-card">
              <div className="stat-num tabular">
                {stat.kind === "count" ? (
                  <>
                    <CountUp target={stat.target} />
                    {stat.suffix ? <span className="unit">{stat.suffix}</span> : null}
                  </>
                ) : (
                  <>
                    {stat.value}
                    <span className="unit">{stat.unit}</span>
                  </>
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="scorecard-foot">
            Default execution ceiling: 600s runtime · 1 MiB produced output ·
            64 KiB returned to the model. Requests can tighten these per
            call, never widen them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
