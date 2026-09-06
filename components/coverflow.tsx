'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

export type Slide = {
  src: string;
  name: string;
  location: string;
  price: string;
  note: string;
};

/**
 * Coverflow gallery, hand-rolled to drop the Swiper dependency (~40 kB) the CRA
 * build pulled in for this one section.
 *
 * The track is a native scroll-snap container — so trackpad, touch, drag and
 * keyboard all work for free — and a rAF loop just skews each card by how far it
 * sits from the centre.
 */
export function Coverflow({ slides }: { slides: Slide[] }) {
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const paint = useCallback(() => {
    const el = track.current;
    if (!el) return;

    const mid = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;

    Array.from(el.children).forEach((child, i) => {
      const card = child as HTMLElement;
      const centre = card.offsetLeft + card.offsetWidth / 2;
      // Distance from centre, in card-widths.
      const d = (centre - mid) / card.offsetWidth;
      const clamped = Math.max(-2.2, Math.min(2.2, d));
      const abs = Math.abs(clamped);

      card.style.transform = `perspective(1400px) rotateY(${clamped * -26}deg) translateZ(${
        -abs * 120
      }px) scale(${1 - abs * 0.08})`;
      card.style.opacity = String(Math.max(0.25, 1 - abs * 0.42));
      card.style.zIndex = String(100 - Math.round(abs * 10));

      if (abs < nearestDist) {
        nearestDist = abs;
        nearest = i;
      }
    });

    setActive(nearest);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    let frame = 0;
    const request = () => {
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          paint();
        });
      }
    };

    // Start centred on the middle card rather than the first.
    const middle = el.children[Math.floor(el.children.length / 2)] as HTMLElement | undefined;
    if (middle) {
      el.scrollLeft = middle.offsetLeft + middle.offsetWidth / 2 - el.clientWidth / 2;
    }
    paint();

    el.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
    };
  }, [paint]);

  const scrollTo = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    el.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      <ul
        ref={track}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth px-[calc(50%-9rem)] pb-6 pt-4 [scrollbar-width:none] sm:px-[calc(50%-13rem)] [&::-webkit-scrollbar]:hidden"
        aria-label="Featured stays"
      >
        {slides.map((slide, i) => (
          <li
            key={slide.name}
            className="relative w-72 shrink-0 snap-center transition-[transform,opacity] duration-500 ease-out will-change-transform sm:w-[26rem]"
          >
            <figure className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-bone/15 bg-shelf">
              <Image
                src={slide.src}
                alt={slide.name}
                fill
                sizes="(max-width: 640px) 18rem, 26rem"
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/25 to-transparent" />

              <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <p className="eyebrow">{slide.location}</p>
                <h3 className="display-tight mt-2 text-[clamp(1.5rem,3.5vw,2rem)] text-bone">
                  {slide.name}
                </h3>
                <p className="body-copy mt-2 text-sm">{slide.note}</p>
                <p className="mt-4 inline-flex items-baseline gap-1.5 rounded-full bg-bone/10 px-4 py-2 text-sm backdrop-blur-sm">
                  <span className="font-semibold text-bone">{slide.price}</span>
                  <span className="text-mist">/ night</span>
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-3">
        {slides.map((slide, i) => (
          <button
            key={slide.name}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Show ${slide.name}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-500 ease-[var(--ease-out-expo)] ${
              i === active ? 'w-10 bg-ember' : 'w-4 bg-bone/25 hover:bg-bone/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
