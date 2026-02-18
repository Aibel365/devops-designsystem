import { Meta, StoryObj } from "@storybook/react-vite";
import { PushPinIcon } from "./PushPinIcon";

const meta: Meta<typeof PushPinIcon> = {
  title: "Icons/Icons/PushPinIcon",
  component: PushPinIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof PushPinIcon>;

export const Default: Story = {};

export default meta;
