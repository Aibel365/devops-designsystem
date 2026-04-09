import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./Label";

const meta: Meta<typeof Label> = {
    title: "Designsystemet/Typography/Label",
    component: Label
};

type Story = StoryObj<typeof Label>;

export const Default: Story = { render: () => <Label>This is a label</Label> };

export default meta;
