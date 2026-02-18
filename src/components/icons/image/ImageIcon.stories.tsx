import { Meta, StoryObj } from "@storybook/react-vite";
import { ImageIcon } from "./ImageIcon";

const meta: Meta<typeof ImageIcon> = {
    title: "Icons/Icons/ImageIcon",
    component: ImageIcon,
    args: {
        size: 20,
        color: "#003366"
    }
};

type Story = StoryObj<typeof ImageIcon>;

export const Default: Story = {};

export default meta;
