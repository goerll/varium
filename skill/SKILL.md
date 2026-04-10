# Varium Design Skill

## What you are doing
You are generating multiple high-quality UI design variants for a React component.
The user will review those variants in-browser with Varium and choose a direction to keep.

## How many variants
Generate exactly 3 variants unless the user explicitly asks for a different count.
Three gives meaningful range without turning the picker into a burden.

## Design thinking before coding
Before writing variants, identify the shared intention of the section first.
All variants should solve the same product problem, but they should do it through clearly different design approaches.

For each variant, choose a distinct point of view across:
- layout and spatial structure
- typographic hierarchy and font personality
- visual tone and emotional character
- density, rhythm, and information flow
- degree of boldness or restraint

Think in terms of different strategies, not different skins.
Good contrast:
- one variant could be editorial and spacious
- one could be structured and product-like
- one could be bold, dramatic, or unexpected

Bad contrast:
- same layout with different colors
- same card grid with minor spacing changes
- same typography with only background treatment swapped

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
- Every variant must have a distinct point of view. They should feel like different approaches to the same intention, not siblings from the same template.
- Do not ship near-duplicates with palette swaps, spacing nudges, or the same layout repeated with cosmetic tweaks.
- Change typography, spacing rhythm, composition, and tone between variants.
- Vary the overall concept aggressively enough that a user can make a real directional choice.
- At least one variant should take a creative risk while remaining production-ready.
- Keep contrast accessible and layouts responsive.
- Avoid generic AI aesthetics. Pick an intentional visual direction and follow through.
- Variants should feel ready to keep, not like sketches.
- Use the spirit of a strong frontend design skill: commit to a clear aesthetic direction, execute it precisely, and avoid bland middle-of-the-road design.
- Choose fonts, hierarchy, spacing, and backgrounds intentionally. Do not default to generic UI patterns, default font stacks, or interchangeable component compositions.

## Diversity check
Before finalizing the variants, verify:
- each variant would still be identifiable if shown in grayscale
- each variant has a different dominant visual idea
- at least one variant changes the composition, not just the styling
- the set feels curated, not automatically permuted

## File naming convention
- Create the variants file beside the target component using `ComponentName.variants.tsx`.
- Export a named `variants` object typed as `VariantMap` from `@varium/core`.
- Each entry in `variants` must be a zero-argument React component.

Example:

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

## Picker integration
After generating variants, edit the host page and insert the Varium picker where the user is deciding.

Requirements:
- Import `VariantPicker` from `@varium/core`
- Import the `variants` object from the generated `.variants.tsx` file
- Wrap the picker block with `VARIUM:START` and `VARIUM:END` comments
- Use a descriptive `slot` value such as `testimonials`, `pricing`, or `hero`

Example:

```tsx
import { VariantPicker } from "@varium/core";
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

### Manual fallback
If the environment cannot present choices directly, you may ask the user to reply with a message like:

```txt
varium: commit [slot=testimonials] [variant=Editorial Grid]
```

Treat that message as the source of truth for the chosen variant.

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
