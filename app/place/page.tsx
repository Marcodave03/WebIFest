import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Coverflow } from '@/components/coverflow';
import { IslandIndex } from '@/components/island-index';
import { ISLANDS, STAYS } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Places',
  description:
    'Padar, Rinca, Taka Makassar, Kanawa, Sumba. Where to go in East Nusa Tenggara, what a sunset sail costs, and where to sleep afterwards.',
};

const INCLUDED = [
  'Scenic cruise along the Komodo coastline',
  'Welcome drinks and light snacks on deck',
  'Snorkel gear, masks and fins in every size',
  'Licensed captain and a crew of four',
];

export default function PlacesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <Image
          src="/img/explore.webp"
          alt="Coastline of Komodo National Park"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#010a0a_4%,rgba(1,10,10,0.55)_45%,rgba(1,10,10,0.35)_100%)]" />

        <div className="shell relative z-10 pb-24 pt-40">
          <p data-reveal className="eyebrow">
            Chapter 03 &middot; Where to go
          </p>
          <h1
            data-reveal
            style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
            className="display mt-7 max-w-5xl text-[clamp(3rem,11vw,8rem)] text-bone"
          >
            Explore Nusa Tenggara Timur and see places to{' '}
            <em className="italic text-ember">visit</em>
          </h1>
          <p
            data-reveal
            style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
            className="lede mt-9 max-w-xl"
          >
            Five islands you can reach in a week from Labuan Bajo, one boat that gets you
            between them, and the places worth checking into when you are done.
          </p>
        </div>
      </section>

      {/* Most visited */}
      <section className="shell py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <figure
            data-reveal="left"
            className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-bone/10"
          >
            <Image
              src="/img/padar.webp"
              alt="The three bays of Padar Island seen from the ridge"
              fill
              sizes="(max-width: 1024px) 92vw, 34rem"
              className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 to-transparent" />
            <figcaption className="absolute bottom-6 left-6 rounded-full bg-abyss/70 px-4 py-2 text-xs tracking-wide text-bone backdrop-blur-sm">
              8&deg;39&prime;S 119&deg;34&prime;E
            </figcaption>
          </figure>

          <div data-reveal="right">
            <p className="eyebrow">Most visited, 2023</p>
            <h2 className="display mt-6 text-[clamp(2.5rem,7vw,5rem)] text-bone">
              Padar <em className="italic text-ember">Island</em>
            </h2>
            <p className="lede mt-8 max-w-lg">
              Rugged hills, clear water and the most photographed viewpoint in Indonesia&apos;s
              Komodo National Park. Three bays meet below the ridge, each with a different
              colour of sand &mdash; white, grey and a pink that only really reads as pink in
              the first hour of light.
            </p>

            <dl className="mt-11 grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3">
              {[
                ['Climb', '~40 min'],
                ['Steps', '819'],
                ['Best light', '05:20'],
              ].map(([term, value]) => (
                <div key={term} className="border-t border-bone/10 pt-4">
                  <dt className="eyebrow text-mist">{term}</dt>
                  <dd className="display-tight mt-2 text-2xl text-bone">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* New section: the island index */}
      <section className="shell border-t border-bone/10 py-24 sm:py-32">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div data-reveal>
            <p className="eyebrow">The index</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.25rem)] text-bone">
              Five islands, one <em className="italic text-ember">week</em>
            </h2>
          </div>
          <p data-reveal className="body-copy max-w-sm">
            Point at a name to see it. Every one of these is reachable from Labuan Bajo except
            Sumba, which is a short flight south.
          </p>
        </div>

        <div data-reveal>
          <IslandIndex islands={ISLANDS} />
        </div>
      </section>

      {/* Trip reservation */}
      <section
        id="reservation"
        className="grain relative overflow-hidden border-y border-bone/10 bg-[radial-gradient(110%_130%_at_75%_10%,#12433d_0%,#04211f_50%,#010a0a_100%)] py-24 sm:py-32"
      >
        <div className="shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal="left">
            <p className="eyebrow">Trip reservation</p>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.25rem)] text-bone">
              Sunset cruise <em className="italic text-ember">adventure</em>
            </h2>

            <figure className="group relative mt-10 aspect-[4/5] overflow-hidden rounded-[2rem] border border-bone/10">
              <Image
                src="/img/boat-2.webp"
                alt="Catamaran anchored off the Komodo coast"
                fill
                sizes="(max-width: 1024px) 92vw, 28rem"
                className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
            </figure>
          </div>

          <div data-reveal="right" className="lg:pt-16">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="display text-[clamp(3rem,9vw,5rem)] text-bone">$99</span>
              <span className="text-sm text-mist">per person &middot; 4 hours &middot; daily 15:30</span>
            </div>

            <div className="mt-12 space-y-10">
              <div className="border-t border-bone/10 pt-6">
                <h3 className="eyebrow">Boat type</h3>
                <p className="body-copy mt-3 max-w-lg">
                  A luxury catamaran built for shade and stability &mdash; wide trampolines at
                  the bow, a covered saloon, and a swim ladder off the stern for the stop at
                  Kelor.
                </p>
              </div>

              <div className="border-t border-bone/10 pt-6">
                <h3 className="eyebrow">The evening</h3>
                <p className="body-copy mt-3 max-w-lg">
                  Cast off as the heat drops, anchor for a swim, then run west so the sun goes
                  down over the open Flores Sea rather than behind a headland. Back on the pier
                  by 19:30.
                </p>
              </div>

              <div className="border-t border-bone/10 pt-6">
                <h3 className="eyebrow">Included</h3>
                <ul className="mt-5 space-y-3">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-bone/90">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/event#tickets"
                className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember-soft"
              >
                Reserve a seat
                <span className="transition-transform duration-400 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
              <a
                href="#hotels"
                className="rounded-full border border-bone/25 px-8 py-4 text-sm font-medium text-bone/85 transition-[border-color,color] duration-300 hover:border-bone/70 hover:text-bone"
              >
                Where to stay
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stays */}
      <section id="hotels" className="overflow-hidden py-24 sm:py-32">
        <div className="shell mb-14 text-center">
          <p data-reveal className="eyebrow">
            Where to stay
          </p>
          <h2
            data-reveal
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
            className="display mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,7vw,5rem)] text-bone"
          >
            Hotels &amp; <em className="italic text-ember">islands</em>
          </h2>
          <p
            data-reveal
            style={{ '--reveal-delay': '150ms' } as React.CSSProperties}
            className="lede mx-auto mt-7 max-w-lg"
          >
            Five places, from a ninety-five-dollar bungalow on a reef to the one everybody has
            seen on a magazine cover. Drag, swipe or use the dots.
          </p>
        </div>

        <div data-reveal>
          <Coverflow slides={STAYS} />
        </div>
      </section>

      {/* Closing */}
      <section className="shell pb-32">
        <div
          data-reveal="scale"
          className="hairline flex flex-wrap items-center justify-between gap-8 pt-14"
        >
          <h2 className="display max-w-xl text-[clamp(1.75rem,4.5vw,3rem)] text-bone">
            Next: the festivals worth planning a trip around
          </h2>
          <Link
            href="/event"
            className="group inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember"
          >
            See events
            <span className="transition-transform duration-400 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
