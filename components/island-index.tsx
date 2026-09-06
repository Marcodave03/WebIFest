'use client';

import Image from 'next/image';
import { useState } from 'react';

export type Island = {
  name: string;
  region: string;
  known: string;
  image: string;
};

/**
 * An editorial index: the list is the interface, and the image on the right
 * swaps to whichever row the reader is pointing at (or has tabbed to).
 */
export function IslandIndex({ islands }: { islands: Island[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <ul className="border-t border-bone/10">
        {islands.map((island, i) => (
          <li key={island.name}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-current={i === active}
              className="group flex w-full items-center gap-5 border-b border-bone/10 py-6 text-left transition-colors duration-500 sm:gap-8 sm:py-8"
            >
              <span className="font-sans text-[0.625rem] font-bold tracking-[0.28em] text-mist/60">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className={`display-tight block text-[clamp(1.75rem,5vw,3rem)] transition-colors duration-500 ${
                    i === active ? 'text-ember' : 'text-bone'
                  }`}
                >
                  {island.name}
                </span>
                <span className="mt-1 block text-xs tracking-wide text-mist">
                  {island.region} — {island.known}
                </span>
              </span>

              {/* Thumbnail for narrow screens, where the big panel is hidden. */}
              <span className="relative hidden h-16 w-20 shrink-0 overflow-hidden rounded-lg sm:block lg:hidden">
                <Image src={island.image} alt="" fill sizes="5rem" className="object-cover" />
              </span>

              <span
                className={`shrink-0 text-lg transition-[transform,color] duration-500 ease-[var(--ease-out-expo)] ${
                  i === active ? 'translate-x-0 text-ember' : '-translate-x-2 text-mist/40'
                }`}
                aria-hidden
              >
                →
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="sticky top-28 hidden aspect-[4/5] overflow-hidden rounded-[2rem] border border-bone/10 bg-shelf lg:block">
        {islands.map((island, i) => (
          <Image
            key={island.name}
            src={island.image}
            alt={island.name}
            fill
            sizes="34rem"
            className={`object-cover transition-[opacity,transform] duration-[1100ms] ease-[var(--ease-out-expo)] ${
              i === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
        <p className="pointer-events-none absolute bottom-6 left-6 right-6 body-copy text-sm text-bone/90">
          {islands[active].known}
        </p>
      </div>
    </div>
  );
}
