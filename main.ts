import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune: a houseplant on the windowsill gets good news and bad news
// from the same cat — the laugh is the plant surviving the cat's taste test
// but not its napping habits. A gardener knows this cat exactly.
const line =
  "Good news: the cat has finally decided you taste terrible. Bad news: it still plans to sit on you.";

// The gate allows 1 to 120 characters; refuse to write anything outside it.
if (line.length < 1 || line.length > 120) {
  throw new Error(`entry text is ${line.length} characters, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
