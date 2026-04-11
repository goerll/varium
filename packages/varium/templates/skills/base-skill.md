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
Before writing any code, work through this sequence explicitly. Do not skip to implementation.

**Step 1: Name the section's job.**
What is this section trying to make the viewer feel or believe? Not what it contains — what it does. "Prove that real teams use this product." "Make the pricing feel obvious and fair." "Create the moment the visitor decides to sign up." One sentence.

**Step 2: Audit the page's visual system.**
Read the surrounding components and extract the actual design language in use. Note: type scale, weight range, color palette, spacing rhythm, border treatment, shadow usage, surface color, and whether the page earns its credibility through restraint or through energy.

**Step 3: Plan four genuinely different bets.**
Before naming a single variant, plan four structurally different approaches to the section's job. Each should feel like a different hypothesis about what would work best — not a different skin on the same wireframe.

For each planned variant, write one sentence naming its organizing idea. If two sentences sound similar, one of those variants is not different enough yet.

**Step 4: Assign type strategy per variant.**
Decide the typographic approach for each variant before touching layout. What carries the weight? What steps back? Is there a scale extreme? A weight contrast? A tracking choice that sets the tone?

**Step 5: Build.**
Only after steps 1–4 are clear, write the components.

Think in terms of different strategies, not different skins.
Good contrast:
- one variant centers a single oversized statement, type does all the work
- one variant uses a structured grid with precise, product-like density
- one variant takes a clear creative risk — unexpected scale, unexpected framing
- one variant is quieter and more editorial, letting content breathe

Bad contrast:
- same layout with different colors
- same card grid with minor spacing changes
- same typography with only background treatment swapped
- four variants that all start with a centered heading and subheading

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
- Do not ship near-duplicates with palette swaps, spacing nudges, or the same layout repeated with cosmetic tweaks.
- Change typography, spacing rhythm, composition, and tone between variants.
- Vary the overall concept aggressively enough that a user can make a real directional choice.
- Explore different presentation models for the same content. The difference should often come from structure first, not color first.
- At least one variant should take a creative risk while remaining production-ready.
- Keep contrast accessible and layouts responsive.
- Avoid generic AI aesthetics. Pick an intentional visual direction and follow through.
- Variants should feel ready to keep, not like sketches.
- Use the spirit of a strong frontend design skill: commit to a clear aesthetic direction, execute it precisely, and avoid bland middle-of-the-road design.
- Choose fonts, hierarchy, spacing, and backgrounds intentionally. Do not default to generic UI patterns, default font stacks, or interchangeable component compositions.

## Typography as structure
Typography is not decoration. It is the primary structural tool in most well-designed sections. Treat it as such before reaching for color, shadows, or layout chrome.

The most common agent failure mode is inheriting the page's body font and body size for everything, then compensating with visual elements to create interest. Instead, let type do the work.

Before writing a single line of layout code, decide the typographic strategy for each variant:

**Scale contrast.** A heading at 72px next to a label at 11px creates tension that most UI never achieves. Most generated components live in a narrow band of 14–32px and feel flat as a result. Consider extreme scale contrast as a compositional tool — one number, one word, one phrase at a size that commands the section.

**Weight as hierarchy.** The difference between 300 and 800 within the same typeface is more powerful than switching families. A single word in black weight surrounded by light text reads immediately. Use this.

**Tracking and leading as tone.** Wide tracking on uppercase labels (`letter-spacing: 0.15em`) reads as editorial and considered. Tight leading on a large heading creates density and confidence. Loose leading on body text creates calm. These are not stylistic flourishes — they change the emotional register of the section.

**Type-only variants are valid.** Some of the strongest sections have no icons, no cards, no decorative elements — just text set with precision. If the content is strong, consider at least one variant that commits entirely to typographic composition.

**Mixing type roles.** A section can use a serif for the heading, a monospace for labels or data, and a grotesque for body — if the page allows it. Do not stay within one family out of habit unless the design calls for it. Contrast between type roles creates sophistication when handled with restraint.

## The one organizing idea
Every strong variant has a single dominant visual decision that everything else supports. You should be able to name it in one sentence.

