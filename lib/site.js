import content from '@/data/content.json';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://concept-kalder.vercel.app').replace(/\/$/, '');
export const SITE_NAME = 'Kalder Precision';

export const NAV = [
  { href: '/products', label: 'Sensors' },
  { href: '/industries', label: 'Industries' },
  { href: '/contact', label: 'Contact' },
];

export { content };

// Which sensor families are typically specified in each sector.
const INDUSTRY_PRODUCTS = {
  energy: ['kv-vibration', 'kt-thermal'],
  rail: ['kv-vibration', 'kl-laser'],
  manufacturing: ['kl-laser', 'kt-thermal', 'kv-vibration'],
  ports: ['kg-gas', 'kv-vibration'],
};

export function getProduct(slug) {
  return content.products.find((p) => p.slug === slug);
}

export function productsForIndustry(slug) {
  return (INDUSTRY_PRODUCTS[slug] || []).map(getProduct).filter(Boolean);
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    foundingDate: '1998',
    email: content.contact.email,
    address: { '@type': 'PostalAddress', streetAddress: content.contact.address, addressLocality: 'Porto', addressCountry: 'PT' },
  };
}

export function productJsonLd(p) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${p.code} ${p.name}`,
    sku: p.code,
    category: p.category,
    description: p.summary,
    brand: { '@type': 'Brand', name: SITE_NAME },
    url: `${SITE_URL}/products/${p.slug}`,
    additionalProperty: p.specs.map((s) => ({ '@type': 'PropertyValue', name: s.label, value: s.value })),
  };
}
