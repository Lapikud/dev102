import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const workshops = defineCollection({
  loader: glob({ base: "./src/content/workshops", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    tags: z.array(z.string()).optional(),
    facebookEventUrl: z.url().optional(),
    speakers: z
      .array(
        z.object({
          name: z.string(),
          role: z.string().optional(),
          link: z.url().optional(),
        }),
      )
      .optional(),
    slides: z.array(z.object({ label: z.string(), url: z.url() })).optional(),
    resources: z
      .array(z.object({ label: z.string(), url: z.url() }))
      .optional(),
    videos: z.array(z.object({ label: z.string(), url: z.url() })).optional(),
  }),
});

export const collections = { workshops };
