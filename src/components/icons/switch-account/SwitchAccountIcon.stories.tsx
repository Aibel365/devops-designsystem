import { Meta, StoryObj } from "@storybook/react-vite";
import { SwitchAccountIcon } from "./SwitchAccountIcon";

const meta: Meta<typeof SwitchAccountIcon> = {
  title: "Icons/Icons/SwitchAccountIcon",
  component: SwitchAccountIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof SwitchAccountIcon>;

export const Default: Story = {};

export default meta;
