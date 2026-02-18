import { Meta, StoryObj } from "@storybook/react-vite";
import { SaveIcon } from "./SaveIcon";

const meta: Meta<typeof SaveIcon> = {
    title: "Icons/Icons/SaveIcon",
    component: SaveIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof SaveIcon>;

export const Default: Story = {};

export default meta;
