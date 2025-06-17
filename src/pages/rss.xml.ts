import rss from '@astrojs/rss';

import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {

    const blogPosts = await getCollection('blog');

   return rss({
    // stylesheet: '/styles/rss.xsl',
    // `<title>` field in output xml
    title: 'Kch’s Blog',
    // `<description>` field in output xml
    description: 'Un Blog de Astro',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site ?? '',
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPosts.map(({ data, slug }) => ({
        title: data.title,
        description: data.description,
        pubDate: data.date,
        link: `/posts/${slug}`,
    })),
    // (optional) inject custom xml
    customData: `<language>es-mx</language>`,
  });
};