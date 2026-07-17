# Contributing to Codex Analytics Ledger

Thank you for improving Codex Analytics Ledger. Contributions should preserve
its local-first, read-only privacy boundary.

## Before you start

For substantial features or state-format changes, open a proposal first so the
data model, privacy impact, and UX can be reviewed before implementation.

Never include real Codex state, prompts, transcripts, credentials, screenshots
with personal data, or machine-specific paths in an issue or pull request.

## Development setup

Requirements:

- Node.js 24 or newer
- npm
- A local Codex installation for manual testing

Install and start:

```bash
npm ci
npm run dev
```

Open <http://localhost:3000>. Keep the server bound to `127.0.0.1`.

## Architecture expectations

- Keep Codex database access read-only.
- Validate external and persisted data with Zod.
- Keep server-only filesystem access out of client components.
- Prefer small, composable TypeScript modules and explicit return types.
- Preserve loading, empty, error, disabled, and mobile states.
- Use semantic HTML and accessible keyboard interactions.
- Use Tailwind utilities for interface styling.
- Do not add telemetry, hosted storage, or model calls without an approved design
  that clearly changes the project's privacy contract.

## Verification

Run all required checks before opening a pull request:

```bash
npx tsc --noEmit
npx eslint . --fix
npm run build
```

The project does not yet have automated tests. New parsing behavior should add
synthetic fixtures and tests when the test harness is introduced. Until then,
describe the sanitized manual verification performed in the pull request.

## Pull requests

- Keep changes focused and explain user-visible behavior.
- Update README.md and CHANGELOG.md when behavior or setup changes.
- Document privacy, compatibility, and migration implications.
- Confirm that no generated state, environment files, or personal paths are
  included.
- Use synthetic examples and screenshots.
- Link the relevant issue or proposal.

By contributing, you agree that your contribution is licensed under the
project's MIT License and that you will follow the Code of Conduct.
