// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { DISMISSED_PAGES } from './src/dismissed.mjs';

const site = 'https://www.trecastagni1.it';
const dismissedUrls = new Set(DISMISSED_PAGES.map((slug) => `${site}/${slug}/`));

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [sitemap({ filter: (page) => !dismissedUrls.has(page) })],
});