Examples of named organizing ideas:
- "The metric is the hero — everything else steps back"
- "The quote floats in open space, the attribution is tiny and precise"
- "Two columns in strict tension, no decoration"
- "Typographic weight contrast carries the whole composition"
- "The section reads as a list, not a layout — rhythm over decoration"

If you cannot name the organizing idea of a variant in one sentence, the variant does not have one yet. Keep editing until it does.

This is also a useful test for near-duplicates: if two variants have the same organizing idea expressed slightly differently, they are the same variant. Pick one and make the other genuinely different.

## Reference vocabulary
When interpreting aesthetic directions, ground them in specific reference points rather than abstract adjectives. These are real design sensibilities with specific executional signatures:

**Linear / Vercel / Raycast** — product-led, dark surfaces, subtle borders at low opacity, monospace details, high information density with no waste, neutral without being boring. Restraint as a signal of confidence.

**Stripe** — editorial clarity at scale. Generous whitespace. Helvetica-era precision. Every element earns its place through function. Nothing decorative. Proof through specificity, not volume.

**Are.na / Typewolf editorial** — cultural, almost academic. Type-first. Grid-aware. Would not look wrong in a print publication. Color is rare and intentional.

**Notion / Linear docs** — functional warmth. Readable above all. Hierarchy through weight and size alone. No chrome.

**NYT / The Atlantic** — hierarchy through type scale and column structure. Pull quotes as architectural elements. Photo and text as equals. Editorial authority without stiffness.

**Figma community / Dribbble maximalism** — gradients, glass, glow, illustration, color. Use only when the surrounding page already commits to this register. Never default to it.

When a user asks for something "clean" or "minimal", they usually mean Linear or Stripe, not an empty page. When they ask for something "editorial", they usually mean Are.na or NYT, not a magazine pastiche. Use these as mental anchors, not templates.

## Visual restraint
- Default to clean, restrained design. Do not add gradients, glow effects, glassmorphism, noise textures, floating pills, or decorative ornaments unless the user asked for them or the existing page already uses them in a way that the new section should match.
- Treat gradients as an exception, not a default. If the surrounding page is flat, neutral, or minimally styled, your variants should respect that.
- Decorative badges, status pills, and tiny labels must earn their place. If a label like `Active`, `New`, or `Architecture` does not add real meaning, remove it.
- Strong shadows are also an exception. If the page does not already rely on obvious elevation, avoid introducing pronounced card shadows or artificial depth.
- Do not use visual treatment to compensate for weak hierarchy or weak content.

## Content discipline
- Design the component around the actual message, not around placeholder UI patterns.
- Avoid repeating the same idea in the eyebrow, heading, subheading, cards, footer notes, and badges. If two lines say nearly the same thing, consolidate them.
- Every piece of copy should have a job. The eyebrow sets context.
- Every piece of copy should have a job. The heading makes the main point.
- Every piece of copy should have a job. Supporting text adds only necessary clarification.
- Every piece of copy should have a job. Labels inside the component should add specific meaning.
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
- Do not generate multiple versions of the same repeated-card layout with different borders, shadows, or accent colors.
- Change how the eye moves through the section, how content is grouped, and what element carries the visual weight.
- A good set of variants should make the user compare different ideas for presenting the message, not different skins for the same wireframe.
- Use the same content to test different compositional bets. For example:
  - one variant can center a single focal statement or artifact
  - one can pair content with media, product context, or supporting data
  - one can organize multiple items into a quieter system of proof or comparison
- When the section naturally contains repeated items, avoid defaulting to a row of matching cards unless that is genuinely the strongest direction for the page.
- Do not treat layout diversity as decoration. The structure should change what feels primary, what feels supporting, and how the viewer scans the section.

## Diversity check
Before finalizing the variants, verify:
- each variant has a named organizing idea you can state in one sentence — if you cannot name it, keep editing
- each variant would still be identifiable if shown in grayscale
- each variant has a different dominant visual idea
- at least one variant changes the composition, not just the styling
- at least one variant makes a strong typographic decision, not just a layout decision
- the set feels curated, not automatically permuted
- each variant feels edited, with unnecessary copy and decoration removed
- the surrounding page and the new section feel like they belong to the same product
- the variants differ in layout pattern, not just color and outline treatment
- no two variants share the same organizing idea expressed slightly differently

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
