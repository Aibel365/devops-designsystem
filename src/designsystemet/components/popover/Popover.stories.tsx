import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";

Popover.displayName = "Popover";

const meta: Meta<typeof Popover> = {
    title: "Designsystemet/Popover",
    component: Popover,
    args: {
        placement: "top",
        variant: "default",
        "data-color": "aibel-blue",
        "data-size": "md"
    },
    argTypes: {
        placement: { control: { type: "select" }, options: ["none", "top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        open: { control: { type: "boolean" }, options: [true, false] },
        variant: { control: { type: "radio" }, options: ["default", "tinted"] },
        "data-color": { control: { type: "select" }, options: ["aibel-blue", "bright-blue", "green", "neutral", "info", "success", "warning", "danger"] },
        autoPlacement: { control: { type: "boolean" }, options: [true, false] },
        onOpen: {},
        onClose: {}
    }
};

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
    render: (args) => (
        <Popover.TriggerContext>
            <Popover.Trigger>Open popover</Popover.Trigger>
            <Popover {...args}>The popover provides a short message that can be easily communicated to the user.</Popover>
        </Popover.TriggerContext>
    )
};

export const TintedOnTheRight: Story = {
    args: {
        variant: "tinted",
        placement: "right"
    },
    render: (args) => (
        <Popover.TriggerContext>
            <Popover.Trigger>Open popover</Popover.Trigger>
            <Popover {...args}>The popover provides a short message that can be easily communicated to the user.</Popover>
        </Popover.TriggerContext>
    )
};
export default meta;
