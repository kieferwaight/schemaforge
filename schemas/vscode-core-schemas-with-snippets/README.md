# VS Code Core Schemas with Snippets

This folder contains **VS Code core schemas with snippets support** for use in editor tooling and validation. These schemas provide enhanced autocomplete and validation for VS Code configuration files with snippet integration.

---

## 📚 Table of Contents

### 📂 Files

- [vscode-code-snippet.json](./vscode-code-snippet.json) – VS Code snippet schema
- [vscode-settings.json](./vscode-settings.json) – VS Code settings schema with snippets
- [vscode-tasks.json](./vscode-tasks.json) – VS Code tasks schema with snippets
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

**Purpose:** Enable JSON schema awareness in VSCode for VS Code configuration files with enhanced snippet support.

**Schema files:** [vscode-code-snippet.json](./vscode-code-snippet.json), [vscode-settings.json](./vscode-settings.json), [vscode-tasks.json](./vscode-tasks.json)

### Settings JSON <a name="settings-snippet"></a>

Copy this JSON block directly into your `.vscode/settings.json` (workspace or user settings) to enable schema validation:

```json
"json.schemas": [
  {
    "fileMatch": ["*.code-snippets"],
    "url": "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas-with-snippets/vscode-code-snippet.json"
  },
  {
    "fileMatch": [".vscode/settings.json"],
    "url": "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas-with-snippets/vscode-settings.json"
  },
  {
    "fileMatch": [".vscode/tasks.json", "tasks.json"],
    "url": "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas-with-snippets/vscode-tasks.json"
  }
]
```

> Note: These schemas include enhanced snippet definitions beyond the standard VS Code schemas.

---

## 🟦 JetBrains IDEs <a name="jetbrains-usage"></a>

**Purpose:** Map JSON schemas to files for validation and autocompletion in IntelliJ, WebStorm, and other JetBrains IDEs.

**How to use:**

1. Go to `Preferences → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings`.
2. Add schema entries for each file type pointing to their respective stable URLs.
3. Map to relevant VS Code configuration files in your project.

---

## 🟦 Command-line Validation <a name="cli-validation"></a>

**Purpose:** Validate VS Code configuration files against schemas in scripts, CI, or local checks.

**Tools:**

- `ajv-cli` for JSON validation
- `jsonschema` Python library

**Example:**

```bash
# Validate snippet files
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas-with-snippets/vscode-code-snippet.json -d .vscode/my-snippets.code-snippets

# Validate settings
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas-with-snippets/vscode-settings.json -d .vscode/settings.json

# Validate tasks
ajv validate -s https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas-with-snippets/vscode-tasks.json -d .vscode/tasks.json
```

---

## 🟦 CI/CD Pipelines <a name="ci-cd-validation"></a>

**Purpose:** Ensure all VS Code configuration files conform to schema rules in your CI/CD pipeline.

**Examples:**

- GitHub Actions, GitLab CI, or Jenkins using `ajv-cli` for validation steps.
- Pre-commit hooks that validate VS Code configuration files against schema URLs.
- Workspace setup validation scripts.

> Using stable URLs ensures consistent validation across all environments.

---

## References

- [VS Code Documentation](https://code.visualstudio.com/docs)
- [VS Code Snippets Guide](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- [VS Code Tasks Guide](https://code.visualstudio.com/docs/editor/tasks)
- [Build System Documentation](../../scripts/README.md)
