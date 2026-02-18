import { Meta, StoryObj } from "@storybook/react-vite";
import { ListAltIcon } from "./ListAltIcon";

const meta: Meta<typeof ListAltIcon> = {
  title: "Icons/Icons/ListAltIcon",
  component: ListAltIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof ListAltIcon>;

export const Default: Story = {};

export default meta;
