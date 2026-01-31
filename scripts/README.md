# Scripts Documentation

This folder contains all build automation, testing, and maintenance scripts for the SchemaForge project. Scripts are organized by function:

- **Root scripts** – Main workflow orchestration
- **namespace/** – Namespace creation and management
- **schema/** – Schema bundling and validation
- **readme/** – Documentation generation
- **type/** – TypeScript type generation
- **hooks/** – Git hooks for CI/CD integration
- **setup/** – Development environment setup

---

## 📋 Root Scripts

### `build.sh`

**Purpose:** Build all namespaces by syncing schemas, generating package.json files, and triggering namespace-specific builds.

**Usage:**

```bash
pnpm run build                  # Build all namespaces
pnpm run build --force          # Force re-download all synced schemas
```

**What it does:**

1. Lists all available namespaces
2. Syncs schemas from remote URLs (if configured)
3. Generates package.json for each namespace
4. Installs namespace dependencies
5. Runs namespace-specific build scripts (bundling, type generation, etc.)

---

### `test.sh`

**Purpose:** Validate all JSON test files against their corresponding schemas.

**Usage:**

```bash
pnpm run test
```

**What it does:**

1. Discovers all namespaces with test files in `namespace.json`
2. For each test file, validates it against the schema defined in its `$schema` property
3. Tracks pass/fail/skip counts
4. Exits with code 1 if any tests fail

---

### `clean.sh`

**Purpose:** Clean up generated files and node_modules.

**Usage:**

```bash
pnpm run clean                  # Remove node_modules and build artifacts
pnpm run clean --force          # Also remove generated package.json and pnpm-lock.yaml
```

**What it does:**

1. Removes node_modules from root and all namespace directories
2. With --force: Also removes generated package.json files and pnpm-lock.yaml

---

## 🔧 Namespace Scripts (`namespace/`)

### `create.js`

**Purpose:** Create a new schema namespace with interactive setup.

**Usage:**

```bash
pnpm namespace:create                   # Interactive mode
pnpm namespace:create my-tool.org       # Create with name, then answer prompts
```

**Interactive prompts:**

1. Namespace name (e.g., `my-tool.org`)
2. Description (e.g., `My tool configuration schemas`)
3. Setup type:
   - Type 1: Sync schemas from remote URLs (like Ansible)
   - Type 2: Local schemas only (like Karabiner)
4. Schema files to sync (if Type 1 chosen)
5. Whether to include test files

**Generated files:**

- `namespace.json` – Namespace configuration
- `README.md` – Documentation template with VSCode, JetBrains, CLI, and CI/CD sections
- `package.json` – Build configuration

---

### `sync.js`

**Purpose:** Download schema files from remote URLs defined in namespace.json.

**Usage:**

```bash
./scripts/namespace/sync.js <namespace>             # Sync schemas (skip if exists)
./scripts/namespace/sync.js <namespace> --force     # Re-download all schemas
```

**Configuration:** Reads `sync` property from `namespace.json`:

```json
{
  "sync": {
    "schema-name.json": "https://raw.githubusercontent.com/.../schema.json"
  }
}
```

**Output:**

- ✅ Downloaded – Successfully fetched file
- ⚠️ Skipped – File already exists (use --force to override)
- ❌ Failed – Error during download

---

### `package.js`

**Purpose:** Generate package.json for a namespace based on its namespace.json configuration.

**Usage:**

```bash
./scripts/namespace/package.js <namespace>
```

**Generated package.json structure:**

```json
{
  "name": "@schemas/namespace-name",
  "version": "1.0.0",
  "description": "...",
  "private": true,
  "scripts": {
    /* from namespace.json */
  }
}
```

---

### `list.js`

**Purpose:** List all available namespaces with their metadata.

**Usage:**

```bash
pnpm namespace:list                     # Human-readable format
pnpm namespace:list --json              # JSON output (used by scripts)
```

**Output (human-readable):**

```
📦 ansible
📖 Ansible schemas

