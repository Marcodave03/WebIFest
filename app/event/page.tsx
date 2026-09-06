import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Explore Taka Makassar: a crescent sandbar in the Flores Sea, a manta cleaning station, and the day trip built around both.',
};

const FACTS = [
  ['Where', 'Flores Sea, Komodo NP'],
  ['Sandbar', 'Visible at low tide'],
  ['Manta season', 'Dec to Feb, peak'],
  ['From Labuan Bajo', '2 hrs by speedboat'],
];

const ACTIVITIES = [
  {
    n: '01',
    title: 'Drift with the mantas',
    body: 'Karang Makassar is a cleaning station, not an aquarium. You enter upstream, go flat, and let the current carry you over a line of rays with five-metre wingspans.',
  },
  {
    n: '02',
    title: 'Walk the crescent',
    body: 'The sandbar is roughly two hundred paces end to end and it disappears entirely at high water. Time it with the tide table, not with your booking.',
  },
  {
    n: '03',
    title: 'Snorkel the pink shelf',
    body: 'Crushed red organ-pipe coral gives the sand its colour and the shallow shelf its reef. Best visibility is before the afternoon boats arrive.',
  },
  {
    n: '04',
    title: 'Sunset at Kalong',
    body: 'On the way home, anchor off the mangroves and wait. At dusk, thousands of flying foxes lift off in a single ribbon toward Flores.',
  },
];

const SCHEDULE = [
  ['05:30', 'Depart Labuan Bajo pier', 'Coffee on board. The sea is flattest before eight.'],
  ['07:45', 'Padar ridge', 'Up for the viewpoint before the heat and the crowd arrive.'],
  ['10:15', 'Karang Makassar drift', 'Two passes over the cleaning station with a guide in the water.'],
  ['12:30', 'Taka Makassar', 'Lunch on the sandbar, then the shallow shelf for snorkelling.'],
  ['15:00', 'Pink Beach', 'Last swim, and the reef that gives the sand its colour.'],
  ['17:40', 'Kalong Island', 'Flying foxes at dusk, then the run back into the bay.'],
];

const TIERS = [
  {
    name: 'Day Pass',
    price: '$85',
    unit: 'per person',
    blurb: 'Shared speedboat, six stops, lunch on the sandbar.',
    perks: ['Shared boat, max 14 guests', 'Park entry and ranger fee', 'Lunch and drinking water', 'Snorkel gear included'],
    featured: false,
  },
  {
    name: 'Manta Drift',
    price: '$140',
    unit: 'per person',
    blurb: 'Day Pass plus two guided drifts at the cleaning station.',
    perks: [
      'Everything in the Day Pass',
      'Two guided drifts with an in-water guide',
      'Underwater photos, shared same day',
      'Wetsuit and reef-safe sunscreen',
    ],
    featured: true,
  },
  {
    name: 'Private Charter',
    price: '$690',
    unit: 'whole boat',
    blurb: 'Your own schedule, your own tide window, up to eight guests.',
    perks: ['Private boat for up to 8', 'Route and timings set by you', 'Crew of four plus a guide', 'Sunset extension at Kalong'],
    featured: false,
  },
];

const FAQ = [
  {
    q: 'Do I need to be able to dive?',
    a: 'No. Everything on the day trip is snorkelling. The manta drift is done on the surface, and the guide keeps a float line for anyone who wants to hold on.',
  },
  {
    q: 'When is the sandbar actually above water?',
    a: 'Taka Makassar is a tidal feature. It is fully exposed around low tide and gone at high water, so boats time the stop rather than the other way around. Ask for the tide window when you book.',
  },
  {
    q: 'Is it safe to swim with mantas?',
    a: 'Yes, with distance. Reef mantas are filter feeders and ignore people. The park rules are simple: stay three metres clear, never swim above one, and never touch.',
  },
  {
    q: 'What should I bring?',
    a: 'Reef-safe sunscreen, a rash guard, a dry bag and more water than you think. There is no shade on the sandbar and no shop anywhere on the route.',
  },
];

