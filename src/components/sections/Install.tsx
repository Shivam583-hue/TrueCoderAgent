"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const REPO_URL = "https://github.com/Shivam583-hue/TrueCoder";

const LINES: { text: string; kind: "comment" | "code" | "blank" }[] = [
  { text: "# clone and enter the project", kind: "comment" },
  { text: "git clone https://github.com/Shivam583-hue/TrueCoder.git", kind: "code" },
  { text: "cd TrueCoder", kind: "code" },
  { text: "", kind: "blank" },
  { text: "# isolated environment", kind: "comment" },
  { text: "python3 -m venv .venv && source .venv/bin/activate", kind: "code" },
  { text: "pip install -e .", kind: "code" },
  { text: "", kind: "blank" },
  { text: "# provider config", kind: "comment" },
  { text: "cp .env.example .env", kind: "code" },
  { text: "", kind: "blank" },
  { text: "# launch, from inside the repo you want it to work on", kind: "comment" },
  { text: "truecoder", kind: "code" },
];

export default function Install() {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  async function copy() {
    const text = LINES.filter((l) => l.kind !== "comment").map((l) => l.text).join("\n").trim();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  }

  return (
    <section id="install" className="section-pad section-band">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Get started</span>
          <h2 className="section-title">Run it in the project you already have.</h2>
        </Reveal>

        <div className="install-grid">
          <Reveal className="code-window">
            <div className="term-bar">
              <span className="term-title" style={{ marginLeft: 0 }}>
                install.sh
              </span>
              <button className="copy-btn" type="button" onClick={copy}>
                {copied ? "copied" : "copy"}
              </button>
            </div>
            <pre ref={preRef}>
              {LINES.map((line, i) => (
                <span key={i} className={line.kind === "comment" ? "c1" : "c2"}>
                  {line.text || " "}
                  {"\n"}
                </span>
              ))}
            </pre>
          </Reveal>

          <Reveal delay={80} className="install-side">
            <p>
              TrueCoder resolves the project root from where you launch it, so
              everything the filesystem tools can reach is rooted right
              there. No provider account is required up front — run{" "}
              <code className="mono">/connect</code> inside the app to sign in.
            </p>
            <p>
              Prefer isolation over speed for a given command? Build the
              sandbox image once with{" "}
              <code className="mono">docker build -t truecoder-exec:1 container/</code>{" "}
              and TrueCoder will offer it automatically.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href={REPO_URL} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
              <span className="pill">Prebuilt binaries · coming soon</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
