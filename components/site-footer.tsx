import Image from 'next/image';
import Link from 'next/link';

const SOCIALS = [
  { src: '/img/sos1.webp', label: 'Instagram' },
  { src: '/img/sos2.webp', label: 'Facebook' },
  { src: '/img/sos3.webp', label: 'X' },
  { src: '/img/sos4.webp', label: 'YouTube' },
];

const COLUMNS = [
  {
    title: 'Explore',
    links: [
      { href: '/home', label: 'Discover NTT' },
      { href: '/place', label: 'Islands & stays' },
      { href: '/event', label: 'Events' },
      { href: '/', label: 'Meet the dragon' },
    ],
  },
  {
    title: 'Journeys',
    links: [
      { href: '/place#reservation', label: 'Sunset sail' },
      { href: '/place#hotels', label: 'Where to stay' },
      { href: '/event#tickets', label: 'Book a ticket' },
      { href: '/home#numbers', label: 'NTT in numbers' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative z-30 overflow-hidden border-t border-bone/10 bg-abyss">
      <div className="shell py-20 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="display text-[clamp(2.75rem,7vw,4rem)] text-bone">
              Nusa<span className="italic text-ember">Travel</span>
            </p>
            <p className="body-copy mt-5 max-w-xs">
              A field guide to the islands east of Bali — 500 of them, and the people who
              have called them home for a thousand years.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="eyebrow">{col.title}</h2>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-sand/80 transition-colors duration-300 hover:text-bone"
                    >
                      <span className="h-px w-0 bg-ember transition-all duration-300 group-hover:w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="eyebrow">Follow the route</h2>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-bone/15 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-ember/60 hover:bg-ember/10"
                >
                  <Image src={s.src} alt="" width={18} height={18} className="h-[18px] w-auto" />
                </a>
              ))}
            </div>
            <p className="body-copy mt-8 text-xs">
              Labuan Bajo · Ende · Kupang
              <br />
              Nusa Tenggara Timur, Indonesia
            </p>
          </div>
        </div>

        <div className="hairline mt-16 flex flex-col gap-3 pt-8 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nusa Travel. Made for WebIfest.</p>
          <p className="text-mist/70">Photography from across Flores, Komodo, Sumba and Timor.</p>
        </div>
      </div>

      {/* Oversized wordmark bleeding off the bottom edge. */}
      <p
        aria-hidden
        className="pointer-events-none select-none display -mb-[0.22em] whitespace-nowrap text-center text-[19vw] leading-none text-bone/[0.04]"
      >
        Nusa Tenggara
      </p>
    </footer>
  );
}
