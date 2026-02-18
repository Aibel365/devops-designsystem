import { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUpwardIcon } from "./ArrowUpwardIcon";

const meta: Meta<typeof ArrowUpwardIcon> = {
  title: "Icons/Icons/ArrowUpwardIcon",
  component: ArrowUpwardIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ArrowUpwardIcon>;

export const Default: Story = {};

export default meta;
