import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  base: '/grand-bbq/',
  site: 'https://grand-bbq.example.com',
  output: 'static',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  prefetch: true,
});