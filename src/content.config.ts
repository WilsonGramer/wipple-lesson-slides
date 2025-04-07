import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
    lessons: defineCollection({
        loader: glob({
            pattern: "**/*.{md,mdx}",
            base: "./content/lessons",
        }),
        schema: z.object({
            title: z.string(),
        }),
    }),
};
