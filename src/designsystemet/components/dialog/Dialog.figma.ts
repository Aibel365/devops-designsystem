// url=<FIGMA_UI_KIT>?node-id=34933-16681
// source=src/designsystemet/components/dialog/Dialog.tsx
// component=Dialog
import figma from "figma";
import { child, importFrom, layerText, nestedString } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const header = child(instance, "_Header");
const content = child(instance, "_Content");
const footer = instance.getBoolean("Show footer") ? child(instance, "_Footer") : undefined;

const closeButton = header ? header.getBoolean("Close button") : true;
const heading = layerText(header, "Heading", "Dialog title");
const text = content && content.getBoolean("Paragraph") ? nestedString(content, "Paragraph", "Text", "Dialog content") : "";

const buttons = footer ? [footer.getBoolean("Button primary") ? `        <Button variant="primary">Confirm</Button>` : "", footer.getBoolean("Button secondary") ? `        <Button variant="secondary">Cancel</Button>` : ""].filter(Boolean).join("\n") : "";

const body = [`        <Heading level={2} data-size="xs">${heading}</Heading>`, text ? `        <Paragraph>${text}</Paragraph>` : "", buttons].filter(Boolean).join("\n");

export default {
    example: figma.tsx`<Dialog.TriggerContext>
    <Dialog.Trigger>Open dialog</Dialog.Trigger>
    <Dialog${closeButton ? "" : " closeButton={false}"}>
${body}
    </Dialog>
</Dialog.TriggerContext>`,
    imports: importFrom("Dialog", "Heading", ...(text ? ["Paragraph"] : []), ...(buttons ? ["Button"] : [])),
    id: "dialog",
    metadata: { nestable: false }
};
