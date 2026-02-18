import { Meta, StoryObj } from "@storybook/react-vite";
import { ExpandLessIcon } from "./ExpandLessIcon";

const meta: Meta<typeof ExpandLessIcon> = {
  title: "Icons/Icons/ExpandLessIcon",
  component: ExpandLessIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ExpandLessIcon>;

export const Default: Story = {};

export default meta;
