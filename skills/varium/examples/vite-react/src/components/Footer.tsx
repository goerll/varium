const footerColumns = [
  {
    title: "Core package",
    items: ["VariantPicker", "VariantMap", "Dev-only review surface"],
  },
  {
    title: "Skill contract",
    items: ["Generate 3 variants", "Insert review markers", "Ask for a final selection"],
  },
  {
    title: "Examples",
    items: ["Vite demo", "Next.js placeholder", "Local workspace dependency"],
  },
];

export function Footer() {
  return (
    <footer className="px-6 pb-20 pt-14 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(16,24,40,0.06)]">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div>
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">
              Open-source toolkit
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
              Keep the decision flow clean, then leave production untouched.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
              Varium is meant for the moment where a user needs to compare real UI
              options, choose one, and let the agent finish the branch without leaving
              temporary tooling in the shipping app.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div
                key={column.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-alt)] px-5 py-5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--ink)]">
                  {column.title}
                </h3>
                <div className="mt-4 space-y-3">
                  {column.items.map((item) => (
                    <div key={item} className="text-sm leading-6 text-[var(--muted)]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>Varium demo inspired by a cleaner enterprise product-marketing layout.</div>
          <div className="font-medium text-[var(--ink)]">Varium • MIT</div>
        </div>
      </div>
    </footer>
  );
}
