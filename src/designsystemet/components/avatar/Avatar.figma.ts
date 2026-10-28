// url=<FIGMA_UI_KIT>?node-id=36671-13294
// source=src/designsystemet/components/avatar/Avatar.tsx
// component=Avatar
import figma from "figma";
import { importFrom, layerText, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const square = instance.getBoolean("square");
const type = instance.getEnum("type", { icon: "icon", inital: "initials" });
const image = instance.getBoolean("image");
const badge = instance.getBoolean("badge");

const content = image ? `<img src="/path/to/image.jpg" alt="" />` : type === "initials" ? layerText(instance, "Heading", "AB") : "";
const avatar = content ? `<Avatar aria-label="Full name"${prop("variant", square ? "square" : undefined)}>${content}</Avatar>` : `<Avatar aria-label="Full name"${prop("variant", square ? "square" : undefined)} />`;

export default {
    example: badge
        ? figma.tsx`<BadgePosition>
    <Badge data-color="danger" />
    ${avatar}
</BadgePosition>`
        : figma.tsx`${avatar}`,
    imports: importFrom("Avatar", ...(badge ? ["Badge", "BadgePosition"] : [])),
    id: "avatar",
    metadata: { nestable: true }
};
