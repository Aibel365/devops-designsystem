import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConditionRender } from "./ConditionRender";
import { Button } from "..";

const meta: Meta<typeof ConditionRender> = {
  title: "Atoms/ConditionRender",
  component: ConditionRender,
  args: {
    condition: true,
    children: <Button>This is a great button</Button>,
  },
};

type Story = StoryObj<typeof ConditionRender>;

export const Default: Story = {};

export const WithFallback: Story = {
  args: {
    condition: false,
    fallback: <Button>Fallback</Button>,
  },
};

export default meta;
