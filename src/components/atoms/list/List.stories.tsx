import type { Meta, StoryObj } from "@storybook/react-vite";

import { ListItem } from "./List";

const meta: Meta<typeof ListItem> = {
    title: "Atoms/List",
    component: ListItem
};

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {};

export default meta;
