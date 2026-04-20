---
name: varium-design-depth
description: Depth, shadow, and layering guidance for Varium UI design variants. Consult when using shadows, elevation, overlapping elements, or creating a sense of spatial hierarchy.
---

# Depth and Layering

## Light has a consistent source

Any interface that uses shadows, highlights, or raised/inset effects should behave as if lit from above. This is how human vision is calibrated — we expect light from overhead, and elements that follow this convention read as physically coherent.

In practice this means:
- Raised elements cast shadows downward and slightly outward
- The top edge of a raised element may catch light (lighter border or inner shadow at top)
- The bottom edge of a raised element receives less light (slightly darker)
- Inset elements reverse this: shadow at the top edge, lighter at the bottom

Violating the light source — for example, a shadow above an element when the rest of the interface is lit from above — creates subtle visual wrongness that's hard to articulate but immediately felt.

## Shadows communicate elevation, not decoration

A shadow's purpose is to tell the viewer how far an element floats above the surface beneath it. Small, tight shadows suggest slight elevation (like a button sitting just above the page). Large, diffuse shadows suggest high elevation (like a modal or dropdown floating well above the content).

Match shadow intensity to the intended elevation:
- **Barely elevated** (active input, card on a slightly different background): `0 1px 3px rgba(0,0,0,0.08)`
- **Lightly elevated** (default card, inline callout): `0 2px 8px rgba(0,0,0,0.10)`
- **Moderately elevated** (sticky header, floating button): `0 4px 16px rgba(0,0,0,0.12)`
- **Highly elevated** (dropdown, popover, tooltip): `0 8px 30px rgba(0,0,0,0.15)`
- **Modal/overlay level**: `0 16px 60px rgba(0,0,0,0.20)`

Don't use the same shadow value for a card and a modal — they communicate different spatial positions and should look different.

## Two-part shadows read as more natural

Real shadows aren't uniform — they have a sharp component close to the object and a softer, more diffuse component further away. Using two layered box-shadows (one tight and dark, one large and light) creates a more physically convincing result than a single value:

```css
box-shadow: 
  0 1px 3px rgba(0,0,0,0.12),
  0 4px 16px rgba(0,0,0,0.08);
```

The first value provides crispness near the element; the second provides the ambient spread. Together they read as genuinely elevated rather than artificially shadowed.

## Flat designs can have depth without shadows

Shadow isn't the only tool for spatial hierarchy. On flat or minimalist pages where box-shadows would feel out of register, depth can come from:

- **Color contrast between layers**: a slightly darker or lighter background behind an element reads as a different z-level without any shadow
- **Overlapping elements**: an element that breaks out of its container and overlaps an adjacent section reads as being above it spatially — a card that bleeds into a header, an image that sits across a color boundary, a badge that overlaps the corner of a photo
- **Scaling**: elements that appear larger feel closer; elements that are smaller feel further away
- **Opacity**: background elements can be slightly reduced in opacity to suggest visual recession

On flat pages, these techniques produce depth without breaking the visual language of the surface.

## Overlapping creates the most compelling layering

The most impactful depth effect is physical overlap — placing one element so it appears to sit on top of another. This can be achieved with negative margin, absolute positioning, or transform translate. Used with intention, it makes a composition feel dynamic and spatially alive in a way that no shadow alone achieves.

Examples: a testimonial photo that overlaps the section's background band, a feature card that extends slightly above the section divider, a product screenshot that breaks out of its container and bleeds upward. These aren't complex to implement but are almost never reached for by default because they require breaking out of the box model mentally.

When using overlap, maintain the light source convention: the overlapping element should cast a shadow on the element beneath it, not the reverse.

## When not to use depth

Depth cues increase visual weight. On pages that communicate through restraint — minimal product tools, documentation, editorial content — excessive elevation can feel at odds with the surface's character. Read the page first: if it's flat, quiet, and borderless, your section should be too. Depth earns its place when the page is already using it, or when a specific element needs to clearly float above the surrounding content (a modal, a tooltip, a sticky element).
