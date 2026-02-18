import { Meta, StoryObj } from "@storybook/react-vite";
import { ContrastIcon } from "./ContrastIcon";

const meta: Meta<typeof ContrastIcon> = {
  title: "Icons/Icons/ContrastIcon",
  component: ContrastIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ContrastIcon>;

export const Default: Story = {};

export default meta;
