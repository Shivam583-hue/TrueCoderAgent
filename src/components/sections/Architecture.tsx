import Reveal from "@/components/Reveal";

export default function Architecture() {
  return (
    <section id="architecture" className="section-pad section-band">
      <div className="wrap">
        <Reveal className="section-head">
          <h2 className="section-title">
            The agent decides what to do while the execution plane decides whether
            it&apos;s allowed to happen.
          </h2>
          <p className="lede">
            The shell tool is the thin, model-facing bridge between them. It
            converts arguments and formats results, and holds none of the
            actual authority.
          </p>
        </Reveal>

        <div className="arch-planes">
          <Reveal direction="left" className="plane">
            <h3>
              <span className="sw" style={{ background: "var(--accent)" }} />
              Agent plane
            </h3>
            <p>Owns the loop, context, tools, checkpoints, and presentation.</p>
            <div className="chip-row">
              {["Turn lifecycle", "Context budget", "Tool registry", "Checkpoints", "Memory", "Sessions"].map(
                (c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                )
              )}
            </div>
          </Reveal>

          <Reveal className="arch-bridge">
            <div className="line" />
            <div className="tag">shell tool</div>
            <div className="line" />
          </Reveal>

          <Reveal direction="right" className="plane">
            <h3>
              <span className="sw" style={{ background: "var(--amber)" }} />
              Execution plane
            </h3>
            <p>Owns policy, approval, evidence, isolation, and process ownership.</p>
            <div className="chip-row">
              {["Policy engine", "Approval gate", "Audit store", "Backends", "Discovery", "Arbitration"].map(
                (c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="lifecycle-block">
          <div className="term-bar">
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-title">execution lifecycle</span>
          </div>
          <pre>
            {"admission "}
            <span className="arrow">(durable)</span>
            {"\n  "}
            <span className="arrow">→</span> <span className="step">policy evaluation</span>
            {"\n  "}
            <span className="arrow">→</span> <span className="step">backend selection</span>
            {" and exact preparation"}
            {"\n  "}
            <span className="arrow">→</span> <span className="step">approval</span>
            {"\n  "}
            <span className="arrow">→</span> <span className="step">active registration</span>
            {"\n  "}
            <span className="arrow">→</span> <span className="step">resource-gated backend start</span>
            {"\n  "}
            <span className="arrow">→</span> <span className="step">supervision, arbitration, drain</span>
            {"\n  "}
            <span className="arrow">→</span> <span className="step">termination and cleanup</span>
            {"\n  "}
            <span className="arrow">→</span> <span className="step">one immutable terminal finalization</span>
          </pre>
        </Reveal>
      </div>
    </section>
  );
}
