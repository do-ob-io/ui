# AGENT.md — do-ob React Component Library

## Project Overview

This project is a **React 19 + TypeScript** component library built on top of **shadcn/ui**.  
It provides foundational, reusable UI components intended for use across do-ob applications.

This is a **design-system–adjacent** project:
- Components must be predictable, composable, and accessible
- Visual behavior is validated through **Storybook**
- Logic reuse must flow through `@do-ob/core`

## Technology Stack
- **React 19**
- **TypeScript (strict)**
- **TailwindCSS (strict)**
- **shadcn/ui** for foundational components and patterns
- **Storybook** for visual + behavioral testing
- **@do-ob/core** (workspace dependency) for shared utilities

## Development Constraints (Hard Rules)

### 1. Core Utility Usage

- **Do not reimplement generic utilities locally**
- All reusable logic (string helpers, structural helpers, formatting, etc.) must:
  - Come from `@do-ob/core`, **or**
  - Be added to `@do-ob/core` first, then consumed here
- UI-specific helpers may live locally **only if** they are not generally reusable

If logic feels “generic,” it belongs in **core**.

### 2. Component Design Rules

- One file = one component with the exception of components under the `ui` module (shadcn components).
- Components must be:
  - Stateless where possible
  - Controlled via props
  - Predictable and side-effect free

### Storybook Testing Rules

All component testing is performed in `*.stories.tsx` files using Storybook.

- Each story represents **one visual state** of the component
- **Every story must define a `play` function**
- `play` functions serve as unit tests and must:
  - Assert the component renders correctly
  - Validate interactions and state changes when applicable
- Do not combine multiple states in a single story
- A component without stories or `play` tests is considered incomplete

#### Required Exports (Per Component File)

Every component file **must export**:

1. A **readonly props interface**
2. A **named functional component**

```ts
export interface <Name>Props {
  readonly prop: any;
}

export function <Name>(props: <Name>Props) {
  …
}
```