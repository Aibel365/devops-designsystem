import { Meta, StoryObj } from "@storybook/react-vite";
import { FilterListIcon } from "./FilterListIcon";

const meta: Meta<typeof FilterListIcon> = {
  title: "Icons/Icons/FilterListIcon",
  component: FilterListIcon,
  args: {
    size: 20,
    color: "#8e9199",
  },
};

type Story = StoryObj<typeof FilterListIcon>;

export const Default: Story = {};

export default meta;
