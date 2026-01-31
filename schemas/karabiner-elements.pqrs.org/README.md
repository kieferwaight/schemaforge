# Karabiner Elements PQRS Namespace

This folder contains the **Karabiner Elements PQRS schema namespace** and associated documentation for use in editor tooling, automation, and integration. The schemas serve as **stable anchors** for all dependent artifacts and derived files, including key codes, devices, manipulators, complex modifications, and more.

---

## 📚 Table of Contents

### 📂 Files

- [artifacts/schemas/](./artifacts/schemas/) – All individual JSON schemas for KeyCodes, Devices, Manipulators, Conditions, ComplexModifications, and configuration objects
- [artifacts/types/](./artifacts/types/) – TypeScript definitions generated from schemas; types mirror the JSON schemas
- [karabiner.json](./karabiner.json) – Bundled root configuration schema
- [complex-modification.json](./complex-modification.json) – Bundled complex modification schema
- [namespace.json](./namespace.json) – Namespace configuration
- [package.json](./package.json) – Build automation
- [README.md](./README.md) – Documentation for the namespace

### 🟦 Usage

- [Karabiner Elements PQRS Namespace](#karabiner-elements-pqrs-namespace)
  - [📚 Table of Contents](#-table-of-contents)
    - [📂 Files](#-files)
    - [🟦 Usage](#-usage)
  - [🟦 VSCode Usage ](#-vscode-usage-)
    - [Settings JSON ](#settings-json-)
  - [🟦 JetBrains IDEs ](#-jetbrains-ides-)
  - [🟦 Command-line Validation ](#-command-line-validation-)
  - [🟦 CI/CD Pipelines ](#-cicd-pipelines-)
  - [🟦 TypeScript / Code Integration ](#-typescript--code-integration-)
  - [🟦 Documentation / Static Sites ](#-documentation--static-sites-)

---

## 🟦 VSCode Usage <a name="vscode-usage"></a>

**Purpose:** Enable JSON schema awareness in VSCode for Karabiner Elements configuration and related JSON files.

**Schema files:**

- [AnyKeyCode.json](./artifacts/schemas/AnyKeyCode.json)
- [AppleVendorKeyCodes.json](./artifacts/schemas/AppleVendorKeyCodes.json)
- [ArrowKeyCodes.json](./artifacts/schemas/ArrowKeyCodes.json)
- ... (all other schema files in `artifacts/schemas/`)

### Settings JSON <a name="settings-snippet"></a>

Copy this JSON block into your `.vscode/settings.json` to enable schema validation for `.json` files:

```json
"json.schemas": {
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/karabiner-elements.pqrs.org/schema.json": "**/*.json"
}
```

> Map individual schemas to specific files or patterns as needed. The TypeScript types in `artifacts/types/` mirror all schema definitions.

---

## 🟦 JetBrains IDEs <a name="jetbrains-usage"></a>

**Purpose:** Provide autocompletion and validation in IntelliJ, WebStorm, PyCharm, and other JetBrains IDEs.

**How to use:**

1. Go to `Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings`.
2. Add a new schema entry pointing to the stable GitHubusercontent URL of `Schema.json`.
3. Map to relevant project files or directories.

---

## 🟦 Command-line Validation <a name="cli-validation"></a>

**Purpose:** Validate JSON files against schemas in scripts, CI, or local checks.

**Tools:**

- `ajv-cli` (supports draft-07 and draft-2020-12)
- Node.js `json-schema-ref-parser` for dereferencing `$ref`
- Python `jsonschema` library

**Example:**

```bash
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/karabiner-elements.pqrs.org/artifacts/schemas/Schema.json -d ./karabiner.json
```

---

## 🟦 CI/CD Pipelines <a name="ci-cd-validation"></a>

**Purpose:** Ensure commits or pull requests conform to schema rules.

**Examples:**

- GitHub Actions, GitLab CI, or Jenkins using `ajv-cli` or `json-schema-ref-parser` for validation.
- Pre-commit hooks that validate JSON against the anchored schemas.

> Using a stable GitHubusercontent URL ensures consistent validation across all environments.

---

## 🟦 TypeScript / Code Integration <a name="typescript-usage"></a>

**Purpose:** Use TypeScript types generated from schemas for IDE autocompletion, type safety, and developer tooling.

**Artifacts:**

- `artifacts/types/` – TypeScript definitions corresponding to each JSON schema

**Usage Example:**

```ts
import { Manipulator } from "./artifacts/types/Manipulator";

const example: Manipulator = {
  type: "basic",
  from: { key_code: "a" },
  to: [{ key_code: "b" }],
};
```

> All types mirror the structure and definitions of the JSON schemas.

---

## 🟦 Documentation / Static Sites <a name="documentation-generation"></a>

**Purpose:** Generate documentation or enforce linting using schema definitions.

**Tools:**

- `json-schema-ref-parser` for dereferencing schemas
- Spectral linter for JSON configuration
- CI/CD checks that pull remote schemas for static validation

> Ensures all artifacts, types, and documentation stay consistent with the anchored Karabiner Elements schemas hosted on GitHubusercontent.
