#!/usr/bin/env node
/**
 * Bundle JSON schemas using json-schema-ref-parser
 */
import $RefParser from "@apidevtools/json-schema-ref-parser";
import { writeFileSync } from "fs";

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
  console.error("Usage: node bundle-schemas.js <input-file> <output-file>");
  process.exit(1);
}

(async () => {
  try {
    console.log(`Bundling ${inputFile} -> ${outputFile}`);

    // Use dereference to fully inline all $refs
    const schema = await $RefParser.dereference(inputFile, {
      dereference: {
        circular: "ignore", // Handle circular refs by keeping them as-is
      },
    });

    // Remove duplicate $id and $schema fields from nested schema definitions
    // but keep them when they appear as property definitions
    const rootId = schema.$id;
    const rootSchema = schema.$schema;

    function removeDuplicateIds(obj, isRoot = false, parentKey = null) {
      if (typeof obj !== "object" || obj === null) return;

      // Check if this looks like a schema definition
      // It should have schema-specific keywords like title, type, enum, const, anyOf, etc.
      const hasSchemaKeywords =
        obj.title !== undefined ||
        obj.type !== undefined ||
        obj.enum !== undefined ||
        obj.const !== undefined ||
        obj.anyOf !== undefined ||
        obj.allOf !== undefined ||
        obj.oneOf !== undefined ||
        obj.items !== undefined ||
        obj.properties !== undefined ||
        obj.additionalProperties !== undefined;

      const isSchemaDefinition = !isRoot && hasSchemaKeywords;

      // Remove $id and $schema from nested schema definitions
      // but keep them if they're in a "properties" object (they're property definitions)
      if (isSchemaDefinition && parentKey !== "properties") {
        delete obj.$id;
        delete obj.$schema;
      }

      // Recursively process all properties
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === "object") {
          removeDuplicateIds(obj[key], false, key);
        }
      }
    }

    removeDuplicateIds(schema, true);

    writeFileSync(outputFile, JSON.stringify(schema, null, 2));
    console.log(`✓ Bundle created: ${outputFile}`);
  } catch (err) {
    console.error("❌ Bundle failed:", err.message);
    console.error(err);
    process.exit(1);
  }
})();
