#!/usr/bin/env node

import Ajv from "ajv";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Usage: ./scripts/validate.js <json-file>");
  console.error(
    "Example: ./scripts/validate.js schemas/karabiner-elements.pqrs.org/test/complex-modification-config.json",
  );
  process.exit(1);
}

const dataFile = resolve(args[0]);

async function validate() {
  try {
    // Read the JSON file
    const data = JSON.parse(readFileSync(dataFile, "utf8"));

    // Get schema reference from $schema property
    if (!data.$schema) {
      console.error("❌ Error: No $schema property found in JSON file");
      process.exit(1);
    }

    // Resolve schema path relative to the data file
    const schemaFile = resolve(dirname(dataFile), data.$schema);

    console.log(`📋 Validating: ${dataFile}`);
    console.log(`📐 Schema: ${schemaFile}`);

    // Read and parse the schema
    const schema = JSON.parse(readFileSync(schemaFile, "utf8"));

    // Validate using Ajv (disable schema registration to avoid duplicate ID errors)
    const ajv = new Ajv({
      allErrors: true,
      verbose: true,
      strict: false,
      validateSchema: false,
      addUsedSchema: false,
    });

    const valid = ajv.validate(schema, data);

    if (valid) {
      console.log("✅ Validation passed!");
      process.exit(0);
    } else {
      console.error("❌ Validation failed:");
      for (const error of ajv.errors) {
        console.error(`  ${error.instancePath || "/"}: ${error.message}`);
        if (error.params) {
          console.error(`    ${JSON.stringify(error.params)}`);
        }
      }
      process.exit(1);
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

validate();
