# Varium

Varium is a skill-first workflow for agent-driven UI variant generation.

Install it like Caveman:

```bash
npx skills add goerll/varium
```

## What’s inside

- `skill/SKILL.md` - main skill entrypoint
- `skill/topics/` - on-demand design guidance
- `skill/assets/` - framework picker assets

## Flow

1. Ask your agent to design a section.
2. The skill detects the framework.
3. The agent generates 4+ variants.
4. The agent copies the right picker asset into the target project.
5. You review in-browser and choose one.
6. The agent keeps the winner and removes the temporary review state.

## Skill layout

```txt
skill/
  SKILL.md
  topics/
    color.md
    depth.md
    spacing.md
    typography.md
  assets/
    react/
    svelte/
    vue/
```

## Notes

- The repo no longer ships a landing page.
- The repo no longer ships a demo app.
- The npm package has been removed.
- `skill/SKILL.md` is the source of truth.

## License

MIT. See `LICENSE`.
