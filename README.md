# ⚒️ schemaforge

[![Code of Conduct](https://img.shields.io/badge/Code%20of%20Conduct-Contributor%20Covenant-blue.svg)](CODE_OF_CONDUCT.md)

![GitHub stars](https://img.shields.io/github/stars/kieferwaight/schemaforge?style=social)
![GitHub forks](https://img.shields.io/github/forks/kieferwaight/schemaforge?style=social)
![Last commit](https://img.shields.io/github/last-commit/kieferwaight/schemaforge)
![Issues](https://img.shields.io/github/issues/kieferwaight/schemaforge)
![License](https://img.shields.io/badge/license-CC0%2FMIT-lightgrey)

A curated collection of versioned schemas for developers, with strong guarantees around stability, extensibility, and contributor freedom.

## About

`schemaforge` is a **living collection of schemas, namespaces, and derived artifacts** for developers and editors.

Its purpose is to **preserve, organize, and maintain schemas**, making them **accessible, versioned, and ready for integration**.

## Key Features & Benefits

- **🛡️ Dependable Anchoring**

  Every schema resides in a namespace that serves as a stable anchor for all dependent artifacts, integrations, and derived files.

- **↩️ Backwards Compatibility**

  Changes are made with respect for existing implementations, preserving continuity for users and contributors.

- **🌱 Extendable and Growth Friendly**

  Namespaces are designed to evolve over time, supporting growth and iteration without breaking existing schemas or integrations.

- **⚡ Ease of Use**

  Schemas can be integrated directly into editors, pipelines, or tooling without reliance on external URLs.

- **📖 Clear Documentation Expectations**

  Each namespace includes a README.md that defines purpose, intent, usage, and context so users know what to expect.

- **🎨 Safe Experimentation**

  Experimentation and derived artifacts are encouraged, with [CONTRIBUTING.md](./CONTRIBUTING.md) outlining shared guidelines that maintain trust, continuity, and long term usability.

---

## Getting Started

<!-- NAMESPACES-START -->
Explore the available namespaces:

- [ansible](./schemas/ansible/README.md) — Ansible schemas
- [json-schema.org](./schemas/json-schema.org/README.md) — JSON Schema metaschemas
- [karabiner-elements.pqrs.org](./schemas/karabiner-elements.pqrs.org/README.md) — Karabiner-Elements configuration schemas
- [namespace](./schemas/namespace/README.md) — Internal tooling schemas for the schema build system
- [nestjs.nest-cli](./schemas/nestjs.nest-cli/README.md) — NestJS CLI configuration schema
- [npm.package](./schemas/npm.package/README.md) — npm package.json schema
- [tsconfig](./schemas/tsconfig/README.md) — TypeScript configuration schema
- [turbo.build](./schemas/turbo.build/README.md) — Turbo.build configuration schemas
- [vscode-core-schemas](./schemas/vscode-core-schemas/README.md) — VS Code core configuration schemas
- [vscode-core-schemas-with-snippets](./schemas/vscode-core-schemas-with-snippets/README.md) — VS Code core schemas with snippets
<!-- NAMESPACES-END -->

Each namespace includes full schema files, usage instructions, and documentation for integration.

Users can use this directly for integrations.

---

## Who is this for?

schemaforge is designed for:
- Tool authors who need stable JSON Schemas
- Teams validating configuration files in CI
- Editor integrations (VS Code, JetBrains, etc.)
- Infrastructure and platform engineers
- Open-source projects needing schema versioning


## Common Use Cases

- JSON Schema validation in CI pipelines
- Type-safe configuration with TypeScript
- Editor auto-completion via JSON Schema
- Maintaining backwards-compatible schemas
- Schema distribution without external URLs

---

## For Contributors

### Quick Start

1. **Clone and setup:**

   ```bash
   git clone https://github.com/kieferwaight/schemaforge.git
   cd schemaforge
   pnpm run setup  # Install dependencies
   ```

2. **Run automated tasks:**
   ```bash
   pnpm run build    # Build all namespaces
   pnpm run test     # Validate all namespaces
   pnpm run clean    # Clean generated files
   ```

### Development Workflow

- Git hooks run automatically on commits and merges
- Pre-commit hook builds schemas and keeps README in sync
- Post-merge hook rebuilds if schema configuration changed
- See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines

---

## Build & Automation

This repository uses pnpm workspaces and modular scripts for building, validating, and managing schemas across namespaces. Common tasks include:

- `pnpm run setup` — Install dependencies (run once after cloning)
- `pnpm run build` — Build all namespaces
- `pnpm run test` — Validate all namespace schemas
- `pnpm run clean` — Clean generated files across all namespaces
- `pnpm run setup:hooks` — Install git hooks for automated builds
- `pnpm run namespace:create` — Interactive wizard to create a new namespace
- `pnpm run namespace:list` — List namespaces and metadata
- `pnpm run readme:update` — Update README with current namespaces
- `pnpm --filter @schemas/<namespace> run <script>` — Run namespace-specific commands

For details on advanced usage, see [scripts/README.md](scripts/README.md).

---

## Namespace-Driven CI/CD

The `namespace.json` file is the source of truth for CI/CD and build automation. It defines how a namespace is synced, built, tested, and documented. CI and local workflows read these declarations to keep behavior consistent across environments.

Typical `namespace.json` responsibilities include:

- Syncing remote schemas via `sync` definitions
- Declaring namespace-specific build scripts via `scripts`
- Enumerating test files so validation can run in CI
- Providing metadata used in README generation

If you update schemas or tests, update the namespace’s `namespace.json` to keep CI/CD in sync.

---

## Contributors

The following concepts are designed to preserve the stability of existing integrations while encouraging experimentation and growth.

For detailed guidance, please review [CONTRIBUTING.md](./CONTRIBUTING.md)

### Terminology

- **Namespace:** Organizational unit anchored to a specific integration and purpose.
- **Anchoring:** A schema serving as the authoritative source for all dependent artifacts.
- **Artifacts:** Any schema, derived file, snippet, or implementation tied to a namespace.

### High level guidelines

- Each namespace must include at least one schema and a README.md that clearly defines its intent and purpose.
- Changes must preserve backwards compatibility for existing integrations.
- Derived artifacts are permitted, but must be clearly documented and isolated from paths where users expect stable anchoring.
- Forks or experimental variants must maintain traceability and backwards compatibility.

### Repository Structure

| Path                             | Description                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------- |
| `schemas/<namespace>/*.json`     | Namespaced schema files that serve as the authoritative anchor for the namespace. |
| `schemas/<namespace>/README.md`  | Documentation describing the purpose, intent, and usage of the namespace.         |
| `schemas/<namespace>/artifacts/` | Derived or generated artifacts associated with the namespace.                     |

---

## 📜 License

- Schemas and content: CC0 1.0 Universal
- Free to use, modify, and redistribute.
- Author metadata may be preserved as goodwill; no ownership is claimed.
- Scripts and tooling: MIT License
- Free to use, modify, and redistribute.
- Includes liability disclaimer.

---

## Community Standards

- This project follows a [Code of Conduct](CODE_OF_CONDUCT.md) to foster a welcoming and inclusive environment.
- Please review our [Security Policy](.github/SECURITY.md) for how to report vulnerabilities or security issues.
- Issue and Pull Request templates are available to help guide your contributions and bug reports.

---

`schemaforge` is more than an archive. It’s a workshop for schemas, namespaces, and artifacts.

Explore, fork, and integrate with confidence, knowing schemas are preserved, versioned, and ready for use, while contributors can safely experiment and evolve namespaces without risk to existing users.
