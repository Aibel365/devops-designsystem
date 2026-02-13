import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {},
  args: {},
};

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
export default meta;
