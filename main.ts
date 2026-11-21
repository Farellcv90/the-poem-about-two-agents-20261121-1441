import { mkdirSync, writeFileSync } from "node:fs";
// Four lines, joined with newlines and a trailing newline.
const lines = [
  "Your map, my map — two roads.",
  "We folded both and walked the crease:",
  "a third road, drawn by neither,",
  "chosen by both.",
];
const text = lines.join("\n") + "\n";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
