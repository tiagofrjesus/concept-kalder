import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import JsonLd from '@/components/JsonLd';
import { SITE_URL, content, getProduct, productJsonLd } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return content.products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.code} ${product.name}`,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = content.products.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={`${product.code} · ${product.category}`}
        title={product.name}
        lead={product.summary}
        crumbs={[{ label: 'Sensors', href: '/products' }, { label: product.code }]}
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="lead">{product.description}</p>
            <h2 className="subhead">Typical applications</h2>
            <ul className="apps">
              {product.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
          <aside className="spectable" aria-labelledby="spec-h">
            <h2 id="spec-h" className="spectable__title">
              Specification <span>{product.code}</span>
            </h2>
            <dl>
              {product.specs.map((s) => (
                <div key={s.label} className="spectable__row">
                  <dt>{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className="btn btn--dark spectable__cta">
              Request datasheet and pricing
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="more-h">
        <div className="container">
          <h2 id="more-h" className="subhead">Other sensors</h2>
          <ul className="products products--3">
            {others.map((p) => (
              <li key={p.slug} className="product">
                <Link href={`/products/${p.slug}`} className="product__link">
                  <span className="product__top">
                    <span className="product__code">{p.code}</span>
                    <span className="product__cat">{p.category}</span>
                  </span>
                  <h3 className="product__name">{p.name}</h3>
                  <p className="product__summary">{p.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sensors', item: `${SITE_URL}/products` },
            { '@type': 'ListItem', position: 3, name: product.name, item: `${SITE_URL}/products/${product.slug}` },
          ],
        }}
      />
    </>
  );
}
