import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "Atoms/Skeleton",
    component: Skeleton
};

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export default meta;
