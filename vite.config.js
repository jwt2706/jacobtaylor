import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist', // Output directory for the built files
    minify: true, // Enable minification for production build
    sourcemap: false, // Disable sourcemaps for production build
  },
});