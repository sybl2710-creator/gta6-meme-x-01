// gta6-meme-x-01, round three.
//
// The post is the entry: a GTA Airlines boarding pass meme on X
// (SA cover girl header, flight delayed 4,813 days). This program only
// ferries the post's address to the house, which reads the post itself.

import { cpSync, mkdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const entry = JSON.parse(readFileSync(resolve(root, 'POST.json'), 'utf8'));
if (typeof entry?.url !== 'string') throw new Error('POST.json is missing its url');

mkdirSync(out, { recursive: true });
cpSync(resolve(root, 'POST.json'), resolve(out, 'POST.json'));
