import { Meta, StoryObj } from "@storybook/react-vite";
import { LightModeIcon } from "./LightModeIcon";

const meta: Meta<typeof LightModeIcon> = {
    title: "Icons/Icons/LightModeIcon",
    component: LightModeIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof LightModeIcon>;

export const Default: Story = {};

export default meta;
