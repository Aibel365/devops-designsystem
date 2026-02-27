import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label } from "./Label";

const meta: Meta<typeof Label> = {
    title: "Atoms/Label",
    component: Label
};

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export default meta;
