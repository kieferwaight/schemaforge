#!/usr/bin/env bash
set -euo pipefail

FORCE_FLAG=""
if [[ "${1:-}" == "--force" ]]; then
	FORCE_FLAG="--force"
fi

./scripts/namespace/list.js --json | jq -r 'keys | .[]' | while read -r namespace; do
	if pnpm --filter "./schemas/${namespace}" run clean 2>/dev/null; then
		echo "✅ Cleaned ${namespace}"
	fi
done

echo "🧹 Cleaning node_modules..."
find ./schemas -maxdepth 2 -type d -name "node_modules" -exec rm -rf {} + 2>/dev/null || true
rm -rf node_modules
echo "✅ Cleaned node_modules"

if [[ -n "$FORCE_FLAG" ]]; then
	echo "🧹 Removing generated files..."
	find ./schemas -maxdepth 2 -name "package.json" ! -path "*/node_modules/*" -delete
	rm -f pnpm-lock.yaml
	echo "✅ Removed generated files"
fi
