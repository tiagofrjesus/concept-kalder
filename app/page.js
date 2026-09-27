import Link from 'next/link';
import Waveform from '@/components/Waveform';
import JsonLd from '@/components/JsonLd';
import { SITE_NAME, SITE_URL, content } from '@/lib/site';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  const { tagline, heroSub, metrics, products, platform, industries, caseStudy, quality } = content;

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Industrial sensing · Since 1998</p>
            <h1 className="hero__title">{tagline}</h1>
            <p className="hero__lead">{heroSub}</p>
            <div className="hero__actions">
              <Link href="/products" className="btn btn--dark">
                View sensors
              </Link>
              <Link href="/contact" className="btn btn--line">
                Talk to an engineer
              </Link>
            </div>
          </div>
          <Waveform />
        </div>
        <div className="container">
          <dl className="metrics">
            {metrics.map((m) => (
              <div key={m.label} className="metrics__item">
                <dt className="metrics__label">{m.label}</dt>
                <dd className="metrics__value">
                  {m.value}
                  {m.unit && <span className="metrics__unit">{m.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="products-h">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Sensor range</p>
            <h2 id="products-h" className="h2">Four measurement families, one data platform.</h2>
            <Link href="/products" className="section__link">
              Compare all sensors →
            </Link>
          </div>
          <ul className="products">
            {products.map((p) => (
              <li key={p.slug} className="product">
                <Link href={`/products/${p.slug}`} className="product__link">
                  <span className="product__top">
                    <span className="product__code">{p.code}</span>
                    <span className="product__cat">{p.category}</span>
                  </span>
                  <h3 className="product__name">{p.name}</h3>
                  <p className="product__summary">{p.summary}</p>
                  <dl className="product__specs">
                    {p.specs.slice(0, 3).map((s) => (
                      <div key={s.label}>
                        <dt>{s.label}</dt>
                        <dd>{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="product__more" aria-hidden="true">
                    Datasheet →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="platform" aria-labelledby="platform-h">
        <div className="container platform__grid">
          <div>
            <p className="eyebrow eyebrow--light">Software · {platform.name}</p>
            <h2 id="platform-h" className="h2">{platform.heading}</h2>
            <p className="platform__body">{platform.body}</p>
          </div>
          <ol className="platform__points">
            {platform.points.map((point, i) => (
              <li key={point}>
                <span className="platform__num">{String(i + 1).padStart(2, '0')}</span>
                {point}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="ind-h">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Industries</p>
            <h2 id="ind-h" className="h2">Where continuity is not optional.</h2>
            <Link href="/industries" className="section__link">
              All industries →
            </Link>
          </div>
          <ul className="industries">
            {industries.map((ind) => (
              <li key={ind.slug} className="industry">
                <Link href={`/industries#${ind.slug}`} className="industry__link">
                  <p className="industry__stat">{ind.stat}</p>
                  <h3 className="industry__name">{ind.name}</h3>
                  <p className="muted">{ind.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="case-h">
        <div className="container case">
          <div>
            <p className="eyebrow">Case study · {caseStudy.client}</p>
            <h2 id="case-h" className="h2">{caseStudy.title}</h2>
          </div>
          <div className="case__body">
            <h3 className="case__label">Challenge</h3>
            <p>{caseStudy.challenge}</p>
            <h3 className="case__label">Result</h3>
            <p>{caseStudy.result}</p>
            <dl className="case__figures">
              {caseStudy.figures.map((f) => (
                <div key={f.label} className="case__figure">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="quality" aria-labelledby="q-h">
        <div className="container quality__inner">
          <h2 id="q-h" className="quality__title">Certified for hazardous and safety-critical use</h2>
          <ul className="quality__list">
            {quality.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta" aria-labelledby="cta-h">
        <div className="container cta__inner">
          <h2 id="cta-h" className="h2">Specify a sensor with an engineer, not a sales script.</h2>
          <Link href="/contact" className="btn btn--accent">
            Start a technical enquiry
          </Link>
        </div>
      </section>

      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL }} />
    </>
  );
}
