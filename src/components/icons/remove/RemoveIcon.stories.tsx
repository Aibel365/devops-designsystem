import { Meta, StoryObj } from "@storybook/react-vite";
import { RemoveIcon } from "./RemoveIcon";

const meta: Meta<typeof RemoveIcon> = {
  title: "Icons/Icons/RemoveIcon",
  component: RemoveIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof RemoveIcon>;

export const Default: Story = {};

export default meta;
