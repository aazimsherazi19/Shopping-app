import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Shopping-app/', // 👈 Add this line (match your repo name)
});

