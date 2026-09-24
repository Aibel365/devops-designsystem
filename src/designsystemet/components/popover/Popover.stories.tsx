import type { Meta, StoryObj } from "@storybook/react-vite";
import { Popover } from "./Popover";

Popover.displayName = "Popover";

const meta: Meta<typeof Popover> = {
    title: "Designsystemet/Popover",
    component: Popover,
    args: {
        placement: "top",
        variant: "default"
    },
    argTypes: {
        placement: { control: { type: "select" }, options: ["none", "top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"] },
        open: { control: { type: "boolean" }, options: [true, false] },
        variant: { control: { type: "radio" }, options: ["default", "tinted"] },
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
