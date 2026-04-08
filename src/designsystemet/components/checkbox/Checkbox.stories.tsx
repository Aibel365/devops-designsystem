import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Designsystemet/Checkbox",
    component: Checkbox,
    args: {
        description: "Description"
    },
    argTypes: {
        readOnly: { control: { type: "boolean" }, options: [true, false] },
        disabled: { control: { type: "boolean" }, options: [true, false] },
        required: { control: { type: "boolean" }, options: [true, false] },
        checked: { control: { type: "boolean" }, options: [true, false] },
        "data-indeterminate": { control: { type: "boolean" }, options: [true, false] },
        error: { control: { type: "text" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] }
    }
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        readOnly: false,
        disabled: false,
        required: false,
        checked: false,
        error: "",
        "data-indeterminate": false,
        "data-size": "md"
    }
};

export const ReadOnly: Story = { args: { readOnly: true, checked: true } };

export const Disabled: Story = { args: { disabled: true } };

export const Error: Story = { args: { error: "This field is required" } };

export const Indeterminate: Story = { args: { checked: true, "data-indeterminate": true } };

export default meta;
