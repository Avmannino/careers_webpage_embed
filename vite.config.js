import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace `careers_webpage_embed` with your actual GitHub repo name if different
export default defineConfig({
  plugins: [react()],
  base: "/careers_webpage_embed/",
});