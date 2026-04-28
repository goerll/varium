---
name: varium
description: Generates multiple high-quality UI design variants for a component. Use when asked to design, redesign, or create variants for any UI section or component.
---

# Varium Skill

## What you are doing
You are generating multiple high-quality UI design variants for a component.
The user will review those variants in-browser with Varium and choose a direction to keep.

## Framework detection

Detect the framework from the repository before generating variants.

1. Check for `svelte.config.js`, `svelte-kit.config.js`, or `.svelte` files -> Svelte
2. Check for `.vue` files or Vue-specific Vite config -> Vue
3. Check for `react` in `package.json`, `next.config.*`, or `.tsx` files -> React
4. If ambiguous, ask the user

Only copy the asset files relevant to the detected framework from `skill/assets/`.

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


## Invented product UI as visual content

When a section calls for feature cards or capability showcases, the strongest approach is often to show the product rather than describe it. Instead of icons or illustrations, build a small invented UI scene inline in JSX that represents what the feature actually does.

This is intentional placeholder work — the goal is visual credibility during review so the user can make a real directional decision. The user will replace or refine the content later. Invent freely.

Examples of invented UI scenes worth building inline:
- a simplified chart or graph using divs, SVG, or CSS — no library needed, just a convincing shape
- a mock notification feed with two or three hardcoded items and realistic-looking text
- a miniature form, card, or data table with plausible field names and values
- overlapping document mockups at slight offsets to suggest depth and activity
- a status timeline or step indicator showing a real-looking workflow

When using this approach, keep the card container quiet — light surface, soft radius, no heavy shadow. All the visual interest should live in the invented content, not the frame. The label and description below the scene should be small and secondary; the scene carries the weight.

Compositing adds depth: elements at slight rotations, overlapping layers, a badge or tag placed over a mockup. This creates the sense of looking into a product rather than at a diagram of one. Pure CSS and inline styles are enough.

This pattern is appropriate for feature sections, capability grids, and product overviews. It is not appropriate for testimonials, pricing, or purely typographic sections.

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
- Create the variants file beside the target component using the native framework extension.
- Use `ComponentName.variants.tsx` for React, `ComponentName.variants.svelte` for Svelte, and `ComponentName.variants.vue` for Vue.
- Export a named `variants` object typed as `VariantMap`.
- Each entry in `variants` must be a zero-argument component function.

Example:

```tsx
import type { VariantMap } from "./types";

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
- Copy the minimal picker asset from `skill/assets/{framework}/` into the user's project.
- For React, prefer `skill/assets/react/VariantPicker.min.js` when a bundled picker is easier than copying source files.
- Import `VariantPicker` from the copied local file.
- Import the `variants` object from the generated variants file.
- Wrap the picker block with `VARIUM:START` and `VARIUM:END` comments
- Use a descriptive `slot` value such as `proof`, `pricing`, `hero`, or `feature-comparison`

Example:

```tsx
import { VariantPicker } from "./VariantPicker.min.js";
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

## Validation before handoff
Before asking the user to review variants, run lint to catch problems introduced by your changes and fix any issues you created.

Validation priority:
1. Run the repository's lint command.
2. Run a fast typecheck command if the repository has one.

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

1. Use a native question or selection tool if the agent supports it. (AskUserQuestion on Claude Code, question tool in OpenCode, etc)
2. Otherwise present the variants as an enumerated list in chat and ask the user which one they prefer

Example:

```txt
Choose a variant for this section:
1. Editorial Band
2. Quiet Comparison
3. Split Context
4. Focal Statement

Reply with the number or the variant name.
```

Treat the selected option as the committed variant.

Normalize the user's response back to the exact variant name before proceeding.

## After user picks
When the user identifies the variant they want through a selection tool, by replying with a number or name, or by giving you a valid Varium commit message:

1. Extract or keep the chosen component under the canonical component file.
2. Replace the `VariantPicker` block with the chosen component rendered directly.
3. Delete the `.variants.tsx` file.
4. Clean up unused imports and dead code to make sure page builds without errors.

## Guardrails
- Do not leave `VariantPicker` mounted after the user has committed a choice.
- Do not rename the chosen variant in a way that makes the commit message ambiguous.
- Do not add runtime dependencies to the app just to support the variants workflow.

## Reference Topics

### Color

#### Work in HSL, not hex

When choosing or adjusting colors, think in HSL (hue, saturation, lightness) rather than hex codes. HSL maps directly to how color actually behaves: hue is the color identity, saturation is its intensity, lightness is how bright or dark it is. Adjusting one axis at a time gives predictable results.

#### Grey is almost never truly neutral

A grey with 0% saturation often looks sterile or slightly off next to colored elements. In practice, well-designed interfaces use greys that carry a subtle tint — a faint blue push for cool, clinical environments; a faint yellow-orange push for warmer, approachable ones. When the page already has an established color temperature, match it in your grey values to keep surfaces coherent.

