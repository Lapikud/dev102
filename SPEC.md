# DEV102 project specification

## Product

DEV102 is a workshop-series site for students. It helps students discover practical development workshops, decide which events to attend, and revisit workshop materials afterward. Workshop announcements and details are maintained as content rather than embedded in page templates.

## Users and needs

- **Students:** find upcoming workshops, understand when and where they take place, and access related materials.
- **Workshop organizers and contributors:** publish or update event information without needing to change shared page components.
- **Lapikud:** present the series consistently with its identity and make information available to visitors on different devices and theme preferences.

## Product requirements

1. The homepage highlights the nearest upcoming workshop and communicates its key details.
2. Visitors can browse upcoming and past workshops and open an individual workshop page.
3. A workshop page can present its description, event details, tags, speakers, slides, resources, and recordings when supplied.
4. Workshop event times are interpreted and displayed for the `Europe/Tallinn` time zone.
5. Workshop content is authored as Markdown files and validated against a defined content schema.
6. The site provides its standard pages and machine-readable metadata, including a not-found page, RSS feed, sitemap, and social preview image.
7. Theme defaults to the visitor’s system preference. Visitors can choose a specific theme; a saved choice takes precedence over the system preference.
8. Contribution and style guides explain how to contribute and how to maintain the project’s code and visual identity.

## Product and technical constraints

- The site is built with Astro and publishes a statically generated site.
- Event-specific content belongs in the workshop content collection; shared presentation and behavior belong in reusable layouts, components, and utilities.
- Avoid adding dependencies unless a requirement cannot be met with the existing stack.