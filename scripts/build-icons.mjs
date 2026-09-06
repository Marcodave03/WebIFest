/**
 * Derives the raster icons from app/icon.svg.
 *
 * `app/icon.svg` is the source of truth — Next emits the <link> for it and it
 * stays crisp at every size. This adds the two formats SVG cannot cover:
 * an opaque apple-touch-icon, and a legacy multi-resolution .ico for browsers
 * that probe /favicon.ico directly.
 */
import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const SRC = 'app/icon.svg';
const ICO_SIZES = [16, 32, 48];

/** Minimal ICO container. Vista+ accepts PNG payloads, so no BMP encoding needed. */
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(pngs.length, 4);

  let offset = 6 + pngs.length * 16;
  const entries = pngs.map(({ size, data }) => {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // colour planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    return entry;
  });

  return Buffer.concat([header, ...entries, ...pngs.map((p) => p.data)]);
}

const pngs = [];
for (const size of ICO_SIZES) {
  pngs.push({ size, data: await sharp(SRC).resize(size, size).png().toBuffer() });
}
await writeFile('public/favicon.ico', buildIco(pngs));

// iOS masks the corners itself and does not composite alpha, so flatten to ink.
await sharp(SRC)
  .resize(180, 180)
  .flatten({ background: '#02100f' })
  .png()
  .toFile('app/apple-icon.png');

console.log(`favicon.ico (${ICO_SIZES.join('/')}) + apple-icon.png written`);
