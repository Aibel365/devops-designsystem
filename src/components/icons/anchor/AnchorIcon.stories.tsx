import { Meta, StoryObj } from "@storybook/react-vite";
import { AnchorIcon } from "./AnchorIcon";

const meta: Meta<typeof AnchorIcon> = {
    title: "Icons/Icons/AnchorIcon",
    component: AnchorIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof AnchorIcon>;

export const Default: Story = {};

export default meta;
