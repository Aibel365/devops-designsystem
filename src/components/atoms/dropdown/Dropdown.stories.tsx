import type { Meta, StoryObj } from "@storybook/react-vite";

import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
    title: "Atoms/Dropdown",
    component: Dropdown
};

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};

export default meta;
