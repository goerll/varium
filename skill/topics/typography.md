---
name: varium-design-typography
description: Typography guidance for Varium UI design variants. Consult when making decisions about type scale, font choice, line-height, line length, alignment, and weight.
---

# Typography

## Define a scale, not a spectrum

Pick discrete type sizes and use only those. A practical scale for interface work has around 8–10 stops: roughly 12, 14, 16, 18, 20, 24, 30, 36, 48, 60px. The exact values matter less than the principle — each step should feel visually distinct from the one below it. Avoid incremental nudging (16px vs 17px vs 18px) as it produces no visible hierarchy while multiplying decisions.

Use `rem` or `px`, not `em` for scale definitions. `em` compounds inside nested elements and silently produces sizes that don't exist in your scale.

## Hierarchy through weight and color, not size alone

Relying exclusively on font size to create hierarchy produces primary text that's too large and secondary text that's too small. Weight and color are more efficient tools:

- Use a dark, high-contrast color for primary content
- Use a muted mid-tone for secondary content (dates, metadata, captions)  
- Use an even softer tone for tertiary content (footnotes, helper text)
- Use a heavier weight (600–700) for emphasis, a normal weight (400–500) for everything else

Avoid weights below 400 for text smaller than ~24px — they become illegible at small sizes. To de-emphasize small text, reach for color, not thinness.

## Line-height scales inversely with size

Small text needs generous line-height so the eye can track from line to line without losing its place — around 1.5 to 1.6 for body text at 14–16px. Large text needs less — headings at 36px and above can use 1.1 to 1.2 without feeling cramped. Headlines at display sizes (56px+) often work best at 1.0 or even slightly below.

Line-height should also increase with line length. A narrow column at 400px can use 1.4; a wide column at 700px+ should use 1.7 or more, otherwise readers lose their place at the line return.

## Line length for readable prose

Body text reads best at 45–75 characters per line. In CSS, a `max-width` of `60ch–70ch` on the text container handles this directly. Going wider increases the cognitive load of tracking from line end back to line start. Going narrower creates choppy rhythm that forces constant wrapping.

This constraint applies even when the surrounding layout is wider — constrain the text column independently of the section width.

## Alignment

Left-align almost everything. Center alignment works for short standalone elements (a single headline, a one-line subheading, a metric label) but breaks down immediately with paragraph text — ragged-right edges on both sides create visual instability after two or three lines.

Right-align numbers in tables and data lists so decimal points and digit positions line up vertically, making values scannable at a glance.

When mixing font sizes on the same baseline (a large value next to a small label, for example), align them to their text baseline rather than centering them vertically. Vertical centering of mixed sizes misaligns the optical reading line and looks slightly off in a way that's hard to diagnose.

## Letter-spacing

Increase tracking (letter-spacing) only for short uppercase or small-caps labels at small sizes — this improves legibility of compressed letterforms. A value of `0.06em` to `0.1em` is usually enough; anything beyond `0.12em` becomes decorative rather than functional.

Decrease tracking slightly for large display headings (36px+) — type designers set default spacing for body sizes, and large text benefits from tighter setting. A value of `-0.01em` to `-0.03em` on display text is often an improvement.

Never add tracking to lowercase body text or sentence-case UI copy. It increases line length without adding legibility.

## Font selection signals

Typeface choice sets the register of the whole section before a single layout decision is made:

- A well-crafted geometric sans (like those with 10+ weights available on Google Fonts) reads as modern and neutral — appropriate for most product UI
- A humanist sans adds warmth and approachability
- A transitional or oldstyle serif suggests editorial authority, publishing, or premium positioning
- A monospace face signals technical precision and is effective for data, code, or metric display

Prefer fonts with a wide weight range (5+ weights). Families with this range tend to be more carefully constructed and give you more hierarchy options within a single typeface. Avoid condensed fonts for body text — they sacrifice x-height and spacing in ways that hurt legibility.

When the page already uses a specific typeface, extend it with weight and size variation before introducing a second family. A second family earns its place by adding a clearly different role (display vs. body, or label vs. data), not by adding variety for its own sake.
