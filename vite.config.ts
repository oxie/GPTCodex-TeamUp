import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isActionsBuild = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repositoryName.endsWith(".github.io");
const basePath = isActionsBuild && !isUserOrOrgSite && repositoryName
  ? `/${repositoryName}/`
  : "/";

const rootDir = path.resolve(import.meta.dirname, "client");

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: rootDir,
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
