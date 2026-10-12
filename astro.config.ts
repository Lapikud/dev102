import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import { BRAND_COLORS, SITE_DESCRIPTION, SITE_TITLE } from "./src/consts";

export default defineConfig({
  site: "https://dev102.lapikud.ee",
  integrations: [
    mdx(),
    sitemap(),
    favicons({
      input: "src/assets/dev102-badge.png",
      name: `${SITE_TITLE} Workshops`,
      short_name: SITE_TITLE,
      themes: [BRAND_COLORS.ink],
      background: BRAND_COLORS.orange,
      manifest: {
        description: SITE_DESCRIPTION,
        start_url: "/",
        display: "standalone",
        display_override: [],
      },
      icons: {
        favicons: true,
        appleIcon: ["apple-touch-icon.png"],
        android: ["android-chrome-192x192.png", "android-chrome-512x512.png"],
        appleStartup: false,
        windows: false,
        yandex: false,
      },
      withCapo: false,
    }),
  ],
});
