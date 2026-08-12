import Image from "next/image";

const REPO_URL = "https://github.com/Shivam583-hue/TrueCoder";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-backdrop" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
            Terminal coding agent · open source
          </span>
          <h1 className="hero-anim" style={{ animationDelay: "80ms" }}>
            Checked. Approved.
            <br />
            Bounded. <span className="accent">Recorded.</span>
            <br />
            Then it <span className="amber">runs.</span>
          </h1>
          <p className="lede hero-anim" style={{ animationDelay: "160ms" }}>
            TrueCoder is a terminal-native coding agent with an auditable
            execution plane. Every shell command passes through policy
            evaluation, an approval fingerprint, and a durable audit record
            before a single byte of your project changes.
          </p>
          <div className="hero-ctas hero-anim" style={{ animationDelay: "240ms" }}>
            <a className="btn btn-primary" href="#install">
              Install TrueCoder
            </a>
            <a
              className="btn btn-ghost"
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View source →
            </a>
            <span className="pill">Prebuilt download · coming soon</span>
          </div>
          <div className="hero-meta hero-anim" style={{ animationDelay: "300ms" }}>
            <span>42,214 src lines</span>
            <span className="dot">·</span>
            <span>2,520 test scenarios</span>
            <span className="dot">·</span>
            <span>ruff check clean</span>
          </div>
        </div>

        <div className="term-stage hero-anim-scale" style={{ animationDelay: "160ms" }}>
          <div className="term-glow" aria-hidden="true" />
          <div className="float-pill fp-1" style={{ animationDelay: "500ms" }}>
            <span className="label">audit</span>
            <span className="value">admitted</span>
          </div>
          <div className="float-pill fp-2" style={{ animationDelay: "660ms" }}>
            <span className="label">policy</span>
            <span className="value">ok</span>
            <span className="trail">· risk low</span>
          </div>
          <div className="float-pill fp-3" style={{ animationDelay: "820ms" }}>
            <span className="label">sha-256</span>
            <span className="value">recorded</span>
          </div>
          <div className="term-window">
            <div className="term-bar">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-title">truecoder · zsh</span>
            </div>
            <Image
              src="/truecoder-hero.jpg"
              alt="TrueCoder terminal interface showing the composer, active model, and keyboard shortcuts"
              width={1868}
              height={907}
              priority
              sizes="(max-width: 980px) 100vw, 560px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
