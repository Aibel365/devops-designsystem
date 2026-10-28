// url=<FIGMA_UI_KIT>?node-id=36039-43017
// source=src/designsystemet/components/button/Button.tsx
// component=Button
import figma from "figma";
import { importFrom, nestedString, prop, renderIcon } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { secondary: "secondary", tertiary: "tertiary" });
const disabled = instance.getEnum("state", { disabled: true });
const loading = instance.getBoolean("loading");
const label = nestedString(instance, "Paragraph", "Text", "Button text");
const iconLeft = instance.getBoolean("show icon left") ? renderIcon(instance.getInstanceSwap("icon left")) : "";
const iconRight = instance.getBoolean("show icon right") ? renderIcon(instance.getInstanceSwap("icon right")) : "";

export default {
    example: figma.tsx`<Button${prop("variant", variant)}${prop("loading", loading)}${prop("disabled", disabled)}>
    ${iconLeft}${label}${iconRight}
</Button>`,
    imports: importFrom("Button"),
    id: "button",
    metadata: { nestable: true }
};
