# Varium

Varium is an open-source toolkit for agent-driven UI exploration in React apps. An agent generates multiple production-ready component variants beside the target component, Varium renders those options inside the real page with an in-browser picker, and the agent then asks the user to choose a winner through a native question flow when available or a numbered list in chat.

## What it includes

- `packages/varium`: the runtime package, CLI, and bundled templates
- `skill/SKILL.md`: the agent-facing protocol for generating and committing variants
- `skill/examples/vite-react`: the primary working demo
- `skill/examples/next-app`: reserved for the roadmap Next.js example

## Install

```bash
pnpm add -D varium
npx varium init
```

`varium init` detects the framework, asks which agents should be configured, always installs the shared skill into `.agents/skills/varium`, and adds `/varium` command wrappers for Claude Code and OpenCode when selected.

## Variant protocol

Agents generate a sibling file beside the target component:

```txt
src/components/Testimonials.tsx
src/components/Testimonials.variants.tsx
```

That file exports a named `variants` object:

```tsx
import type { VariantMap } from "varium";

const DarkMinimal = () => <section>{/* ... */}</section>;
const EditorialGrid = () => <section>{/* ... */}</section>;
const WarmHumanist = () => <section>{/* ... */}</section>;

export const variants: VariantMap = {
  "Dark Minimal": DarkMinimal,
  "Editorial Grid": EditorialGrid,
  "Warm Humanist": WarmHumanist,
};
```

The host page temporarily mounts the picker:

```tsx
import { VariantPicker } from "varium";
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

After the page is staged, the agent should ask the user to choose one of the variant names.
For example:

```txt
Choose a variant for testimonials:
1. Structured Proof
2. Wallet Ribbon
3. Case Study Band

Reply with the number or the variant name.
```

The agent should then replace the picker with the chosen component and delete the `.variants.tsx` file.

## Skill setup
`npx varium init` installs the Varium skill into the right directories for the agents you choose. The generated skill defines:

- generate exactly 3 variants by default
- name variants by visual character, not sequence
- export a typed `variants` map
- insert the picker between `VARIUM:START` and `VARIUM:END`
- ask for selection using native tools when available
- accept a numbered reply or variant name as fallback

If you need the raw source template, it lives at [`skill/SKILL.md`](/home/estevao/varium/skill/SKILL.md).

## Commands

After `varium init`:

- Claude Code can use `/varium make a testimonial section`
- OpenCode can use `/varium make a testimonial section`
- Codex and other `.agents`-compatible runtimes can use `use varium to make a testimonial section`

## Demo

Run the Vite example from the repository root:

```bash
pnpm install
pnpm --filter @varium/example-vite-react dev
```

The example app lives at [`skill/examples/vite-react`](/home/estevao/varium/skill/examples/vite-react) and demonstrates the full loop.

## Development

```bash
pnpm install
pnpm build
```

## Media

Capture a short GIF or video of the Vite demo once you are ready to publish. The repository is structured for that asset, but the media itself is not checked in yet.

## License

MIT. See [`LICENSE`](/home/estevao/varium/LICENSE).
