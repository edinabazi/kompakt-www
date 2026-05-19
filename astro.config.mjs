// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { site } from './site.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  }
});
