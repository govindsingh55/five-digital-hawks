import { fetchPosts } from '$lib/utils/posts';
import { siteConfig } from '$lib/config';

export const GET = async () => {
  const posts = await fetchPosts();
  
  const pages = [
    '',
    'about',
    'services',
    'portfolio',
    'contact',
    'blog'
  ];

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${pages
        .map(
          (page) => `
        <url>
          <loc>${siteConfig.url}/${page}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `
        )
        .join('')}
      ${posts
        .map(
          (post) => `
        <url>
          <loc>${siteConfig.url}/blog/${post.slug}</loc>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join('')}
    </urlset>`.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};
