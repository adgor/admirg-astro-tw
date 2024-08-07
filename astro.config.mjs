import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";
// https://astro.build/config
export default defineConfig({
  site: "https://admirg.netlify.app",
  integrations: [
    tailwind(),
    mdx(),
    preact(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    partytown(),
  ],
});
