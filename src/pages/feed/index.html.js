import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';
import { excerpt, getPosts, postUrl } from '../../lib/posts';

export async function GET(context) {
	const posts = await getPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		trailingSlash: true,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.date,
			description: excerpt(post),
			link: postUrl(post),
		})),
	});
}
