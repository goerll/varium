import type { VariantMap } from "varium";

const customerNotes = [
  {
    quote:
      "We stopped debating isolated mockups. The team reviewed three directions inside the real page and closed the decision in one pass.",
    person: "Mina Ortega",
    role: "Design Systems Lead, Northstar",
  },
  {
    quote:
      "Varium made the feedback loop concrete. Engineering, design, and product were all reacting to the same implementation.",
    person: "Dev Malik",
    role: "Staff Engineer, Lantern",
  },
  {
    quote:
      "The best part was cleanup. Once the choice was made, the agent removed the temporary state and left us with normal React code.",
    person: "Camille Ho",
    role: "Product Design Director, Fieldform",
  },
];

const stats = [
  { value: "2h", label: "to wire first review loop" },
  { value: "3", label: "directions compared side by side" },
  { value: "1", label: "component kept in production" },
];

const StructuredProof = () => (
  <section id="variants" className="px-6 py-10 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(16,24,40,0.06)] sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
        <div>
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Structured Proof
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
            Built for a calm, evidence-first review loop.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            A clean enterprise section with grounded proof points, restrained cards,
            and enough structure to feel credible without turning sterile.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--surface-alt)] px-4 py-4"
              >
                <div className="text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm leading-6 text-[var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {customerNotes.map((note) => (
            <article
              key={note.person}
              className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-alt)] px-5 py-5"
            >
              <p className="text-base leading-7 text-[var(--ink-soft)]">“{note.quote}”</p>
              <div className="mt-5 border-t border-[var(--line)] pt-4">
                <div className="text-sm font-semibold text-[var(--ink)]">{note.person}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{note.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WalletRibbon = () => (
  <section id="variants" className="px-6 py-10 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(180deg,#f1f7f6,#ffffff)] shadow-[0_24px_80px_rgba(16,24,40,0.06)]">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
        <div className="px-6 py-8 sm:px-8 sm:py-10">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
            Wallet Ribbon
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[var(--ink)] sm:text-5xl">
            Tie the selection flow directly to product delivery.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
            This variant borrows more from polished SaaS case-study layouts: broad hero
            statement, right-side product framing, and tighter hierarchy.
          </p>

          <div className="mt-8 grid gap-3">
            {customerNotes.slice(0, 2).map((note) => (
              <article
                key={note.person}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white px-5 py-5"
              >
                <p className="text-base leading-7 text-[var(--ink-soft)]">“{note.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-[var(--ink)]">{note.person}</div>
                <div className="text-sm text-[var(--muted)]">{note.role}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-[var(--line)] bg-white px-6 py-8 lg:border-l lg:border-t-0">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--surface-alt)] p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-[var(--ink)]">Review status</div>
              <div className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                Active
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="rounded-[1.25rem] border border-[var(--line)] bg-white px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Generated
                </div>
                <div className="mt-2 text-sm text-[var(--ink)]">Hero, testimonials, CTA</div>
              </div>
              <div className="rounded-[1.25rem] border border-[var(--line)] bg-white px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Waiting for
                </div>
                <div className="mt-2 text-sm text-[var(--ink)]">User selects one final variant</div>
              </div>
              <div className="rounded-[1.25rem] border border-dashed border-[var(--line-strong)] bg-white px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Agent follow-up
                </div>
                <div className="mt-2 text-sm text-[var(--ink)]">
                  Keep the chosen component and remove `.variants.tsx`
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-[1.75rem] border border-[var(--line)] bg-[var(--ink)] px-5 py-5 text-white">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Why teams keep this
            </div>
            <p className="mt-3 text-sm leading-7 text-white/80">
              It feels close to how a serious product page would explain a workflow:
              minimal chrome, clear state, and no ornamental noise.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CaseStudyBand = () => (
  <section id="variants" className="px-6 py-10 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(16,24,40,0.06)] sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="rounded-[1.75rem] bg-[var(--ink)] px-6 py-6 text-white">
          <div className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/58">
            Case Study Band
          </div>
          <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            A stronger narrative option for the same workflow.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/76">
            This one keeps the same polish level but shifts the tone toward a clearer,
            more editorial customer proof section.
          </p>
        </div>

        <div className="grid gap-4">
          {customerNotes.map((note, index) => (
            <article
              key={note.person}
              className="grid gap-4 rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-alt)] px-5 py-5 sm:grid-cols-[44px_minmax(0,1fr)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--accent-strong)]">
                0{index + 1}
              </div>
              <div>
                <p className="text-base leading-7 text-[var(--ink-soft)]">“{note.quote}”</p>
                <div className="mt-4 text-sm font-semibold text-[var(--ink)]">{note.person}</div>
                <div className="text-sm text-[var(--muted)]">{note.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const variants: VariantMap = {
  "Structured Proof": StructuredProof,
  "Wallet Ribbon": WalletRibbon,
  "Case Study Band": CaseStudyBand,
};
