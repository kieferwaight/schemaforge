# TypeScript Configuration Schema

This folder contains the **TypeScript configuration schema namespace** for use in editor tooling and validation. The schema provides autocomplete and validation for `tsconfig.json` files.

---

## 📚 Table of Contents

### 📂 Files

- [schema.json](./schema.json) – TypeScript configuration schema
- [README.md](./README.md) – Documentation for the namespace
- [namespace.json](./namespace.json) – Namespace manifest

### 🟦 Usage

- [VSCode](#vscode-usage)
  - [Settings JSON](#settings-snippet)
- [JetBrains IDEs](#jetbrains-usage)
- [Command-line Validation](#cli-validation)
- [CI/CD Pipelines](#ci-cd-validation)

---

## 🟦 VSCode Usage <a name="vscode-usage"></a>

**Purpose:** Enable JSON schema awareness in VSCode for TypeScript configuration files.

**Schema file:** [schema.json](./schema.json)

### Settings JSON <a name="settings-snippet"></a>

Copy this JSON block directly into your `.vscode/settings.json` (workspace or user settings) to enable schema validation:

```json
"json.schemas": [
  {
    "fileMatch": ["tsconfig.json", "tsconfig.*.json"],
    "url": "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/tsconfig/schema.json"
  }
]
```

> Note: VSCode typically has built-in support for tsconfig.json validation. This schema can be used as an alternative or for custom validation rules.

---

## 🟦 JetBrains IDEs <a name="jetbrains-usage"></a>

**Purpose:** Map JSON schemas to files for validation and autocompletion in IntelliJ, WebStorm, and other JetBrains IDEs.

**How to use:**

1. Go to `Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings`.
2. Add a new schema entry pointing to the stable URL of `schema.json`.
3. Map to `tsconfig.json` and `tsconfig.*.json` files in your project.

---

## 🟦 Command-line Validation <a name="cli-validation"></a>

**Purpose:** Validate tsconfig.json files against the schema in scripts, CI, or local checks.

**Tools:**

- `ajv-cli` for JSON validation
- `jsonschema` Python library

**Example:**

```bash
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/tsconfig/schema.json -d tsconfig.json
```

---

## 🟦 CI/CD Pipelines <a name="ci-cd-validation"></a>

**Purpose:** Ensure all TypeScript configuration files conform to schema rules in your CI/CD pipeline.

**Examples:**

- GitHub Actions, GitLab CI, or Jenkins using `ajv-cli` for validation steps.
- Pre-commit hooks that validate tsconfig files against the stable schema URL.
- Build scripts that validate TypeScript configuration before compilation.

> Using a stable URL ensures consistent validation across all environments.

---

## References

- [TypeScript Documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [TypeScript Compiler Options](https://www.typescriptlang.org/tsconfig)
- [Build System Documentation](../../scripts/README.md)
