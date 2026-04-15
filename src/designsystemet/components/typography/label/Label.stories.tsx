import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./Label";

const meta: Meta<typeof Label> = {
    title: "Designsystemet/Typography/Label",
    component: Label,
    args: {
        children: "This is a label",
        weight: "regular",
        asChild: false
    },
    argTypes: {
        weight: { control: { type: "select" }, options: ["regular", "medium", "semibold"] },
        asChild: { control: { type: "boolean" }, options: [true, false] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] }
    }
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export default meta;
