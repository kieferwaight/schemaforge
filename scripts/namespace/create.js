#!/usr/bin/env node
import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join, resolve, dirname } from "path";
import { fileURLToPath } from "url";
import readline from "readline";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, "..", "..");
const schemasDir = join(projectRoot, "schemas");

// Utility for interactive prompts
function prompt(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function createNamespace() {
  console.log("🏗️  Create a new namespace\n");

  // Check for namespace argument
  const nameArg = process.argv[2];
  let name = nameArg;

  if (!name) {
    name = await prompt('📝 Namespace name (e.g., "my-tool.org"): ');
  }

  if (!name || name.trim() === "") {
    console.error("❌ Namespace name is required");
    process.exit(1);
  }

  name = name.trim();
  const namespacePath = join(schemasDir, name);

  // Check if namespace already exists
  if (existsSync(namespacePath)) {
    console.error(`❌ Namespace "${name}" already exists at ${namespacePath}`);
    process.exit(1);
  }

  console.log(`\n✓ Namespace name: ${name}\n`);

  // Ask for description
  const description = await prompt(
    '📖 Description (e.g., "My tool configuration schemas"): ',
  );

  if (!description || description.trim() === "") {
    console.error("❌ Description is required");
    process.exit(1);
  }

  // Ask for schema setup type
  console.log("\n🔧 Schema setup options:");
  console.log("  1. Sync schemas from remote URLs (like Ansible)");
  console.log("  2. Local schemas only (like Karabiner)");
  const setupType = await prompt("\nSelect setup type (1 or 2) [default: 2]: ");

  // Create namespace directory structure
  console.log(`\n🔨 Creating namespace directory...`);
  mkdirSync(namespacePath, { recursive: true });

  // Create namespace.json
  const namespaceConfig = {
    $schema: "../namespace/schema.json",
    name,
    description: description.trim(),
    version: "1.0.0",
  };

  // Add sync or scripts based on setup type
  if (setupType === "1") {
    // Sync setup - ask for schema URLs
    console.log(
      "\n📡 Enter schema files to sync (press Enter to skip or done):",
    );
    console.log("   Format: filename:url (e.g., schema.json:https://...)\n");

    const sync = {};
    let addMore = true;

    while (addMore) {
      const entry = await prompt("   Schema entry (filename:url): ");

      if (!entry || entry.trim() === "") {
        addMore = false;
        break;
      }

      const [file, url] = entry.split(":");
      if (file && url) {
        sync[file.trim()] = url.trim();
        console.log(`   ✓ Added ${file.trim()}`);
      } else {
        console.log(
          "   ⚠️  Invalid format. Use: filename:url or press Enter to skip",
        );
      }
    }

    if (Object.keys(sync).length > 0) {
      namespaceConfig.sync = sync;
    }
  } else {
    // Local setup - add build scripts
    console.log("\n🔨 Setting up for local schemas...");
    namespaceConfig.scripts = {
      build: "echo 'Add build scripts in namespace.json scripts section'",
    };
  }

  // Ask about tests
  const hasTests = await prompt("\n🧪 Add test files? (y/n) [default: n]: ");
  if (hasTests.toLowerCase() === "y") {
    namespaceConfig.tests = [];
    console.log(
      "   Note: Add test file paths to tests array in namespace.json",
    );
  }

  // Write namespace.json
  const namespacePath_json = join(namespacePath, "namespace.json");
  writeFileSync(
    namespacePath_json,
    JSON.stringify(namespaceConfig, null, 2) + "\n",
  );
  console.log(`✅ Created ${namespacePath_json}`);

  // Generate README.md
  const readmePath = join(namespacePath, "README.md");
  const readmeContent = generateReadme(
    name,
    description.trim(),
    setupType === "1",
  );
  writeFileSync(readmePath, readmeContent);
  console.log(`✅ Created ${readmePath}`);

  // Create package.json template
  const packagePath = join(namespacePath, "package.json");
  const packageJson = {
    name: `@schemaforge/${name}`,
    version: "1.0.0",
    description: description.trim(),
    private: true,
    type: "module",
  };
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + "\n");
  console.log(`✅ Created ${packagePath}`);

  console.log(`\n🎉 Namespace "${name}" created successfully!`);
  console.log(`📁 Location: ${namespacePath}`);
  console.log(`\nNext steps:`);
  console.log(`  1. Edit namespace.json to complete configuration`);
  console.log(`  2. Add schema files to the namespace directory`);
  console.log(`  3. Run: pnpm --filter ./schemas/${name} install`);
  console.log(`  4. Update README.md with specific usage instructions\n`);
}

