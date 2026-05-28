import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";

Badge.displayName = "Badge";

const meta: Meta<typeof Badge> = {
    title: "Designsystemet/Badge",
    component: Badge,
    argTypes: {
        count: { control: "number" },
        maxCount: { control: "number" },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        variant: { control: { type: "radio" }, options: ["base", "tinted"] }
    }
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        count: 15,
        maxCount: 9
    }
};

export const VariantTinted: Story = {
    args: {
        count: 15,
        maxCount: 9,
        variant: "tinted"
    }
};

export const SizeLarge: Story = {
    args: {
        count: 15,
        maxCount: 9,
        "data-size": "lg"
    }
};

export const Color: Story = {
    args: {
        count: 9,
        maxCount: 15,
        "data-color": "aibel-neutral"
    }
};

export const Dot: Story = {
    args: {}
};

export default meta;
