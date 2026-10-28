// url=<FIGMA_UI_KIT>?node-id=43182-378974
// source=src/designsystemet/components/switch/Switch.tsx
// component=Switch
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const label = instance.getString("label");
const description = instance.getBoolean("show description") ? instance.getString("description") : undefined;
const checked = instance.getBoolean("checked");
const outline = instance.getBoolean("outline");
const state = instance.getEnum("state", { "read-only": "readOnly", disabled: "disabled" });
// A label on the left means the switch is placed at the end.
const position = instance.getBoolean("Left label") && !instance.getBoolean("Right label") ? "end" : undefined;

export default {
    example: figma.tsx`<Switch${prop("label", label)}${prop("description", description)}${prop("position", position)}${prop("variant", outline ? "outline" : undefined)}${prop("defaultChecked", checked)}${prop("readOnly", state === "readOnly")}${prop("disabled", state === "disabled")} />`,
    imports: importFrom("Switch"),
    id: "switch",
    metadata: { nestable: true }
};
