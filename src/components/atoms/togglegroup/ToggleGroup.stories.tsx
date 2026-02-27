import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleGroup } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
    title: "Atoms/ToggleGroup",
    component: ToggleGroup
};

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {};

export default meta;
