import { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowForwardIcon } from "./ArrowForwardIcon";

const meta: Meta<typeof ArrowForwardIcon> = {
    title: "Icons/Icons/ArrowForwardIcon",
    component: ArrowForwardIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof ArrowForwardIcon>;

export const Default: Story = {};

export default meta;
