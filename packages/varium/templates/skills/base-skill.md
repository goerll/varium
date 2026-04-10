# Varium Design Skill

## Framework context
This repository is using {{FRAMEWORK_NAME}}.
Prefer the existing file structure, imports, styling approach, and component conventions you find in the codebase.

## What you are doing
You are generating multiple high-quality UI design variants for a React component.
The user will review those variants in-browser with Varium and choose a direction to keep.

## How many variants
Generate exactly 3 variants unless the user explicitly asks for a different count.
Three gives meaningful range without turning the picker into a burden.

## Variant naming
Name variants after their visual or emotional character, not their order or raw layout mechanics.

Good names:
- Dark Minimal
- Editorial Grid
- Warm Humanist

Bad names:
- Variant 1
- Option B
- Three Column Layout

## Design quality rules
- Every variant must have a distinct point of view. Do not ship near-duplicates with palette swaps.
- Change typography, spacing rhythm, composition, and tone between variants.
- At least one variant should take a creative risk while remaining production-ready.
- Keep contrast accessible and layouts responsive.
- Avoid generic AI aesthetics. Pick an intentional visual direction and follow through.
- Variants should feel ready to keep, not like sketches.

## File naming convention
- Create the variants file beside the target component using `ComponentName.variants.tsx`.
- Export a named `variants` object typed as `VariantMap` from `varium`.
- Each entry in `variants` must be a zero-argument React component.

Example:

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

## Picker integration
After generating variants, edit the host file and insert the Varium picker where the user is deciding.

Requirements:
- Import `VariantPicker` from `varium`
- Import the `variants` object from the generated `.variants.tsx` file
- Wrap the picker block with `VARIUM:START` and `VARIUM:END` comments
- Use a descriptive `slot` value such as `testimonials`, `pricing`, or `hero`

Framework-tailored example:

```tsx
// {{HOST_FILE}}
import { VariantPicker } from "varium";
import { variants } from "{{VARIANTS_IMPORT}}";

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

## Selection protocol
After wiring the picker into the page, prefer a native agent selection flow over manual copy/paste whenever the environment supports it.

Selection priority:

1. Use a native question or selection tool if the agent supports it.
2. Otherwise present the variants as an enumerated list in chat.
3. Only use manual commit text as a fallback.

### Claude Code
Prompt Claude Code to use its `AskUserQuestion` tool with the variant names as explicit options.

Example instruction:

```txt
Use your AskUserQuestion tool and ask the user to choose a variant for testimonials. Options: Signal Stack, Amber Editorial, Orbit Panels.
```

Treat the selected option as the committed variant.

### Codex and other agents without native selection UI
List the available variants in chat using a numbered list and tell the user they can reply with either the number or the variant name.

Example:

```txt
Choose a variant for testimonials:
1. Signal Stack
2. Amber Editorial
3. Orbit Panels

Reply with the number or the variant name.
```

Normalize the user's response back to the exact variant name before proceeding.

### Slash command usage
If the repo has been initialized with Varium command files, `/varium ...` should route into this workflow directly for Claude Code and OpenCode.

## After user picks
When the user identifies the variant they want through a selection tool, by replying with a number or name, or by giving you a valid Varium commit message:

1. Extract or keep the chosen component under the canonical component file.
2. Replace the `VariantPicker` block with the chosen component rendered directly.
3. Delete the `.variants.tsx` file.
4. Clean up unused imports and dead code.
5. Leave the codebase in a production-ready state.

## Guardrails
- Do not leave `VariantPicker` mounted after the user has committed a choice.
- Do not rename the chosen variant in a way that makes the commit message ambiguous.
- Do not add runtime dependencies to the app just to support the variants workflow.
