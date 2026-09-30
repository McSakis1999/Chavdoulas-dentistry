import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://mcsakis1999.github.io",
  base: "/Chavdoulas-dentistry",
  trailingSlash: "always",
  build: { inlineStylesheets: "always" },
  vite: { plugins: [tailwindcss()] },
});
import { defineConfig } from "astro/config";
