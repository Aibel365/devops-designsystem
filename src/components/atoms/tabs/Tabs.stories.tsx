import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Atoms/Tabs",
    component: Tabs
};

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

export default meta;
