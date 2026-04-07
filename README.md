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
- `npm run knip` - check for dependency and code issues

## Running the project locally

To start the project, run commands in a terminal **with administrative permissions**. This prevents `npx` script failures and ensures Tailwind starts correctly.

When running `npm run start`:

- Storybook is served on `localhost`
- Tailwind begins watching for class usage
- `Tailwind-entry.css` is used as the input file
- Tailwind generates or updates `assets/index.css` with:
    - Digdir styles
    - Tailwind utility classes used in the project (`ads:` prefix)
    - Aibel custom theming tokens

While Tailwind is running, new utility classes are automatically added to `assets/index.css`. Unused classes are removed on the next startup.

## Building the package

A full build runs the same Tailwind pipeline as development mode and outputs the final CSS to:

```
dist/styles.css
```

## Customization

If custom theming or Digdir overrides are needed, add them to `Tailwind-entry.css`.

This ensures Tailwind includes them during processing when generating `assets/index.css` or `dist/styles.css`.

> **Do not edit auto-generated files.** They will be overwritten.

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
- Run `npm run knip`

## Publishing

`prepublishOnly` runs `npm run build`, ensuring distributable artifacts are up to date before publishing.

## License

MIT
