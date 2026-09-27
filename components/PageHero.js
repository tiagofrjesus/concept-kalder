import Link from 'next/link';

export default function PageHero({ eyebrow, title, lead, crumbs = [] }) {
  return (
    <section className="phero">
      <div className="container">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="crumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              {crumbs.map((c) => (
                <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="phero__title">{title}</h1>
        {lead && <p className="phero__lead">{lead}</p>}
      </div>
    </section>
  );
}
