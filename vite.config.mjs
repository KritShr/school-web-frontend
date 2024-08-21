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
  },
  server: {
    host: '0.0.0.0', // 모든 IP에서 접근 가능하도록 설정
    port: 5173,      // 사용할 포트
  }
});


