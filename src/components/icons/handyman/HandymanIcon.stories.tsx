import { Meta, StoryObj } from "@storybook/react-vite";
import { HandymanIcon } from "./HandymanIcon";

const meta: Meta<typeof HandymanIcon> = {
    title: "Icons/Icons/HandymanIcon",
    component: HandymanIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof HandymanIcon>;

export const Default: Story = {};

export default meta;
