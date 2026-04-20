---
name: varium-design-color
description: Color guidance for Varium UI design variants. Consult when making decisions about color palettes, greys, backgrounds, contrast, and accessibility.
---

# Color

## Work in HSL, not hex

When choosing or adjusting colors, think in HSL (hue, saturation, lightness) rather than hex codes. HSL maps directly to how color actually behaves: hue is the color identity, saturation is its intensity, lightness is how bright or dark it is. Adjusting one axis at a time gives predictable results. Guessing at hex values does not.

## Grey is almost never truly neutral

A grey with 0% saturation often looks sterile or slightly off next to colored elements. In practice, well-designed interfaces use greys that carry a subtle tint — a faint blue push for cool, clinical environments; a faint yellow-orange push for warmer, approachable ones. When the page already has an established color temperature, match it in your grey values to keep surfaces coherent.

## Build a palette with real range

Most generated UI uses too few shades and runs out of room. A usable palette needs roughly 8–10 stops per color — from a near-white tint to a near-black shade — so you have something to reach for at every level of hierarchy. Without this range, you end up using the same shade for surfaces, borders, and text, which flattens everything.

When building stops in a palette, lightness alone is a poor lever. As you lighten a color toward white, it loses saturation and looks washed out. To keep lighter stops feeling vivid, compensate by slightly increasing saturation and, for very light tints, nudging the hue a few degrees toward a brighter neighbor on the color wheel (yellow, cyan, or magenta). For darker stops, nudge toward a darker hue (red, green, or blue). This keeps the whole scale feeling like the same color rather than a gradient from vivid to grey.

## Hierarchy comes from color before opacity

When you need secondary text on a colored background, don't reduce opacity. Opacity lets the background bleed through, making text look faded or disabled rather than intentionally secondary. Instead, hand-pick a new color at the same hue with adjusted saturation and lightness. The result reads as a deliberate hierarchy choice rather than a disabled state.

The same logic applies to text on dark surfaces: the goal is reduced contrast relative to the background, not a lighter grey that ignores the background's hue entirely.

## Accessibility without harshness

Meeting contrast requirements (4.5:1 for body text, 3:1 for large text) on colored backgrounds is harder than it looks. When white text on a vivid color doesn't meet the threshold without darkening the background too aggressively, consider flipping the approach: use dark text on a light tint of that color rather than light text on a saturated background. This achieves accessibility without the visual weight of a dark panel.

For colored-on-colored text (for example, a secondary label inside a dark card), rotating the text hue toward a naturally brighter color — cyan, yellow, or magenta — can increase perceived brightness and contrast without moving toward pure white.

## Color supports hierarchy; it doesn't replace it

A section should read correctly in greyscale before color is applied. Color is for reinforcement and tone — it should not be the only signal distinguishing primary from secondary content, positive from negative states, or active from inactive elements. Accompany color-coded meaning with a shape, weight, or positional signal as well.

## Accent use

Strong accent colors draw attention. Use them for the one or two most important actions or data points in a section, not as a general highlight tool. When everything is accented, nothing is. If a section has a single CTA, one data metric, or one status badge that matters, the accent should go there and nowhere else.
