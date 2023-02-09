import { defineConfig } from 'vite';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'scripts/frontend.js'),
      name: 'frontend',
      fileName: 'frontend.js',
    },
    rollupOptions: {
      output: {
      }
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
});
