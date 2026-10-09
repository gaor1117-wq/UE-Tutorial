import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://gaor1117-wq.github.io",
  base: "/UE-Tutorial",
  integrations: [tailwind()],
});
