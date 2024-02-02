import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:5001/dist/assets/remoteEntry.js",
        itemsdetail: "https://micro-fe-chi.vercel.app/remoteEntry.js",
        from: "webpack",
      },
      shared: ["react", "react-dom", "webpack"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  // optimizeDeps: {
  //   include: ["@module-federation/remoteEntry.js"],
  //   exclude: ["js-big-decimal"],
  // },
});
