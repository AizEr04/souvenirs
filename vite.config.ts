import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [
    react(),
    reactRouter(), // <— wichtig für create-react-router Projekte
  ],
  base: "/souvenirs/", // dein Repo-Name für GitHub Pages
});
