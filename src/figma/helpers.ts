// Shared helpers for Figma Code Connect templates (*.figma.ts). They are bundled into each template on publish.
import figma from "figma";
import type { ErrorHandle, InstanceHandle, ResultSection, TemplateStringResult, TextHandle } from "figma";

export type Snippet = string | TemplateStringResult | ResultSection[];
type Layer = InstanceHandle | TextHandle | ErrorHandle | null | undefined;

const IMPORT_PATH = "@aibel365/devops-designsystem";
const DEEP = { traverseInstances: true };

export function importFrom(...names: string[]): string[] {
    return [`import { ${[...new Set(names)].join(", ")} } from "${IMPORT_PATH}";`];
}

function isInstance(layer: Layer): layer is InstanceHandle {
    return !!layer && layer.type === "INSTANCE";
}

/** Renders a JSX attribute, e.g. ` variant="primary"`, ` disabled` or ` count={3}`. Renders nothing for undefined/false. */
export function prop(name: string, value: string | number | boolean | undefined): string {
    return figma.helpers.react.renderProp(name, value) as string;
}

/** Finds a nested instance by layer name, searching through nested instances. */
export function child(parent: Layer, layerName: string): InstanceHandle | undefined {
    if (!isInstance(parent)) return undefined;
    const layer = parent.findInstance(layerName, DEEP);
    return isInstance(layer) ? layer : undefined;
}

/** Reads a text property from a nested instance, e.g. the "Text" property of the Paragraph inside a Button. */
export function nestedString(parent: Layer, layerName: string, propName: string, fallback: string): string {
    const layer = child(parent, layerName);
    const value = layer ? layer.getString(propName) : undefined;
    return typeof value === "string" && value.trim() ? value : fallback;
}

/** Reads the text content of a text layer, searching through nested instances. */
export function layerText(parent: Layer, layerName: string, fallback: string): string {
    if (!isInstance(parent)) return fallback;
    const layer = parent.findText(layerName, DEEP);
    return layer.type === "TEXT" && layer.textContent.trim() ? layer.textContent : fallback;
}

/** Counts how many of the given boolean properties are enabled, e.g. optional list items. */
export function countEnabled(parent: InstanceHandle, booleanProps: string[]): number {
    return booleanProps.filter((name) => parent.getBoolean(name)).length;
}

/** Returns the value for the first enabled boolean property, e.g. which arrow is visible on a Tooltip. */
export function firstEnabled<T>(parent: InstanceHandle, options: Record<string, T>): T | undefined {
    const match = Object.keys(options).find((name) => parent.getBoolean(name));
    return match === undefined ? undefined : options[match];
}

/** Joins snippets with a separator (snippets must not be concatenated as strings). */
export function join(parts: Snippet[], separator = "\n"): Snippet {
    return parts.reduce<Snippet>((acc, part, index) => (index === 0 ? part : figma.tsx`${acc}${separator}${part}`), "");
}

/**
 * Renders an icon instance. Uses its Code Connect snippet when the icon is connected, otherwise a placeholder
 * comment naming the Figma icon (the UI kit uses Aksel icons, while the code uses the Aibel icon set).
 */
export function renderIcon(icon: Layer): Snippet {
    if (!isInstance(icon)) return "";
    if (icon.hasCodeConnect()) return icon.executeTemplate().example;
    return `{/* icon: ${icon.name} */}`;
}
