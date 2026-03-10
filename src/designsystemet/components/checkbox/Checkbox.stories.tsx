import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Designsystemet/Checkbox",
    component: Checkbox,
    args: {
        description: "Description"
    }
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const ReadOnly: Story = { args: { readOnly: true } };

export const Disabled: Story = { args: { disabled: true } };

export default meta;
