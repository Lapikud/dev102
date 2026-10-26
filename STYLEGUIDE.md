# DEV102 style guide

Use this guide when adding or changing interface styling. Preserve the existing Lapikud identity and extend the shared tokens in `src/styles/global.css` instead of introducing a parallel system.

## Color and themes

The source of truth for palette values and theme-specific meanings is `src/styles/global.css`; maintain those values and meanings there. The visual identity pairs Lapikud orange and near-black ink in the light theme, and near-black surfaces, light text, and orange accents in the dark theme. Use the existing semantic CSS properties in components so they remain legible across themes. System preference is the default; a visitor’s saved explicit selection overrides it. Preserve visible focus indicators in both themes.

## Interface markers and typography

The interface uses short, monospace markers as a visual vocabulary:

| Marker | Meaning                                                           | Example                          |
| ------ | ----------------------------------------------------------------- | -------------------------------- |
| `!#`   | A label or metadata field; commonly followed by a name and colon. | `!#when :`, `!#speaker :`        |
| `~#`   | A DEV102 identity or route/section identifier.                    | `~#DEV102`, `~#DEV102/workshops` |
| `>#`   | The next step or forward action; signals continuation/navigation. | `># next`                        |

Render these markers and compact labels in JetBrains Mono (`--font-mono`). Red Hat Display (`--font-display`) is the main interface and heading face. Syncopate (`--font-accent`) is reserved for occasional Lapikud accents. Keep marker spelling and punctuation consistent; do not substitute ordinary prose styling for these token-like labels.

## Shape, borders, and interaction

The current visual system uses square-cornered panels and controls; there is no border-radius token or rounded-corner rule. Preserve that treatment rather than adding rounded UI by default. Borders are prominent and high-contrast, commonly `2px` for panels and `3px` for primary controls. Interactive elements should have clear hover and `:focus-visible` states; do not rely on color alone to communicate focus or selection.

## Motion and texture

The repeating dot field is a brand texture, not primary content. Keep it subtle and maintain contrast. Use the existing `--ease-out`, `--duration-fast`, `--duration-reveal`, `--shadow-lift-offset`, and `--shadow-press-offset` tokens for brief interaction feedback and reveals. Honor reduced-motion preferences for nonessential motion.
