import Link from 'next/link';
import { NAV, content } from '@/lib/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <Logo size={26} />
            <span>Kalder Precision</span>
          </div>
          <p className="footer__muted">Industrial sensors and condition monitoring. Designed and built in Porto since 1998.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer__links">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <address className="footer__muted">{content.contact.address}</address>
          <a href={`mailto:${content.contact.email}`} className="footer__mail">
            {content.contact.email}
          </a>
        </div>
      </div>
      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} Kalder Precision</p>
        <p>Design concept. Kalder is a fictional company; all names, figures and products are illustrative.</p>
      </div>
    </footer>
  );
}
