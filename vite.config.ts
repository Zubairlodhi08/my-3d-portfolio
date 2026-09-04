import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-3d-portfolio/",
  plugins: [react()],
  server: {
    host: true,
  },
});