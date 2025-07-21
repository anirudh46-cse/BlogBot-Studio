import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000', // Backend server
    },
  },
  resolve: {
    alias: {
      path: resolve(__dirname, 'node_modules/path-browserify'),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills(),
  ],
});