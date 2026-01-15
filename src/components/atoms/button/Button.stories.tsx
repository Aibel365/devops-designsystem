import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Button text",
  },
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export default meta;
