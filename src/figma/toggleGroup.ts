// Shared snippet builder for the ToggleGroup and Icon toggle group Code Connect templates.
import figma from "figma";
import type { InstanceHandle } from "figma";
import { child, countEnabled, importFrom, join, nestedString, prop, renderIcon } from "./helpers";

export function toggleGroupExample(instance: InstanceHandle, iconOnly: boolean) {
    const variant = instance.getEnum("variant", { secondary: "secondary" });
    const count = 2 + countEnabled(instance, ["third", "fourth", "fifth", "sixth"]);

    const items = Array.from({ length: count }, (_, index) => {
        const item = child(instance, `Valg ${index + 1}`);
        const label = nestedString(item, "Paragraph", "Text", `Option ${index + 1}`);
        return {
            value: `option-${index + 1}`,
            label,
            active: item ? item.getEnum("State", { active: true }) === true : false,
            icon: iconOnly ? renderIcon(child(item, "Icon")) : ""
        };
    });
    const selected = (items.find((item) => item.active) ?? items[0]).value;

    const itemSnippets = items.map((item) =>
        iconOnly
            ? figma.tsx`    <ToggleGroup.Item value="${item.value}" icon aria-label="Option ${item.value.replace("option-", "")}">${item.icon}</ToggleGroup.Item>`
            : figma.tsx`    <ToggleGroup.Item value="${item.value}">${item.label}</ToggleGroup.Item>`
    );

    return {
        example: figma.tsx`<ToggleGroup aria-label="Choose an option" defaultValue="${selected}"${prop("variant", variant)}>
${join(itemSnippets)}
</ToggleGroup>`,
        imports: importFrom("ToggleGroup")
    };
}
