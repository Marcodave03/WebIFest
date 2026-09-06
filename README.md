# Nusa Travel

A field guide to East Nusa Tenggara — Komodo, Flores, Sumba, Timor.
Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4** and **react-three-fiber**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

> **Windows note.** The scripts call `node node_modules/next/dist/bin/next ...`
> rather than the bare `next` binary on purpose. This project lives under a path
> containing `&` (`303. Freelance & Hackhaton`), and npm's generated `.cmd` shims
> expand that path into the command line for cmd.exe to re-parse — where `&`
> reads as a command separator, so `next` resolves to a truncated path and fails
> with `Cannot find module '....Projects
ext\distin
ext'`. Invoking
> node with a cwd-relative path sidesteps the absolute path entirely. Running
> `npx next dev` directly will still hit the same problem.

## Routes

| Path     | What it is                                                              |
| -------- | ----------------------------------------------------------------------- |
| `/`      | Entrance. Ambient video backdrop with a scroll-choreographed 3D Komodo.  |
| `/home`  | Discover. Layered parallax hero, itinerary, counters, postcard marquees. |
| `/place` | Places. Island index, sunset-sail reservation, coverflow of stays.       |
| `/event` | Events. Taka Makassar day trip — activities, schedule, tickets, FAQ.     |

## Design system

Tokens live in `app/globals.css` under `@theme`, so every colour and font is one
custom property.

- **Palette** — deep Flores-Sea teal (`ink` → `reef`), bone/sand for text,
  volcanic `ember` as the single accent, `lagoon` turquoise for labels.
- **Type** — [Fraunces](https://fonts.google.com/specimen/Fraunces) for display,
  with the `SOFT`/`WONK`/`opsz` axes dialled up so headlines read as drawn rather
  than set; [Manrope](https://fonts.google.com/specimen/Manrope) for UI and body.
  Loaded through `next/font` (self-hosted, no layout shift).
- **Utilities** — `display`, `display-tight`, `eyebrow`, `lede`, `body-copy`,
  `shell`, `hairline`, `grain` are defined once as Tailwind `@utility` rules.

Every page is a server component. The only client components are the four that
need an event loop: nav, parallax hero, coverflow, and the 3D scene.

## Motion

All motion is compositor-only (`transform` / `opacity`) driven by one
rAF-throttled listener per effect, and every effect honours
`prefers-reduced-motion`.

- **Scroll reveal** — `components/reveal-observer.tsx` runs a single
  `IntersectionObserver` for the whole site. Any server-rendered element opts in
  with `data-reveal` (`""`, `"left"`, `"right"`, `"scale"`) plus an optional
  `--reveal-delay`. This replaces the AOS dependency.
- **Parallax hero** — five plates at different depths, plus pointer tilt and a
  cursor-tracking radial glow.
- **3D dragon** — the model follows a waypoint track keyed to scroll, damped per
  frame, with a gentle idle drift and pointer-driven head turn. It uses native
  page scroll rather than a virtual scroller, so keyboard and touch scrolling
  behave normally.

  Each waypoint is placed in the half of the frame the chapter's copy does *not*
  occupy — right, left, right — so the dragon never sits behind the text. The
  closing chapter is centred copy, so it drops into the bottom band instead and
  the copy is pinned to the top half.

  `lib/use-scroll-track.ts` measures progress against the content height with
  the footer subtracted. Mapping against the full document meant the finale
  peaked while the reader was already looking at the footer; it also returns a
  `tail` value that dissolves the canvas as the footer arrives. The footer
  itself sits at `z-30`, above the fixed canvas.

The 3D scene is `dynamic(..., { ssr: false })` and only mounts on
`requestIdleCallback`, and only when the device reports enough memory, cores and
no `saveData` / reduced-motion preference. Otherwise the page renders fine
without it.

## Asset pipeline

The original build shipped ~83 MB of media. The conversions:

| Asset                    | Before   | After   | How                                                        |
| ------------------------ | -------- | ------- | ---------------------------------------------------------- |
| Images (`public/img`)    | 40.6 MB  | 4.4 MB  | `npm run assets`                                            |
| Komodo model             | 30.8 MB  | 1.4 MB  | `gltf-transform` (see below)                                |
| Entrance video           | 12.5 MB  | 1.9 MB  | `ffmpeg`, 960p24, silent — MP4 and WebM, one per browser    |

`scripts/optimize-assets.mjs` handles the images. Most of the weight was
Figma-exported `.svg` files that were really a `<rect>` filled with a base64 PNG
— one was 3.9 MB for a 118×170 postcard. The script unwraps the embedded raster,
resizes it to a per-family cap and re-encodes to WebP. It is a one-time
migration and no-ops now that `src/Assets` is gone; it stays in the repo as the
record of how `public/img` was produced.

The model was 1 MB of mesh under 29 MB of 4K textures, half of them a duplicate
specular-glossiness set that three.js cannot use:

```bash
gltf-transform metalrough komodo.src.glb tmp.glb
gltf-transform optimize tmp.glb public/models/komodo.glb \
  --compress quantize --texture-compress webp --texture-size 1024 --simplify false
```

Quantization rather than Draco keeps it decoder-free at runtime —
`KHR_mesh_quantization` is native to three.js, so nothing extra is downloaded.

## Migrating from the old build

The Create React App version is in git history. What changed:

- `react-scripts` → Next.js App Router; `react-router-dom` → file routing.
  Paths are unchanged, so existing links still work.
- Bootstrap, AOS, Swiper and `react-id-swiper` are gone. Their jobs are done by
  Tailwind, the reveal observer and `components/coverflow.tsx` respectively.
- `drei`'s `ScrollControls` / `<Scroll html>` are gone; the landing page uses
  native scroll with a fixed canvas behind it.
- The counter no longer runs `setInterval(..., 0.1)` — see
  `components/count-up.tsx`.

Result: **~110 kB First Load JS**, every route statically prerendered.
