# NestJS CLI Configuration Schema

This folder contains the **NestJS CLI configuration schema namespace** for use in editor tooling and validation. The schema provides autocomplete and validation for `nest-cli.json` files.

---

## 📚 Table of Contents

### 📂 Files

- [schema.json](./schema.json) – NestJS CLI configuration schema
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

**Purpose:** Enable JSON schema awareness in VSCode for NestJS CLI configuration files.

**Schema file:** [schema.json](./schema.json)

### Settings JSON <a name="settings-snippet"></a>

Copy this JSON block directly into your `.vscode/settings.json` (workspace or user settings) to enable schema validation:

```json
"json.schemas": [
  {
    "fileMatch": ["nest-cli.json"],
    "url": "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/nestjs.nest-cli/schema.json"
  }
]
```

---

## 🟦 JetBrains IDEs <a name="jetbrains-usage"></a>

**Purpose:** Map JSON schemas to files for validation and autocompletion in IntelliJ, WebStorm, and other JetBrains IDEs.

**How to use:**

1. Go to `Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings`.
2. Add a new schema entry pointing to the stable URL of `schema.json`.
3. Map to `nest-cli.json` files in your project.

---

## 🟦 Command-line Validation <a name="cli-validation"></a>

**Purpose:** Validate `nest-cli.json` files against the schema in scripts, CI, or local checks.

**Tools:**

- `ajv-cli` for JSON validation
- `jsonschema` Python library

**Example:**

```bash
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/nestjs.nest-cli/schema.json -d nest-cli.json
```

---

## 🟦 CI/CD Pipelines <a name="ci-cd-validation"></a>

**Purpose:** Ensure all NestJS CLI configuration files conform to schema rules in your CI/CD pipeline.

**Examples:**

- GitHub Actions, GitLab CI, or Jenkins using `ajv-cli` for validation steps.
- Pre-commit hooks that validate `nest-cli.json` against the stable schema URL.

> Using a stable URL ensures consistent validation across all environments.

---

## References

- [NestJS Documentation](https://docs.nestjs.com/)
- [Build System Documentation](../../scripts/README.md)
