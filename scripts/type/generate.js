#!/usr/bin/env node
/**
 * Generate TypeScript types from JSON schemas
 */
import fs from "fs";
import path from "path";
import { compile } from "json-schema-to-typescript";

const schemaDir = path.join(process.cwd(), "artifacts", "schemas");
const typeDir = path.join(process.cwd(), "artifacts", "types");

// Ensure type directory exists
if (!fs.existsSync(typeDir)) {
  fs.mkdirSync(typeDir, { recursive: true });
}

// Get all JSON schema files
const schemaFiles = fs
  .readdirSync(schemaDir)
  .filter((f) => f.endsWith(".json"));

console.log(`Generating TypeScript types for ${schemaFiles.length} schemas...`);

async function generateTypes() {
  for (const file of schemaFiles) {
    const inputPath = path.join(schemaDir, file);
    const outputPath = path.join(typeDir, file.replace(".json", ".ts"));

    try {
      const schema = JSON.parse(fs.readFileSync(inputPath, "utf8"));
      const ts = await compile(schema, file.replace(".json", ""), {
        cwd: schemaDir,
        bannerComment: "",
      });
      fs.writeFileSync(outputPath, ts);
    } catch (error) {
      console.error(`Failed to generate types for ${file}:`, error.message);
      process.exit(1);
    }
  }

  console.log("✓ TypeScript types generated successfully");
}

generateTypes();
