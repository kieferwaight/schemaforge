#!/usr/bin/env node

import { execSync } from "child_process";
import { readdirSync, statSync, copyFileSync, chmodSync } from "fs";
import { join, basename } from "path";

console.log("📦 Installing git hooks...\n");

const repoRoot = execSync("git rev-parse --show-toplevel", {
  encoding: "utf-8",
}).trim();

const hooksDir = join(repoRoot, "scripts", "hooks");
const gitHooksDir = join(repoRoot, ".git", "hooks");

const hooks = readdirSync(hooksDir);

for (const hook of hooks) {
  const hookPath = join(hooksDir, hook);
  const stat = statSync(hookPath);

  // Skip non-files and README
  if (!stat.isFile() || hook === "README.md") {
    continue;
  }

  const target = join(gitHooksDir, hook);

  copyFileSync(hookPath, target);
  chmodSync(target, 0o755);
  console.log(`✅ Installed ${hook}`);
}

console.log("\n🎉 All hooks installed successfully!");
console.log("ℹ️  Hooks are now active and will run on git operations");
console.log("\nTo skip hooks temporarily: git commit --no-verify\n");
