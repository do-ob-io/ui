# UI Library

Reusable React 19 UI components for do-ob applications, built on Base UI with TailwindCSS styling.

## Quality Instructions

- **Typecheck**: `tsc --noEmit`
- **Lint**: `eslint --fix src/`
- **Test**: Storybook stories with `play` functions
- **Build**: `pnpm build`

## Structure

- `src/` — Component source files
- `src/base/` — Foundational primitives (Base UI wrappers)

## Technical Stack

- **Language**: TypeScript
- **Framework**: React 19
- **Key Libraries**: Base UI, TailwindCSS, lucide-react
- **Utilities**: `@do-ob/core` (workspace dependency)
