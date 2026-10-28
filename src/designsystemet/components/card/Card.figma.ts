// url=<FIGMA_UI_KIT>?node-id=24378-2820
// source=src/designsystemet/components/card/Card.tsx
// component=Card
import figma from "figma";
import { child, importFrom, layerText, nestedString, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { tinted: "tinted" });
const image = instance.getBoolean("Image");
const heading = layerText(instance, "Heading", "Card title");
const text = nestedString(child(instance, "_Content"), "Paragraph", "Text", "Card content");

const content = `<Heading level={2} data-size="sm">${heading}</Heading>
        <Paragraph>${text}</Paragraph>`;

export default {
    example: image
        ? figma.tsx`<Card${prop("variant", variant)}>
    <Card.Block>
        <img src="/path/to/image.jpg" alt="" />
    </Card.Block>
    <Card.Block>
        ${content}
    </Card.Block>
</Card>`
        : figma.tsx`<Card${prop("variant", variant)}>
    <Card.Block>
        ${content}
    </Card.Block>
</Card>`,
    imports: importFrom("Card", "Heading", "Paragraph"),
    id: "card",
    metadata: { nestable: false }
};