📦 karabiner-elements.pqrs.org
📖 Karabiner-Elements configuration schemas
```

---

### `scripts/list.js`

**Purpose:** List and execute custom build scripts defined in each namespace.

**Configuration:** In `namespace.json`:

```json
{
  "scripts": {
    "build:bundle": "../../scripts/schema/bundle.js ...",
    "build:types": "../../scripts/type/generate.js"
  }
}
```

---

## 📦 Schema Scripts (`schema/`)

### `bundle.js`

**Purpose:** Bundle JSON schemas by inlining all $ref references into a single file.

**Usage:**

```bash
./scripts/schema/bundle.js <input-schema> <output-file>
```

**Example:**

```bash
./scripts/schema/bundle.js ./artifacts/schemas/Karabiner.json ./karabiner.json
```

**What it does:**

1. Reads the input schema file
2. Dereferences all $ref pointers (inlines nested schemas)
3. Removes duplicate $id fields to avoid validation errors
4. Writes the bundled schema to output file

**Benefits:**

- Single file schemas for easier sharing and versioning
- No external references needed
- Compatible with tools that don't support $ref dereferencing

---

### `validate.js`

**Purpose:** Validate JSON files against their associated schemas.

**Usage:**

```bash
./scripts/schema/validate.js <json-file>
```

**Example:**

```bash
./scripts/schema/validate.js ./schemas/karabiner-elements.pqrs.org/test/karabiner-config.json
```

**How it works:**

1. Reads the JSON file
2. Extracts the `$schema` property to locate the schema
3. Validates the JSON against the schema using AJV
4. Shows validation errors if any

---

## 📝 README Scripts (`readme/`)

### `update.js`

**Purpose:** Automatically update root README.md with current namespace list.

**Usage:**

```bash
pnpm run readme:update
```

**What it does:**

1. Scans all namespaces in `./schemas/`
2. Reads namespace.json for each one
3. Generates markdown links in the format: `- [name](path) — description`
4. Replaces content between `<!-- NAMESPACES-START -->` and `<!-- NAMESPACES-END -->` markers

**Markers in README.md:**

```markdown
<!-- NAMESPACES-START -->
<!-- Generated namespace list goes here -->
<!-- NAMESPACES-END -->
```

---

## 🔤 Type Generation Scripts (`type/`)

### `generate.js`

**Purpose:** Generate TypeScript type definitions from JSON schemas.

**Usage:**

```bash
./scripts/type/generate.js
```

**How it works:**

1. Looks for all `.json` files in `./artifacts/schemas/`
2. Uses `json-schema-to-typescript` to generate TypeScript types
3. Outputs `.ts` files to `./artifacts/types/`

**Example output:**

```typescript
// From Karabiner.json
export interface Karabiner {
  global?: GlobalSettings;
  profiles: Profile[];
}

export interface Profile {
  name: string;
  complex_modifications?: ComplexModification[];
  // ... more properties
}
```

---

## 🔗 Git Hooks (`hooks/`)

### `pre-commit`

**Purpose:** Run build, tests, and README updates before committing.

**Automatic execution:** When running `git commit`

**What it does:**

1. ✅ Runs `pnpm run build` (warns on failure but doesn't block)
2. 🧪 Runs `pnpm run test` (blocks commit if tests fail)
3. 📝 Runs `pnpm run readme:update` (blocks commit if fails)
4. 📋 Stages any changes to schemas and README.md

**To skip hooks temporarily:**

```bash
git commit --no-verify
```

---

### `post-merge`

**Purpose:** Rebuild schemas after merging when dependencies or configuration changes.

**Automatic execution:** After `git merge` operations

**What it does:**

1. Checks if `package.json` or `pnpm-lock.yaml` changed
2. If yes, runs `pnpm install`
3. Checks if namespace configuration changed
4. If yes, rebuilds schemas with `pnpm run build`

---

## ⚙️ Setup Scripts (`setup/`)

### `hooks.js`

**Purpose:** Install git hooks into the local repository.

**Usage:**

```bash
pnpm setup:hooks
```

**What it does:**

1. Finds all executable files in `./scripts/hooks/`
2. Copies them to `./.git/hooks/`
3. Makes them executable
4. Outputs installation status

**Output:**

```
📦 Installing git hooks...

✅ Installed post-merge
✅ Installed pre-commit

🎉 All hooks installed successfully!
```

---

## 🔄 Common Workflows

### Adding a new namespace

```bash
# Create namespace (interactive)
pnpm namespace:create

# Edit schemas in the new namespace
# Add tests if applicable

# Commit changes
git add schemas/new-namespace
git commit -m "Add new-namespace schemas"
# pre-commit hook will run automatically
```

### Syncing schemas from remote sources

```bash
# In namespace.json, add "sync" property with URLs
{
  "sync": {
    "schema.json": "https://..."
  }
}

# Run build to sync
pnpm run build --force
```

### Validating test files

```bash
# Validate specific namespace tests
./scripts/schema/validate.js ./schemas/namespace-name/test/config.json

# Validate all tests
pnpm run test
```

### Generating TypeScript types

```bash
# From within a namespace directory
pnpm run build:types

# Or run from root (if namespace has build:types script)
pnpm run build
```

---

## 📊 Script Dependencies

```
pnpm run build
├── ./scripts/namespace/list.js
├── ./scripts/namespace/sync.js
├── ./scripts/namespace/package.js
└── pnpm --filter install

pnpm run test
├── ./scripts/test.sh
└── ./scripts/schema/validate.js

pnpm run clean
├── Removes node_modules
└── (--force) Removes generated files

pnpm namespace:create
├── ./scripts/namespace/create.js
└── Generates README.md template
```

---

## 🆘 Troubleshooting

### Error: "namespace parameter required"

- Make sure you're passing the namespace name as an argument
- Example: `./scripts/namespace/sync.js my-namespace`

### Error: "README.md not found"

- Run from project root: `cd /path/to/schemas`

### Tests failing after changes

- Run `pnpm run test` to see validation errors
- Check that JSON files have valid `$schema` paths
- Ensure schema definitions are correct

### Git hooks not running

- Reinstall hooks: `pnpm setup:hooks`
- Check permissions: `ls -la .git/hooks/`
- To skip temporarily: `git commit --no-verify`

---

## 🔍 Environment Requirements

- **Node.js**: v20+
- **pnpm**: v9+
- **Bash**: For shell scripts (macOS/Linux)
- **jq**: For JSON processing in bash scripts

---

## 📚 Related Files

- [Root package.json](../package.json) – Defines all pnpm scripts
- [Namespace schema](../schemas/namespace/schema.json) – Validates namespace.json files
- [Contributing guide](../CONTRIBUTING.md) – Development guidelines
