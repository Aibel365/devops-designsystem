// url=<FIGMA_UI_KIT>?node-id=43013-9772
// source=src/designsystemet/components/textfield/Textfield.tsx
// component=Textfield
import figma from "figma";
import { importFrom, layerText, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const label = instance.getString("label");
const description = instance.getBoolean("show description") ? instance.getString("description") : undefined;
const prefix = instance.getEnum("prefix", { yes: true }) && instance.getBoolean("show prefix text") ? instance.getString("prefix text") : undefined;
const suffix = instance.getEnum("suffix", { yes: true }) && instance.getBoolean("show suffix text") ? instance.getString("suffix text") : undefined;
const required = instance.getBoolean("Required");
const state = instance.getEnum("state", { error: "error", "read-only": "readOnly", disabled: "disabled" });
const error = state === "error" ? layerText(instance, "This is a validation message", "Error message") : undefined;

export default {
    example: figma.tsx`<Textfield${prop("label", label)}${prop("description", description)}${prop("prefix", prefix)}${prop("suffix", suffix)}${prop("error", error)}${prop("required", required)}${prop("readOnly", state === "readOnly")}${prop("disabled", state === "disabled")} />`,
    imports: importFrom("Textfield"),
    id: "textfield",
    metadata: { nestable: true }
};
