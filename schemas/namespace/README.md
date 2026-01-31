# namespace

Internal tooling schemas for the schema build system.

## Schemas

### namespace.schema.json

JSON Schema for validating `namespace.json` manifest files used across all schema namespaces.

**Usage:**

Add to the top of any `namespace.json`:

```json
{
  "$schema": "https://raw.githubusercontent.com/admin/schemas/main/schemas/schemaforge-tools/namespace.schema.json",
  "name": "my-namespace",
  ...
}
```

**Validates:**

- ✅ Required fields: `name`, `description`, `version`, `buildType`, `schemas`
- ✅ Build type constraints (downloads, typescript, mixed)
- ✅ Conditional requirements based on buildType
- ✅ URL format validation for downloads
- ✅ Proper namespace naming conventions

**Examples:**

Downloads namespace:

```json
{
  "$schema": "../namespace/schema.json",
  "name": "example",
  "description": "Example schemas",
  "version": "1.0.0",
  "buildType": "downloads",
  "schemas": ["schema.json"],
  "downloads": [
    {
      "url": "https://example.com/schema.json",
      "output": "schema.json"
    }
  ]
}
```

TypeScript namespace:

```json
{
  "$schema": "../namespace/schema.json",
  "name": "example",
  "description": "Generated schemas",
  "version": "1.0.0",
  "buildType": "typescript",
  "schemas": ["schema.json"],
  "typescript": {
    "buildScript": "./configure"
  }
}
```

## Validation

Test a namespace.json file:

```bash
# Using ajv-cli
npx ajv-cli validate -s namespace.schema.json -d ../tsconfig/namespace.json

# Using check-jsonschema
pipx run check-jsonschema --schemafile namespace.schema.json ../tsconfig/namespace.json
```

## References

- [Build System Documentation](../../scripts/README.md)
- [JSON Schema Specification](https://json-schema.org/)
