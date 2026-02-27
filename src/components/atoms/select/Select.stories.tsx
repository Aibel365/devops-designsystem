import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
    title: "Atoms/Select",
    component: Select
};

type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export default meta;
