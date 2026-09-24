import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
    title: "Designsystemet/Tooltip",
    component: Tooltip,
    args: {
        content: "This is the tooltip",
        children: <Button>Hover or focus on me</Button>
    },
    argTypes: {
        placement: {
            control: "radio",
            options: ["top", "right", "bottom", "left"]
        },
        autoPlacement: { control: { type: "boolean" }, options: [true, false] }
    }
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {};

export const PlacementRight: Story = {
    args: {
        placement: "right",
        content: "Tooltip on the right!"
    }
};

export const PlacementBottom: Story = {
    args: {
        placement: "bottom",
        content: "Tooltip on the bottom!"
    }
};