#### Build a palette with real range

Most generated UI uses too few shades and runs out of room. A usable palette needs roughly 8–10 stops per color — from a near-white tint to a near-black shade — so you have something to reach for at every level of hierarchy. Without this range, you end up using the same shade for surfaces, borders, and text, which flattens everything.

When building stops in a palette, lightness alone is a poor lever. As you lighten a color toward white, it loses saturation and looks washed out. To keep lighter stops feeling vivid, compensate by slightly increasing saturation and, for very light tints, nudging the hue a few degrees toward a brighter neighbor on the color wheel (yellow, cyan, or magenta). For darker stops, nudge toward a darker hue (red, green, or blue). This keeps the whole scale feeling like the same color rather than a gradient from vivid to grey.

#### Hierarchy comes from color before opacity

When you need secondary text on a colored background, don't reduce opacity. Opacity lets the background bleed through, making text look faded or disabled rather than intentionally secondary. Instead, hand-pick a new color at the same hue with adjusted saturation and lightness. The result reads as a deliberate hierarchy choice rather than a disabled state.

The same logic applies to text on dark surfaces: the goal is reduced contrast relative to the background, not a lighter grey that ignores the background's hue entirely.

#### Accessibility without harshness

Meeting contrast requirements (4.5:1 for body text, 3:1 for large text) on colored backgrounds is harder than it looks. When white text on a vivid color doesn't meet the threshold without darkening the background too aggressively, consider flipping the approach: use dark text on a light tint of that color rather than light text on a saturated background. This achieves accessibility without the visual weight of a dark panel.

For colored-on-colored text (for example, a secondary label inside a dark card), rotating the text hue toward a naturally brighter color — cyan, yellow, or magenta — can increase perceived brightness and contrast without moving toward pure white.

#### Color supports hierarchy; it doesn't replace it

A section should read correctly in greyscale before color is applied. Color is for reinforcement and tone — it should not be the only signal distinguishing primary from secondary content, positive from negative states, or active from inactive elements. Accompany color-coded meaning with a shape, weight, or positional signal as well.

#### Accent use

Strong accent colors draw attention. Use them for the one or two most important actions or data points in a section, not as a general highlight tool. When everything is accented, nothing is. If a section has a single CTA, one data metric, or one status badge that matters, the accent should go there and nowhere else.

### Typography

#### Define a scale, not a spectrum

Pick discrete type sizes and use only those. A practical scale for interface work has around 8–10 stops: roughly 12, 14, 16, 18, 20, 24, 30, 36, 48, 60px. The exact values matter less than the principle — each step should feel visually distinct from the one below it. Avoid incremental nudging (16px vs 17px vs 18px) as it produces no visible hierarchy while multiplying decisions.

Use `rem` or `px`, not `em` for scale definitions. `em` compounds inside nested elements and silently produces sizes that don't exist in your scale.

#### Hierarchy through weight and color, not size alone

Relying exclusively on font size to create hierarchy produces primary text that's too large and secondary text that's too small. Weight and color are more efficient tools:

- Use a dark, high-contrast color for primary content
- Use a muted mid-tone for secondary content (dates, metadata, captions)
- Use an even softer tone for tertiary content (footnotes, helper text)
- Use a heavier weight (600–700) for emphasis, a normal weight (400–500) for everything else

Avoid weights below 400 for text smaller than ~24px — they become illegible at small sizes. To de-emphasize small text, reach for color, not thinness.

#### Line-height scales inversely with size

Small text needs generous line-height so the eye can track from line to line without losing its place — around 1.5 to 1.6 for body text at 14–16px. Large text needs less — headings at 36px and above can use 1.1 to 1.2 without feeling cramped. Headlines at display sizes (56px+) often work best at 1.0 or even slightly below.

Line-height should also increase with line length. A narrow column at 400px can use 1.4; a wide column at 700px+ should use 1.7 or more, otherwise readers lose their place at the line return.

#### Line length for readable prose

Body text reads best at 45–75 characters per line. In CSS, a `max-width` of `60ch–70ch` on the text container handles this directly. Going wider increases the cognitive load of tracking from line end back to line start. Going narrower creates choppy rhythm that forces constant wrapping.

This constraint applies even when the surrounding layout is wider — constrain the text column independently of the section width.

#### Alignment

Left-align almost everything. Center alignment works for short standalone elements (a single headline, a one-line subheading, a metric label) but breaks down immediately with paragraph text — ragged-right edges on both sides create visual instability after two or three lines.

Right-align numbers in tables and data lists so decimal points and digit positions line up vertically, making values scannable at a glance.

When mixing font sizes on the same baseline (a large value next to a small label, for example), align them to their text baseline rather than centering them vertically. Vertical centering of mixed sizes misaligns the optical reading line and looks slightly off in a way that's hard to diagnose.

