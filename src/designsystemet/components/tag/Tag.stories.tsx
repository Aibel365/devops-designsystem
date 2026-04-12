import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";

Tag.displayName = "Tag";

const meta: Meta<typeof Tag> = {
    title: "Designsystemet/Tag",
    component: Tag,
    args: {
        variant: "default",
        "data-size": "md",
        "data-color": "bright-blue",
        children: "Tag Text"
    },
    argTypes: {
        variant: { control: { type: "radio" }, options: ["default", "outline"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "bright-blue", "green", "neutral"] },
        children: { control: { type: "text" } }
    }
};

type Story = StoryObj<typeof Tag>;

export const Default: Story = {};

export const Outline: Story = {
    args: {
        variant: "outline"
    }
};

export default meta;
