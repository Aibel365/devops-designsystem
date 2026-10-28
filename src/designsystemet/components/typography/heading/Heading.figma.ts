// url=<FIGMA_UI_KIT>?node-id=9519-54045
// source=src/designsystemet/components/typography/heading/Heading.tsx
// component=Heading
import figma from "figma";
import { importFrom, layerText, prop } from "../../../../figma/helpers";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", { "2xs": "2xs", xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl", "2xl": "2xl" });
const text = layerText(instance, "Heading", "Heading");

export default {
    example: figma.tsx`<Heading level={2}${prop("data-size", size)}>${text}</Heading>`,
    imports: importFrom("Heading"),
    id: "heading",
    metadata: { nestable: true }
};
