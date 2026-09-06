'use client';

import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useScrollTrack, type ScrollTrack } from '@/lib/use-scroll-track';

// ~600 kB of three.js + the 1.4 MB model stay out of the initial payload; they
// load once the page is interactive and the device says it can afford them.
const KomodoScene = dynamic(() => import('./komodo-scene'), { ssr: false });

type Nav = Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };

function deviceCanAfford3D() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;

  const nav = navigator as Nav;
  if (nav.connection?.saveData) return false;
  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory < 3) return false;
  if (nav.hardwareConcurrency && nav.hardwareConcurrency < 4) return false;

  return true;
}

export function KomodoStage() {
  const [mounted, setMounted] = useState(false);
  const layer = useRef<HTMLDivElement>(null);

  // Dissolve the dragon as the footer arrives, so it never sits over the
  // footer's links. The footer also outranks this layer in z-order; the fade
  // just stops the model from being sliced off at the footer's top edge.
  const onScroll = useCallback((track: ScrollTrack) => {
    if (layer.current) layer.current.style.opacity = String(1 - track.tail);
  }, []);

  useScrollTrack(onScroll);

  useEffect(() => {
    if (!deviceCanAfford3D()) return;

    // Wait for the browser to go quiet before pulling in three.js.
    const mount = () => setMounted(true);
    const idleApi = window.requestIdleCallback;

    if (idleApi) {
      const handle = idleApi(mount, { timeout: 2200 });
      return () => window.cancelIdleCallback(handle);
    }

    const handle = window.setTimeout(mount, 900);
    return () => window.clearTimeout(handle);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 z-10 transition-opacity duration-[1600ms] ease-[var(--ease-out-expo)] ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div ref={layer} className="h-full w-full">
        {mounted && <KomodoScene />}
      </div>
    </div>
  );
}

/** Scroll cue that retires itself once the reader has taken the hint. */
export function ScrollCue() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const onScroll = () => setGone(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 transition-opacity duration-700 md:flex ${
        gone ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <span className="font-sans text-[0.625rem] font-semibold tracking-[0.3em] text-bone/40">
        SCROLL
      </span>
      <span className="relative block h-12 w-px overflow-hidden bg-bone/15">
        <span className="absolute inset-x-0 top-0 block h-1/2 bg-ember [animation:scroll-hint_2.4s_var(--ease-in-out-quint)_infinite]" />
      </span>
    </div>
  );
}

/** Dimmed ambient loop behind everything on the entrance page. */
export function EntranceBackdrop() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const nav = navigator as Nav;
    if (nav.connection?.saveData) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setPlay(true);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-abyss">
      {play ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/video/entrance-poster.jpg"
          className="h-full w-full scale-105 object-cover opacity-60"
        >
          <source src="/video/entrance.webm" type="video/webm" />
          <source src="/video/entrance.mp4" type="video/mp4" />
        </video>
      ) : (
        <div
          className="h-full w-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: 'url(/video/entrance-poster.jpg)' }}
        />
      )}
      {/* Teal wash + vignette so white type always clears contrast over the footage. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_35%,rgba(4,33,31,0.45)_0%,rgba(1,10,10,0.9)_72%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />
    </div>
  );
}
