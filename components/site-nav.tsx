'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const LINKS = [
  { href: '/', label: 'Entrance', index: '01' },
  { href: '/home', label: 'Discover', index: '02' },
  { href: '/place', label: 'Places', index: '03' },
  { href: '/event', label: 'Events', index: '04' },
];

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  // Close the overlay whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Hide the bar while scrolling down, bring it back on the way up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 220 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock the page and wire Escape while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,backdrop-filter] duration-500 ease-[var(--ease-out-expo)] ${
          hidden && !open ? '-translate-y-full' : 'translate-y-0'
        } ${
          scrolled && !open
            ? 'bg-ink/70 backdrop-blur-xl border-b border-bone/10'
            : 'border-b border-transparent'
        }`}
      >
        {/* Scrim for the un-scrolled state, where the bar sits over bright artwork. */}
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-abyss/85 via-abyss/40 to-transparent transition-opacity duration-500 ${
            scrolled || open ? 'opacity-0' : 'opacity-100'
          }`}
        />

        <nav className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-baseline gap-2 leading-none"
            aria-label="Nusa Travel — home"
          >
            <span className="display-tight text-[1.35rem] text-bone">Nusa</span>
            <span className="display-tight text-[1.35rem] text-ember italic">Travel</span>
            <span className="ml-1 hidden h-1.5 w-1.5 rounded-full bg-lagoon transition-transform duration-500 group-hover:scale-150 sm:block" />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 ${
                      active ? 'text-ink' : 'text-sand/75 hover:text-bone'
                    }`}
                  >
                    {active && (
                      <span className="absolute inset-0 -z-10 rounded-full bg-bone" aria-hidden />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/event"
              className="hidden rounded-full bg-ember px-5 py-2.5 text-[0.8125rem] font-semibold text-ink transition-[transform,background-color] duration-300 hover:-translate-y-0.5 hover:bg-ember-soft sm:inline-block"
            >
              Plan a trip
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="nav-overlay"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative z-50 grid h-11 w-11 place-items-center rounded-full border border-bone/20 text-bone transition-colors duration-300 hover:border-bone/50 md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-400 ease-[var(--ease-out-expo)] ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 h-px w-full bg-current transition-transform duration-400 ease-[var(--ease-out-expo)] ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        id="nav-overlay"
        hidden={!open}
        className="fixed inset-0 z-40 bg-abyss/95 backdrop-blur-2xl md:hidden"
      >
        <ul className="shell flex h-full flex-col justify-center gap-2">
          {LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: `${80 + i * 60}ms` }}
              className={`transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${
                open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              <Link
                href={link.href}
                className="flex items-baseline gap-4 border-b border-bone/10 py-4"
              >
                <span className="font-sans text-[0.6875rem] tracking-[0.28em] text-lagoon">
                  {link.index}
                </span>
                <span
                  className={`display-tight text-[clamp(2.25rem,11vw,3.5rem)] ${
                    pathname === link.href ? 'text-ember italic' : 'text-bone'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
          <li className="pt-8">
            <Link
              href="/event"
              className="inline-block rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-ink"
            >
              Plan a trip
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
