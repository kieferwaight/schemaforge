# JSON Schema.org Namespace

This folder contains the **JSON Schema.org namespace** and associated documentation for use in editor tooling, automation, and integration. The schemas serve as **stable anchors** for all dependent artifacts and derived files.

---

## 📚 Table of Contents

### 👂 Files

- [draft-2020-12.json](./schemas/json-schema.org/draft-2020-12.json) – Draft 2020-12 meta-schema
- [draft-07.json](./schemas/json-schema.org/draft-07.json) – Draft-07 meta-schema
- [README.md](./README.md) – Documentation for the namespace

### 🔵 Usage

- [JSON Schema.org Namespace](#json-schemaorg-namespace)
  - [📚 Table of Contents](#-table-of-contents)
    - [👂 Files](#-files)
    - [🔵 Usage](#-usage)
  - [🔵 VSCode Usage ](#-vscode-usage-)
    - [Settings JSON ](#settings-json-)
  - [🔵 JetBrains IDEs ](#-jetbrains-ides-)
  - [🔵 Command-line Validation ](#-command-line-validation-)
  - [🔵 CI/CD Pipelines ](#-cicd-pipelines-)
  - [🔵 Swagger/OpenAPI \& Form Generators ](#-swaggeropenapi--form-generators-)
  - [🔵 Documentation / Static Sites ](#-documentation--static-sites-)

---

## 🔵 VSCode Usage <a name="vscode-usage"></a>

**Purpose:** Enable JSON schema awareness in VSCode for projects that rely on standard JSON Schema drafts.

**Schema files:**

- [draft-2020-12.json](./schemas/json-schema.org/draft-2020-12.json)
- [draft-07.json](./schemas/json-schema.org/draft-07.json)

### Settings JSON <a name="settings-snippet"></a>

Copy this JSON block into your `.vscode/settings.json` to enable schema validation for `.json` files:

```json
"json.schemas": {
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/json-schema.org/draft-2020-12.json": "*.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/json-schema.org/draft-07.json": "*.json"
}
```

> Adjust file patterns if you want certain schemas to only apply to specific JSON files.

---

## 🔵 JetBrains IDEs <a name="jetbrains-usage"></a>

**Purpose:** Map JSON schemas to files for validation and autocompletion in IntelliJ, WebStorm, PyCharm, or other JetBrains IDEs.

**How to use:**

1. Go to `Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings`.
2. Add a new schema entry pointing to the stable URL of `draft-2020-12.json` or `draft-07.json`.
3. Map to relevant project files or directories.

---

## 🔵 Command-line Validation <a name="cli-validation"></a>

**Purpose:** Validate JSON files against the schema in scripts, CI, or local checks.

**Tools:**

- `ajv-cli` for JSON (supports draft-07 and 2020-12)
- Python `jsonschema` library (draft-07 or draft-2020-12)
- Other JSON Schema validators that support the desired draft

**Example:**

```bash
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/json-schema.org/draft-2020-12.json -d example.json
```

---

## 🔵 CI/CD Pipelines <a name="ci-cd-validation"></a>

**Purpose:** Ensure all PRs or commits conform to the schema rules.

**Examples:**

- GitHub Actions, GitLab CI, or Jenkins using `ajv-cli` for validation steps.
- Pre-commit hooks that validate JSON against the stable schema URL.

> Using a stable URL ensures consistent validation across all environments.

---

## 🔵 Swagger/OpenAPI & Form Generators <a name="openapi-form"></a>

**Purpose:** Use schema to generate forms, API validation, or UI components.

**Tools:**

- `react-jsonschema-form` or `uniforms` for frontend forms
- Swagger/OpenAPI tooling referencing JSON schema for API models

---

## 🔵 Documentation / Static Sites <a name="documentation-generation"></a>

**Purpose:** Generate documentation or enforce linting using schema definitions.

**Tools:**

- Spectral linter for OpenAPI or JSON/YAML
- Redoc / DocGen for interactive documentation
- CI/CD checks that pull remote schemas for static validation

> Ensures all derived artifacts and documentation stay consistent with the anchored JSON Schema drafts.
