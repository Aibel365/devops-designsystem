// Shared snippet builder for the Suggestion and Multi suggestion Code Connect templates.
import figma from "figma";
import type { InstanceHandle } from "figma";
import { importFrom, prop } from "./helpers";

export function suggestionExample(instance: InstanceHandle, multiple: boolean) {
    const label = instance.getString("label");
    const description = instance.getBoolean("show description") ? instance.getString("description") : undefined;
    const required = instance.getBoolean("Required");
    const clearable = instance.getBoolean("show x");
    const state = instance.getEnum("state", { error: "error", readonly: "readOnly", disabled: "disabled" });

    const lines = [
        `    <Label>${label}</Label>`,
        description ? `    <Field.Description>${description}</Field.Description>` : "",
        `    <EXPERIMENTAL_Suggestion${prop("multiple", multiple)}>`,
        `        <EXPERIMENTAL_Suggestion.Input${prop("required", required)}${prop("readOnly", state === "readOnly")}${prop("disabled", state === "disabled")}${prop("aria-invalid", state === "error")} />`,
        clearable ? `        <EXPERIMENTAL_Suggestion.Clear />` : "",
        `        <EXPERIMENTAL_Suggestion.List>`,
        `            <EXPERIMENTAL_Suggestion.Empty>No results found</EXPERIMENTAL_Suggestion.Empty>`,
        `            <EXPERIMENTAL_Suggestion.Option value="option-1">Option 1</EXPERIMENTAL_Suggestion.Option>`,
        `            <EXPERIMENTAL_Suggestion.Option value="option-2">Option 2</EXPERIMENTAL_Suggestion.Option>`,
        `        </EXPERIMENTAL_Suggestion.List>`,
        `    </EXPERIMENTAL_Suggestion>`,
        state === "error" ? `    <ValidationMessage>Error message</ValidationMessage>` : ""
    ].filter(Boolean);

    return {
        example: figma.tsx`<Field>
${lines.join("\n")}
</Field>`,
        imports: importFrom("EXPERIMENTAL_Suggestion", "Field", "Label", ...(state === "error" ? ["ValidationMessage"] : []))
    };
}
