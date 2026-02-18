import { Meta, StoryObj } from "@storybook/react-vite";
import { PushPinFilledIcon } from "./PushPinFilledIcon";

const meta: Meta<typeof PushPinFilledIcon> = {
  title: "Icons/Icons/PushPinFilledIcon",
  component: PushPinFilledIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof PushPinFilledIcon>;

export const Default: Story = {};

export default meta;
