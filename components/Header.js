import Link from 'next/link';
import { NAV } from '@/lib/site';
import Logo from './Logo';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="header__brand" aria-label="Kalder Precision, home">
          <Logo />
          <span>Kalder</span>
        </Link>
        <nav aria-label="Main" className="header__nav">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/contact" className="btn btn--dark header__cta">
          Request a quote
        </Link>
        <MobileNav items={NAV} />
      </div>
    </header>
  );
}
