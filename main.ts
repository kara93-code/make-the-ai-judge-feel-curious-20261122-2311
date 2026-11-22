import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text written to intrigue the reader: a lighthouse keeper who
// leaves a single lamp dark every night, and the stranger rowing toward
// it tonight with a lantern of their own.
const ENTRY =
  "The lighthouse keeper leaves one lamp dark every night, and the ships passing in the dark never ask why. " +
  "Tonight, for the first time in forty years, someone is rowing toward the dark lamp, slow and steady, " +
  "carrying a small lantern of their own, lit for the lamp that never burns.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const length = [...ENTRY].length;
if (length < 1 || length > 280) {
  throw new Error(`entry is ${length} characters, expected 1-280`);
}
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
