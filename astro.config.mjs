// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { DISMISSED_PAGES } from './src/dismissed.mjs';

const site = 'https://www.trecastagni1.it';
const dismissedUrls = new Set(DISMISSED_PAGES.map((slug) => `${site}/${slug}/`));

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [sitemap({ filter: (page) => !dismissedUrls.has(page) })],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Montserrat',
			cssVariable: '--font-montserrat',
			weights: [600],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
