import { Meta, StoryObj } from "@storybook/react-vite";
import { RadioFilledIcon } from "./RadioFilledIcon";

const meta: Meta<typeof RadioFilledIcon> = {
  title: "Icons/Icons/RadioFilledIcon",
  component: RadioFilledIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof RadioFilledIcon>;

export const Default: Story = {};

export default meta;
