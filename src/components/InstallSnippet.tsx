"use client";

import { useState } from "react";

const COMMANDS = {
  unix: "curl -fsSL https://github.com/Shivam583-hue/TrueCoder/releases/latest/download/install.sh | sh",
  windows: "irm https://github.com/Shivam583-hue/TrueCoder/releases/latest/download/install.ps1 | iex",
} as const;

type Os = keyof typeof COMMANDS;

export default function InstallSnippet({ compact = false }: { compact?: boolean }) {
  const [os, setOs] = useState<Os>("unix");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(COMMANDS[os]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  }

  return (
    <div className={`install-snippet${compact ? " compact" : ""}`}>
      <div className="os-tabs" role="tablist" aria-label="Operating system">
        <button
          type="button"
          role="tab"
          aria-selected={os === "unix"}
          className={os === "unix" ? "active" : ""}
          onClick={() => setOs("unix")}
        >
          macOS / Linux
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={os === "windows"}
          className={os === "windows" ? "active" : ""}
          onClick={() => setOs("windows")}
        >
          Windows
        </button>
      </div>
      <div className="code-window install-code">
        <div className="term-bar">
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-dot" />
          <span className="term-title">{os === "unix" ? "terminal" : "powershell"}</span>
          <button className="copy-btn" type="button" onClick={copy}>
            {copied ? "copied" : "copy"}
          </button>
        </div>
        <pre>
          <code>
            <span className="c1">{os === "unix" ? "$ " : "> "}</span>
            <span className="c2">{COMMANDS[os]}</span>
          </code>
        </pre>
      </div>
    </div>
  );
}
