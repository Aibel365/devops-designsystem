// url=<FIGMA_UI_KIT>?node-id=43380-91410
// source=src/designsystemet/components/suggestion/Suggestion.tsx
// component=EXPERIMENTAL_Suggestion
import figma from "figma";
import { suggestionExample } from "../../../figma/suggestion";

export default {
    ...suggestionExample(figma.selectedInstance, false),
    id: "suggestion",
    metadata: { nestable: false }
};
