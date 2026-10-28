// url=<FIGMA_UI_KIT>?node-id=51175-8506
// source=src/designsystemet/components/file-upload/FileUpload.tsx
// component=EXPERIMENTAL_FileUpload
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const label = instance.getString("label");
const description = instance.getBoolean("show description") ? instance.getString("description") : undefined;
const innerLabel = instance.getString("inner label");
const innerDescription = instance.getBoolean("show inner description") ? instance.getString("inner description") : undefined;
const showButton = instance.getBoolean("Show Button");
const state = instance.getEnum("state", { error: "error", disabled: "disabled" });

const lines = [
    `    <Label>${label}</Label>`,
    description ? `    <Field.Description>${description}</Field.Description>` : "",
    `    <EXPERIMENTAL_FileUpload>`,
    `        <Field.Description>${innerLabel}</Field.Description>`,
    innerDescription ? `        <Field.Description>${innerDescription}</Field.Description>` : "",
    showButton ? `        <Button variant="secondary"${prop("disabled", state === "disabled")}>Select files</Button>` : "",
    `        <input type="file"${prop("disabled", state === "disabled")}${prop("aria-invalid", state === "error")} />`,
    `    </EXPERIMENTAL_FileUpload>`,
    state === "error" ? `    <ValidationMessage>Error message</ValidationMessage>` : ""
].filter(Boolean);

export default {
    example: figma.tsx`<Field>
${lines.join("\n")}
</Field>`,
    imports: importFrom("EXPERIMENTAL_FileUpload", "Field", "Label", ...(showButton ? ["Button"] : []), ...(state === "error" ? ["ValidationMessage"] : [])),
    id: "file-upload",
    metadata: { nestable: false }
};
