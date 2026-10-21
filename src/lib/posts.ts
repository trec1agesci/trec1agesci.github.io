import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, POSTS_PER_PAGE, TIME_ZONE } from '../consts';

export type Post = CollectionEntry<'posts'>;

const parts = (date: Date) =>
	Object.fromEntries(
		new Intl.DateTimeFormat('en-CA', {
			timeZone: TIME_ZONE,
			year: 'numeric',
			month: '2-digit',
		})
			.formatToParts(date)
			.map((p) => [p.type, p.value]),
	);

export const postYear = (post: Post) => parts(post.data.date).year;
export const postMonth = (post: Post) => parts(post.data.date).month;
export const postUrl = (post: Post) => `/${postYear(post)}/${postMonth(post)}/${post.id}/`;

export const formatDate = (date: Date) =>
	new Intl.DateTimeFormat('it-IT', { timeZone: TIME_ZONE, dateStyle: 'long' }).format(date);

export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('posts');
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const postsInCategory = (posts: Post[], slug: string) =>
	posts.filter((p) => p.data.categories.includes(slug));

export const categoryUrl = (path: string) => `/category/${path}/`;

export const categoryOf = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

export function paginate<T>(items: T[], page: number) {
	const totalPages = Math.max(1, Math.ceil(items.length / POSTS_PER_PAGE));
	return {
		items: items.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE),
		page,
		totalPages,
	};
}

export function excerpt(post: Post, max = 160) {
	const text = (post.body ?? '')
		.replace(/<[^>]*>/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/[\\*_#>`]/g, '')
		.replace(/\s+/g, ' ')
		.trim();
	if (text.length <= max) return text;
	return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`;
}

export const pageNumbers = (total: number) =>
	Array.from({ length: Math.max(0, total - 1) }, (_, i) => i + 2);
