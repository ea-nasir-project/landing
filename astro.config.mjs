// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.e-renova.com.br/',
  integrations: [mdx(), sitemap(), icon()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@/': path.resolve('./src'),
        '@/scripts': path.resolve('./src/assets/scripts'),
        '@/images': path.resolve('./src/assets/images'),
        '@/icons': path.resolve('./src/assets/icons'),
      },
    },
  },
});