import { Meta, StoryObj } from "@storybook/react-vite";
import { DescriptionIcon } from "./DescriptionIcon";

const meta: Meta<typeof DescriptionIcon> = {
  title: "Icons/Icons/DescriptionIcon",
  component: DescriptionIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof DescriptionIcon>;

export const Default: Story = {};

export default meta;
