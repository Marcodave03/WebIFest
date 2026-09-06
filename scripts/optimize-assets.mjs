/**
 * Converts the legacy CRA asset pile into web-ready WebP.
 *
 * Two things dominated the old bundle:
 *  - "SVG" files that were really a <rect> filled with a base64 PNG (up to 3.9 MB each)
 *  - unresized camera JPEGs / PNGs
 * Both are unpacked, resized and re-encoded here so the app only ships WebP.
 */
import { readdir, readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const SRC = 'src/Assets';
const OUT = 'public/img';

/** Longest-edge cap per asset family. Parallax plates stay big, icons get tiny. */
const CAPS = [
  [/^para/, 2200],
  [/^(explore|padar|boat|resort|ticket|ev)/, 1800],
  [/^(carou|count|sos|logo)/, 600],
  [/^(card|home|inside|outside)/, 1400],
];

const slug = (f) =>
  path.parse(f).name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const capFor = (name) => (CAPS.find(([re]) => re.test(name)) ?? [null, 1600])[1];

/** Pulls the biggest embedded raster out of a Figma-exported SVG wrapper. */
function extractEmbedded(svg) {
  const hits = [...svg.matchAll(/data:image\/(png|jpe?g);base64,([A-Za-z0-9+/=]+)/g)];
  if (!hits.length) return null;
  return hits.sort((a, b) => b[2].length - a[2].length)[0][2];
}

async function encode(buffer, outName, cap, { alpha }) {
  const img = sharp(buffer).resize({
    width: cap,
    height: cap,
    fit: 'inside',
    withoutEnlargement: true,
  });
  const out = path.join(OUT, `${outName}.webp`);
  await img
    .webp({ quality: alpha ? 86 : 78, effort: 6, alphaQuality: 90 })
    .toFile(out);
  return out;
}

async function main() {
  // One-time migration: src/Assets is the CRA asset folder, removed after the port.
  // Kept in the repo as the record of how public/img was produced.
  try {
    await readdir(SRC);
  } catch {
    console.log(`${SRC} is gone — assets already converted into ${OUT}. Nothing to do.`);
    return;
  }

  await mkdir(OUT, { recursive: true });
  const files = await readdir(SRC);
  const report = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const name = slug(file);
    const cap = capFor(name);
    const abs = path.join(SRC, file);
    const before = (await readFile(abs)).length;

    if (ext === '.svg') {
      const svg = await readFile(abs, 'utf8');
      const embedded = extractEmbedded(svg);
      if (!embedded) {
        await copyFile(abs, path.join(OUT, `${name}.svg`));
        report.push([file, before, before, 'vector (copied)']);
        continue;
      }
      const raw = Buffer.from(embedded, 'base64');
      const out = await encode(raw, name, cap, { alpha: true });
      report.push([file, before, (await readFile(out)).length, 'unwrapped → webp']);
      continue;
    }

    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const raw = await readFile(abs);
      const alpha = ext === '.png' && (await sharp(raw).metadata()).hasAlpha;
      const out = await encode(raw, name, cap, { alpha });
      report.push([file, before, (await readFile(out)).length, alpha ? 'webp (alpha)' : 'webp']);
    }
  }

  const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
  let totalBefore = 0;
  let totalAfter = 0;
  for (const [file, b, a, note] of report.sort((x, y) => y[1] - x[1])) {
    totalBefore += b;
    totalAfter += a;
    console.log(`${file.padEnd(22)} ${kb(b).padStart(9)} → ${kb(a).padStart(9)}  ${note}`);
  }
  console.log(`\nTOTAL ${kb(totalBefore)} → ${kb(totalAfter)} (${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% smaller)`);
}

main();
