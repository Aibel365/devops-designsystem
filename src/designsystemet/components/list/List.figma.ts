// url=<FIGMA_UI_KIT>?node-id=20941-34176
// source=src/designsystemet/components/list/List.tsx
// component=List
import figma from "figma";
import { child, importFrom, layerText, nestedString } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const type = instance.getEnum("type", { "unordered list": "Unordered", "ordered list": "Ordered" }) ?? "Unordered";
const heading = layerText(instance, "Heading", "List heading");
const items = ["1. punkt", "2. punkt", "3. punkt", "4. punkt", "5. punkt", "6. punkt"]
    .filter((name) => instance.getBoolean(name))
    .map((name, index) => `    <List.Item>${nestedString(child(instance, name), "Paragraph", "Text", `Item ${index + 1}`)}</List.Item>`)
    .join("\n");

export default {
    example: figma.tsx`<Heading level={2} data-size="xs">${heading}</Heading>
<List.${type}>
${items}
</List.${type}>`,
    imports: importFrom("Heading", "List"),
    id: "list",
    metadata: { nestable: false }
};
