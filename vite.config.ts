import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: '/my-3d-portfolio/',
  plugins: [react()],
  server: {
    host: true,
  },
});
