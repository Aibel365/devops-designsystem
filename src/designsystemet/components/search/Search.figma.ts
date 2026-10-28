// url=<FIGMA_UI_KIT>?node-id=43159-183962
// source=src/designsystemet/components/search/Search.tsx
// component=Search
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const variant = instance.getEnum("variant", { icon: "icon", "button - primary": "primary", "button - secondary": "secondary" });
const disabled = instance.getEnum("state", { disabled: true });
const placeholder = instance.getString("placeholder");
const clearable = instance.getBoolean("clearable");
const label = instance.getBoolean("show label") ? instance.getString("label") : undefined;
const description = label && instance.getBoolean("show description") ? instance.getString("description") : undefined;

const indent = label ? "        " : "    ";
const search = [
    `${indent}<Search.Input${prop("aria-label", label ? undefined : "Search")}${prop("placeholder", placeholder)}${prop("disabled", disabled)} />`,
    clearable ? `${indent}<Search.Clear />` : "",
    variant === "icon" ? "" : `${indent}<Search.Button${prop("variant", variant === "secondary" ? "secondary" : undefined)}${prop("disabled", disabled)} />`
]
    .filter(Boolean)
    .join("\n");

export default {
    example: label
        ? figma.tsx`<Field>
    <Label>${label}</Label>${description ? `\n    <Field.Description>${description}</Field.Description>` : ""}
    <Search>
${search}
    </Search>
</Field>`
        : figma.tsx`<Search>
${search}
</Search>`,
    imports: importFrom("Search", ...(label ? ["Field", "Label"] : [])),
    id: "search",
    metadata: { nestable: false }
};
