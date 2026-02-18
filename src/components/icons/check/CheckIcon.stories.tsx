import { Meta, StoryObj } from "@storybook/react-vite";
import { CheckIcon } from "./CheckIcon";

const meta: Meta<typeof CheckIcon> = {
  title: "Icons/Icons/CheckIcon",
  component: CheckIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof CheckIcon>;

export const Default: Story = {};

export default meta;
