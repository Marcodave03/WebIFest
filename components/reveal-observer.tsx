'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * One observer for the whole site. Any server-rendered element can opt into a
 * scroll reveal with `data-reveal` (plus an optional `--reveal-delay`), so the
 * pages stay server components and ship no per-element JavaScript.
 *
 * Replaces the AOS dependency the CRA version loaded on every page.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
