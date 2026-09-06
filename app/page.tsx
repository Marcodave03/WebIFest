import Link from 'next/link';
import { EntranceBackdrop, KomodoStage, ScrollCue } from '@/components/komodo-stage';

export const metadata = {
  title: 'Nusa Travel — East Nusa Tenggara',
  description:
    'Scroll into the Flores Sea. Five hundred islands, a thousand cultures, and the last wild Komodo dragons on earth.',
};

const CHAPTERS = [
  {
    index: '01',
    align: 'left' as const,
    eyebrow: 'Latitude 8°S · The Flores Sea',
    title: (
      <>
        Explore <em className="italic text-ember">East Nusa</em>
        <br />
        Tenggara with us
      </>
    ),
    body: 'Past Bali, past Lombok, past the last ferry on the map — an archipelago of five hundred islands where the water turns the colour of glass and the hills go pink at six in the evening.',
  },
  {
    index: '02',
    align: 'right' as const,
    eyebrow: 'Varanus komodoensis',
    title: (
      <>
        The last
        <br />
        <em className="italic text-ember">dragons</em>
      </>
    ),
    body: 'Three metres of muscle, a bite that has not changed in four million years, and a range that covers exactly five islands on this planet. Nowhere else. Only here.',
  },
  {
    index: '03',
    align: 'left' as const,
    eyebrow: 'Flores · Sumba · Timor · Alor',
    title: (
      <>
        A coastline
        <br />
        that keeps <em className="italic text-ember">going</em>
      </>
    ),
    body: 'Pink sand at Padar, manta highways at Karang Makassar, ikat looms in Sumba that take a weaver eight months to finish. You will not run out of coast before you run out of time.',
  },
];

export default function LandingPage() {
  return (
    <>
      <EntranceBackdrop />
      <KomodoStage />

      <div className="relative z-20">
        {CHAPTERS.map((chapter, i) => (
          <section
            key={chapter.index}
            className="shell flex min-h-[100svh] items-center py-28"
            aria-labelledby={`chapter-${chapter.index}`}
          >
            <div
              className={`w-full max-w-2xl ${
                chapter.align === 'right' ? 'ml-auto text-left md:text-right' : ''
              }`}
            >
              <div
                data-reveal={chapter.align === 'right' ? 'right' : 'left'}
                className={`flex items-center gap-3 ${
                  chapter.align === 'right' ? 'md:justify-end' : ''
                }`}
              >
                <span className="font-sans text-[0.6875rem] font-bold tracking-[0.28em] text-bone/35">
                  {chapter.index}
                </span>
                <span className="h-px w-8 bg-ember/70" />
                <span className="eyebrow">{chapter.eyebrow}</span>
              </div>

              <h1
                id={`chapter-${chapter.index}`}
                data-reveal={chapter.align === 'right' ? 'right' : 'left'}
                style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
                className="display mt-6 text-[clamp(2.5rem,7.5vw,5.25rem)] text-bone [text-shadow:0_2px_40px_rgba(1,10,10,0.65)]"
              >
                {chapter.title}
              </h1>

              <p
                data-reveal={chapter.align === 'right' ? 'right' : 'left'}
                style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
                className="lede mt-7 max-w-md md:inline-block"
              >
                {chapter.body}
              </p>

              {i === 0 && (
                <div
                  data-reveal
                  style={{ '--reveal-delay': '280ms' } as React.CSSProperties}
                  className="mt-9 flex flex-wrap items-center gap-4"
                >
                  <Link
                    href="/home"
                    className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember"
                  >
                    Begin the guide
                    <span className="transition-transform duration-400 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                  <Link
                    href="/place"
                    className="rounded-full border border-bone/25 px-7 py-4 text-sm font-medium text-bone/85 transition-[border-color,color] duration-300 hover:border-bone/70 hover:text-bone"
                  >
                    See the islands
                  </Link>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* Closing chapter — the dragon swims straight at the reader here. */}
        <section className="shell flex min-h-[100svh] flex-col items-center justify-start pb-[38vh] pt-[18vh] text-center">
          <span data-reveal className="eyebrow">
            Chapter 04 · Your turn
          </span>
          <h2
            data-reveal
            style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
            className="display mt-7 max-w-4xl text-[clamp(3rem,11vw,7.5rem)] text-bone"
          >
            Come and <em className="italic text-ember">meet it</em>
          </h2>
          <p
            data-reveal
            style={{ '--reveal-delay': '170ms' } as React.CSSProperties}
            className="lede mt-8 max-w-lg"
          >
            Boats leave Labuan Bajo at dawn. The guide below has the islands, the stays and
            the festivals — everything you need to pick a date.
          </p>
          <div
            data-reveal
            style={{ '--reveal-delay': '250ms' } as React.CSSProperties}
            className="mt-11 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/home"
              className="group inline-flex items-center gap-3 rounded-full bg-ember px-8 py-4 text-sm font-semibold text-ink transition-[transform,background-color] duration-400 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:bg-ember-soft"
            >
              Enter the guide
              <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/event"
              className="rounded-full border border-bone/25 px-8 py-4 text-sm font-medium text-bone/85 transition-[border-color,color] duration-300 hover:border-bone/70 hover:text-bone"
            >
              Upcoming events
            </Link>
          </div>
        </section>
      </div>

      <ScrollCue />
    </>
  );
}
