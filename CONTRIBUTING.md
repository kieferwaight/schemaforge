# Contributing to schemaforge

Welcome. `schemaforge` is a living repository of schemas, namespaces, and derived artifacts. Contributions are welcome from anyone. To maintain integrity and long term usefulness, all contributions must follow the core principles that govern schemaforge namespaces.

## 🚀 Getting Started

### Initial Setup

After cloning the repository, install dependencies and git hooks:

```bash
# Install dependencies
pnpm run setup

# Install git hooks for team consistency
pnpm run setup:hooks

# Build all namespaces
pnpm run build
```

This ensures your local environment is properly configured and in sync with the repository.

### Git Hooks

This repository includes automated git hooks to maintain consistency:

- **Pre-commit hook**: Automatically builds schemas and updates README.md before each commit
- **Post-merge hook**: Automatically rebuilds schemas after pulling changes

To skip the pre-commit hook (not recommended): `git commit --no-verify`

For details, see [scripts/README.md](scripts/README.md#git-hooks-hooks).

## 🛡️ Foundational Rules

Every namespace in `schemaforge` exists to preserve, organize, and provide a reliable anchor for schemas. To ensure consistency and protect existing integrations, all contributions must adhere to the following rules.

### 1. Schema Anchoring

- Every namespace must include at least one schema that serves as the canonical source of truth.
- This schema provides the stable anchor for all dependent artifacts, derived files, and integrations.

### 2. Backwards Compatibility

- Changes to schemas or namespace artifacts must not break existing usage.
- Backwards compatibility ensures that users depending on previous versions remain functional.

### 3. Intentional Documentation

- Every namespace must include a `README.md` that clearly documents:
  - The purpose and scope of the namespace
  - Intended usage or integrations
  - Relevant context, derived artifacts, or tooling
- This documentation ensures discoverability and shared understanding for contributors and users.

## 🔄 Principles for Evolution and Growth

Once the foundational rules are met, namespaces are free to evolve.

- **Schema Evolution**
  - Schemas may be extended, refined, regenerated, or newly introduced.
  - Schemas may be generated from types, tooling, or external sources, provided the namespace intent remains intact.

- **Derived Artifacts**
  - Namespaces may include types, snippets, templates, examples, or scripts derived from the schema.
  - Derived artifacts must be clearly documented and discoverable from the namespace README.

- **Forking and Experimental Namespaces**
  - Schemas may be forked into new or experimental namespaces to explore alternative usage patterns.
  - Original namespaces must retain backwards compatibility and traceability where applicable.

- **Metadata Preservation**
  - Existing metadata, comments, and author attribution should be preserved whenever present.
  - New contributions may extend metadata without enforcing rigid or global structure.

- **Discoverability and Traceability**
  - All schemas and artifacts must be discoverable from the namespace README or a documented index.

- **External Parity (Optional)**
  - If a schema is derived from an external source, parity may be maintained where appropriate.
  - External sources and version references must be documented for transparency.

## 🛠️ How to Contribute

1. Fork the repository and create a branch or namespace.
2. Add or update schemas under `schemas/<namespace>/`.
3. Include a `README.md` describing purpose, usage, and derived artifacts.
4. Add derived artifacts where useful.
5. Ensure backwards compatibility with existing implementations.
6. Update the namespace’s `namespace.json` to reflect any new scripts, tests, or sync sources.
7. Submit a pull request with clear context and intent.
8. Preserve attribution for external sources and prior contributors.

## 🧰 Build & Automation for Contributors

- Use pnpm commands to build, test, and clean schemas:
  - `pnpm run build` — Build all namespaces
  - `pnpm run test` — Test all namespaces
  - `pnpm run clean` — Remove generated files
  - `pnpm --filter @schemas/<namespace> run build` — Build specific namespace
- To scaffold a new namespace, use: `pnpm run namespace:create`
- To list namespaces, use: `pnpm run namespace:list`
- To update the root README, use: `pnpm run readme:update`
- For advanced configuration, see [scripts/README.md](scripts/README.md) for details and examples.

### Namespace-Driven CI/CD

`namespace.json` is the single source of truth for build, test, sync, and documentation automation. CI/CD and local scripts read this file to:

- Discover which schemas to sync from remote sources
- Determine which build scripts to run
- Locate and validate test files
- Generate namespace metadata used in README updates

If you change schemas, tests, or build scripts, update `namespace.json` to keep CI/CD behavior consistent.

## ✅ Summary

Namespaces in `schemaforge` are schema centric, flexible, and extensible.
By following these rules, contributors help ensure the repository remains reliable, discoverable, and ready for integration, while still supporting experimentation and growth.

Thank you for contributing to `schemaforge`.
Your work helps preserve and evolve schemas while maintaining long term stability and trust.
