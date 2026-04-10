const timeline = [
  {
    step: "01",
    title: "Generate variants",
    detail: "Your agent writes a sibling `.variants.tsx` file beside the target component.",
  },
  {
    step: "02",
    title: "Review on the real page",
    detail: "The picker renders inside the actual product context instead of detached screenshots.",
  },
  {
    step: "03",
    title: "Ask for selection",
    detail: "The agent presents the options in chat or with a native question dialog when available.",
  },
];

const proof = [
  { value: "3", label: "strong directions by default" },
  { value: "1", label: "selection flow to finalize" },
  { value: "0", label: "production UI left behind" },
];

export function Hero() {
  return (
    <section className="px-6 pb-12 pt-8 sm:px-10 lg:px-16 lg:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-full border border-[var(--line)] bg-white/70 px-4 py-3 shadow-[0_12px_30px_rgba(16,24,40,0.05)] backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--ink)] text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white">
              V
            </span>
            <div>
              <div className="text-sm font-semibold text-[var(--ink)]">Varium</div>
              <div className="text-xs text-[var(--muted)]">React variant review toolkit</div>
            </div>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#workflow"
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-[var(--surface-alt)] hover:text-[var(--ink)]"
            >
              Workflow
            </a>
            <a
              href="#variants"
              className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--ink-soft)]"
            >
              View demo
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_420px]">
          <div className="rounded-[2rem] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(16,24,40,0.06)] sm:px-8 sm:py-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-alt)] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Agent workflow
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </div>

            <h1 className="mt-6 max-w-3xl text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--ink)]">
              Review UI directions in the product, not in a thread of screenshots.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Varium gives agents a clean way to generate multiple React variants,
              stage them inside the live page, and hand the user a clear selection
              step before the branch is cleaned up.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--ink-soft)]"
              >
                See the workflow
              </a>
              <div className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-alt)] px-6 py-3 text-sm font-medium text-[var(--muted)]">
                Works with Claude Code, Codex, Cursor, OpenCode
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {proof.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-alt)] px-4 py-5"
                >
                  <div className="text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="workflow"
            className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,#eff6f4,#ffffff)] p-6 shadow-[0_24px_80px_rgba(16,24,40,0.06)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                  Workflow
                </div>
                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                  Ship a decision, not a demo artifact
                </h2>
              </div>
              <div className="rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                Dev only
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {timeline.map((item) => (
                <div
                  key={item.step}
                  className="grid gap-3 rounded-[1.5rem] border border-[var(--line)] bg-white px-4 py-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-alt)] text-xs font-semibold tracking-[0.12em] text-[var(--accent-strong)]">
                      {item.step}
                    </span>
                    <div className="text-base font-semibold text-[var(--ink)]">{item.title}</div>
                  </div>
                  <p className="text-sm leading-6 text-[var(--muted)]">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-dashed border-[var(--line-strong)] bg-white px-4 py-4">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                Selection handoff
              </div>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                When available, the agent should open a native selection dialog. Otherwise
                it asks in chat with numbered options and accepts either the number or
                the variant name.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
