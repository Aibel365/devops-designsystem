// url=<FIGMA_UI_KIT>?node-id=20941-4130
// source=src/designsystemet/components/tooltip/Tooltip.tsx
// component=Tooltip
import figma from "figma";
import { firstEnabled, importFrom, nestedString, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const content = nestedString(instance, "Paragraph", "Text", "Tooltip text");
// The arrow points towards the trigger, so an arrow at the bottom means the tooltip is placed above it (the default).
const placement = firstEnabled(instance, { "arrow up": "bottom", "arrow left": "right", "arrow right": "left" });

export default {
    example: figma.tsx`<Tooltip${prop("content", content)}${prop("placement", placement)}>
    <Button>Trigger</Button>
</Tooltip>`,
    imports: importFrom("Button", "Tooltip"),
    id: "tooltip",
    metadata: { nestable: false }
};
