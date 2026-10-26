# Contributing to DEV102

Thanks for helping improve the DEV102 workshop site. Contributions should keep workshop information accurate, accessible, and consistent with the existing project conventions.

## Prerequisites

- Node.js 22.12.0 or newer
- pnpm

## Get started

```sh
pnpm install
pnpm dev
```

## Make a change

- Keep workshop-specific information in `src/content/workshops/` Markdown files; avoid placing event content in page templates.
- Keep shared presentation in Astro components and layouts, and reusable behavior in `src/lib/` where appropriate.
- Follow [`STYLEGUIDE.md`](STYLEGUIDE.md) for code and visual conventions.
- Keep changes focused and avoid adding dependencies without a clear need.

For workshop content, include the required `title`, `description`, `date`, and `location` fields. Dates should include a timezone offset; event times are displayed in `Europe/Tallinn`. Optional speakers, tags, links, slides, resources, and recordings can be included when available. See the [README](README.md) for the complete content example and publishing behavior.

## Verify your change

Run the checks relevant to your change before submitting it:

```sh
pnpm check
pnpm lint
pnpm format:check
pnpm test
pnpm build
```

`pnpm test` also builds the site before running the tests. Fix regressions and formatting issues before requesting review.

## Open a contribution

Describe what changed and why, link any related issue or workshop material, and include the verification commands you ran. For visual or responsive changes, note the viewport or behavior checked. Do not include secrets, credentials, or unrelated generated output.
