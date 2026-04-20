---
name: varium-design-spacing
description: Spacing and layout guidance for Varium UI design variants. Consult when making decisions about whitespace, sizing, grouping, component width, and separation.
---

# Spacing and Layout

## Start with more space than you think you need

The default failure mode is too little space. When in doubt, add more. Generous whitespace makes a section feel considered and intentional; cramped spacing makes it feel unfinished regardless of what else is well done. It's much easier to reduce spacing that feels excessive than to diagnose why something looks off when spacing is the problem.

This applies at every level: between sections, between groups of elements within a section, and between individual elements within a group.

## Use a spacing scale, not arbitrary values

Pick a spacing base unit (4px or 8px works well) and use multiples of it for all margin, padding, gap, and sizing decisions. This doesn't mean every value has to be exactly on the grid — small optical corrections are fine — but keeping values in a consistent family (4, 8, 12, 16, 24, 32, 48, 64, 96...) makes the spacing feel systematic rather than random.

Arbitrary one-off values (23px, 37px) almost always signal that a spacing decision wasn't made from a principle — they should be resolved to the nearest system value.

## Spacing communicates grouping

Elements that belong together should have less space between them than they have from unrelated elements. This sounds obvious but is frequently violated: equal spacing between a label and its input, and between consecutive form groups, makes it unclear which label belongs to which field.

The rule: the space between a label and the thing it labels should be meaningfully smaller than the space between separate labeled groups. This applies to headings and their sections, list items and their sublists, and any parent-child content relationship.

When a component already has internal borders or background color differences creating separation, you often don't need additional spacing to distinguish groups. Conversely, when there are no visual separators, spacing has to do all the work — and needs to be more deliberate.

## Don't fill the screen just because you have the space

A component that works best at 600px wide should be 600px wide. Stretching it to fill a 1200px container doesn't improve it — it creates an uncomfortably wide reading area, excess whitespace with no purpose, and the visual sense that content is lost in the page.

Give elements the width that optimizes their content, then constrain them with `max-width`. Let them shrink on smaller screens but don't force them to grow beyond their natural size. A centered, well-proportioned block on a wide screen reads better than a bloated full-width one.

## Fixed widths often beat fluid grid percentages

Percentage-based fluid widths are appropriate when you want an element to scale continuously with the viewport. But many UI elements — sidebars, forms, cards, modals — have an optimal width that doesn't change with the screen size. Force these to a fixed or max-width rather than a percentage column. This prevents sidebars from growing uncomfortably wide on large screens and form fields from shrinking below usable width on medium screens.

Only use fluid percentages where you actually want the element to scale with the container.

## Large and small elements don't scale at the same rate

When adapting layouts across screen sizes, large elements should shrink faster than small elements. A 48px heading on desktop might need to be 28px on mobile — that's a 42% reduction. A 14px body text on desktop might need to be 13px or stay at 14px — minimal change. The ratio between them changes significantly, and that's correct. Don't try to maintain proportional relationships across breakpoints; adjust each element to what looks right at that size independently.

## Separation without borders

Before reaching for a border to separate content, consider alternatives that often produce a cleaner result:

- **Spacing alone**: increasing the gap between groups is frequently sufficient, and adds no visual weight
- **Background color difference**: adjacent sections with subtly different surface colors read as distinct without any dividing line
- **Typographic distinction**: a change in weight, size, or color between a heading and its content body creates natural separation

Borders add visual noise. Use them when the separation needs to be explicit and unambiguous — data tables, form field inputs, comparative layouts where the boundary is part of the meaning. In most other cases, space and color handle it more gracefully.
