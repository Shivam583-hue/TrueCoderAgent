import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    k: "Local by default",
    v: "Your toolchain, your virtualenvs, your caches — commands run where your project already lives.",
  },
  {
    k: "Sandboxed on request",
    v: "A digest-pinned, non-root, read-only, network-denied Docker profile, proven against real Docker.",
  },
  {
    k: "Audited, always",
    v: "Policy denial, approval rejection, and every run reach one durable row. No route escapes audit.",
  },
];

export default function ThesisStrip() {
  return (
    <section className="strip">
      <div className="wrap strip-inner">
        {ITEMS.map((item, i) => (
          <Reveal key={item.k} delay={i * 80} className="strip-item">
            <div className="k">{item.k}</div>
            <div className="v">{item.v}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
