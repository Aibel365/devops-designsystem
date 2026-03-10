import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
    title: "Designsystemet/Avatar",
    component: Avatar
};

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export default meta;
