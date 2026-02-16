import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/", // 👈 important for cPanel deployment
  plugins: [react(), tailwindcss()],
  preview: {
    port: 4173,
    strictPort: false,
    open: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});