import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  server: {
    host: "0.0.0.0", // Gör servern tillgänglig för alla enheter på nätverket
    port: 5173, // Standardport för Vite, kan justeras om nödvändigt
  },
});
