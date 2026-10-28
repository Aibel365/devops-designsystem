# @aibel365/devops-designsystem

React-based design system for internal Aibel applications.

## Overview

This package provides reusable UI building blocks and app helpers for internal Aibel solutions, including:

- Foundations (theme tokens such as `Colors`, `Spacing`)
- Designsystemet (core components from Designsystemet, e.g. `Button`, `Card`, `Badge`, `Checkbox`, `Popover`)
- Icons (Aibel‑styled icon set)
- Components (Aibel‑specific shared components, e.g. `HeaderBar`, `SubHeaderBar`, `FooterBar`)

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

### Built-in component text

Components ship with English default texts. Application-owned text, such as labels and descriptions, should come from the application's translation system.

For `Textfield`, a numeric `counter` uses the English default `under` and `over` texts. Consumers can override them per component:

```tsx
<Textfield
    label="Message"
    counter={{
        limit: 100,
        under: "%d characters remaining",
        over: "%d characters too many"
    }}
/>
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
- `npm run create-design-tokens` – create JSON design tokens for with Aibel-theme
- `npm run build-design-tokens` – build CSS tokens with Aibel-theme based on JSON tokens
- `npm run lint` – run ESLint
- `npm run format` – format all files with Prettier
- `npm run clean` – remove build artifacts
- `npm run knip` - check for dependency and code issues
- `npm run figma:check` – validate Figma Code Connect mappings without publishing (dry run)
- `npm run figma:publish` – publish Figma Code Connect mappings to Figma

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

## Upgrade @digdir packages

When the @digdir dependency is updated, there may be styling changes that need to be applied. Therefore, the design tokens and theme files must be regenerated. Run the following commands:

- `npm run build-design-tokens`
- `npm run start`

If there are significant styling changes, verify that components render correctly in Storybook.

## Building the package

A full build runs the same Tailwind pipeline as development mode and outputs the final CSS to:

```
dist/styles.css
```

It also generates `dist/aibel-theme.tailwind.css` file which can be used to import theme layer in the project where this library is used. Just add these imports in your project's `index.css` file:

```
@import "@aibel365/devops-designsystem/styles.css";
@import '@aibel365/devops-designsystem/aibel-theme.tailwind.css' layer(theme);
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

## Figma Code Connect

The components are connected to our Figma library with [Figma Code Connect](https://developers.figma.com/docs/code-connect/). When a designer or developer selects a component in Figma Dev Mode (or uses the Figma MCP server), Figma shows a ready-to-use code snippet for `@aibel365/devops-designsystem` instead of generic CSS.

The Figma library is our copy of the [Designsystemet Core UI Kit](https://www.figma.com/community/file/1322138390374166141), the official Figma counterpart to `@digdir/designsystemet-react`.

### How it works

- `figma.config.json` – Code Connect configuration. The Figma file URL is defined once in `documentUrlSubstitutions` (`<FIGMA_UI_KIT>`), so the library file can be changed in one place.
- `src/**/*.figma.ts` – one [template file](https://developers.figma.com/docs/code-connect/template-files/) per Figma component, placed next to the component it maps to. Each file starts with a `// url=<FIGMA_UI_KIT>?node-id=...` comment pointing to the component in Figma, and maps Figma properties (variant, state, texts, booleans) to React props.
- `src/figma/` – shared helpers used by the templates. They are bundled into each template on publish.
- `tsconfig.figma.json` – type checks templates with the Code Connect types. Templates are excluded from the library build.

Size (`data-size`) and color (`data-color`) are Figma variable modes in the UI kit, not component properties, so snippets use the defaults. Icons in the UI kit come from the Aksel icon library and cannot be mapped to the Aibel icon set, so they are rendered as `{/* icon: Name */}` placeholders.

Figma components without a code counterpart, or code components without a Figma counterpart (e.g. `Divider`, `Field`, `Table`, `Dropdown` and the Aibel-specific components), are not connected.

### Setup

1. Create a [Figma personal access token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) with the scopes **Code Connect: Write** and **File content: Read**. Requires a Dev or Full seat.
2. Add it to a `.env.local` file in the repository root (ignored by git):

```
FIGMA_ACCESS_TOKEN=figd_...
```

The npm scripts load `.env.local` and use the operating system's certificate store, so they also work behind a TLS-inspecting corporate proxy.

### Adding or updating a mapping

1. In Figma, right-click the component (set) and select **Copy link to selection** to get its `node-id`.
2. Create or update `<Component>.figma.ts` next to the component and use `figma.selectedInstance` to read the Figma properties. Use the exact Figma property names (without the `#123:4` suffix).
3. Run `npm run figma:check` to validate the mappings, then `npm run figma:publish`.

Mappings are published automatically when a release is published (`.github/workflows/figma_code_connect_publish.yml`). This requires the `FIGMA_ACCESS_TOKEN` repository secret. On a Figma Professional plan, Code Connect supports one library and one framework (React).

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
