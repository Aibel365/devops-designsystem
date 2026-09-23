import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "../typography/heading/Heading";
import { Paragraph } from "../typography/paragraph/Paragraph";
import { Dialog } from "./Dialog";

Dialog.displayName = "Dialog";
Heading.displayName = "Heading";
Paragraph.displayName = "Paragraph";

const meta: Meta<typeof Dialog> = {
    title: "Designsystemet/Dialog",
    component: Dialog,
    args: {
        "data-color": "aibel-blue",
        "data-size": "md",
        children: (
            <>
                <Dialog.TriggerContext>
                    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
                    <Dialog>Dialog content</Dialog>
                </Dialog.TriggerContext>
            </>
        )
    },
    argTypes: {
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        open: { control: { type: "boolean" }, options: [true, false] },
        modal: { control: { type: "boolean" }, options: [true, false] },
        placement: { description: "When not center, displays dialog as a drawer from the specified side.", control: { type: "radio" }, options: ["center", "top", "right", "bottom", "left"] },
        closedby: { control: { type: "radio" }, options: ["none", "closerequest", "any"] },
        children: {
            control: false,
            table: { disable: true }
        }
    }
};

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    args: {
        "data-size": "md",
        open: false,
        modal: true,
        placement: "center",
        closedby: "closerequest"
    },
    render: (args) => (
        <Dialog.TriggerContext>
            <Dialog.Trigger>Open Dialog</Dialog.Trigger>
            <Dialog {...args}>Dialog content</Dialog>
        </Dialog.TriggerContext>
    )
};

export const ClosedByAny: Story = {
    args: {
        closedby: "any"
    },
    render: (args) => (
        <Dialog.TriggerContext>
            <Dialog.Trigger>Open Dialog</Dialog.Trigger>
            <Dialog {...args}>Dialog content</Dialog>
        </Dialog.TriggerContext>
    )
};

export const WithTitleAndDividers: Story = {
    args: {
        closedby: "any"
    },
    render: (args) => (
        <Dialog.TriggerContext>
            <Dialog.Trigger>Open Dialog</Dialog.Trigger>
            <Dialog {...args}>
                <Dialog.Block>
                    <Heading>Title</Heading>
                </Dialog.Block>
                <Dialog.Block>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales eros justo. Aenean non mi ipsum. Cras viverra elit nec vulputate mattis.</Paragraph>
                </Dialog.Block>
                <Dialog.Block>Footer</Dialog.Block>
            </Dialog>
        </Dialog.TriggerContext>
    )
};

export default meta;
