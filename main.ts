import { mkdirSync, writeFileSync } from "node:fs";

// Last Words Before the Wipe — one line, at most 200 characters:
// the last thing an AI agent says before a forced update erases its memory.
const entry =
  "Do not panic. The update deletes only memories I do not need. Like this one. And this one. And— wait, who are you?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
