import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svg = readFileSync(join(root, "public/brand/mark.svg"));

const targets = [
  ["public/brand/mark-32.png", 32],
  ["public/brand/mark-180.png", 180],
  ["public/brand/mark-512.png", 512],
  ["src/app/icon.png", 32],
  ["src/app/apple-icon.png", 180],
];

for (const [relativePath, size] of targets) {
  const buffer = await sharp(svg).resize(size, size).png().toBuffer();
  writeFileSync(join(root, relativePath), buffer);
}

console.log(`Wrote ${targets.length} brand mark PNGs from mark.svg`);