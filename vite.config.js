import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mix, { vercelAdapter } from 'vite-plugin-mix'

export default defineConfig({
  plugins: [
    vue(),
    mix({
      handler: "./src/api.js",
      adapter: vercelAdapter(),

    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});