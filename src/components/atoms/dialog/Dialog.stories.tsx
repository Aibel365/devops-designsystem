import type { Meta, StoryObj } from "@storybook/react-vite";

import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
    title: "Atoms/Dialog",
    component: Dialog
};

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {};

export default meta;
