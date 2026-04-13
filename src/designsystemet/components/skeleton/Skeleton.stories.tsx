import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "./Skeleton";

Skeleton.displayName = "Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "Designsystemet/Skeleton",
    component: Skeleton,
    args: {
        width: 200,
        height: 100,
        variant: "rectangle"
    },
    argTypes: {
        width: { control: { type: "number" } },
        height: { control: { type: "number" } },
        variant: { control: { type: "radio" }, options: ["circle", "rectangle", "text"] }
    }
};

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const CircleVariant: Story = {
    args: { variant: "circle" }
};
export const TextVariant: Story = {
    args: { variant: "text", width: 50 }
};

export default meta;
