import { Meta, StoryObj } from "@storybook/react-vite";
import { CloseIcon } from "./CloseIcon";

const meta: Meta<typeof CloseIcon> = {
    title: "Icons/Icons/CloseIcon",
    component: CloseIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof CloseIcon>;

export const Default: Story = {};

export default meta;
