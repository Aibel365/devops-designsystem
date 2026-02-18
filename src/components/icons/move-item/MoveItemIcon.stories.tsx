import { Meta, StoryObj } from "@storybook/react-vite";
import { MoveItemIcon } from "./MoveItemIcon";

const meta: Meta<typeof MoveItemIcon> = {
    title: "Icons/Icons/MoveItemIcon",
    component: MoveItemIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof MoveItemIcon>;

export const Default: Story = {};

export default meta;
