import { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowBackIcon } from "./ArrowBackIcon";

const meta: Meta<typeof ArrowBackIcon> = {
  title: "Icons/Icons/ArrowBackIcon",
  component: ArrowBackIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ArrowBackIcon>;

export const Default: Story = {};

export default meta;
