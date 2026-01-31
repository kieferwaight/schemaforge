#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..", "..");

const namespace = process.argv[2];

if (!namespace) {
  console.error("❌ Error: namespace parameter required");
  console.error("Usage: node package.js <namespace>");
  process.exit(1);
}

const schemasDir = join(projectRoot, "schemas", namespace);
const namespacePath = join(schemasDir, "namespace.json");
const packagePath = join(schemasDir, "package.json");

// Read namespace.json
let config;
try {
  config = JSON.parse(readFileSync(namespacePath, "utf8"));
} catch (error) {
  console.error(`❌ Error: Could not read ${namespacePath}`);
  process.exit(1);
}

// Generate package.json
const packageJson = {
  name: `@schemas/${config.name || namespace}`,
  version: config.version || "1.0.0",
  description: config.description || "",
  private: true,
};

// Add scripts if they exist
if (config.scripts && typeof config.scripts === "object") {
  packageJson.scripts = config.scripts;
}

// Write package.json
try {
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log(`✅ Generated ${packagePath}`);
} catch (error) {
  console.error(`❌ Error writing package.json: ${error.message}`);
  process.exit(1);
}
