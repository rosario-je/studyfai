import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://fd39-104-158-139-32.ngrok-free.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});