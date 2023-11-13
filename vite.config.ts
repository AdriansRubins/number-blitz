import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig({
  base: '/vite-react-template/',
  plugins: [
    react(),
  ],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
