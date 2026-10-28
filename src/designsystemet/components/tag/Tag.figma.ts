// url=<FIGMA_UI_KIT>?node-id=25796-11497
// source=src/designsystemet/components/tag/Tag.tsx
// component=Tag
import figma from "figma";
import { importFrom, prop, renderIcon } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { outline: "outline" });
const label = instance.getString("tag label");
const iconLeft = instance.getBoolean("icon-left") ? renderIcon(instance.getInstanceSwap("swap icon-left")) : "";
const iconRight = instance.getBoolean("icon-right") ? renderIcon(instance.getInstanceSwap("swap icon-right")) : "";

export default {
    example: figma.tsx`<Tag${prop("variant", variant)}>${iconLeft}${label}${iconRight}</Tag>`,
    imports: importFrom("Tag"),
    id: "tag",
    metadata: { nestable: true }
};
