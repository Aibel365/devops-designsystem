// url=<FIGMA_UI_KIT>?node-id=35596-52665
// source=src/designsystemet/components/details/Details.tsx
// component=Details
import figma from "figma";
import type { InstanceHandle } from "figma";
import { countEnabled, importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { tinted: "tinted" });
const border = instance.getBoolean("border");
const count = 1 + countEnabled(instance, ["second", "third", "fourth", "fifth", "sixth", "seventh", "eight", "ninth", "last"]);
const headers = instance.findLayers((layer) => layer.type === "INSTANCE" && layer.name === ".Details.Header").slice(0, count) as InstanceHandle[];

const wrap = border || headers.length > 1;
const indent = wrap ? "    " : "";
const details = headers
    .map((header, index) => {
        const title = header.getString("Tittel") || `Details ${index + 1}`;
        const open = header.getBoolean("Is open");
        return `${indent}<Details${prop("variant", variant)}${prop("defaultOpen", open)}>
${indent}    <Details.Summary>${title}</Details.Summary>
${indent}    <Details.Content>Content</Details.Content>
${indent}</Details>`;
    })
    .join("\n");

// Bordered details are placed inside a Card.
const wrapped = border ? `<Card data-color="neutral">\n${details}\n</Card>` : headers.length > 1 ? `<>\n${details}\n</>` : details;

export default {
    example: figma.tsx`${wrapped}`,
    imports: importFrom("Details", ...(border ? ["Card"] : [])),
    id: "details",
    metadata: { nestable: false }
};
