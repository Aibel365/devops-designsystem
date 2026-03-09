import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../button/Button";

const meta: Meta<typeof Tooltip> = {
    title: "Atoms/Tooltip",
    component: Tooltip,
    args: {}
};

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    render: () => (
        <Tooltip
            content="This is the tooltip"
            placement="top"
        >
            <Button>Hover or focus on me</Button>
        </Tooltip>
    )
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
