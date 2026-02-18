import { Meta, StoryObj } from "@storybook/react-vite";
import { FilterOutlineIcon } from "./FilterOutlineIcon";

const meta: Meta<typeof FilterOutlineIcon> = {
    title: "Icons/Icons/FilterOutlineIcon",
    component: FilterOutlineIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof FilterOutlineIcon>;

export const Default: Story = {};

export default meta;
