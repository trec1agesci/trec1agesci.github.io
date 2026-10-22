// @ts-check
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import { DISMISSED_PAGES } from './src/dismissed.mjs';

const site = 'https://www.trecastagni1.it';
const dismissedUrls = new Set(DISMISSED_PAGES.map((slug) => `${site}/${slug}/`));

const contentFile = (collection, slug) =>
	fileURLToPath(new URL(`./src/content/${collection}/${slug}.md`, import.meta.url));

const dateOf = (collection, slug) => {
	const file = contentFile(collection, slug);
	if (!existsSync(file)) return undefined;
	return readFileSync(file, 'utf8').match(/^date: "([^"]+)"/m)?.[1];
};

const newestPost = readdirSync(fileURLToPath(new URL('./src/content/posts', import.meta.url)))
	.map((file) => dateOf('posts', file.replace(/\.md$/, '')))
	.filter(Boolean)
	.sort()
	.at(-1);

const lastModified = (url) => {
	const segments = new URL(url).pathname.split('/').filter(Boolean);
	const slug = segments.at(-1);
	if (segments.length === 3 && /^\d{4}$/.test(segments[0])) return dateOf('posts', slug);
	if (segments.length === 1) return dateOf('pages', slug);
	if (segments.length === 0 || ['category', 'page'].includes(segments[0])) return newestPost;
	return undefined;
};

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) => !dismissedUrls.has(page),
			serialize(item) {
				const date = lastModified(item.url);
				if (date) item.lastmod = new Date(date).toISOString();
				return item;
			},
		}),
	],
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
