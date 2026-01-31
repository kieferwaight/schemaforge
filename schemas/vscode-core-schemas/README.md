# VSCode Core Schemas Namespace

This folder contains the **VSCode Core Schemas namespace** and associated documentation for use in editor tooling, automation, and integration. The schemas serve as **stable anchors** for all dependent artifacts and derived files.

---

## 📚 Table of Contents

### 📂 Files

- [schema.json](./schema.json) – Root schema referencing all sub-schemas
- [README.md](./README.md) – Documentation for the namespace
- [schemas/](./schemas/) – Individual schema files including settings, tasks, snippets, keybindings, themes, and more

### 🟦 Usage

- [VSCode](#vscode-usage)
- [JetBrains IDEs](#jetbrains-usage)
- [Command-line Validation](#cli-validation)
- [CI/CD Pipelines](#ci-cd-validation)
- [Swagger/OpenAPI & Form Generators](#openapi-form)
- [Documentation / Static Sites](#documentation-generation)

---

## 🟦 VSCode Usage <a name="vscode-usage"></a>

**Purpose:** Enable JSON/YAML schema awareness in VSCode for VSCode configuration files, covering `settings.json`, keybindings, snippets, launch configurations, and extensions.

**Schema file:** [schema.json](./schema.json)

### Settings JSON <a name="settings-snippet"></a>

Add this block to your `.vscode/settings.json`:

```json
"json.schemas": {
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/argv": "*.argv.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/colorTheme": "*.color-theme.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/extensions": "*.extensions.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/globalSnippets": "*.code-snippets",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/iconTheme": "*.icon-theme.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/icons": "*.icons.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/ignoredSettings": "*.ignoredSettings.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/keybindings": "keybindings.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/languageConfiguration": "*.language-configuration.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/launch": "launch.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/productIconTheme": "*.product-icon-theme.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/settings/properties/default": "*.settings.default.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/settings/properties/folder": "*.settings.folder.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/settings/properties/machine": "*.settings.machine.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/settings/properties/resourceLanguage": "*.settings.resourceLanguage.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/settings/properties/user": "*.settings.user.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/settings/properties/workspace": "*.settings.workspace.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/snippets": "*.snippets.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/tasks": "tasks.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/textmateColors": "*.textmate-colors.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/tokenStyling": "*.token-styling.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/vscodeExtensions": "*.vscode-extensions.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/workbenchColors": "*.workbench-colors.json",
  "https://raw.githubusercontent.com/kieferwaight/schemaforge/main/schemas/vscode-core-schemas/schema.json#/properties/workspaceConfig": "*.workspaceConfig.json"
}

Each URL points to the hosted schema on GitHubusercontent, and the fragment (#...) references the specific sub-schema or $defs in the root schema.
```
