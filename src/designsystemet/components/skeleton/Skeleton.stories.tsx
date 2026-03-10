import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "Designsystemet/Skeleton",
    component: Skeleton
};

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    render: () => (
        <Skeleton
            width="100%"
            height="20px"
        />
    )
};

export default meta;
