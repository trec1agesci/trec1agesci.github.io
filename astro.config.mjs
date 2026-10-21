// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://www.trecastagni1.it',
	trailingSlash: 'always',
	integrations: [sitemap()],
});
