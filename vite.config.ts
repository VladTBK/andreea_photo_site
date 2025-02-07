import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["e779-86-127-162-130.ngrok-free.app"],
  },
  plugins: [react(), tailwindcss()],
});
