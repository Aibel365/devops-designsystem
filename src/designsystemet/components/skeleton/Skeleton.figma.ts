// url=<FIGMA_UI_KIT>?node-id=25858-88704
// source=src/designsystemet/components/skeleton/Skeleton.tsx
// component=Skeleton
import figma from "figma";
import { importFrom } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const example = instance.getEnum("variant", {
    text: `<Skeleton variant="text" width={10} />`,
    circle: `<Skeleton variant="circle" width="50px" height="50px" />`,
    rectangle: `<Skeleton variant="rectangle" width="100%" height="150px" />`
});

export default {
    example: figma.tsx`${example ?? `<Skeleton />`}`,
    imports: importFrom("Skeleton"),
    id: "skeleton",
    metadata: { nestable: true }
};
