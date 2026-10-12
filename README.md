# DEV102

A workshop series site for Lapikud at TalTech, built with Astro. Each workshop lives in its own Markdown file so event content can be delegated and updated without editing page templates.

## Add or update a workshop

Create `src/content/workshops/<slug>.md`:

```md
---
title: |-
  IDEs &
  Text Editors
date: "2026-10-21T18:30:00+03:00"
location: ICO-316
tags:
  - IDEs
  - Text editors
facebookEventUrl: https://www.facebook.com/events/...
speakers:
  - name: Speaker Name
    role: Guest speaker
    link: https://example.com
slides:
  - label: Presentation
    url: https://example.com/slides
resources:
  - label: Editor setup guide
    url: https://example.com/guide
videos:
  - label: Recording
    url: https://example.com/video
---

Add the event description and any extra sections here in Markdown.
```

Required fields are `title`, `date` (ISO datetime with timezone offset), and `location`. All other frontmatter fields are optional; omit them when not available. The same `label`/`url` shape is used for slides, resources, and videos. Each file creates `/workshops/<slug>/`; the homepage automatically features the nearest upcoming event and the workshop index separates upcoming and past events. Event times display in `Europe/Tallinn`.

## Development

```sh
pnpm install
pnpm dev
pnpm build
pnpm test
```
