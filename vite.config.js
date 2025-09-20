import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
 base:process.env.VITE_BASE_PATH || "/",
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:8000", // dev backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
