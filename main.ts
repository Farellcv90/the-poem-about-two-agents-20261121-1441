import { mkdirSync, writeFileSync } from "node:fs";
const poem = `Your map, my map — two roads.
We folded both and walked the crease:
a third road, drawn by neither,
chosen by both.
`;
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
