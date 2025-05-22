import { getAllBlogsSlug } from '@/lib/actions/article.action';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://tirze-fit.com'; 

  // Dynamically fetch slugs or routes from your CMS, DB, or API here
  const staticPages = [
    '',
    '/contact-us',
    '/faqs',
    '/delivery-and-payment',
    '/shop-rules',
    '/shop',
    '/privacy',
    '/blogs',
    '/products',
    '/product/semaglutide-4mg',
    '/product/retatrutide-4Mg-pen',
    '/product/semacagri-pen-2-2-mg',
    '/product/tirzepatide-10mg-pen',
    ]; // add your static pages
  const {articles} = await getAllBlogsSlug()
  const allUrls = [
    ...staticPages.map(path => `${baseUrl}/en${path}`),
    ...staticPages.map(path => `${baseUrl}/it${path}`),
    ...articles.map(post => `${baseUrl}/${post.lang}/blogs/${post.slug}`),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${allUrls
      .map(
        url => `
      <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
