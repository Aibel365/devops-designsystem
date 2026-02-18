import { Meta, StoryObj } from "@storybook/react-vite";
import { CheckCircleIconFilled } from "./CheckCircleIconFilled";

const meta: Meta<typeof CheckCircleIconFilled> = {
    title: "Icons/Icons/CheckCircleIconFilled",
    component: CheckCircleIconFilled,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof CheckCircleIconFilled>;

export const Default: Story = {};

export default meta;
