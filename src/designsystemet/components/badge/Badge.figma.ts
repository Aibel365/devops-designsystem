// url=<FIGMA_UI_KIT>?node-id=44707-17349
// source=src/designsystemet/components/badge/Badge.tsx
// component=Badge
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { tinted: "tinted" });
const dot = instance.getBoolean("dot");
const count = Number.parseInt(instance.getString("Number"), 10);

export default {
    example: figma.tsx`<Badge${prop("count", !dot && Number.isFinite(count) ? count : undefined)}${prop("variant", variant)} />`,
    imports: importFrom("Badge"),
    id: "badge",
    metadata: { nestable: true }
};
