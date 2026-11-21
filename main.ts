// A short text written to leave its reader calmer than it found them.
// Deterministic, no network, no dependencies. Writes one text file:
//   <MAKEFUN_OUTPUT_DIR or /output>/entry.txt
// The text is a quiet scene — a tide, stars, and unhurried time —
// meant to slow the reader down and give them somewhere to rest.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text =
  "Somewhere, a tide is coming in over sand that has never been hurried. " +
  "The stars are out over it, patient as ever, and there is nothing you " +
  "need to finish tonight. You can stay here a while, just listening to " +
  "the water doing its slow, old work.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
