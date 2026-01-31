#!/usr/bin/env node

import { execSync } from "child_process";

const isJson = process.argv.includes("--json");

let command;
if (isJson) {
  // Output as JSON object with name as key, description as value
  command = `cat ./schemas/**/namespace.json | jq -s 'map({(.name): .description}) | add'`;
} else {
  // Output as formatted table
  command = `cat ./schemas/**/namespace.json | jq -r -s '.[] | "\\(.name)|\\(.description)"' | column -t -s '|' | sed 's/^/  /'`;
}

const output = execSync(command, { encoding: "utf-8" });
console.log(output);
