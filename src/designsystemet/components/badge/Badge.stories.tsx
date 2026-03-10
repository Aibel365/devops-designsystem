import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
    title: "Designsystemet/Badge",
    component: Badge,
    args: {
        count: 2,
        maxCount: 99
    }
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    render: () => (
        <Badge
            count={15}
            maxCount={9}
        />
    )
};

export default meta;
