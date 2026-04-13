# Varium

Varium is an open-source toolkit for agent-driven UI exploration. An agent generates multiple production-ready component variants, Varium renders those options inside the real page with an in-browser picker, and the agent asks the user to choose a winner through a native question flow or numbered list in chat.

## What it includes

- `packages/varium`: the npm package (`@varium/core`) with runtime and CLI
- `skills/varium/`: the agent skill with multi-framework components
  - `components/react/`: React VariantPicker
  - `components/svelte/`: Svelte VariantPicker
  - `components/vue/`: Vue VariantPicker
- `skill/examples/vite-react`: the primary working demo

## Install

**Option 1: Skill-based (recommended)**

```bash
npx skills add https://github.com/goerll/varium --skill varium
```

The agent handles everything from there.

**Option 2: npm package + init**

```bash
pnpm add -D @varium/core
npx @varium/core init
```

`init` detects the framework, installs the shared skill, and adds `/varium` command wrappers for Claude Code and OpenCode.

## How it works

1. **Install the skill** (one-time per workspace)
2. **Ask the agent** to design a section with variants
3. **Agent detects framework** (React/Svelte/Vue) from project files
4. **Agent generates 4 variants** in the project's syntax
5. **Review in-browser** and pick a direction
6. **Agent commits** the chosen variant and cleans up

## Variant protocol

Agents generate a sibling file beside the target component:

```txt
src/components/Testimonials.tsx
src/components/Testimonials.variants.tsx      # React
src/components/Testimonials.variants.svelte   # Svelte
src/components/Testimonials.variants.vue      # Vue
```

That file exports a named `variants` object:

```tsx
import type { VariantMap } from "@varium/core";

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
import { VariantPicker } from "@varium/core";
import { variants } from "@/components/SectionReview.variants";

export default function Page() {
  return (
    <main>
      <Hero />
      <Logos />

      {/* VARIUM:START slot="proof" */}
      <VariantPicker variants={variants} slot="proof" />
      {/* VARIUM:END */}

      <Footer />
    </main>
  );
}
```

After the page is staged, the agent asks the user to choose:

```txt
Choose a variant for this section:
1. Editorial Band
2. Quiet Comparison
3. Split Context
4. Focal Statement

Reply with the number or the variant name.
```

The agent then replaces the picker with the chosen component and deletes the `.variants.*` file.

## Framework detection

The agent automatically detects the framework:

1. `svelte.config.js` or `*.svelte` files → **Svelte**
2. `vue.config.js` or `*.vue` files → **Vue**
3. `package.json` with `"react"` or `*.tsx` files → **React** (default)

The appropriate `VariantPicker` component is copied into the project based on detection.

## Skill setup

After `npx @varium/core init`, the skill defines:

- generate at least 4 variants by default
- name variants by visual character, not sequence
- export a typed `variants` map
- insert the picker between `VARIUM:START` and `VARIUM:END`
- ask for selection using native tools when available
- accept a numbered reply or variant name as fallback

## Commands

After `npx @varium/core init`:

- Claude Code: `/varium make a feature comparison section`
- OpenCode: `/varium make a feature comparison section`
- Codex and other `.agents`-compatible runtimes: `use varium to make a feature comparison section`

## Demo

Run the Vite example from the repository root:

```bash
pnpm install
pnpm --filter @varium/example-vite-react dev
```

The example app lives at `skill/examples/vite-react` and demonstrates the full loop.

## Development

```bash
pnpm install
pnpm build
```

## Release

Releases are published by GitHub Actions when a version tag is pushed.

Before the first release through CI, add an `NPM_TOKEN` repository secret in GitHub with publish access to `@varium/core`.

To publish a new version:

```bash
cd packages/varium
npm version patch --no-git-tag-version

cd ../..
VERSION="$(node -p "require('./packages/varium/package.json').version")"
git add packages/varium/package.json
git commit -m "chore: release @varium/core v$VERSION"
git tag "v$VERSION"
git push origin main --tags
```

The publish workflow verifies that the tag version matches `packages/varium/package.json`, runs install/build/lint, and publishes `@varium/core` to npm with provenance.

## License

MIT. See `LICENSE`.
