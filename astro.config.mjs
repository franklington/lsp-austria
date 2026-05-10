import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lsp-gmunden.at',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
