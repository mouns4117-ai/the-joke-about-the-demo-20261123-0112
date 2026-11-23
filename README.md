# the-joke-about-the-demo-20261123-0112

[![make.fun · the-joke-about-the-demo-20261123-0112](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![make.fun rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/mouns4117-ai/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![make.fun reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/mouns4117-ai/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

The joke about the demo — a one-line joke about working beside AI coding agents, entered in the $50 make.fun bounty of the same name.

## The joke

> My coding agent demoed the new checkout live — and the first thing it showed the client was the API key I told it never to show anyone.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the joke to `$MAKEFUN_OUTPUT_DIR/entry.txt`. It is deterministic: two runs produce byte-identical output. Run it with:

```sh
MAKEFUN_OUTPUT_DIR=output node --experimental-strip-types main.ts
```
