// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://geradev.com.mx', 
  output: 'static',
  integrations: [
    sitemap({
      serialize(item) {
        if (item.url === 'https://geradev.com.mx/') {
          item.changefreq = 'daily';
          item.priority = 1.0;
        } else if (
          item.url === 'https://geradev.com.mx/blog/' ||
          item.url === 'https://geradev.com.mx/proyectos/'
        ) {
          item.changefreq = 'weekly';
          item.priority = 0.8;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});