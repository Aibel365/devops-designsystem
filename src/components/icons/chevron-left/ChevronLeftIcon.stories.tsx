import { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronLeftIcon } from "./ChevronLeftIcon";

const meta: Meta<typeof ChevronLeftIcon> = {
    title: "Icons/Icons/ChevronLeftIcon",
    component: ChevronLeftIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof ChevronLeftIcon>;

export const Default: Story = {};

export default meta;
