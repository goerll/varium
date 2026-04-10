# @varium/core

Varium is a React toolkit for agent-driven UI variant generation and in-browser review. It gives agents a clean way to generate multiple component directions, stage them in the real page, and ask the user to choose a winner before cleaning up the temporary review state.

## Install

```bash
pnpm add -D @varium/core
npx @varium/core init
```

After install, import the picker from the package:

```tsx
import { VariantPicker } from "@varium/core";
import type { VariantMap } from "@varium/core";
```

## What `init` does

`npx @varium/core init` asks:

- which framework the project uses
- which agents should be configured for this repository

It then:

- always installs the shared skill into `.agents/skills/varium/SKILL.md`
- adds `.claude/skills/varium/SKILL.md` and `.claude/commands/varium.md` when Claude Code is selected
- adds `.opencode/commands/varium.md` when OpenCode is selected

The `.agents` skill is always written so repos have a least-common-denominator setup even when agent-specific extras differ.

## Typical workflow

1. Ask the agent to use Varium.
2. The agent generates a sibling `ComponentName.variants.tsx` file.
3. The agent mounts `VariantPicker` in the real page.
4. You review the variants in development.
5. The agent asks you to choose one variant.
6. The agent keeps the selected component and removes the temporary review state.

## Commands

After `init`:

- Claude Code: `/varium make a testimonial section`
- OpenCode: `/varium make a testimonial section`
- Codex and other `.agents`-compatible runtimes: `use varium to make a testimonial section`

## Example

```tsx
import { VariantPicker } from "@varium/core";
import { variants } from "@/components/Testimonials.variants";

export default function Page() {
  return (
    <main>
      {/* VARIUM:START slot="testimonials" */}
      <VariantPicker variants={variants} slot="testimonials" />
      {/* VARIUM:END */}
    </main>
  );
}
```

## Requirements

- Node.js 18+
- React 18+
- React DOM 18+

## License

MIT
