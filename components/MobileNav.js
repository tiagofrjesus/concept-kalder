'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function MobileNav({ items }) {
  const pathname = usePathname();
  // Remember the path the menu was opened on, so navigating closes it without an effect.
  const [openOn, setOpenOn] = useState(null);
  const open = openOn === pathname;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpenOn(null);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="mnav">
      <button
        type="button"
        className="mnav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpenOn(open ? null : pathname)}
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <span className="mnav__bar" aria-hidden="true" />
        <span className="mnav__bar" aria-hidden="true" />
      </button>
      <nav id="mobile-menu" aria-label="Mobile" className="mnav__panel" hidden={!open}>
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