export default function EventPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <Image
          src="/img/ev1.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(115%_95%_at_50%_42%,rgba(1,10,10,0.28)_0%,rgba(1,10,10,0.86)_72%,#010a0a_100%)]" />

        <div className="shell relative z-10 pb-20 pt-36 text-center">
          <p data-reveal className="eyebrow">
            Komodo National Park &middot; Day trip
          </p>
          <h1
            data-reveal
            style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
            className="display mx-auto mt-7 max-w-5xl text-[clamp(3rem,12vw,8.5rem)] text-bone"
          >
            Taka <em className="italic text-ember">Makassar</em>
          </h1>
          <p
            data-reveal
            style={{ '--reveal-delay': '170ms' } as React.CSSProperties}
            className="lede mx-auto mt-8 max-w-xl"
          >
            A crescent of pink sand that only exists at low tide, sitting directly on top of the
            busiest manta cleaning station in the Flores Sea.
          </p>

          <div
            data-reveal
            style={{ '--reveal-delay': '250ms' } as React.CSSProperties}
            className="mt-11 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#tickets"
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember-soft"
            >
              Get a ticket
              <span className="transition-transform duration-400 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#schedule"
              className="rounded-full border border-bone/25 px-8 py-4 text-sm font-medium text-bone/85 transition-[border-color,color] duration-300 hover:border-bone/70 hover:text-bone"
            >
              See the day
            </a>
          </div>

          <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {FACTS.map(([term, value], i) => (
              <div
                key={term}
                data-reveal
                style={{ '--reveal-delay': `${300 + i * 80}ms` } as React.CSSProperties}
                className="border-t border-bone/15 pt-4 text-left"
              >
                <dt className="eyebrow text-mist">{term}</dt>
                <dd className="mt-2 text-sm text-bone/90">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* The place */}
      <section className="shell py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal="left">
            <p className="eyebrow">The place</p>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.25rem)] text-bone">
              A sandbar with a <em className="italic text-ember">timetable</em>
            </h2>
            <p className="lede mt-8">
              Taka Makassar is not really an island. It is a moving bank of crushed coral in the
              channel between Komodo and Flores, reshaped by every tide and washed over
              completely twice a day.
            </p>
            <p className="body-copy mt-6 max-w-xl">
              What makes it worth the two-hour boat ride is what sits underneath. The channel
              funnels plankton past a shallow shelf, and reef mantas queue there to be cleaned by
              wrasse. On a good December morning you can count twenty of them on a single drift,
              close enough to see the individual spot patterns that researchers use as
              fingerprints.
            </p>
            <p className="body-copy mt-6 max-w-xl">
              The park caps daily visitors and rangers move boats along, so the whole stop is a
              tight ninety minutes. Come with the tide, not with an itinerary.
            </p>
          </div>

          <div data-reveal="right" className="grid content-start gap-6 sm:grid-cols-2 lg:pt-4">
            {[
              ['Reef mantas counted on a good December drift', '20+'],
              ['Wingspan of an adult reef manta', '4.5 m'],
              ['Time the park allows per boat at the sandbar', '90 min'],
              ['Depth over the cleaning station', '8 m'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-bone/10 bg-deep/40 p-7 transition-colors duration-500 hover:border-lagoon/35"
              >
                <p className="display text-[clamp(2rem,4.5vw,2.75rem)] text-lagoon">{value}</p>
                <p className="body-copy mt-3 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact sheet: ev2 is a five-up collage, so it runs at its own width. */}
        <figure data-reveal className="mt-20">
          <div className="relative aspect-[1606/606] w-full overflow-hidden rounded-[1.5rem] border border-bone/10">
            <Image
              src="/img/ev2.webp"
              alt="Contact sheet: the sandbar, a green turtle, reef mantas, and visitors on the sand"
              fill
              sizes="(max-width: 1280px) 92vw, 76rem"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-4 text-xs tracking-wide text-mist">
            Shot over two mornings in the channel between Komodo and Flores.
          </figcaption>
        </figure>
      </section>

      {/* Activities */}
      <section className="border-y border-bone/10 bg-deep/40 py-24 sm:py-32">
        <div className="shell">
          <div className="max-w-2xl">
            <p data-reveal className="eyebrow">
              List of activities
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
              className="display mt-5 text-[clamp(2.25rem,6vw,4.25rem)] text-bone"
            >
              Four things worth getting <em className="italic text-ember">wet</em> for
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {ACTIVITIES.map((item, i) => (
              <article
                key={item.n}
                data-reveal
                style={{ '--reveal-delay': `${i * 100}ms` } as React.CSSProperties}
                className="group relative overflow-hidden rounded-[1.75rem] border border-bone/10 bg-ink p-8 transition-[transform,border-color] duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 hover:border-lagoon/40 sm:p-10"
              >
                <span className="display text-[4rem] leading-none text-bone/10 transition-colors duration-500 group-hover:text-lagoon/25">
                  {item.n}
                </span>
                <h3 className="display-tight mt-6 text-[1.75rem] text-bone">{item.title}</h3>
                <p className="body-copy mt-4">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="shell py-24 sm:py-32">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow">
            The day
          </p>
          <h2
            data-reveal
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
            className="display mt-5 text-[clamp(2.25rem,6vw,4.25rem)] text-bone"
          >
            Dawn to <em className="italic text-ember">dusk</em>, six stops
          </h2>
        </div>

        <ol className="mt-16">
          {SCHEDULE.map(([time, place, note], i) => (
            <li
              key={time}
              data-reveal
              style={{ '--reveal-delay': `${i * 70}ms` } as React.CSSProperties}
              className="group grid grid-cols-[auto_1fr] items-start gap-x-6 border-t border-bone/10 py-7 transition-colors duration-500 hover:border-ember/40 sm:grid-cols-[7rem_auto_1fr] sm:gap-x-10"
            >
              <span className="display-tight text-lg text-ember sm:text-2xl">{time}</span>

              <span aria-hidden className="hidden sm:block sm:pt-3">
                <span className="block h-2 w-2 rounded-full bg-bone/25 transition-[background-color,transform] duration-500 group-hover:scale-150 group-hover:bg-ember" />
              </span>

              <span className="col-start-2 sm:col-start-3">
                <span className="display-tight block text-[1.35rem] text-bone sm:text-[1.75rem]">
                  {place}
                </span>
                <span className="body-copy mt-2 block text-sm">{note}</span>
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Tickets */}
      <section
        id="tickets"
        className="grain relative overflow-hidden border-y border-bone/10 bg-[radial-gradient(110%_130%_at_25%_0%,#12433d_0%,#04211f_50%,#010a0a_100%)] py-24 sm:py-32"
      >
        <div className="shell">
          <div className="text-center">
            <p data-reveal className="eyebrow">
              Tickets
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
              className="display mx-auto mt-5 max-w-3xl text-[clamp(2.5rem,7vw,5rem)] text-bone"
            >
              Explore Taka <em className="italic text-ember">Makassar</em>
            </h2>
            <p
              data-reveal
              style={{ '--reveal-delay': '150ms' } as React.CSSProperties}
              className="lede mx-auto mt-7 max-w-lg"
            >
              Park entry and ranger fees are included in every tier. Boats leave the pier at
              05:30 and there is exactly one departure a day.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {TIERS.map((tier, i) => (
              <article
                key={tier.name}
                data-reveal
                style={{ '--reveal-delay': `${i * 110}ms` } as React.CSSProperties}
                className={`relative flex flex-col rounded-[1.75rem] border p-8 transition-[transform,border-color] duration-700 ease-[var(--ease-out-expo)] hover:-translate-y-2 sm:p-10 ${
                  tier.featured
                    ? 'border-ember/50 bg-ink shadow-[0_0_80px_-20px] shadow-ember/40'
                    : 'border-bone/10 bg-ink/60 hover:border-bone/30'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-ember px-4 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-ink">
                    Most booked
                  </span>
                )}

                <h3 className="display-tight text-[1.75rem] text-bone">{tier.name}</h3>
                <p className="body-copy mt-3 text-sm">{tier.blurb}</p>

                <p className="mt-8 flex items-baseline gap-2">
                  <span className="display text-[clamp(2.75rem,7vw,3.75rem)] text-bone">
                    {tier.price}
                  </span>
                  <span className="text-xs text-mist">{tier.unit}</span>
                </p>

                {/* Perforated edge, drawn in CSS rather than shipped as an image. */}
                <span
                  aria-hidden
                  className="mt-8 block h-px w-full bg-[repeating-linear-gradient(to_right,rgba(244,239,229,0.28)_0_6px,transparent_6px_12px)]"
                />

                <ul className="mt-7 flex-1 space-y-3.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm text-bone/85">
                      <span
                        aria-hidden
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          tier.featured ? 'bg-ember' : 'bg-lagoon'
                        }`}
                      />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href="#tickets"
                  className={`mt-10 inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold transition-[transform,background-color,border-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 ${
                    tier.featured
                      ? 'bg-ember text-ink hover:bg-ember-soft'
                      : 'border border-bone/25 text-bone hover:border-bone/60'
                  }`}
                >
                  Book {tier.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="shell py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div data-reveal="left">
            <p className="eyebrow">Before you book</p>
            <h2 className="display mt-5 text-[clamp(2.25rem,6vw,3.75rem)] text-bone">
              Common <em className="italic text-ember">questions</em>
            </h2>
          </div>

          <div data-reveal="right">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group border-t border-bone/10 py-6 last:border-b [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <span className="display-tight text-[1.25rem] text-bone transition-colors duration-300 group-hover:text-ember sm:text-[1.5rem]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-xl text-mist transition-transform duration-400 ease-[var(--ease-out-expo)] group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="body-copy mt-4 max-w-2xl">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="shell pb-32">
        <div
          data-reveal="scale"
          className="hairline flex flex-wrap items-center justify-between gap-8 pt-14"
        >
          <h2 className="display max-w-xl text-[clamp(1.75rem,4.5vw,3rem)] text-bone">
            Still deciding where to sleep afterwards?
          </h2>
          <Link
            href="/place#hotels"
            className="group inline-flex items-center gap-3 rounded-full bg-bone px-8 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember"
          >
            See the stays
            <span className="transition-transform duration-400 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
