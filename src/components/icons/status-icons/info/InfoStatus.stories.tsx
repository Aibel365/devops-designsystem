import { Meta, StoryObj } from "@storybook/react-vite";
import { InfoStatusIcon } from "./InfoStatusIcon";

const meta: Meta<typeof InfoStatusIcon> = {
    title: "Icons/Icons/InfoStatusIcon",
    component: InfoStatusIcon,
    args: {
        size: 20,
        style: { color: "#8e9199" }
    }
};

type Story = StoryObj<typeof InfoStatusIcon>;

export const Default: Story = {};

export default meta;
