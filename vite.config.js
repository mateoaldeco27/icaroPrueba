import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        carrito: resolve(__dirname, 'pages/carrito.html'),
        faq: resolve(__dirname, 'pages/faq.html'),
        shop: resolve(__dirname, 'pages/shop.html'),
        usuario: resolve(__dirname, 'pages/usuario.html'),
      },
    },
  },
});