# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/MARUGAMIII/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/MARUGAMIII/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One-page newspaper front page summing up the world's news of Saturday 21 November 2026: Russia's biggest barrage of the war hits Kyiv and spills into Poland; the AI rout drags Wall Street into correction as the Nasdaq erases its 2026 gains; COP31 runs past its deadline with fossil fuels missing from the draft; Trump calls Putin "my friend" after the first three-way summit with Xi; and BepiColombo reaches Mercury after eight years. The page is drawn as HTML and rendered to a single 1024×1024 PNG, so the image explains itself with no feed attached — with a date check, a UTC timeline, a markets strip, and 50 sourced stories across war, diplomacy, markets, tech, justice, science, health and sport.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node.js 22.18 or later, standard library only. The run copies `entry.png` to the output directory as `entry.png`, after checking it is a whole PNG of at most 1 MiB and 1024×1024 pixels, and is deterministic: two runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
