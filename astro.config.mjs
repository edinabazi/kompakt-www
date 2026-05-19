// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { site } from './site.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
