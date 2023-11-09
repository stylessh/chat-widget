import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "path";

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
        // remove index-xxx.js and only keep index.js
        entryFileNames: "assets/[name].js",
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
