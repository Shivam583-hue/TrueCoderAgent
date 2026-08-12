import Reveal from "@/components/Reveal";

const CHECKS = [
  {
    b: "Identity",
    v: "Fixed non-root UID/GID 65532, no-new-privileges active, all capabilities dropped.",
  },
  {
    b: "Root filesystem",
    v: "Read-only, with only approved tmpfs locations writable.",
  },
  {
    b: "Host filesystem",
    v: "A request for host-mode isolation is refused outright by the plan.",
  },
  {
    b: "Network",
    v: "Denied unless an isolated network is explicitly configured by an operator.",
  },
  {
    b: "Runtime socket",
    v: "Never mounted, never visible inside the container.",
  },
  {
    b: "Memory & PIDs",
    v: "Hard limits, defaulting to 512 MiB and 64 processes.",
  },
  {
    b: "Image",
    v: "Pinned by content digest, verified for platform, user, and entrypoint labels.",
  },
  {
    b: "Critical commands",
    v: "A command still permitted at critical risk is refused on the host — sandbox only.",
  },
];

export default function Sandbox() {
  return (
    <section id="sandbox" className="section-pad">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Certified sandbox profile</span>
          <h2 className="section-title">
            When isolation matters, it&apos;s proven — not assumed.
          </h2>
          <p className="lede">
            Local execution is fast and has your toolchain already installed.
            When a command needs isolation instead, this is what it runs
            inside — and every claim below is exercised by an adversarial
            test against real Docker.
          </p>
        </Reveal>

        <Reveal className="badge-row">
          <span className="badge">
            <span className="dot" />
            Linux · Docker certified
          </span>
          <span className="badge">
            <span className="dot" />
            22 adversarial checks passing
          </span>
          <span className="badge">
            <span className="dot" />
            Digest-pinned, --pull never
          </span>
        </Reveal>

        <div className="check-grid">
          {CHECKS.map((check, i) => (
            <Reveal key={check.b} delay={(i % 4) * 40} className="check-row">
              <span className="check-mark">✓</span>
              <div>
                <b>{check.b}</b>
                <span>{check.v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
