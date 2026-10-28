// url=<FIGMA_UI_KIT>?node-id=38137-8613
// source=src/designsystemet/components/chip/Chip.tsx
// component=Chip
import figma from "figma";
import { importFrom, nestedString, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const type = instance.getEnum("type", { radio: "Radio", checkbox: "Checkbox", removable: "Removable", button: "Button" }) ?? "Button";
const checked = instance.getEnum("state", { checked: true, "checked hover": true, "checked active": true });
const disabled = instance.getEnum("state", { disabled: true });
const label = nestedString(instance, "Paragraph", "Text", "Chip");

const attributes = type === "Radio" || type === "Checkbox" ? `${prop("name", "chips")}${prop("value", label)}${prop("defaultChecked", checked)}` : type === "Removable" ? prop("aria-label", `Remove ${label}`) : "";

export default {
    example: figma.tsx`<Chip.${type}${attributes}${prop("disabled", disabled)}>${label}</Chip.${type}>`,
    imports: importFrom("Chip"),
    id: "chip",
    metadata: { nestable: true }
};
