// url=<FIGMA_UI_KIT>?node-id=34829-78128
// source=src/designsystemet/components/button/Button.tsx
// component=Button
import figma from "figma";
import { importFrom, prop, renderIcon } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { secondary: "secondary", tertiary: "tertiary" });
const disabled = instance.getEnum("state", { disabled: true });
const icon = renderIcon(instance.getInstanceSwap("Icon"));

export default {
    example: figma.tsx`<Button icon aria-label="Describe the action"${prop("variant", variant)}${prop("disabled", disabled)}>
    ${icon}
</Button>`,
    imports: importFrom("Button"),
    id: "icon-button",
    metadata: { nestable: true }
};
