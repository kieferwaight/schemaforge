#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import https from "https";
import http from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..", "..");

const args = process.argv.slice(2);
const force = args.includes("--force");
const namespace = args.find((arg) => !arg.startsWith("-"));

if (!namespace) {
  console.error("❌ Error: namespace parameter required");
  console.error("Usage: node namespace-sync.js <namespace> [--force]");
  process.exit(1);
}

const schemasDir = join(projectRoot, "schemas", namespace);
const namespacePath = join(schemasDir, "namespace.json");

// Read namespace.json
let config;
try {
  config = JSON.parse(readFileSync(namespacePath, "utf8"));
} catch (error) {
  console.error(`❌ Error: Could not read ${namespacePath}`);
  process.exit(1);
}

// Check if sync property exists
if (!config.sync || typeof config.sync !== "object") {
  console.warn(
    `Skipping ${namespace}\n No sync property found in namespace.json\n`,
  );
  process.exit(0);
}

// Ensure schemas directory exists
mkdirSync(schemasDir, { recursive: true });

console.log(`Syncing ${namespace}...`);

const syncEntries = Object.entries(config.sync);
let completed = 0;
let skipped = 0;
let failed = 0;

// Helper function to download a file
function downloadFile(url, targetPath) {
  return new Promise((resolve) => {
    if (!force && existsSync(targetPath)) {
      console.log(
        ` ⚠️  Skipped ${join(namespace, targetPath.split("/").pop())}`,
      );
      skipped++;
      resolve();
      return;
    }

    const protocol = url.startsWith("https") ? https : http;

    protocol
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          console.error(` ❌ Failed to download: HTTP ${response.statusCode}`);
          failed++;
          resolve();
          return;
        }

        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            writeFileSync(targetPath, data, "utf8");
            console.log(
              ` ✅ Downloaded ${join(namespace, targetPath.split("/").pop())}`,
            );
            completed++;
            resolve();
          } catch (error) {
            console.error(` ❌ Failed to write: ${error.message}`);
            failed++;
            resolve();
          }
        });
      })
      .on("error", (error) => {
        console.error(` ❌ Download error: ${error.message}`);
        failed++;
        resolve();
      });
  });
}

// Download all files
const downloads = syncEntries.map(([key, url]) => {
  const targetPath = join(schemasDir, key);
  return downloadFile(url, targetPath);
});

Promise.all(downloads).then(() => {
  console.log(
    `${completed} downloaded, ${skipped} skipped, ${failed} failed\n`,
  );
  process.exit(failed > 0 ? 1 : 0);
});
