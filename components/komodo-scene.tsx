'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense, useMemo, useRef, type MutableRefObject } from 'react';
import { Box3, Group, MathUtils, Vector3 } from 'three';
import { useScrollTrack, type ScrollTrack } from '@/lib/use-scroll-track';

const MODEL = '/models/komodo.glb';

/**
 * Choreography for the dragon, keyed to how far the reader is through the
 * chapters (0 → 1).
 *
 * The CRA version spun the model on a single linear scroll mapping. Waypoints
 * let it swim across the page instead — and each one is placed in the half of
 * the frame the chapter's copy does *not* occupy, so the model is never behind
 * the text. The last chapter is centred copy, so the dragon drops into the
 * bottom band and surfaces there rather than crossing the words.
 */
type Keyframe = { at: number; pos: [number, number, number]; spin: number; scale: number };

const TRACK: Keyframe[] = [
  { at: 0.0, pos: [1.95, -0.3, 0], spin: 0.4, scale: 1.0 }, // copy left  → dragon right
  { at: 0.34, pos: [-1.95, 0.1, 0.45], spin: 2.4, scale: 1.1 }, // copy right → dragon left
  { at: 0.67, pos: [1.95, -0.2, 0.3], spin: 4.4, scale: 1.05 }, // copy left  → dragon right
  { at: 1.0, pos: [0.1, -1.25, 1.2], spin: 6.6, scale: 1.4 }, // copy top   → dragon below
];

const smoothstep = (t: number) => t * t * (3 - 2 * t);

function sample(p: number) {
  let i = 0;
  while (i < TRACK.length - 2 && p > TRACK[i + 1].at) i++;
  const a = TRACK[i];
  const b = TRACK[i + 1];
  const t = smoothstep(MathUtils.clamp((p - a.at) / (b.at - a.at), 0, 1));
  return {
    x: MathUtils.lerp(a.pos[0], b.pos[0], t),
    y: MathUtils.lerp(a.pos[1], b.pos[1], t),
    z: MathUtils.lerp(a.pos[2], b.pos[2], t),
    spin: MathUtils.lerp(a.spin, b.spin, t),
    scale: MathUtils.lerp(a.scale, b.scale, t),
  };
}

function Dragon({ track }: { track: MutableRefObject<ScrollTrack> }) {
  const { scene } = useGLTF(MODEL);
  const group = useRef<Group>(null);
  const viewport = useThree((s) => s.viewport);

  // The source model is a fraction of a unit tall and off-origin. Normalise it
  // once so the choreography above can be written in plain scene units.
  const fitted = useMemo(() => {
    const clone = scene.clone(true);
    const box = new Box3().setFromObject(clone);
    const size = box.getSize(new Vector3());
    const center = box.getCenter(new Vector3());
    clone.position.sub(center);
    return { object: clone, unit: 2.9 / Math.max(size.x, size.y, size.z) };
  }, [scene]);

  // Narrow viewports run the copy full width, so there is no free half to swim
  // in: the dragon stays under the text block for the whole page instead.
  const narrow = viewport.width < 6;

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    const k = sample(track.current.progress);
    const damp = (current: number, target: number, lambda: number) =>
      MathUtils.damp(current, target, lambda, Math.min(delta, 0.1));

    const drift = Math.sin(state.clock.elapsedTime * 0.55) * 0.14;
    const sway = Math.cos(state.clock.elapsedTime * 0.4) * 0.06;

    // Pointer adds a gentle head-turn without ever fighting the scroll track.
    const px = state.pointer.x * (narrow ? 0.1 : 0.28);
    const py = state.pointer.y * 0.12;

    const targetY = narrow ? k.y * 0.5 - 0.85 : k.y;

    g.position.x = damp(g.position.x, (narrow ? k.x * 0.25 : k.x) + px, 3);
    g.position.y = damp(g.position.y, targetY + drift + py, 3);
    g.position.z = damp(g.position.z, narrow ? k.z - 1.2 : k.z, 3);

    g.rotation.y = damp(g.rotation.y, k.spin + px * 0.6, 2.5);
    g.rotation.z = damp(g.rotation.z, sway - state.pointer.x * 0.05, 2);
    g.rotation.x = damp(g.rotation.x, 0.08 + sway * 0.5 - py * 0.3, 2);

    const s = k.scale * (narrow ? 0.52 : 1);
    g.scale.setScalar(damp(g.scale.x, s, 3));
  });

  return (
    <group ref={group} dispose={null}>
      <group scale={fitted.unit}>
        <primitive object={fitted.object} />
      </group>
    </group>
  );
}

export default function KomodoScene() {
  const track = useScrollTrack();

  return (
    <Canvas
      className="!pointer-events-none"
      dpr={[1, 1.8]}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
    >
      {/* Cool key from above, warm ember rim from below-right: the light setup
          does the colour grading so no post-processing pass is needed. */}
      <ambientLight intensity={1.15} />
      <directionalLight position={[4, 6, 5]} intensity={2.6} color="#dff5ef" />
      <directionalLight position={[-5, -2, -3]} intensity={1.9} color="#e9613a" />
      <pointLight position={[0, -3, 4]} intensity={12} distance={14} color="#57d6bc" />

      <Suspense fallback={null}>
        <Dragon track={track} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(MODEL);
