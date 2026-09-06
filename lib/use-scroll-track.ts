'use client';

import { useEffect, useRef } from 'react';

export type ScrollTrack = {
  /** 0 at the top, 1 when the last chapter is fully read — the footer is excluded. */
  progress: number;
  /** 0 while the footer is off-screen, ramping to 1 as it comes into view. */
  tail: number;
};

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

/**
 * Page scroll, expressed in terms of the *content* rather than the document.
 *
 * Measuring against `scrollHeight` alone meant the entrance choreography peaked
 * while the reader was already looking at the footer. Subtracting the footer
 * gives the dragon its finale on the last chapter, and `tail` then says how far
 * into the footer we are so the canvas can get out of the way.
 *
 * Values are written to a ref and pushed to `onUpdate` from a rAF-throttled
 * listener, so nothing here triggers a React render.
 */
export function useScrollTrack(onUpdate?: (track: ScrollTrack) => void) {
  const track = useRef<ScrollTrack>({ progress: 0, tail: 0 });
  const callback = useRef(onUpdate);
  callback.current = onUpdate;

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const footerHeight = document.querySelector('footer')?.offsetHeight ?? 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const contentMax = Math.max(1, scrollable - footerHeight);
      const y = window.scrollY;

      track.current.progress = clamp(y / contentMax, 0, 1);
      track.current.tail = clamp((y - contentMax) / Math.max(1, footerHeight * 0.5), 0, 1);
      callback.current?.(track.current);
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', request);
      window.removeEventListener('resize', request);
    };
  }, []);

  return track;
}