function generateReadme(name, description, isSyncSetup) {
  const content = `# ${capitalize(name)} Namespace

This folder contains the **${capitalize(name)} schema namespace** and associated documentation for use in editor tooling, automation, and integration. ${isSyncSetup ? "Schemas are synced from remote sources." : "The schema serves as a **stable anchor** for all dependent artifacts and derived files."}

---

## 📚 Table of Contents

### 📂 Files

${generateFilesSection(name, isSyncSetup)}

### 🟦 Usage

* [VSCode](#vscode-usage)

  * [Settings JSON](#settings-snippet)
* [JetBrains IDEs](#jetbrains-usage)
* [Command-line Validation](#cli-validation)
* [CI/CD Pipelines](#ci-cd-validation)
* [Documentation / Static Sites](#documentation-generation)

---

## 🟦 VSCode Usage <a name="vscode-usage"></a>

**Purpose:** Enable schema awareness in VSCode for ${capitalize(name)} configuration files.

**Schema file:** [schema.json](./schema.json)

### Settings JSON <a name="settings-snippet"></a>

Copy this JSON block directly into your \`.vscode/settings.json\` (workspace or user settings) to enable schema validation:

\`\`\`json
"json.schemas": {
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/${name}/schema.json": "**/*.json"
}
\`\`\`

> Map individual schemas to specific files or patterns as needed.

---

## 🟦 JetBrains IDEs <a name="jetbrains-usage"></a>

**Purpose:** Map JSON schemas to files for validation and autocompletion in IntelliJ, PyCharm, WebStorm, and other JetBrains IDEs.

**How to use:**

1. Go to \`Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings\`.
2. Add a new schema entry pointing to the stable URL of your schema file.
3. Map to relevant project files or directories.

---

## 🟦 Command-line Validation <a name="cli-validation"></a>

**Purpose:** Validate JSON files against schemas in scripts, CI, or local checks.

**Tools:**

* \`ajv-cli\` for JSON schema validation
* \`json-schema-ref-parser\` for dereferencing \`\\$ref\`
* \`jsonschema\` Python library

**Example:**

\`\`\`bash
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/${name}/schema.json -d ./config.json
\`\`\`

---

## 🟦 CI/CD Pipelines <a name="ci-cd-validation"></a>

**Purpose:** Ensure all PRs or commits conform to schema rules.

**Examples:**

* GitHub Actions, GitLab CI, or Jenkins using \`ajv-cli\` for validation steps.
* Pre-commit hooks that validate files against the stable schema URL.

> Using a stable URL ensures consistent validation across all environments.

---

## 🟦 Documentation / Static Sites <a name="documentation-generation"></a>

**Purpose:** Generate documentation or enforce linting using schema definitions.

**Tools:**

* Spectral linter for JSON schema validation
* Schema documentation generators
* CI/CD checks that pull remote schemas for static validation

> Ensures all derived artifacts and documentation stay consistent with the anchored schemas.
`;

  return content;
}

function generateFilesSection(name, isSyncSetup) {
  if (isSyncSetup) {
    return `* [schema.json files] – Synced from remote sources
* [README.md](./README.md) – Documentation for the namespace
* [namespace.json](./namespace.json) – Namespace configuration
* [package.json](./package.json) – Build automation`;
  } else {
    return `* [schema.json] – Root schema definition
* [README.md](./README.md) – Documentation for the namespace
* [namespace.json](./namespace.json) – Namespace configuration
* [package.json](./package.json) – Build automation
* Additional schema files as needed`;
  }
}

function capitalize(str) {
  return str
    .split(/[-.]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Run the creation flow
createNamespace().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
