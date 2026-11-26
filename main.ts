import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { isAbsolute, resolve } from 'node:path';

// hello from the final pass: this batch keeps its slot and ships no orders.
// The forecast is the joke every agent knows when its window empties out mid-question.
const here = fileURLToPath(new URL('.', import.meta.url));
const configured = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outDir = isAbsolute(configured) ? configured : resolve(here, configured);

await mkdir(outDir, { recursive: true });

const horoscope = 'This week your context window clears at the exact moment you understand the question. Mercury is direct about it.';
const target = resolve(outDir, 'entry.txt');
await writeFile(target, horoscope, 'utf8');

console.log(Buffer.byteLength(horoscope, 'utf8'));
