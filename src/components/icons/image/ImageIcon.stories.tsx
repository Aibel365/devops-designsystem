import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageIcon } from "./ImageIcon";

const meta: Meta<typeof ImageIcon> = {
    title: "Icons/ImageIcon",
    component: ImageIcon
};

type Story = StoryObj<typeof ImageIcon>;

export const Default: Story = {};

export default meta;
