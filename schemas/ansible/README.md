# Ansible Namespace Schema

This folder contains the **Ansible schema namespace** and associated documentation for use in editor tooling, automation, and integration. The schema serves as a **stable anchor** for all dependent artifacts and derived files.

---

## 📚 Table of Contents

### 📂 Files

* [ansible.json](./ansible.json) – Complete schema including all $defs
* [README.md](./README.md) – Documentation for the namespace
* [artifacts/](./artifacts/) – Derived artifacts, snippets, templates, or examples

### 🟦 Usage

* [VSCode](#vscode-usage)

  * [Settings JSON](#settings-snippet)
* [JetBrains IDEs](#jetbrains-usage)
* [Command-line Validation](#cli-validation)
* [CI/CD Pipelines](#ci-cd-validation)
* [Swagger/OpenAPI & Form Generators](#openapi-form)
* [Documentation / Static Sites](#documentation-generation)

---

## 🟦 VSCode Usage <a name="vscode-usage"></a>

**Purpose:** Enable YAML schema awareness in VSCode for Ansible projects, covering playbooks, roles, tasks, vars, handlers, meta, defaults, and templates.

**Schema file:** [ansible.json](./ansible.json)

### Settings JSON <a name="settings-snippet"></a>

Copy this JSON block directly into your `.vscode/settings.json` (workspace or user settings) to enable schema validation:

```json
"yaml.schemas": {
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/playbook": "playbooks/**/*.yml",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/role": "roles/**/tasks/*.yml",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/task": "roles/**/tasks/*.yml",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/vars": "roles/**/vars/*.yml",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/handler": "roles/**/handlers/*.yml",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/meta": "roles/**/meta/*.yml",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/defaults": "roles/**/defaults/*.yml",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json#/$defs/templates": "roles/**/templates/**/*.yml"
}
```

---

## 🟦 JetBrains IDEs <a name="jetbrains-usage"></a>

**Purpose:** Map JSON/YAML schemas to files for validation and autocompletion in IntelliJ, PyCharm, WebStorm, and other JetBrains IDEs.

**How to use:**

1. Go to `Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings`.
2. Add a new schema entry pointing to the stable URL of `ansible.json`.
3. Map to relevant project files or directories.

---

## 🟦 Command-line Validation <a name="cli-validation"></a>

**Purpose:** Validate YAML or JSON files against the schema in scripts, CI, or local checks.

**Tools:**

* `ajv-cli` for JSON
* `pykwalify` or `yamale` for YAML
* `jsonschema` Python library

**Example:**

```bash
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/ansible/ansible.json -d playbooks/site.yml
```

---

## 🟦 CI/CD Pipelines <a name="ci-cd-validation"></a>

**Purpose:** Ensure all PRs or commits conform to schema rules.

**Examples:**

* GitHub Actions, GitLab CI, or Jenkins using `ajv-cli` or `pykwalify` for validation steps.
* Pre-commit hooks that validate YAML against the stable schema URL.

> Using a stable URL ensures consistent validation across all environments.

---

## 🟦 Swagger/OpenAPI & Form Generators <a name="openapi-form"></a>

**Purpose:** Use schema to generate forms, API validation, or UI components.

**Tools:**

* `react-jsonschema-form` or `uniforms` for frontend forms.
* Swagger/OpenAPI tooling referencing JSON schema for API models.

---

## 🟦 Documentation / Static Sites <a name="documentation-generation"></a>

**Purpose:** Generate documentation or enforce linting using schema definitions.

**Tools:**

* Spectral linter for OpenAPI or YAML
* Redoc / DocGen for interactive documentation
* CI/CD checks that pull remote schemas for static validation

> Ensures all derived artifacts and documentation stay consistent with the anchored schema.
