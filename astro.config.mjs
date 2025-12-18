// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.e-renova.com.br/',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@pages': path.resolve('./src/pages'),
        '@scripts': path.resolve('./src/assets/scripts'),
        '@styles': path.resolve('./src/assets/styles'),
        '@images': path.resolve('./src/assets/images'),
      },
    },
  },
});