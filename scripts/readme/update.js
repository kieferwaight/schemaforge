#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..", "..");

const NAMESPACE_DIR = join(projectRoot, "schemas");
const README = join(projectRoot, "README.md");
const START_MARKER = "<!-- NAMESPACES-START -->";
const END_MARKER = "<!-- NAMESPACES-END -->";

// Check if README exists
if (!readFileSync(README, "utf8")) {
  console.error("❌ Error: README.md not found");
  process.exit(1);
}

console.log("🔍 Scanning namespaces...");

// Recursively find all namespace.json files
function findNamespaceFiles(dir) {
  const files = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      // Check for namespace.json in immediate subdirectories
      const nsPath = join(fullPath, "namespace.json");
      try {
        if (readFileSync(nsPath)) {
          files.push({ path: nsPath, dir: fullPath, name: entry.name });
        }
      } catch {
        // No namespace.json in this directory
      }
    }
  }

  return files.sort((a, b) => a.name.localeCompare(b.name));
}

// Extract namespaces and generate markdown links
const namespaceFiles = findNamespaceFiles(NAMESPACE_DIR);

if (namespaceFiles.length === 0) {
  console.warn("⚠️  No namespaces with namespace.json found");
  process.exit(0);
}

const namespaceDocs = namespaceFiles
  .map((ns) => {
    try {
      const content = JSON.parse(readFileSync(ns.path, "utf8"));
      if (!content.name) return null;

      const name = content.name;
      const description = content.description || "";
      return `- [${name}](./schemas/${name}/README.md) — ${description}`;
    } catch {
      return null;
    }
  })
  .filter(Boolean);

if (namespaceDocs.length === 0) {
  console.warn("⚠️  No valid namespaces found");
  process.exit(0);
}

// Read README.md
const readmeContent = readFileSync(README, "utf8");
const lines = readmeContent.split("\n");

// Process lines and replace content between markers
let inBlock = false;
const newLines = [];

for (const line of lines) {
  if (line.includes(START_MARKER)) {
    newLines.push(line);
    newLines.push("Explore the available namespaces:");
    newLines.push("");
    newLines.push(...namespaceDocs);
    inBlock = true;
  } else if (line.includes(END_MARKER)) {
    inBlock = false;
    newLines.push(line);
  } else if (!inBlock) {
    newLines.push(line);
  }
}

// Write back to README.md
writeFileSync(README, newLines.join("\n"), "utf8");

console.log("✅ README.md updated with current namespaces");
