import { SITE_URL, content } from '@/lib/site';

export default function sitemap() {
  const lastModified = new Date();
  const pages = ['', '/products', '/industries', '/contact'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
  const products = content.products.map((p) => ({
    url: `${SITE_URL}/products/${p.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));
  return [...pages, ...products];
}
