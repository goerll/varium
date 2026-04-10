# Varium — Implementation Plan

> An open-source AI agent toolkit for React that generates multiple UI design variants and lets you pick your favorite through a polished in-browser picker.

---

## Project Structure

```
varium/
  packages/
    react/               ← <VariantPicker> React component (the picker UI)
    cli/                 ← npx varium (future scaffolding, skip for now)
  skill/
    SKILL.md             ← universal agent skill (the design prompt layer)
    examples/
      next-app/          ← Next.js demo showing the full workflow
      vite-react/        ← Vite + React demo
  README.md
  package.json           ← pnpm workspace root
```

---

## Phase 1 — Repo Bootstrapping

### 1.1 Init monorepo

```bash
mkdir varium && cd varium
pnpm init
```

Create `pnpm-workspace.yaml`:

```yaml
packages:
  - 'packages/*'
```

Root `package.json`:

```json
{
  "name": "varium",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter @varium/react dev",
    "build": "pnpm --filter @varium/react build"
  }
}
```

### 1.2 Init the react package

```bash
mkdir -p packages/react/src
cd packages/react
pnpm init
```

`packages/react/package.json`:

```json
{
  "name": "@varium/react",
  "version": "0.1.0",
  "description": "AI agent toolkit for React UI variant picking",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "dev": "tsup src/index.tsx --watch",
    "build": "tsup src/index.tsx --format cjs,esm --dts"
  },
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  },
  "devDependencies": {
    "typescript": "^5",
    "tsup": "^8",
    "react": "^18",
    "react-dom": "^18",
    "@types/react": "^18"
  }
}
```

Install deps:

```bash
pnpm install
```

---

## Phase 2 — The Variant Protocol (most important design decision)

This is the convention agents will follow. It must be simple, readable, and unambiguous.

### 2.1 The variants file convention

When an agent uses Varium to generate UI options, it creates **one variants file** alongside the target component:

```
src/
  components/
    Testimonials.tsx              ← the actual page component (already exists or agent creates it)
    Testimonials.variants.tsx     ← agent generates this
```

`Testimonials.variants.tsx` structure:

```tsx
import type { VariantMap } from "@varium/react";

// Each variant is a zero-argument React component
const SimpleCentered = () => (
  <section className="py-24 text-center">
    {/* ... */}
  </section>
);

const CardGrid = () => (
  <section className="py-24 grid grid-cols-3 gap-6">
    {/* ... */}
  </section>
);

const DarkMinimal = () => (
  <section className="py-24 bg-zinc-950 text-white">
    {/* ... */}
  </section>
);

// THIS EXPORT IS REQUIRED — the VariantPicker reads it
export const variants: VariantMap = {
  "Simple Centered": SimpleCentered,
  "Card Grid": CardGrid,
  "Dark Minimal": DarkMinimal,
};
```

### 2.2 How the host page uses it

The agent edits the page file to temporarily replace (or wrap) the target section with the picker:

```tsx
// page.tsx (agent-edited, temporary state)
import { VariantPicker } from "@varium/react";
import { variants } from "@/components/Testimonials.variants";

export default function Page() {
  return (
    <main>
      <Hero />
      <Logos />

      {/* VARIUM:START slot="testimonials" */}
      <VariantPicker variants={variants} slot="testimonials" />
      {/* VARIUM:END */}

      <Footer />
    </main>
  );
}
```

### 2.3 After the user picks

The agent receives the selection (e.g. "I want Card Grid") and:

1. Replaces the `<VariantPicker>` block with the chosen component rendered directly
2. Deletes `Testimonials.variants.tsx`
3. Imports and uses the chosen variant inline or extracts it to `Testimonials.tsx`

Final state of page:

```tsx
import { CardGrid as Testimonials } from "@/components/Testimonials";

export default function Page() {
  return (
    <main>
      <Hero />
      <Logos />
      <Testimonials />
      <Footer />
    </main>
  );
}
```

---

## Phase 3 — The Picker Component (`packages/react/src/`)

This is the crown jewel. It must look polished, feel fixed and trustworthy, and never look agent-generated.

### 3.1 Type definitions

`packages/react/src/types.ts`:

```ts
export type VariantComponent = () => JSX.Element;

export type VariantMap = Record<string, VariantComponent>;

export interface VariantPickerProps {
  variants: VariantMap;
  slot: string; // used for labeling in the picker UI
  defaultVariant?: string; // key of the initially active variant
}
```

### 3.2 VariantPicker component

`packages/react/src/VariantPicker.tsx`:

The component renders two things simultaneously:
- The **currently selected variant** (full page context, so the user sees it live)
- The **picker overlay** (fixed bottom bar, always visible while in variant mode)

