import { Meta, StoryObj } from "@storybook/react-vite";
import { VisibilityOffIcon } from "./VisibilityOffIcon";

const meta: Meta<typeof VisibilityOffIcon> = {
  title: "Icons/Icons/VisibilityOffIcon",
  component: VisibilityOffIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof VisibilityOffIcon>;

export const Default: Story = {};

export default meta;
