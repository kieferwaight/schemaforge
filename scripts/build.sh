#!/usr/bin/env bash
set -euo pipefail

FORCE_FLAG=""
if [[ "${1:-}" == "--force" ]]; then
	FORCE_FLAG="--force"
fi

./scripts/namespace/list.js --json | jq -r 'keys | .[]' | while read -r namespace; do
	./scripts/namespace/sync.js "${namespace}" ${FORCE_FLAG}
	./scripts/namespace/package.js "${namespace}"
	pnpm --filter "./schemas/${namespace}" install
done
