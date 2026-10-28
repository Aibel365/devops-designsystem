// url=<FIGMA_UI_KIT>?node-id=34925-24605
// source=src/designsystemet/components/popover/Popover.tsx
// component=Popover
import figma from "figma";
import { firstEnabled, importFrom, layerText, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { tinted: "tinted" });
const text = layerText(instance, "Text", "Popover content");
// The arrow points towards the trigger, so an arrow at the bottom means the popover is placed above it.
const placement = firstEnabled(instance, { "pil opp": "bottom", "pil venstre": "right", "pil høyre": "left" });

export default {
    example: figma.tsx`<Popover.TriggerContext>
    <Popover.Trigger>Open popover</Popover.Trigger>
    <Popover${prop("placement", placement)}${prop("variant", variant)}>${text}</Popover>
</Popover.TriggerContext>`,
    imports: importFrom("Popover"),
    id: "popover",
    metadata: { nestable: false }
};
