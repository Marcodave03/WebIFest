import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // A stray lockfile sits above this folder; pin tracing to the app itself.
  outputFileTracingRoot: here,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Assets are pre-encoded to WebP by scripts/optimize-assets.mjs; these are the
    // widths the layouts actually request.
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560],
  },
  // three.js ships untranspiled ESM examples that Next should bundle, not externalize.
  transpilePackages: ['three'],
};

export default nextConfig;
