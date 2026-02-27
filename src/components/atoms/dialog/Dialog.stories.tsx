import type { Meta, StoryObj } from "@storybook/react-vite";

import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
    title: "Atoms/Dialog",
    component: Dialog
};

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    render: () => (
        <Dialog.TriggerContext>
            <Dialog.Trigger>Open Dialog</Dialog.Trigger>
            <Dialog>Dialog content</Dialog>
        </Dialog.TriggerContext>
    )
};

export default meta;
