import { Meta, StoryObj } from "@storybook/react-vite";
import { SettingsIcon } from "./SettingsIcon";

const meta: Meta<typeof SettingsIcon> = {
  title: "Icons/Icons/SettingsIcon",
  component: SettingsIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof SettingsIcon>;

export const Default: Story = {};

export default meta;