**Picker overlay design spec:**
- Fixed bottom center of the viewport
- Dark frosted-glass pill: `background: rgba(10,10,10,0.85)`, `backdrop-filter: blur(12px)`
- Font: monospace or a sharp geometric sans — something that reads "tool", not "decoration"
- Shows: `varium` wordmark (small, left) | variant name tabs (center) | `Commit` button (right)
- Tabs are clickable, active tab is highlighted with a white underline or pill
- Smooth crossfade transition between variants (150ms opacity)
- The whole bar has a subtle border: `1px solid rgba(255,255,255,0.1)`
- Never overflows on mobile — tabs scroll horizontally if needed
- `Commit` button copies the selection to clipboard as a plain text message the user can paste to their agent: `"varium: commit [slot=testimonials] [variant=Card Grid]"`

**Why clipboard instead of automatic agent message?** Because there's no universal agent API. Claude Code, Codex, and OpenCode all have different interfaces. Clipboard is the lowest common denominator that works everywhere.

### 3.3 State

```tsx
const [active, setActive] = useState<string>(
  defaultVariant ?? Object.keys(variants)[0]
);
```

No external state, no context, no store. Self-contained.

### 3.4 Dev-only guard

```tsx
if (process.env.NODE_ENV === "production") {
  console.warn("[varium] VariantPicker rendered in production. This is a no-op.");
  return null;
}
```

### 3.5 Entry point

`packages/react/src/index.tsx`:

```ts
export { VariantPicker } from "./VariantPicker";
export type { VariantMap, VariantPickerProps, VariantComponent } from "./types";
```

---

## Phase 4 — The Skill File (`skill/SKILL.md`)

This is what makes the agent generate **actually good** variants instead of mediocre ones. It is agent-agnostic — works with Claude Code, Codex, OpenCode, Cursor, anything that reads markdown instructions.

### 4.1 Structure of SKILL.md

```markdown
# Varium Design Skill

## What you are doing
You are generating multiple high-quality UI design variants for a React component.
The user will pick the one they like best through the Varium picker.

## How many variants
Always generate exactly 3 variants unless the user specifies otherwise.
More than 4 is overwhelming. Fewer than 3 is not enough choice.

## Variant naming
Name each variant after its visual/conceptual character, not its structure.
Good: "Dark Minimal", "Editorial Grid", "Warm & Human"
Bad: "Variant 1", "Option A", "Layout 3"

## Design quality rules
[... detailed design principles from the frontend-design skill ...]
- Each variant must have a distinct visual identity. Not just color swaps.
- Different typographic hierarchy, different spatial rhythm, different emotional tone.
- At least one variant should be unexpected / take a creative risk.
- All variants must be production-ready (proper spacing, accessible contrast, responsive).

## File naming convention
- Variants file: ComponentName.variants.tsx (same directory as the component)
- Export: named export `variants` typed as VariantMap from @varium/react

## Picker integration
After generating variants, edit the host page to insert:
<VariantPicker variants={variants} slot="descriptive-slot-name" />
Import from @varium/react. Wrap with VARIUM:START / VARIUM:END comments.

## After user picks
When user says which variant they want (by name or description):
1. Extract the chosen variant component
2. Replace the VariantPicker block with the component directly
3. Delete the .variants.tsx file
4. Clean up unused imports
```

---

## Phase 5 — Demo App

Create `skill/examples/vite-react/` as a minimal Vite + React + Tailwind project that:
- Has a simple landing page with Hero + Logos sections
- Has `@varium/react` installed as a local workspace dependency
- Has a README showing exactly what commands you run and what you say to the agent

This becomes the primary demo for the README and for showing the workflow.

---

## Phase 6 — README & OSS Polish

- Clear one-paragraph description of what Varium is
- GIF/video of the workflow (record after demo app is working)
- Installation: `pnpm add -D @varium/react`
- Copy-paste setup for SKILL.md into Claude Code / Codex / OpenCode
- The commit message protocol documented clearly
- MIT license

---

## Build Order (what to do first)

1. **Repo + monorepo setup** (Phase 1) — 30 min
2. **Define and finalize the variant protocol** (Phase 2) — this is a design decision, not code. Finalize before writing the picker.
3. **Types** (`types.ts`) — 10 min
4. **VariantPicker component** (Phase 3) — this is the core build, most of the creative work
5. **SKILL.md** (Phase 4) — write after the picker works so you know exactly what protocol to describe
6. **Demo app** (Phase 5) — validate the full end-to-end workflow
7. **README + OSS polish** (Phase 6) — last

---

## Key Decisions Already Made

| Decision | Choice | Reason |
|---|---|---|
| Frameworks | React only (v1) | Scope control, covers most use cases |
| Agent communication | Clipboard copy | Universal, no agent API dependency |
| Picker rendering | Fully custom, fixed design | Consistency across all uses |
| Production behavior | Returns null, warns | Never ships to prod |
| Styling approach | Self-contained CSS-in-JS or scoped styles | No Tailwind dependency in the package itself |
| Variant protocol | `.variants.tsx` file + named export | Clean, agent-friendly, easy to delete after commit |
| Monorepo tool | pnpm workspaces | Lightweight, fast |
| Build tool | tsup | Zero-config, outputs CJS + ESM + types |
