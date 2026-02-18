import { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircleIcon } from "./CheckCircleIcon";

const meta: Meta<typeof CheckCircleIcon> = {
    title: "Icons/Icons/CheckCircleIcon",
    component: CheckCircleIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof CheckCircleIcon>;

export const Default: Story = {};

export default meta;
