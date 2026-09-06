import Image from 'next/image';

/**
 * Infinite postcard band. The track holds two copies of the list and animates by
 * exactly -50%, so the loop is seamless without any JS.
 */
export function Marquee({
  items,
  direction = 'left',
  seconds = 48,
  className = '',
}: {
  items: { src: string; alt: string }[];
  direction?: 'left' | 'right';
  seconds?: number;
  className?: string;
}) {
  const track = [...items, ...items];

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max gap-5 will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animation: `marquee-${direction} ${seconds}s linear infinite`,
        }}
      >
        {track.map((item, i) => (
          <figure
            key={`${item.src}-${i}`}
            className="relative h-40 w-[13rem] shrink-0 overflow-hidden rounded-2xl border border-bone/10 bg-shelf/40 sm:h-52 sm:w-[17rem]"
          >
            <Image
              src={item.src}
              alt={i < items.length ? item.alt : ''}
              aria-hidden={i >= items.length}
              fill
              sizes="(max-width: 640px) 13rem, 17rem"
              className="object-cover opacity-70 transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] hover:scale-105 hover:opacity-100"
            />
          </figure>
        ))}
      </div>

      {/* Fade the band into the page at both ends. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
}
