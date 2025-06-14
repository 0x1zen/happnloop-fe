import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "ce8e9120-69ff-4d9b-a271-e4c49117ca3f-00-25q6q6gszj3rn.pike.replit.dev",
    ],
  },
});
