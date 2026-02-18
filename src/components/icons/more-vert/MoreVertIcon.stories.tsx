import { Meta, StoryObj } from "@storybook/react-vite";
import { MoreVertIcon } from "./MoreVertIcon";

const meta: Meta<typeof MoreVertIcon> = {
  title: "Icons/Icons/MoreVertIcon",
  component: MoreVertIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof MoreVertIcon>;

export const Default: Story = {};

export default meta;
