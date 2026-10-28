// url=<FIGMA_UI_KIT>?node-id=15987-49056
// source=src/designsystemet/components/alert/Alert.tsx
// component=Alert
import figma from "figma";
import { importFrom, join, layerText, nestedString, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const color = instance.getEnum("color", { info: "info", warning: "warning", success: "success", danger: "danger" });
const showHeading = instance.getBoolean("heading");
const showParagraph = instance.getBoolean("paragraph");

const content = join(
    [showHeading ? `    <Heading level={2} data-size="xs">${layerText(instance, "Heading", "Heading")}</Heading>` : "", showParagraph ? `    <Paragraph>${nestedString(instance, "Paragraph", "Text", "Alert text")}</Paragraph>` : ""].filter(Boolean)
);

export default {
    example: figma.tsx`<Alert${prop("data-color", color)}>
${content}
</Alert>`,
    imports: importFrom("Alert", ...(showHeading ? ["Heading"] : []), ...(showParagraph ? ["Paragraph"] : [])),
    id: "alert",
    metadata: { nestable: false }
};
