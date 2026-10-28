// url=<FIGMA_UI_KIT>?node-id=42571-40850
// source=src/designsystemet/components/togglegroup/ToggleGroup.tsx
// component=ToggleGroup
import figma from "figma";
import { toggleGroupExample } from "../../../figma/toggleGroup";

export default {
    ...toggleGroupExample(figma.selectedInstance, false),
    id: "toggle-group",
    metadata: { nestable: false }
};
