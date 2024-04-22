import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'C Yongky Pranowo - Blogs',
    description: 'Explore engaging tutorials on web development, deep thoughts, and valuable insights from my journey in the world of technology. Let`s explore together!',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.description,
      customData: post.data.customData,
      link: `/posts/${post.slug}/`,
    })),
  });
}