import { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowDownwardIcon } from "./ArrowDownwardIcon";

const meta: Meta<typeof ArrowDownwardIcon> = {
  title: "Icons/Icons/ArrowDownwardIcon",
  component: ArrowDownwardIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ArrowDownwardIcon>;

export const Default: Story = {};

export default meta;
