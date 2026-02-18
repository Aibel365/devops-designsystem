import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
    title: "Atoms/Tooltip",
    component: Tooltip
};

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        children: "Focusable element"
    }
};
export default meta;

export const PlacementRight: Story = {
    args: {
        placement: "right",
        children: "Focusable element"
    }
};

export const PlacementBottom: Story = {
    args: {
        placement: "bottom",
        children: "Focusable element"
    }
};

export const PlacementLeft: Story = {
    args: {
        placement: "left",
        children: "Focusable element"
    }
};

export const WithWhiteColors: Story = {
    args: {
        children: "Focusable element",
        style: {
            backgroundColor: "white",
            color: "black"
        }
    }
};
