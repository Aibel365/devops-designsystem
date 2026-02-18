import { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronRightIcon } from "./ChevronRightIcon";

const meta: Meta<typeof ChevronRightIcon> = {
    title: "Icons/Icons/ChevronRightIcon",
    component: ChevronRightIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof ChevronRightIcon>;

export const Default: Story = {};

export default meta;