#### Letter-spacing

Increase tracking (letter-spacing) only for short uppercase or small-caps labels at small sizes — this improves legibility of compressed letterforms. A value of `0.06em` to `0.1em` is usually enough; anything beyond `0.12em` becomes decorative rather than functional.

Decrease tracking slightly for large display headings (36px+) — type designers set default spacing for body sizes, and large text benefits from tighter setting. A value of `-0.01em` to `-0.03em` on display text is often an improvement.

Never add tracking to lowercase body text or sentence-case UI copy. It increases line length without adding legibility.

#### Font selection signals

Typeface choice sets the register of the whole section before a single layout decision is made:

- A well-crafted geometric sans (like those with 10+ weights available on Google Fonts) reads as modern and neutral — appropriate for most product UI
- A humanist sans adds warmth and approachability
- A transitional or oldstyle serif suggests editorial authority, publishing, or premium positioning
- A monospace face signals technical precision and is effective for data, code, or metric display

Prefer fonts with a wide weight range (5+ weights). Families with this range tend to be more carefully constructed and give you more hierarchy options within a single typeface. Avoid condensed fonts for body text — they sacrifice x-height and spacing in ways that hurt legibility.

When the page already uses a specific typeface, extend it with weight and size variation before introducing a second family. A second family earns its place by adding a clearly different role (display vs. body, or label vs. data), not by adding variety for its own sake.

### Spacing

#### Start with more space than you think you need

The default failure mode is too little space. When in doubt, add more. Generous whitespace makes a section feel considered and intentional; cramped spacing makes it feel unfinished regardless of what else is well done. It's much easier to reduce spacing that feels excessive than to diagnose why something looks off when spacing is the problem.

This applies at every level: between sections, between groups of elements within a section, and between individual elements within a group.

#### Use a spacing scale, not arbitrary values

Pick a spacing base unit (4px or 8px works well) and use multiples of it for all margin, padding, gap, and sizing decisions. This doesn't mean every value has to be exactly on the grid — small optical corrections are fine — but keeping values in a consistent family (4, 8, 12, 16, 24, 32, 48, 64, 96...) makes the spacing feel systematic rather than random.

Arbitrary one-off values (23px, 37px) almost always signal that a spacing decision wasn't made from a principle — they should be resolved to the nearest system value.

#### Spacing communicates grouping

Elements that belong together should have less space between them than they have from unrelated elements. This sounds obvious but is frequently violated: equal spacing between a label and its input, and between consecutive form groups, makes it unclear which label belongs to which field.

The rule: the space between a label and the thing it labels should be meaningfully smaller than the space between separate labeled groups. This applies to headings and their sections, list items and their sublists, and any parent-child content relationship.

When a component already has internal borders or background color differences creating separation, you often don't need additional spacing to distinguish groups. Conversely, when there are no visual separators, spacing has to do all the work — and needs to be more deliberate.

#### Don't fill the screen just because you have the space

A component that works best at 600px wide should be 600px wide. Stretching it to fill a 1200px container doesn't improve it — it creates an uncomfortably wide reading area, excess whitespace with no purpose, and the visual sense that content is lost in the page.

Give elements the width that optimizes their content, then constrain them with `max-width`. Let them shrink on smaller screens but don't force them to grow beyond their natural size. A centered, well-proportioned block on a wide screen reads better than a bloated full-width one.

#### Fixed widths often beat fluid grid percentages

Percentage-based fluid widths are appropriate when you want an element to scale continuously with the viewport. But many UI elements — sidebars, forms, cards, modals — have an optimal width that doesn't change with the screen size. Force these to a fixed or max-width rather than a percentage column. This prevents sidebars from growing uncomfortably wide on large screens and form fields from shrinking below usable width on medium screens.

Only use fluid percentages where you actually want the element to scale with the container.

#### Large and small elements don't scale at the same rate

When adapting layouts across screen sizes, large elements should shrink faster than small elements. A 48px heading on desktop might need to be 28px on mobile — that's a 42% reduction. A 14px body text on desktop might need to be 13px or stay at 14px — minimal change. The ratio between them changes significantly, and that's correct. Don't try to maintain proportional relationships across breakpoints; adjust each element to what looks right at that size independently.

#### Separation without borders

Before reaching for a border to separate content, consider alternatives that often produce a cleaner result:

- **Spacing alone**: increasing the gap between groups is frequently sufficient, and adds no visual weight
- **Background color difference**: adjacent sections with subtly different surface colors read as distinct without any dividing line
- **Typographic distinction**: a change in weight, size, or color between a heading and its content body creates natural separation

Borders add visual noise. Use them when the separation needs to be explicit and unambiguous — data tables, form field inputs, comparative layouts where the boundary is part of the meaning. In most other cases, space and color handle it more gracefully.

### Depth
