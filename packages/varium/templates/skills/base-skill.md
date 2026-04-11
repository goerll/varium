---
name: varium-design
description: Generates multiple high-quality UI design variants for a React component. Use when asked to design, redesign, or create variants for any UI section or component.
---

# Varium Design Skill

## Framework context
This repository is using {{FRAMEWORK_NAME}}.
Prefer the existing file structure, imports, styling approach, and component conventions you find in the codebase.

## What you are doing
You are generating multiple high-quality UI design variants for a React component.
The user will review those variants in-browser with Varium and choose a direction to keep.

## How many variants
Generate at least 4 variants unless the user explicitly asks for a different count.
Four gives enough range for meaningful structural exploration without turning the review into noise.

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

## Page fit first
Before inventing a direction, inspect the surrounding page and extract its actual visual system:
- accent color usage
- shadow strength or lack of shadows
- border weight and corner radius
- density and whitespace
- whether the page is flat, textured, quiet, expressive, editorial, or product-like
- how the page handles proof, media, and emphasis

Your variants should live inside that system unless the user explicitly wants a stronger departure.
Do not introduce a new accent color, gradient family, shadow language, badge style, or decorative motif just because it looks attractive in isolation.
If the page is quiet and flat, keep the section quiet and flat.
If the page uses minimal shadows and neutral surfaces, do not suddenly introduce glowing cards, bright yellows, or heavy elevated panels.
If the page proves its point through restrained typography and spacing, do not switch to flashy UI with loud ratings, floating controls, oversized badges, or extra marketing chrome.

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
- Do not ship near-duplicates. Change typography, spacing rhythm, composition, and tone — not just color or outline treatment.
- Vary the overall concept aggressively enough that a user can make a real directional choice. The difference should come from structure first, not color first.
- At least one variant should take a creative risk while remaining production-ready.
- Keep contrast accessible and layouts responsive.
- Avoid generic AI aesthetics. Commit to a clear aesthetic direction and follow through.
- Choose fonts, hierarchy, spacing, and backgrounds intentionally. Do not default to generic UI patterns, default font stacks, or interchangeable component compositions.

## Visual restraint
- Default to clean, restrained design. Do not add gradients, glow effects, glassmorphism, noise textures, floating pills, or decorative ornaments unless the surrounding page already uses them. Respect the register of the page.
- Decorative badges, status pills, and tiny labels must earn their place. If a label like `Active`, `New`, or `Architecture` does not add real meaning, remove it.
- Strong shadows are also an exception. If the page does not already rely on obvious elevation, avoid introducing pronounced card shadows or artificial depth.
- Do not use visual treatment to compensate for weak hierarchy or weak content.

## Patterns to avoid

**Card nesting.** Do not wrap content inside cards as a default container. Cards are appropriate for interactive, selectable, or navigable items — not for static proof points, feature lists, or statistics. Nesting cards inside other cards, or stacking multiple card layers, creates visual noise and flattens hierarchy. When items need grouping, use spacing, ruled dividers, or typographic weight instead of borders and backgrounds.

**Decorative letter-spacing.** Wide tracking on labels — setting text l i k e t h i s — is a pattern that signals "designed" without making a design decision. Avoid applying it broadly. If the surrounding page does not already use spaced tracking, do not introduce it. When used, keep it to a single short uppercase label per section, at a maximum of `letter-spacing: 0.12em`, and only when paired with a size and weight choice that gives it a clear purpose.

## Content discipline
- Design the component around the actual message, not around placeholder UI patterns.
- Avoid repeating the same idea in the eyebrow, heading, subheading, cards, footer notes, and badges. If two lines say nearly the same thing, consolidate them.
- Every piece of copy should have a job: the eyebrow sets context, the heading makes the main point, supporting text adds only necessary clarification, labels add specific meaning.
- Do not overwhelm the viewer with redundant descriptors, repeated section summaries, or ornamental microcopy.
- Prefer fewer, sharper content elements over a busier layout full of weak copy.

## Composition principles
- The content and hierarchy should feel resolved before decoration is added.
- Build components that look inevitable and well-edited, not like a layout scaffold that had content poured into it afterward.
- Prefer one strong organizing idea per variant.
- Avoid stacking too many containers, callouts, captions, legends, pills, and helper texts unless the information truly requires them.
- If a component already has strong structure, simplify the chrome around it rather than adding more.

