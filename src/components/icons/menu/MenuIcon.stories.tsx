import { Meta, StoryObj } from "@storybook/react-vite";
import { MenuIcon } from "./MenuIcon";

const meta: Meta<typeof MenuIcon> = {
  title: "Icons/Icons/MenuIcon",
  component: MenuIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof MenuIcon>;

export const Default: Story = {};

export default meta;
