import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="phero">
      <div className="container">
        <p className="eyebrow">Error 404</p>
        <h1 className="phero__title">Out of tolerance.</h1>
        <p className="phero__lead">The page you requested does not exist or has moved.</p>
        <Link href="/" className="btn btn--dark">
          Return home
        </Link>
      </div>
    </section>
  );
}
