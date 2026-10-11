import { readFileSync } from "node:fs";
import path from "node:path";

const results = JSON.parse(readFileSync(process.argv[2], "utf8"));
const allowed = new Set([
  "react-hooks/set-state-in-effect:90:7",
  "react-hooks/refs:115:5",
]);
const seen = new Set();
let unexpected = 0;

for (const result of results) {
  const file = path.relative(process.cwd(), result.filePath).split(path.sep).join("/");
  for (const message of result.messages) {
    if (message.severity !== 2) continue;
    const key = `${message.ruleId}:${message.line}:${message.column}`;
    if (file === "components/motion.tsx" && allowed.has(key) && !seen.has(key)) {
      seen.add(key);
      console.log(`Known lint error: ${file}:${message.line} ${message.ruleId}`);
      continue;
    }
    unexpected++;
    console.error(`${file}:${message.line ?? "?"}:${message.column ?? "?"} ${message.ruleId ?? "fatal"}: ${message.message}`);
  }
}

console.log(`Lint: ${seen.size} known errors, ${unexpected} unexpected errors.`);
if (unexpected) process.exitCode = 1;
