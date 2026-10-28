// url=<FIGMA_UI_KIT>?node-id=9104-49826
// source=src/designsystemet/components/spinner/Spinner.tsx
// component=Spinner
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const size = instance.getEnum("size", { xl: "xl", lg: "lg", md: "md", sm: "sm", xs: "xs", "2xs": "2xs" });

export default {
    example: figma.tsx`<Spinner aria-label="Loading"${prop("data-size", size)} />`,
    imports: importFrom("Spinner"),
    id: "spinner",
    metadata: { nestable: true }
};
