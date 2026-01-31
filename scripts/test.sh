#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

PASSED=0
FAILED=0
SKIPPED=0

# Get list of namespaces and iterate through them
"${PROJECT_ROOT}/scripts/namespace/list.js" --json | jq -r 'keys | .[]' | while read -r namespace; do
	namespace_dir="${PROJECT_ROOT}/schemas/${namespace}"
	namespace_file="${namespace_dir}/namespace.json"

	# Check if namespace.json exists
	if [[ ! -f "${namespace_file}" ]]; then
		echo "Skipping ${namespace}"
		echo " ⚠️  namespace.json not found"
		echo ""
		((SKIPPED++)) || true
		continue
	fi

	# Check if tests property exists in namespace.json
	tests=$(jq -r '.tests // empty | .[]' "${namespace_file}" 2>/dev/null || true)

	if [[ -z "${tests}" ]]; then
		echo "Skipping ${namespace}"
		echo " No tests property found in namespace.json"
		echo ""
		((SKIPPED++)) || true
		continue
	fi

	echo "Testing ${namespace}..."

	# Iterate through each test file
	while IFS= read -r test_file; do
		test_path="${namespace_dir}/${test_file}"

		if [[ ! -f "${test_path}" ]]; then
			echo " ❌ ${test_file}: file not found"
			((FAILED++)) || true
			continue
		fi

		# Run validation
		if "${PROJECT_ROOT}/scripts/schema/validate.js" "${test_path}" >/dev/null 2>&1; then
			echo " ✅ ${test_file}"
			((PASSED++)) || true
		else
			echo " ❌ ${test_file}: validation failed"
			((FAILED++)) || true
		fi
	done <<<"${tests}"

	echo ""
done

# Note: The counts above won't persist due to subshell, so we need to recount
# Let's do it properly by not using pipes
PASSED=0
FAILED=0
SKIPPED=0

namespaces=$("${PROJECT_ROOT}/scripts/namespace/list.js" --json | jq -r 'keys | .[]')

for namespace in ${namespaces}; do
	namespace_dir="${PROJECT_ROOT}/schemas/${namespace}"
	namespace_file="${namespace_dir}/namespace.json"

	# Check if namespace.json exists
	if [[ ! -f "${namespace_file}" ]]; then
		((SKIPPED++)) || true
		continue
	fi

	# Check if tests property exists in namespace.json
	tests=$(jq -r '.tests // empty | .[]' "${namespace_file}" 2>/dev/null || true)

	if [[ -z "${tests}" ]]; then
		((SKIPPED++)) || true
		continue
	fi

	# Iterate through each test file
	while IFS= read -r test_file; do
		[[ -z "${test_file}" ]] && continue
		test_path="${namespace_dir}/${test_file}"

		if [[ ! -f "${test_path}" ]]; then
			((FAILED++)) || true
			continue
		fi

		# Run validation
		if "${PROJECT_ROOT}/scripts/schema/validate.js" "${test_path}" >/dev/null 2>&1; then
			((PASSED++)) || true
		else
			((FAILED++)) || true
		fi
	done <<<"${tests}"
done

echo "${PASSED} passed, ${FAILED} failed, ${SKIPPED} skipped"
echo ""

if [[ ${FAILED} -gt 0 ]]; then
	exit 1
fi

exit 0
