import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { transformerMetaHighlight } from "@shikijs/transformers";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx({})],
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                "@": resolve("./src"),
            },
        },
    },
    markdown: {
        shikiConfig: {
            theme: "github-light",
            langs: [JSON.parse(readFileSync("wipple.tmLanguage.json", "utf8"))],
            langAlias: {
                wpl: "wipple",
            },
            transformers: [transformerMetaHighlight()],
        },
    },
});
