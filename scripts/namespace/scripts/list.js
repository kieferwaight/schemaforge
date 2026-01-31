#!/usr/bin/env node

import { execSync } from "child_process";

const isJson = process.argv.includes("--json");

let command;
if (isJson) {
  // Output as JSON object with script name as key, command as value
  command = `cat ./schemas/**/namespace.json | jq -s '[.[] | select(.scripts) | .scripts] | add'`;
} else {
  // Output as formatted table
  command = `cat ./schemas/**/namespace.json | jq -r -s '.[] | select(.scripts) | .scripts | to_entries[] | "\\(.key)|\\(.value)"' | column -t -s '|' | sed 's/^/  /'`;
}

const output = execSync(command, { encoding: "utf-8" });
console.log(output);
