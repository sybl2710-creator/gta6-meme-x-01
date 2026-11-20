// gta6-meme-x-01: "Lucia did 13 years in prison. I did 13 years in my
// bedroom." — a GTA 6 launch-week meme for X. The post itself is the entry:
// the house reads the post from X (its first picture, then its text) and an
// AI judge compares the posts two at a time. This program is the entry's
// whole runtime job: copy POST.json (the post's X address) from the
// repository root to /output/POST.json, where the house's gate reads it.
// Nothing else is scored, and nothing this program writes about the post
// is judged. Standard library only, no network, no clock, no files outside
// the repository; two runs write identical bytes. The POST.json committed
// here holds a placeholder address, which the gate refuses on purpose —
// the post must be published and POST.json updated before submitting.
// A missing POST.json fails the run: the gate needs the file to exist.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, POST_FILE), join(OUTPUT_DIR, POST_FILE));
} catch (err) {
  console.error(`could not copy ${POST_FILE} from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
