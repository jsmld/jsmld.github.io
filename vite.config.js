import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        qrcode: './pages/qrcode.html',
        threejs: './pages/threejs.html'
      }
    }
  }
});
