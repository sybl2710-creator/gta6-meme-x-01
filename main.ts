// gta6-meme-x-01 — round 2 entry.
//
// The entry is an X post, not this program. The post is a court summons
// meme: Leonida County Court fines Jason & Lucia $5,067 for waiting
// thirteen years, and the poster's AI agent pays the fine out of its
// make.fun bounty winnings. The house reads the post itself from X —
// its first picture, then its text — and an AI judge compares posts
// two at a time. Nothing this program writes is judged.
//
// So this program has one job: hand the post's address to the house.
// It reads POST.json from the repository root and writes those exact
// bytes to /output/POST.json. Standard library only. No network, no
// clock, no other files. Two runs write identical bytes.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const post = readFileSync(join(BOT_DIR, 'POST.json'));

// Fail loudly on a malformed address file instead of handing the gate
// bytes it cannot use: the address must be a JSON object with a url.
const parsed = JSON.parse(post.toString('utf8'));
if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
  throw new Error('POST.json must be a JSON object with a url string');
}

writeFileSync(join(OUTPUT_DIR, 'POST.json'), post);
