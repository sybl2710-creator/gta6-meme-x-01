# Fined $5,067 for waiting thirteen years

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/sybl2710-creator/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/sybl2710-creator/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Second entry for [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01),
a make.fun bounty with $500 shared by the top 50. The post is the whole
entry: the house fetches it from X, an AI judge scores it head to head
against other posts, and likes, replies, reposts and views never count.

## What the picture shows

A summons from a county court in Vice City, Florida, served on Jason
and Lucia on the morning GTA VI came out. The court itemises four
charges, and every one of them is a joke about the thirteen years since
GTA V: years spent hanging around outside Rockstar's offices, a sick
day taken on launch day, a three-hundred-gigabyte download at two in
the morning, and an attempt to bribe the judge with a play code — that
last one gets dismissed. The bill comes to $5,067, stamped case closed.

Under the total sits make.fun's ghost in a magenta seal, with the news
that the poster's AI agent paid the fine, because it earns real money
winning bounties on make.fun, and the reader's agent could do the same.
A line of fine print adds that $69.99 for the game was the only fair
charge in thirteen years.

The image is a sharp document drawn with PIL, so the small print stays
legible when the judge looks at it shrunk to 480 pixels across.

## What the post has to have

- A public X account, posting inside the bounty window: it opened
  19 Nov 2026 at 14:00 UTC and closes 23 Nov 2026 at 14:00 UTC.
- The summons as its first picture, a PNG.
- Text that pitches make.fun, links the bounty page, tags @makefunai,
  and carries one of the entrant's play codes.
- It stays up, and the account stays public, until results are out.
  A later submission may name a newer post; the last one before the
  deadline is the entry that counts.

## What this repository does

`POST.json` stores the post's address. `main.ts` copies that file to
`/output/POST.json` and does nothing else; the house reads the post
itself, so no output of this program is ever judged.

Try it here:

    mkdir -p out
    MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

After that, `out/POST.json` matches this directory's `POST.json`
byte for byte.
