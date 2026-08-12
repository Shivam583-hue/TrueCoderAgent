import Reveal from "@/components/Reveal";

const CATEGORIES = [
  {
    path: "~/terminal",
    items: [
      { b: "Textual TUI", rest: " with streaming responses and live tool cards" },
      { rest: "Turn-based history, so an incomplete turn never enters the record" },
      { rest: "Project-scoped SQLite sessions, one repo can't see another's" },
      { b: "ctrl+d", rest: " diffs the workspace against the pre-turn checkpoint" },
      { rest: "Undoable turns via git-plumbing checkpoints" },
    ],
  },
  {
    path: "~/tools",
    items: [
      { b: "15 approval-gated tools", rest: ", including read, write, edit, grep, glob, shell, and delegate" },
      { b: "edit_file", rest: " applies multi-site edits atomically, one approval" },
      { pre: "Durable memory through ", b: "remember and forget", rest: ", corrected in place with replaces" },
      { rest: "A task planner that survives context eviction" },
      { rest: "Language-server intelligence: symbols, defs, references, diagnostics" },
    ],
  },
  {
    path: "~/execution",
    items: [
      { rest: "Every shell call is policy-classified and capability-matched" },
      { rest: "Loop detection withdraws tools from a stalled model instead of burning turns" },
      { rest: "Rolling compaction summarizes evicted history instead of dropping it" },
      { rest: "Cross-platform: POSIX process groups, Windows Job Objects" },
      { rest: "Context budget enforced, so oversized results are shortened instead of silently dropped" },
    ],
  },
  {
    path: "~/audit",
    items: [
      { rest: "Immutable WAL SQLite log, trigger-protected rows" },
      { rest: "SHA-256 digests over the full raw output of every run" },
      { rest: "Crash recovery leases nonterminal runs and never trusts a bare PID" },
      { rest: "Retention compaction preserves every unresolved record" },
      { rest: "Mutation evidence: before/after digests for every write and edit" },
    ],
  },
  {
    path: "~/sandbox",
    items: [
      { rest: "Digest-pinned Docker image, launch never pulls" },
      { rest: "Non-root UID 65532, read-only root filesystem" },
      { rest: "All capabilities dropped, network denied by default" },
      { rest: "Memory and PID limits, best-effort CPU accounting" },
      { rest: "22 adversarial checks run against real Docker" },
    ],
  },
  {
    path: "~/providers",
    items: [
      { rest: "OpenAI, Anthropic, Google, OpenRouter, and the Models.dev catalog" },
      { rest: "Browser sign-in and headless device authorization" },
      { b: "/models", rest: " hot-swaps the active model without a restart" },
      { b: "web_fetch", rest: " is SSRF-resistant and only reaches public addresses" },
      { rest: "MCP servers treated as untrusted, namespaced, schema-bounded" },
    ],
  },
];

export default function Features() {
  return (
    <section id="features" className="section-pad section-band">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">What&apos;s inside</span>
          <h2 className="section-title">Fifteen tools. One audit trail.</h2>
          <p className="lede">
            Every tool the model can call, from reading a file to running a
            shell command, goes through the same registry, approval
            fingerprint, and durable record.
          </p>
        </Reveal>

        <div className="spec-grid">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.path} delay={(i % 3) * 60} className="spec-card">
              <div className="spec-path">{cat.path}</div>
              <ul>
                {cat.items.map((item, j) => (
                  <li key={j}>
                    {item.pre}
                    {item.b ? <b>{item.b}</b> : null}
                    {item.rest}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
