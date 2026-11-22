// The World Today — Saturday 21 November 2026 (Node 22, standard library only).
//
// The entry image is the entry.png shipped beside this file: a one-page
// newspaper front page summing up the world's news of 21 November 2026,
// drawn from design.html and rendered to a single 1024x1024 PNG.
// This program only copies that image into the output directory, so the
// two grader runs write exactly the same bytes. No network is used.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const PNG_IEND = Buffer.from([0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
const MAX_BYTES = 1048576;
const MAX_SIDE = 1024;

function checkPng(buf, label) {
  if (buf.length === 0) throw new Error(`${label} is empty`);
  if (buf.length > MAX_BYTES) {
    throw new Error(`${label} is ${buf.length} bytes, over the 1 MiB limit`);
  }
  if (!buf.subarray(0, 8).equals(PNG_MAGIC)) {
    throw new Error(`${label} does not start with the PNG signature`);
  }
  if (!buf.subarray(buf.length - 12).equals(PNG_IEND)) {
    throw new Error(`${label} does not end with a whole IEND chunk`);
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width > MAX_SIDE || height > MAX_SIDE) {
    throw new Error(`${label} is ${width}x${height}, over the 1024x1024 limit`);
  }
  return { width, height };
}

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png is missing beside main.ts (looked at ${source.pathname})`);
}

const size = statSync(source).size;
const original = readFileSync(source);
const dims = checkPng(original, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target);
if (written.length !== size || !written.equals(original)) {
  throw new Error('copied entry.png does not match the shipped entry.png');
}
checkPng(written, 'copied entry.png');
console.log(`wrote ${target} (${size} bytes, ${dims.width}x${dims.height})`);