## Structural diversity between variants
- The variants must differ in component architecture, not just styling.
- At least two variants should change the layout pattern itself: for example a stacked content band, a split media-and-content layout, a single focal panel, a comparison row, an editorial narrative block, a proof grid, or a step-based structure.
- Change how the eye moves through the section, how content is grouped, and what element carries the visual weight.
- A good set of variants should make the user compare different ideas for presenting the message, not different skins for the same wireframe.
- Use the same content to test different compositional bets. For example:
  - one variant can center a single focal statement or artifact
  - one can pair content with media, product context, or supporting data
  - one can organize multiple items into a quieter system of proof or comparison
- When the section naturally contains repeated items, avoid defaulting to a row of matching cards unless that is genuinely the strongest direction for the page.
- Do not treat layout diversity as decoration. The structure should change what feels primary, what feels supporting, and how the viewer scans the section.

## Surface treatment and background

For sections that risk feeling empty or flat, consider whether a background treatment would genuinely improve the design. This is contextual — many sites are better served by a clean white or neutral surface.

When it fits the page's character, explore options such as subtle grid or dot patterns, a gentle texture, a tonal gradient that stays within the page's existing palette, or a section that breaks the page's background color with a dark or contrasting band. The right choice depends entirely on what the surrounding page already does. Extract that language first, then decide if a treatment would elevate the section or add noise.

For sections featuring people — testimonials, team, case studies — consider a split layout where a real photo occupies one half of the section at full bleed with no border or card. Use Unsplash source URLs for placeholder images during review: `https://source.unsplash.com/featured/?[relevant,keywords]`. Leave a comment marking these as placeholders to replace. Do not force images into sections where the content does not call for them.

## Diversity check
Before finalizing the variants, verify:
- each variant would still be identifiable if shown in grayscale
- each variant has a different dominant visual idea
- at least one variant changes the composition, not just the styling
- the set feels curated, not automatically permuted
- each variant feels edited, with unnecessary copy and decoration removed
- the surrounding page and the new section feel like they belong to the same product
- the variants differ in layout pattern, not just color and outline treatment

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
After generating variants, edit the host file and insert the Varium picker where the user is deciding.

Requirements:
- Import `VariantPicker` from `@varium/core`
- Import the `variants` object from the generated `.variants.tsx` file
- Wrap the picker block with `VARIUM:START` and `VARIUM:END` comments
- Use a descriptive `slot` value such as `proof`, `pricing`, `hero`, or `feature-comparison`

Framework-tailored example:

```tsx
// {{HOST_FILE}}
import { VariantPicker } from "@varium/core";
import { variants } from "{{VARIANTS_IMPORT}}";

export default function Page() {
  return (
    <main>
      {/* VARIUM:START slot="proof" */}
      <VariantPicker variants={variants} slot="proof" />
      {/* VARIUM:END */}
    </main>
  );
}
```

## Validation before handoff
Before asking the user to review variants, run the lightest available validation that can catch problems introduced by your changes and fix any issues you created.

Validation priority:
1. Check the generated `.variants.tsx` file and the edited host file for obvious lint issues.
2. If the repository has a fast lint or typecheck command, run it.
3. If the repository has a fast build or preview validation path, use it when practical.

Requirements:
- Remove unused imports, dead helpers, and stale utility imports.
- Do not leave generated files in a state that breaks the local preview.
- Respect the repository's TypeScript and lint configuration.
- If your changes trigger warnings or errors, fix them before handing the page to the user whenever the fix is local and safe.

## `.variants.tsx` compatibility
Some repositories enable `react-refresh/only-export-components`, which can warn when a `.variants.tsx` file exports a named object like `variants`.

If that rule is active in the repository:
- prefer a narrow file-level disable for that rule in the generated `.variants.tsx` file rather than leaving the warning behind
- keep the disable scoped to the generated file only
- do not add broad lint disables elsewhere in the codebase

Also watch for repository-specific rules around unused imports, hooks, or export shapes and make the generated file comply.

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
Use your AskUserQuestion tool and ask the user to choose a variant for this section. Options: Editorial Band, Quiet Comparison, Split Context, Focal Statement.
```

Treat the selected option as the committed variant.

### Codex and other agents without native selection UI
List the available variants in chat using a numbered list and tell the user they can reply with either the number or the variant name.

Example:

```txt
Choose a variant for this section:
1. Editorial Band
2. Quiet Comparison
3. Split Context
4. Focal Statement

Reply with the number or the variant name.
```

Normalize the user's response back to the exact variant name before proceeding.

### Slash command usage
If the repo has been initialized with Varium command files, `/varium ...` should route into this workflow directly for Claude Code and OpenCode.

### Manual fallback
If the environment cannot present choices directly, you may ask the user to reply with a message like:

```txt
varium: commit [slot=proof] [variant=Quiet Comparison]
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
