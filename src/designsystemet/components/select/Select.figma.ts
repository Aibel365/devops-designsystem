// url=<FIGMA_UI_KIT>?node-id=47451-18777
// source=src/designsystemet/components/select/Select.tsx
// component=Select
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const label = instance.getString("label");
const description = instance.getBoolean("show description") ? instance.getString("description") : undefined;
const selected = instance.getString("input text").trim();
const required = instance.getBoolean("Required");
const state = instance.getEnum("state", { error: "error", readonly: "readOnly", disabled: "disabled" });

const lines = [
    `    <Label>${label}</Label>`,
    description ? `    <Field.Description>${description}</Field.Description>` : "",
    `    <Select${prop("required", required)}${prop("readOnly", state === "readOnly")}${prop("disabled", state === "disabled")}${prop("aria-invalid", state === "error")}>`,
    `        <Select.Option value="" disabled>Choose an option</Select.Option>`,
    `        <Select.Option value="option-1">${selected || "Option 1"}</Select.Option>`,
    `    </Select>`,
    state === "error" ? `    <ValidationMessage>Error message</ValidationMessage>` : ""
].filter(Boolean);

export default {
    example: figma.tsx`<Field>
${lines.join("\n")}
</Field>`,
    imports: importFrom("Field", "Label", "Select", ...(state === "error" ? ["ValidationMessage"] : [])),
    id: "select",
    metadata: { nestable: false }
};
