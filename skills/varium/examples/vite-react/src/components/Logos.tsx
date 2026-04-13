const labels = [
  "Claude Code",
  "Codex",
  "Cursor",
  "OpenCode",
  "React",
  "Vite",
];

const cards = [
  {
    title: "Variants live beside the source",
    text: "The generated file is local, typed, and easy to delete after the choice is made.",
  },
  {
    title: "Real context for review",
    text: "Users inspect the section inside the full page, with neighboring layout and copy intact.",
  },
  {
    title: "Tight cleanup loop",
    text: "Once a direction is selected, the agent keeps the winner and removes the temporary review state.",
  },
];

export function Logos() {
  return (
    <section className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] border border-[var(--line)] bg-white px-6 py-6 shadow-[0_18px_50px_rgba(16,24,40,0.05)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
                Designed for modern agent tooling
              </div>
              <div className="mt-2 max-w-xl text-base leading-7 text-[var(--muted)]">
                The UI stays product-focused while the workflow stays simple enough to
                work across different agent runtimes.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {labels.map((label) => (
                <div
                  key={label}
                  className="rounded-full border border-[var(--line)] bg-[var(--surface-alt)] px-4 py-2 text-sm font-medium text-[var(--ink)]"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-alt)] px-5 py-5"
              >
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
