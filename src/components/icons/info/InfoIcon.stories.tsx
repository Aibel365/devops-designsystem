import { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIcon } from "./InfoIcon";

const meta: Meta<typeof InfoIcon> = {
  title: "Icons/Icons/InfoIcon",
  component: InfoIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof InfoIcon>;

export const Default: Story = {};

export default meta;
