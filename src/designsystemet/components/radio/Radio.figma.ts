// url=<FIGMA_UI_KIT>?node-id=42399-99403
// source=src/designsystemet/components/radio/Radio.tsx
// component=Radio
import figma from "figma";
import { child, countEnabled, importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const legend = instance.getString("legend");
const description = instance.getBoolean("show description") ? instance.getString("description") : undefined;
const state = instance.getEnum("state", { error: "error", "read-only": "readOnly", disabled: "disabled" });
const outline = instance.getBoolean("outline");
const count = 2 + countEnabled(instance, ["3. input", "4. input", "5. input", "6. input"]);

const radios = Array.from({ length: count }, (_, index) => {
    const item = child(instance, String(index + 1));
    const label = item ? item.getString("label") : `Option ${index + 1}`;
    const checked = item ? item.getBoolean("checked") : false;
    return `    <Radio name="radio-group" label="${label}" value="option-${index + 1}"${prop("defaultChecked", checked)}${prop("variant", outline ? "outline" : undefined)}${prop("readOnly", state === "readOnly")}${prop("disabled", state === "disabled")}${prop("aria-invalid", state === "error")} />`;
}).join("\n");

export default {
    example: figma.tsx`<Fieldset>
    <Fieldset.Legend>${legend}</Fieldset.Legend>${description ? `\n    <Fieldset.Description>${description}</Fieldset.Description>` : ""}
${radios}${state === "error" ? `\n    <ValidationMessage>Error message</ValidationMessage>` : ""}
</Fieldset>`,
    imports: importFrom("Fieldset", "Radio", ...(state === "error" ? ["ValidationMessage"] : [])),
    id: "radio-group",
    metadata: { nestable: false }
};
