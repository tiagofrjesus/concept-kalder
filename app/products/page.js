import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { content } from '@/lib/site';

export const metadata = {
  title: 'Sensors',
  description: 'Compare Kalder vibration, thermal, laser displacement and gas sensors: key specifications, applications and datasheets.',
  alternates: { canonical: '/products' },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sensor range"
        title="Industrial sensors, specified to the micron."
        lead="Every Kalder sensor is designed, calibrated and tested in Porto, and streams natively into Kalder Sense."
        crumbs={[{ label: 'Sensors' }]}
      />
      <section className="section">
        <div className="container">
          <div className="table-wrap">
            <table className="ptable">
              <caption className="sr-only">Kalder sensor range compared</caption>
              <thead>
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Sensor</th>
                  <th scope="col">Family</th>
                  <th scope="col">Key specification</th>
                  <th scope="col">
                    <span className="sr-only">Datasheet</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.products.map((p) => (
                  <tr key={p.slug}>
                    <td className="ptable__code">{p.code}</td>
                    <th scope="row">
                      <Link href={`/products/${p.slug}`}>{p.name}</Link>
                    </th>
                    <td>{p.category}</td>
                    <td className="ptable__spec">
                      {p.specs[0].label}: {p.specs[0].value}
                    </td>
                    <td>
                      <Link href={`/products/${p.slug}`} className="ptable__link" aria-label={`${p.code} datasheet`}>
                        Datasheet →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
