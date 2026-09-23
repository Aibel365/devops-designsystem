import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
    title: "Designsystemet/Tooltip",
    component: Tooltip,
    args: {
        content: "This is the tooltip",
        "data-size": "md",
        "data-color": "aibel-blue",
        children: <Button>Hover or focus on me</Button>
    },
    argTypes: {
        placement: {
            control: "radio",
            options: ["top", "right", "bottom", "left"]
        },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
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
