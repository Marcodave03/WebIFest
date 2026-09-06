import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { SiteNav } from '@/components/site-nav';
import { SiteFooter } from '@/components/site-footer';
import { RevealObserver } from '@/components/reveal-observer';
import './globals.css';

// Fraunces carries the editorial voice; the soft/wonk axes keep big headlines
// from reading like a stock serif.
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nusatravel.example'),
  title: {
    default: 'Nusa Travel — East Nusa Tenggara',
    template: '%s · Nusa Travel',
  },
  description:
    'Five hundred islands, one thousand cultures, and the last wild dragons on earth. A field guide to East Nusa Tenggara, Indonesia.',
  openGraph: {
    title: 'Nusa Travel — East Nusa Tenggara',
    description:
      'Five hundred islands, one thousand cultures, and the last wild dragons on earth.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#02100f',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealObserver />
      </body>
    </html>
  );
}
