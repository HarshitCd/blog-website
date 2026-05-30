import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod/v4";

const blogs = defineCollection({
  loader: glob({
    base: "src/content/blogs",
    pattern: "*.md",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blogs };
