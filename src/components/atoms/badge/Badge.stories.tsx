import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";
import { Button } from "../button/Button";

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

export const AttachedToCorner: Story = {
  render: () => (
    <Badge.Position placement="top-right">
      <Badge data-color="danger" count={2}></Badge>
      <Button>Component or Icon</Button>
    </Badge.Position>
  ),
};

export default meta;
