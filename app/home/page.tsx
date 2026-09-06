import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ParallaxHero } from '@/components/parallax-hero';
import { RotatingSeal } from '@/components/rotating-seal';
import { Marquee } from '@/components/marquee';
import { CountUp } from '@/components/count-up';
import { HIGHLIGHTS, ITINERARY, NUMBERS, PILLARS, POSTCARDS, VOICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Discover',
  description:
    'Five hundred islands, a thousand living cultures and 5.5 million people. What East Nusa Tenggara actually is, and how to plan a week in it.',
};

export default function DiscoverPage() {
  return (
    <>
      <ParallaxHero />

      {/* Opening statement */}
      <section className="shell py-28 sm:py-36">
        <p data-reveal className="eyebrow">
          The province
        </p>
        <h2
          data-reveal
          style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          className="display mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5rem)] text-bone"
        >
          Everything east of Bali that the brochures <em className="italic text-ember">skip</em>
        </h2>
        <p
          data-reveal
          style={{ '--reveal-delay': '150ms' } as React.CSSProperties}
          className="lede mt-8 max-w-2xl"
        >
          East Nusa Tenggara is the driest, most scattered and least visited province in
          Indonesia &mdash; which is exactly why it still looks like this. Here is what you are
          actually looking at.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <article
              key={pillar.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
              className="grain group relative overflow-hidden rounded-[1.75rem] border border-bone/10 bg-gradient-to-b from-shelf/60 to-deep/40 p-8 transition-[transform,border-color] duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-2 hover:border-ember/40"
            >
              <div className="relative mx-auto h-44 w-full">
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 24rem"
                  className="object-contain transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
              </div>
              <h3 className="display-tight mt-8 text-[1.65rem] text-bone">{pillar.title}</h3>
              <p className="body-copy mt-3">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Counter-rotating seal, carried over from the original build */}
      <section className="shell grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">
        <div data-reveal="left">
          <p className="eyebrow">People</p>
          <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.25rem)] text-bone">
            Home to <em className="italic text-ember">diverse</em> ethnic groups and languages
          </h2>
          <p className="lede mt-7 max-w-md">
            More than seventy languages are still spoken across these islands &mdash; Manggarai,
            Lamaholot, Kambera, Dawan, Rote. Several are held by fewer than a thousand speakers,
            and every one of them is somebody&apos;s first language.
          </p>
        </div>

        <div data-reveal="scale">
          <RotatingSeal>
            <p className="display-tight text-[clamp(1rem,2.4vw,1.35rem)] leading-tight text-bone">
              70+ languages, one archipelago
            </p>
          </RotatingSeal>
        </div>
      </section>

      {/* Explore the destination */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <div data-reveal="left" className="order-2 lg:order-1">
            <figure className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-bone/10 [animation:drift_9s_ease-in-out_infinite] motion-reduce:animate-none">
              <Image
                src="/img/home4.webp"
                alt="Snorkeller drifting above a reef manta at Karang Makassar"
                fill
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/50 to-transparent" />
            </figure>
          </div>

          <div data-reveal="right" className="order-1 lg:order-2">
            <p className="eyebrow">Getting oriented</p>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.25rem)] text-bone">
              Explore the <em className="italic text-ember">destination</em>
            </h2>
            <p className="lede mt-7 max-w-lg">
              From the enchanting shores of Flores to the legendary Komodo dragons, the province
              spreads over a thousand kilometres of sea. Most travellers fly into Labuan Bajo, but
              the interior &mdash; Bajawa, Moni, Ende &mdash; is where the trip usually turns into
              a story.
            </p>

            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-7">
              {[
                ['Best months', 'April to October, dry season'],
                ['Fly into', 'Labuan Bajo (LBJ) or Kupang (KOE)'],
                ['Get around', 'Liveaboard, ferry, Trans-Flores road'],
                ['Time zone', 'WITA, UTC+8'],
              ].map(([term, value]) => (
                <div key={term} className="border-t border-bone/10 pt-4">
                  <dt className="eyebrow text-mist">{term}</dt>
                  <dd className="mt-2 text-sm text-bone/90">{value}</dd>
                </div>
              ))}
            </dl>

            <Link
              href="/place"
              className="group mt-11 inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember"
            >
              See every island
              <span className="transition-transform duration-400 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Three highlights, replacing the placeholder cards */}
      <section className="shell py-24 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div data-reveal>
            <p className="eyebrow">Start here</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,6vw,4.25rem)] text-bone">
              Three that earn the <em className="italic text-ember">flight</em>
            </h2>
          </div>
          <p data-reveal className="body-copy max-w-sm">
            If you only have a week, these are the three that most people build the rest of the
            trip around.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((card, i) => (
            <article
              key={card.title}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
              className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-bone/10 bg-deep/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 24rem"
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-abyss/70 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-lagoon backdrop-blur-sm">
                  {card.kicker}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="display-tight text-[1.75rem] text-bone">{card.title}</h3>
                <p className="body-copy mt-3 flex-1">{card.body}</p>
                <p className="hairline mt-6 pt-4 text-xs tracking-wide text-mist">{card.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* New section: a worked seven-day itinerary */}
      <section className="relative border-y border-bone/10 bg-deep/40 py-24 sm:py-32">
        <div className="shell">
          <div className="max-w-2xl">
            <p data-reveal className="eyebrow">
              A worked example
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
              className="display mt-5 text-[clamp(2.25rem,6vw,4.25rem)] text-bone"
            >
              Seven days, one <em className="italic text-ember">line</em> through the islands
            </h2>
          </div>

          <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] border border-bone/10 bg-bone/10 md:grid-cols-4">
            {ITINERARY.map((stop, i) => (
              <li
                key={stop.day}
                data-reveal
                style={{ '--reveal-delay': `${i * 90}ms` } as React.CSSProperties}
                className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-shelf/50"
              >
                <span className="display text-[3.5rem] leading-none text-bone/10 transition-colors duration-500 group-hover:text-ember/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="eyebrow mt-6">{stop.day}</p>
                <h3 className="display-tight mt-2 text-[1.5rem] text-bone">{stop.place}</h3>
                <p className="body-copy mt-3 text-sm">{stop.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Postcard bands, the marquee from the original build */}
      <section
        className="overflow-hidden py-24 sm:py-32"
        aria-label="Photographs from the province"
      >
        <div className="shell mb-12">
          <p data-reveal className="eyebrow">
            Field notes
          </p>
          <h2 data-reveal className="display mt-5 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] text-bone">
            Sent back from the <em className="italic text-ember">boat</em>
          </h2>
        </div>

        <div className="-rotate-2 space-y-5">
          <Marquee items={POSTCARDS} direction="left" seconds={54} />
          <Marquee items={[...POSTCARDS].reverse()} direction="right" seconds={62} />
        </div>
      </section>

      {/* Numbers */}
      <section id="numbers" className="shell py-24 sm:py-32">
        <h2
          data-reveal
          className="display mx-auto max-w-4xl text-center text-[clamp(2rem,5.5vw,3.75rem)] text-bone"
        >
          Diverse culture, vibrant people
        </h2>

        <div className="mt-20 grid gap-12 sm:grid-cols-3">
          {NUMBERS.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              style={{ '--reveal-delay': `${i * 120}ms` } as React.CSSProperties}
              className="text-center"
            >
              <Image
                src={stat.icon}
                alt=""
                width={140}
                height={140}
                className="mx-auto h-28 w-auto sm:h-32"
              />
              <p className="display mt-7 text-[clamp(3rem,8vw,4.5rem)] tabular-nums text-bone">
                <CountUp to={stat.value} decimals={stat.decimals} />
                <span className="text-ember">{stat.suffix}</span>
              </p>
              <p className="eyebrow mt-3 text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New section: traveller voices */}
      <section className="shell py-24 sm:py-32">
        <p data-reveal className="eyebrow">
          Voices
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VOICES.map((voice, i) => (
            <figure
              key={voice.name}
              data-reveal
              style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
              className="flex flex-col rounded-[1.5rem] border border-bone/10 bg-deep/40 p-8"
            >
              <span aria-hidden className="display text-[3rem] leading-[0.5] text-ember/50">
                &ldquo;
              </span>
              <blockquote className="lede mt-6 flex-1 text-[1.0625rem]">{voice.quote}</blockquote>
              <figcaption className="hairline mt-7 pt-5">
                <span className="block text-sm font-semibold text-bone">{voice.name}</span>
                <span className="mt-1 block text-xs text-mist">{voice.from}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Closing call to action */}
      <section className="shell pb-32 pt-8">
        <div
          data-reveal="scale"
          className="grain relative overflow-hidden rounded-[2rem] border border-bone/10 bg-[radial-gradient(120%_150%_at_20%_0%,#12433d_0%,#04211f_55%,#010a0a_100%)] px-8 py-20 text-center sm:px-16"
        >
          <p className="eyebrow">Ready when you are</p>
          <h2 className="display mx-auto mt-6 max-w-3xl text-[clamp(2.25rem,6.5vw,4.5rem)] text-bone">
            Unlock the secrets of <em className="italic text-ember">NTT</em>
          </h2>
          <p className="lede mx-auto mt-7 max-w-xl">
            Pick an island, pick a week. The places page has the stays and the boats; the events
            page has the dates worth planning around.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <Link
              href="/place"
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember-soft"
            >
              Browse places
              <span className="transition-transform duration-400 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/event"
              className="rounded-full border border-bone/25 px-8 py-4 text-sm font-medium text-bone/85 transition-[border-color,color] duration-300 hover:border-bone/70 hover:text-bone"
            >
              What&apos;s on
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
