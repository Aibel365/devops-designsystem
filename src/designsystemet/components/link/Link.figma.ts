// url=<FIGMA_UI_KIT>?node-id=12585-103924
// source=src/designsystemet/components/link/Link.tsx
// component=Link
import figma from "figma";
import { importFrom, nestedString, renderIcon } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const text = nestedString(instance, "Paragraph", "Text", "Link text");
const iconLeft = instance.getBoolean("icon left") ? renderIcon(instance.getInstanceSwap("Icon left")) : "";
const iconRight = instance.getBoolean("icon right") ? renderIcon(instance.getInstanceSwap("Icon right")) : "";

export default {
    example: figma.tsx`<Link href="#">
    ${iconLeft}${text}${iconRight}
</Link>`,
    imports: importFrom("Link"),
    id: "link",
    metadata: { nestable: true }
};
