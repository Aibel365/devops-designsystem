// url=<FIGMA_UI_KIT>?node-id=43520-8668
// source=src/designsystemet/components/suggestion/Suggestion.tsx
// component=EXPERIMENTAL_Suggestion
import figma from "figma";
import { suggestionExample } from "../../../figma/suggestion";

export default {
    ...suggestionExample(figma.selectedInstance, true),
    id: "multi-suggestion",
    metadata: { nestable: false }
};
