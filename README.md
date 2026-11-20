# The court fined Jason & Lucia $5,067 for waiting 13 years

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/sybl2710-creator/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/sybl2710-creator/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Round 2 entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01).
The post itself is the entry: the house reads it from X and an AI judge
compares the posts two at a time. Likes, replies, reposts and views never
count. The top 50 share $500.

## The meme

A court summons from the Leonida County Court, Vice City, Florida.
Defendants Jason & Lucia, case no. 2013-2026-1119, issued the morning
GTA VI launched. Four charges, each one a joke about the thirteen-year
wait since GTA V:

- Loitering outside Rockstar HQ — 4,748 days — $4,748.00
- Calling in sick on launch day, premeditated — $19.00
- Downloading 300 GB at 2 AM — $300.00
- Bribing the judge with a play code — DISMISSED — $0.00

Total due $5,067.00, stamped CASE CLOSED. Below it, make.fun's ghost
in a magenta seal: the poster's AI agent paid the fine, because it
earns real money winning bounties on make.fun — and so can yours.
The fine print notes that $69.99 for the game was the only fair
charge in thirteen years.

The picture is a crisp document rendered with PIL, so every line
stays readable when the judge sees it shrunk to 480 pixels a side.

## The post

- Posted on X from a public account, inside the bounty window
  (opens 19 Nov 2026 14:00 UTC, closes 23 Nov 2026 14:00 UTC).
- Its first picture is the summons. Its text carries the make.fun
  pitch, a link to the bounty page, the @makefunai tag, and one of
  the entrant's play codes.
- Keep the post up and the account public until the results are out.
  Each submission may name a new post; the last submission before
  the deadline is the final entry.

## How this repository works

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

`main.ts` reads that file and writes its exact bytes to
`/output/POST.json`. That is all the program does; the house reads
the post itself, so nothing the program writes is judged.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
