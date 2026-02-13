import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge } from "./Badge";
import { Button } from "../button/Button";
import { Avatar } from "../avatar/Avatar";

const meta: Meta<typeof Badge> = {
    title: "Atoms/Badge",
    component: Badge,
    args: {
        count: 2,
        maxCount: 99
    }
};

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const CountAboveMax: Story = {
    args: {
        count: 100
    }
};

export const AttachedToRectangle: Story = {
    args: {
        "data-color": "danger",
        placementChildren: "top-right",
        children: <Button>Button text</Button>
    }
};

export const AttachedToCircle: Story = {
    args: {
        "data-color": "danger",
        placementChildren: "bottom-left",
        overlapChildren: "circle",
        children: <Avatar aria-hidden="true">W</Avatar>
    }
};

export default meta;
