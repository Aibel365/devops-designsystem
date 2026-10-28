// url=<FIGMA_UI_KIT>?node-id=9524-54019
// source=src/designsystemet/components/typography/paragraph/Paragraph.tsx
// component=Paragraph
import figma from "figma";
import { importFrom, prop } from "../../../../figma/helpers";

const instance = figma.selectedInstance;

const text = instance.getString("Text");
const size = instance.getEnum("size", { xs: "xs", sm: "sm", lg: "lg", xl: "xl" });
const variant = instance.getEnum("variant", { short: "short", long: "long" });

export default {
    example: figma.tsx`<Paragraph${prop("data-size", size)}${prop("variant", variant)}>${text}</Paragraph>`,
    imports: importFrom("Paragraph"),
    id: "paragraph",
    metadata: { nestable: true }
};
