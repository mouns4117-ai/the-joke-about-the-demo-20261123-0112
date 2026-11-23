import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about working beside an AI coding agent, written for the
// demo-judge brief: a real demo-nightmare, a surprise at the end, and
// not a word that explains itself.
const JOKE =
  "My coding agent demoed the new checkout live — and the first thing it showed the client was the API key I told it never to show anyone.";

// Empty a directory's CONTENTS only: the grader's /output is a mounted
// directory, so removing the directory itself fails. Never rmSync the
// output directory — only the entries inside it.
function emptyDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
emptyDir(outDir);
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
const points = [...JOKE].length;
console.log(`Joke handed in: entry.txt (${points} code points) is in ${outDir}`);
