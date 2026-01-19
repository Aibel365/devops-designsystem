import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  args: {
    count: 2,
    maxCount: 99,
  },
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const CountAboveMax: Story = {
  args: {
    count: 100,
  },
};

export default meta;
