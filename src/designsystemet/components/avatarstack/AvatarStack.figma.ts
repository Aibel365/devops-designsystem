// url=<FIGMA_UI_KIT>?node-id=48816-4172
// source=src/designsystemet/components/avatarstack/AvatarStack.tsx
// component=EXPERIMENTAL_AvatarStack
import figma from "figma";
import { importFrom, prop } from "../../../figma/helpers";

const instance = figma.selectedInstance;

const quantity = Number(instance.getEnum("quantity", { "2": "2", "3": "3", "4": "4", "5": "5", "6": "6" }) ?? 3);
const square = instance.getBoolean("square");
const suffix = instance.getBoolean("suffix") ? instance.getString("suffix text") : undefined;

const avatars = Array.from(
    { length: quantity },
    (_, index) => `    <li>
        <Avatar aria-label="Person ${index + 1}"${prop("variant", square ? "square" : undefined)} />
    </li>`
).join("\n");

export default {
    example: figma.tsx`<EXPERIMENTAL_AvatarStack${prop("suffix", suffix)}>
${avatars}
</EXPERIMENTAL_AvatarStack>`,
    imports: importFrom("Avatar", "EXPERIMENTAL_AvatarStack"),
    id: "avatar-stack",
    metadata: { nestable: true }
};
