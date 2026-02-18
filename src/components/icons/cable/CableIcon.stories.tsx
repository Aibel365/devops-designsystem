import { Meta, StoryObj } from "@storybook/react-vite";
import { CableIcon } from "./CableIcon";

const meta: Meta<typeof CableIcon> = {
    title: "Icons/Icons/CableIcon",
    component: CableIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof CableIcon>;

export const Default: Story = {};

export default meta;
