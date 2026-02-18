import { Meta, StoryObj } from "@storybook/react-vite";
import { DarkModeIcon } from "./DarkModeIcon";

const meta: Meta<typeof DarkModeIcon> = {
    title: "Icons/Icons/DarkModeIcon",
    component: DarkModeIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof DarkModeIcon>;

export const Default: Story = {};

export default meta;
