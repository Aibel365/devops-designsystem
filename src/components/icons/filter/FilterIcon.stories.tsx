import { Meta, StoryObj } from "@storybook/react-vite";
import { FilterIcon } from "./FilterIcon";

const meta: Meta<typeof FilterIcon> = {
  title: "Icons/Icons/FilterIcon",
  component: FilterIcon,
  args: {
    size: 20,
    color: "#003366",
  },
};

type Story = StoryObj<typeof FilterIcon>;

export const Default: Story = {};

export default meta;
