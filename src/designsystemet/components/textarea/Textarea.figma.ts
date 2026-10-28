// url=<FIGMA_UI_KIT>?node-id=43045-89946
// source=src/designsystemet/components/textfield/Textfield.tsx
// component=Textfield
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const label = instance.getString("label");
const description = instance.getBoolean("show description") ? instance.getString("description") : undefined;
const counter = instance.getBoolean("counter");
const required = instance.getBoolean("Required");
const state = instance.getEnum("state", { error: "error", "read-only": "readOnly", disabled: "disabled" });

// A labelled textarea is a multiline Textfield in code.
export default {
    example: figma.tsx`<Textfield multiline${prop("label", label)}${prop("description", description)}${counter ? " counter={200}" : ""}${prop("error", state === "error" ? "Error message" : undefined)}${prop("required", required)}${prop("readOnly", state === "readOnly")}${prop("disabled", state === "disabled")} />`,
    imports: importFrom("Textfield"),
    id: "textarea",
    metadata: { nestable: true }
};
