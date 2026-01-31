# Turbo.build Namespace

This folder contains the **Turbo.build schema namespace** for Turborepo configuration validation.

## 📚 Files

- [schema.json](./schema.json) – Latest Turborepo schema
- [schema.v1.json](./schema.v1.json) – Turborepo v1 schema
- [schema.v2.json](./schema.v2.json) – Turborepo v2 schema
- [namespace.json](./namespace.json) – Namespace configuration
- [package.json](./package.json) – Build automation
- [README.md](./README.md) – Documentation for the namespace

## 🔧 Building

### From namespace directory

```bash
# Build schemas
pnpm run build

# Clean schemas
pnpm run clean
```

### From repository root

```bash
# Build all namespaces
pnpm build

# Build this namespace only
pnpm --filter @schemas/turbo.build run build
```

## 🔵 VSCode Usage

Add to your `.vscode/settings.json`:

```json
"json.schemas": {
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/turbo.build/schema.json": "turbo.json"
}
```

## 🔵 JetBrains IDEs

**Purpose:** Map JSON schemas to files for validation and autocompletion in IntelliJ, WebStorm, PyCharm, or other JetBrains IDEs.

**How to use:**

1. Go to `Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings`.
2. Add a new schema entry pointing to the stable URL of the schema.
3. Map to `turbo.json` files in your projects.

## 🔵 Command-line Validation

**Purpose:** Validate `turbo.json` files against the schema in scripts, CI, or local checks.

**Tools:**

- `ajv-cli` for JSON validation
- Python `jsonschema` library

**Example:**

```bash
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/turbo.build/schema.json -d turbo.json
```

## 📥 Source

Schemas are automatically downloaded from:

- https://turborepo.dev/schema.json
- https://turborepo.dev/schema.v1.json
- https://turborepo.dev/schema.v2.json

## 🤖 Automation

Schemas are automatically updated weekly via GitHub Actions workflow.
