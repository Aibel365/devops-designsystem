// url=<FIGMA_UI_KIT>?node-id=9649-55787
// source=src/designsystemet/components/typography/validationmessage/ValidationMessage.tsx
// component=ValidationMessage
import figma from "figma";
import { importFrom, layerText, prop } from "../../../../figma/helpers";

const instance = figma.selectedInstance;

const color = instance.getEnum("color", { warning: "warning", success: "success", info: "info" });
const text = layerText(instance, "This is a validation message", "Validation message");

export default {
    example: figma.tsx`<ValidationMessage${prop("data-color", color)}>${text}</ValidationMessage>`,
    imports: importFrom("ValidationMessage"),
    id: "validation-message",
    metadata: { nestable: true }
};
