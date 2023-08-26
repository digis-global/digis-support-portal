import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  icons: [
    {
      src: "icons/maskable-icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any maskable monochrome",
    },
    {
      src: "icons/apple-touch-icon-180x180.png",
      sizes: "180x180",
      type: "image/png",
      purpose: "any maskable monochrome",
    },
    {
      src: "icons/pwa-64x64.png",
      sizes: "64x64",
      type: "image/png",
    },
    {
      src: "icons/pwa-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "icons/pwa-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  name: "Digis Support Portal",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest,
    }),
  ],
});
