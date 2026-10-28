// url=<FIGMA_UI_KIT>?node-id=42571-42801
// source=src/designsystemet/components/togglegroup/ToggleGroup.tsx
// component=ToggleGroup
import figma from "figma";
import { toggleGroupExample } from "../../../figma/toggleGroup";

export default {
    ...toggleGroupExample(figma.selectedInstance, true),
    id: "icon-toggle-group",
    metadata: { nestable: false }
};
