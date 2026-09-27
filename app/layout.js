import { Archivo, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE_NAME, SITE_URL, content, organizationJsonLd } from '@/lib/site';
import './globals.css';

const sans = Archivo({ variable: '--font-sans', subsets: ['latin'], display: 'swap' });
const mono = JetBrains_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['400', '500'], display: 'swap', preload: false });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Industrial sensors and condition monitoring`, template: `%s | ${SITE_NAME}` },
  description: content.heroSub,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_GB' },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: '#f3f2ee',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
