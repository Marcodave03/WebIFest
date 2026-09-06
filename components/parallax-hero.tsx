'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * Layered scroll parallax for the Discover hero.
 *
 * The CRA original animated `top` on six <img> elements inside a raw scroll
 * handler, which forced a layout pass on every wheel event. This writes a single
 * `translate3d` per layer from one rAF-throttled handler, so the whole effect
 * stays on the compositor.
 */
const LAYERS = [
  { src: '/img/para6.webp', depth: 0.5, tilt: 26 },
  { src: '/img/para2.webp', depth: 0.38, tilt: 18 },
  { src: '/img/para3.webp', depth: 0.26, tilt: 12 },
  { src: '/img/para4.webp', depth: 0.14, tilt: 7 },
];

const FOREGROUND = { src: '/img/para5.webp', depth: 0.02, tilt: 3 };

export function ParallaxHero() {
  const root = useRef<HTMLElement>(null);
  const title = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const layers = Array.from(node.querySelectorAll<HTMLElement>('[data-depth]'));
    let pointerX = 0;
    let pointerY = 0;
    let frame = 0;

    const paint = () => {
      frame = 0;
      const y = window.scrollY;
      const progress = Math.min(y / window.innerHeight, 1);

      for (const layer of layers) {
        const depth = Number(layer.dataset.depth);
        const tilt = Number(layer.dataset.tilt);
        layer.style.transform = `translate3d(${pointerX * tilt}px, ${
          y * depth + pointerY * tilt * 0.5
        }px, 0) scale(${1 + depth * 0.06})`;
      }

      if (title.current) {
        title.current.style.transform = `translate3d(${pointerX * 34}px, ${y * 0.34}px, 0)`;
        title.current.style.opacity = String(Math.max(0, 1 - progress * 1.5));
        title.current.style.letterSpacing = `${-0.035 + progress * 0.06}em`;
      }
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onPointer = (e: PointerEvent) => {
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
      // The page background is a radial glow that tracks the cursor.
      node.style.setProperty('--x', `${(pointerX + 0.5) * 100}%`);
      node.style.setProperty('--y', `${(pointerY + 0.5) * 100}%`);
      request();
    };

    paint();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return (
    <section
      ref={root}
      className="relative h-[100svh] w-full overflow-hidden bg-abyss [--x:50%] [--y:50%]"
      aria-label="East Nusa Tenggara coastline"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),#0a3330_0%,#010a0a_65%)]"
      />

      {LAYERS.map((layer, i) => (
        <div
          key={layer.src}
          data-depth={layer.depth}
          data-tilt={layer.tilt}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={layer.src}
            alt=""
            fill
            priority={i < 2}
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      ))}

      <h1
        ref={title}
        className="display absolute inset-x-0 top-[26vh] z-[5] px-4 text-center text-[clamp(3.5rem,15vw,13rem)] text-bone will-change-transform [text-shadow:0_10px_60px_rgba(1,10,10,0.55)]"
      >
        Nusa <em className="italic text-ember-soft">Travel</em>
      </h1>

      <div
        data-depth={FOREGROUND.depth}
        data-tilt={FOREGROUND.tilt}
        className="absolute inset-0 z-10 will-change-transform"
      >
        <Image
          src={FOREGROUND.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>

      {/* Blend the hero into the page below it. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-gradient-to-t from-ink to-transparent"
      />

      <p className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 font-sans text-[0.625rem] font-semibold tracking-[0.32em] text-bone/45">
        SCROLL TO EXPLORE
      </p>
    </section>
  );
}
