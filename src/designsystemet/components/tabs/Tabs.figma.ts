// url=<FIGMA_UI_KIT>?node-id=47878-685
// source=src/designsystemet/components/tabs/Tabs.tsx
// component=Tabs
import figma from "figma";
import { child, countEnabled, importFrom, join, renderIcon } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const count = 2 + countEnabled(instance, ["3. Tab", "4. Tab", "5. Tab", "6. Tab"]);
const tabs = Array.from({ length: count }, (_, index) => {
    const tab = child(instance, `${index + 1}. tab`);
    return {
        value: `tab-${index + 1}`,
        title: tab ? tab.getString("title") : `Tab ${index + 1}`,
        active: tab ? tab.getEnum("state", { active: true }) === true : false,
        icon: tab && tab.getBoolean("show icon") ? renderIcon(tab.getInstanceSwap("icon")) : ""
    };
});
const selected = (tabs.find((tab) => tab.active) ?? tabs[0]).value;

const tabList = join(tabs.map((tab) => figma.tsx`        <Tabs.Tab value="${tab.value}">${tab.icon}${tab.title}</Tabs.Tab>`));
const panels = tabs.map((tab) => `    <Tabs.Panel value="${tab.value}">${tab.title} content</Tabs.Panel>`).join("\n");

export default {
    example: figma.tsx`<Tabs defaultValue="${selected}">
    <Tabs.List>
${tabList}
    </Tabs.List>
${panels}
</Tabs>`,
    imports: importFrom("Tabs"),
    id: "tabs",
    metadata: { nestable: false }
};
