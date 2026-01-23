import type { Meta, StoryObj } from "@storybook/react-vite";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  args: {
    children: "Card text",
  },
};

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export default meta;
