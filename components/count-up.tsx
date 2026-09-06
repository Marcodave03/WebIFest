'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  to: number;
  /** Decimal places to render — 5.5M people needs one, 501 islands needs none. */
  decimals?: number;
  durationMs?: number;
  className?: string;
};

/**
 * Counts up once, when scrolled into view.
 *
 * The CRA version drove this with `setInterval(..., 0.1)`, which fired ~1000×/s
 * per counter and re-rendered the whole page each tick. This uses a single
 * rAF loop with an eased curve and stops as soon as it lands.
 */
export function CountUp({ to, decimals = 0, durationMs = 1900, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - t, 4);
          setValue(to * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, durationMs]);

  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}
