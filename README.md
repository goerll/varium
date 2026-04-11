# Varium

Varium is an open-source toolkit for agent-driven UI exploration in React apps. An agent generates multiple production-ready component variants beside the target component, Varium renders those options inside the real page with an in-browser picker, and the agent then asks the user to choose a winner through a native question flow when available or a numbered list in chat.

## What it includes

- `packages/varium`: the runtime package, CLI, and bundled templates
- `skill/SKILL.md`: the agent-facing protocol for generating and committing variants
- `skill/examples/vite-react`: the primary working demo
- `skill/examples/next-app`: reserved for the roadmap Next.js example

## Install

```bash
pnpm add -D @varium/core
npx @varium/core init
```

`npx @varium/core init` detects the framework, asks which agents should be configured, always installs the shared skill into `.agents/skills/varium`, and adds `/varium` command wrappers for Claude Code and OpenCode when selected.

## Variant protocol

Agents generate a sibling file beside the target component:

```txt
src/components/Testimonials.tsx
src/components/Testimonials.variants.tsx
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

After the page is staged, the agent should ask the user to choose one of the variant names.
For example:

```txt
Choose a variant for this section:
1. Editorial Band
2. Quiet Comparison
3. Split Context
4. Focal Statement

Reply with the number or the variant name.
```

The agent should then replace the picker with the chosen component and delete the `.variants.tsx` file.

## Skill setup
`npx @varium/core init` installs the Varium skill into the right directories for the agents you choose. The generated skill defines:

- generate at least 4 variants by default
- name variants by visual character, not sequence
- export a typed `variants` map
- insert the picker between `VARIUM:START` and `VARIUM:END`
- ask for selection using native tools when available
- accept a numbered reply or variant name as fallback

If you need the raw source template, it lives at [`skill/SKILL.md`](/home/estevao/varium/skill/SKILL.md).

## Commands

After `npx @varium/core init`:

- Claude Code can use `/varium make a feature comparison section`
- OpenCode can use `/varium make a feature comparison section`
- Codex and other `.agents`-compatible runtimes can use `use varium to make a feature comparison section`

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

## Media

Capture a short GIF or video of the Vite demo once you are ready to publish. The repository is structured for that asset, but the media itself is not checked in yet.

## License

MIT. See [`LICENSE`](/home/estevao/varium/LICENSE).
