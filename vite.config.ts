import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js', // make sure Vite knows your PostCSS config
  },
  server: {
    hmr: {
      overlay: true, // optional, you can set false to disable overlay
    },
  },
});
