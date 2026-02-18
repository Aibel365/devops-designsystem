# @aibel365/devops-designsystem

React-based design system for Aibel applications.

## Overview

This package provides reusable UI building blocks and app helpers for internal Aibel solutions, including:

- Atoms (e.g. `Button`, `Card`, `Badge`, `Checkbox`, `Popover`)
- Molecules (e.g. `HeaderBar`, `SubHeaderBar`, `AibelBaseLayout`)
- Hooks (e.g. `useLocalStorage`)
- Providers and configuration utilities (e.g. `AibelApplicationProvider`, `queryClient`)

The library is built with React, TypeScript, Vite, Storybook, Tailwind CSS, and Designsystemet tokens.

## Installation

```bash
npm install @aibel365/devops-designsystem
```

Peer dependencies:

- `react` ^19.2.0
- `react-dom` ^19.2.0

## Basic usage

```tsx
import { Button, Card, AibelApplicationProvider } from "@aibel365/devops-designsystem";
import "@aibel365/devops-designsystem/styles.css";

export function Example() {
    return (
        <AibelApplicationProvider>
            <Card title="Hello">
                <Button variant="primary">Click me</Button>
            </Card>
        </AibelApplicationProvider>
    );
}
```

## Development

### Prerequisites

- Node.js (current LTS recommended)
- npm

### Commands

- `npm install` – install dependencies
- `npm run start` – start Storybook in development mode
- `npm run build` – build library output and CSS
- `npm run build-storybook` – build Storybook static site
- `npm run lint` – run ESLint
- `npm run format` – format all files with Prettier
- `npm run clean` – remove build artifacts

## Design tokens

Token source files are under `design-tokens/`.

- `npm run create-design-tokens` – scaffold token structure from config
- `npm run build-design-tokens` – build tokens from `designsystemet.config.json`

Generated token output is written to `design-tokens-build/`.

## Contribution guide

### Branching and scope

- Keep changes focused on one feature or fix per pull request.
- Prefer small, reviewable commits.

### Component changes

When adding or updating a component:

1. Implement the component in the relevant folder under `src/components/`.
2. Export it via the nearest `index.ts` barrel file.
3. Add or update Storybook stories (`*.stories.tsx`).
4. Ensure typings are explicit and exported when needed.

### Quality checklist

Before opening a pull request:

- Run `npm run lint`
- Run `npm run build`
- Verify the component in Storybook (`npm run start`)
- Ensure public exports are available from `src/index.ts`

## Publishing

`prepublishOnly` runs `npm run build`, ensuring distributable artifacts are up to date before publishing.

## License

MIT
