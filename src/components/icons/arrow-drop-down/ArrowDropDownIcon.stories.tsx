import { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowDropDownIcon } from "./ArrowDropDownIcon";

const meta: Meta<typeof ArrowDropDownIcon> = {
    title: "Icons/Icons/ArrowDropDownIcon",
    component: ArrowDropDownIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof ArrowDropDownIcon>;

export const Default: Story = {};

export default meta;
