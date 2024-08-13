import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [react()],
  resolve: {
    alias: {
      'nepali-calendar-react': 'nepali-calendar-react/lib/index.js'
    }
  }
});
