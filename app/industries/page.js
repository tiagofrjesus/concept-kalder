import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { content, productsForIndustry } from '@/lib/site';

export const metadata = {
  title: 'Industries',
  description: 'Kalder sensors and condition monitoring for energy, rail, manufacturing and port operators.',
  alternates: { canonical: '/industries' },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for assets that cannot stop."
        lead="From wind turbines to container cranes, the same sensor families and one platform across every site."
        crumbs={[{ label: 'Industries' }]}
      />
      {content.industries.map((ind, i) => (
        <section key={ind.slug} id={ind.slug} className="section section--line ind" aria-labelledby={`ind-${ind.slug}`}>
          <div className="container split">
            <div>
              <p className="eyebrow">{String(i + 1).padStart(2, '0')} / {ind.name}</p>
              <h2 id={`ind-${ind.slug}`} className="h2">{ind.text}</h2>
              <p className="ind__stat">{ind.stat}</p>
            </div>
            <div>
              <h3 className="subhead">Typically specified</h3>
              <ul className="ind__products">
                {productsForIndustry(ind.slug).map((p) => (
                  <li key={p.slug}>
                    <Link href={`/products/${p.slug}`}>
                      <span className="product__code">{p.code}</span>
                      <span>{p.name}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
