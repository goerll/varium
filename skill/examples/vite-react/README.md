# Varium Vite Demo

This example demonstrates the full Varium workflow inside a minimal Vite + React + Tailwind app.

## Run it

From the repository root:

```bash
pnpm install
pnpm --filter @varium/example-vite-react dev
```

## What to look for

- `src/components/Testimonials.variants.tsx` contains three named UI directions.
- [`src/App.tsx`](./src/App.tsx) mounts `VariantPicker` between `VARIUM:START` and `VARIUM:END`.
- The agent should ask the user to choose one of the variant names after review.

## Example agent prompt

```txt
Use the Varium skill. Generate 3 testimonial variants for this landing page, wire them into the picker, and keep the rest of the page intact.
```

## Example follow-up after choosing

```txt
Choose a variant for testimonials:
1. Structured Proof
2. Wallet Ribbon
3. Case Study Band

Reply with the number or the variant name.
```

At that point the agent should replace the picker with the chosen testimonial component and remove the `.variants.tsx` file.
