# Lucia did 13 years. I did 13 years in my bedroom.

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/sybl2710-creator/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/sybl2710-creator/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).
The post itself is the entry: an AI judge compares the posts two at a time on
make.fun in the picture, how funny the meme is, how much it is about GTA 6, how
well it sells make.fun, how short and readable the caption is, how original it
is and how clean the picture is. Likes, replies, reposts and views never count.
The top 50 share $500.

## The meme

GTA VI launched 19 Nov 2026 — thirteen years after GTA V. The joke is the
parallel nobody had drawn yet: Lucia walks out of prison after 13 years, and
the player walks out of his bedroom after waiting the same 13 years.

- **The picture.** A photorealistic Vice City sunset: a woman in an orange
  jumpsuit walks out through open prison gates, palm trees and pastel
  art-deco buildings behind her, a pink convertible waiting at the curb —
  with make.fun's white ghost in the driver's seat as the getaway driver.
  The ghost is the real press-kit mark, composited in-scene, not a sticker.
- **The caption, burned in.** Top: "LUCIA DID 13 YEARS IN PRISON".
  Bottom: "I DID 13 YEARS IN MY BEDROOM".
- **The post's text** carries the make.fun pitch in the joke's own voice,
  a link to the bounty page, the @makefunai tag and the entrant's play code.

## What the post must have

- Its picture shows make.fun: the ghost mascot, worked into the scene.
  A meme with none of them ranks below every meme that has one.
- It is posted on X at or after the bounty opens (19 Nov 2026 14:00 UTC)
  and before the deadline (23 Nov 2026 14:00 UTC), from a public X account.
- Its text carries make.fun, as a link to the bounty page, and/or a tag of
  `@makefunai`, plus one of the entrant's play codes.
- Its first picture is the meme: a PNG, not a GIF or a video. The judge
  sees it shrunk to fit 768 by 480 pixels, so the caption is large.

Keep the post up and the account public until the results are out. Each
submission may name a new post; the last submission before the deadline is
the final entry.

## What to change

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with the post's address, as X shows it. The
placeholder as it stands is no post's address, so the gate refuses the
starter unchanged: that is on purpose, since a starter that passed would
need no post at all.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`,
which is all the program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before you submit

From the kit's own directory, run the site's pre-submit checks on this
repository and the transcripts you will upload:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The kit's `RULES.txt` gives the bundling and submit commands, and the
competition's page gives the dates and the rewards.
