import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [
    react(),
    reactRouter(), // React Router Framework-Build
  ],
  base: "/souvenirs/",
});
