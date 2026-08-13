import Reveal from "@/components/Reveal";
import InstallSnippet from "@/components/InstallSnippet";

const REPO_URL = "https://github.com/Shivam583-hue/TrueCoder";

export default function Install() {
  return (
    <section id="install" className="section-pad section-band">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Get started</span>
          <h2 className="section-title">One line, and it&apos;s on your machine.</h2>
        </Reveal>

        <div className="install-grid">
          <Reveal>
            <InstallSnippet />
          </Reveal>

          <Reveal delay={80} className="install-side">
            <p>
              TrueCoder resolves the project root from wherever you launch
              it, so the filesystem tools stay rooted there. You don&apos;t
              need a provider account up front, either: open the app and run{" "}
              <code className="mono">/connect</code> to sign in.
            </p>
            <p>
              Want isolation instead of speed for a given command? Build the
              sandbox image once with{" "}
              <code className="mono">docker build -t truecoder-exec:1 container/</code>{" "}
              and TrueCoder will start offering it on its own.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={REPO_URL} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
              <a
                className="btn btn-ghost"
                href={`${REPO_URL}#local-development-setup`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Build from source
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
