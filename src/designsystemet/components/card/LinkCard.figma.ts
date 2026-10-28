// url=<FIGMA_UI_KIT>?node-id=24378-5516
// source=src/designsystemet/components/card/Card.tsx
// component=Card
import figma from "figma";
import { child, importFrom, layerText, nestedString, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { tinted: "tinted" });
const image = instance.getBoolean("image");
const heading = layerText(instance, "Heading", "Card title");
const text = nestedString(child(instance, "_Content"), "Paragraph", "Text", "Card content");

// A link inside the heading makes the whole card clickable.
const content = `<Heading level={2} data-size="sm">
            <a href="#">${heading}</a>
        </Heading>
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
    id: "link-card",
    metadata: { nestable: false }
};
