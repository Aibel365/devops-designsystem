import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
    title: "Atoms/Tag",
    component: Tag
};

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
    args: {
        children: "Feb 15th 2026"
    }
};

export default meta;
