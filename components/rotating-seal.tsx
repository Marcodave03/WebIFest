'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/**
 * The counter-rotating emblem from the original site, kept but re-tuned:
 * rotation is driven by how far the seal has travelled through the viewport
 * rather than by raw page offset, so it always completes its turn on screen —
 * and the loop only runs while the section is actually visible.
 */
export function RotatingSeal({ children }: { children: React.ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const outer = useRef<HTMLImageElement>(null);
  const inner = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const node = wrap.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let visible = false;

    const paint = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      // 0 when the seal enters from the bottom, 1 when it exits at the top.
      const travel = 1 - (rect.top + rect.height / 2) / (window.innerHeight + rect.height / 2);
      const turn = travel * 200;
      if (outer.current) outer.current.style.transform = `rotate(${turn}deg)`;
      if (inner.current) inner.current.style.transform = `rotate(${-turn * 1.35}deg)`;
    };

    const request = () => {
      if (visible && !frame) frame = requestAnimationFrame(paint);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        request();
      },
      { rootMargin: '25% 0px' },
    );

    io.observe(node);
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
    };
  }, []);

  return (
    <div ref={wrap} className="relative mx-auto grid aspect-square w-full max-w-[34rem] place-items-center">
      <Image
        ref={outer}
        src="/img/outside.webp"
        alt=""
        width={700}
        height={700}
        sizes="(max-width: 768px) 90vw, 34rem"
        className="absolute inset-0 h-full w-full will-change-transform"
      />
      <Image
        ref={inner}
        src="/img/inside.webp"
        alt=""
        width={550}
        height={550}
        sizes="(max-width: 768px) 70vw, 26rem"
        className="absolute h-[76%] w-[76%] will-change-transform"
      />
      <div className="relative z-10 grid aspect-square w-[46%] place-items-center rounded-full bg-abyss/70 p-4 text-center backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
