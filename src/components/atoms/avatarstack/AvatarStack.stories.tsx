import type { Meta, StoryObj } from "@storybook/react-vite";

import { EXPERIMENTAL_AvatarStack } from "./AvatarStack";

const meta: Meta<typeof EXPERIMENTAL_AvatarStack> = {
    title: "Atoms/AvatarStack",
    component: EXPERIMENTAL_AvatarStack
};

type Story = StoryObj<typeof EXPERIMENTAL_AvatarStack>;

export const Default: Story = {};

export default meta;
