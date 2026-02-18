import { Meta, StoryObj } from "@storybook/react-vite";
import { ShieldPersonIcon } from "./ShieldPersonIcon";

const meta: Meta<typeof ShieldPersonIcon> = {
    title: "Icons/Icons/ShieldPersonIcon",
    component: ShieldPersonIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof ShieldPersonIcon>;

export const Default: Story = {};

export default meta;
