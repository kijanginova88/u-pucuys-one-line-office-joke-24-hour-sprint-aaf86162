// One-line office joke for make.fun: "One-Line Office Joke: 24-Hour Sprint".
// Writes a single joke (one line, at most 200 characters) to /output/entry.txt,
// the path the program/v1 harness grades. Node 22+ stdlib only, no dependencies,
// fully deterministic: the same joke on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked IT for a second monitor and got a mirror, a motivational poster, and a ticket marked resolved.";

// Gate guard: the sealed scorer requires 1-200 characters, a single line.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`joke must be one line of 1-200 characters, got ${JOKE.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
console.log(JOKE);
