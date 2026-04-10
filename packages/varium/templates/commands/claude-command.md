---
description: Generate and review UI variants with Varium
argument-hint: [request]
---

Use the Varium skill installed in this repository for the following request:

$ARGUMENTS

Follow the Varium workflow exactly:
- generate 3 distinct variants unless the user asked otherwise
- create `ComponentName.variants.tsx`
- mount `VariantPicker` from `varium`
- ask the user to choose a variant using native selection UI when available
- after selection, keep the chosen variant and remove temporary review state

Repository framework context: {{FRAMEWORK_NAME}}.
