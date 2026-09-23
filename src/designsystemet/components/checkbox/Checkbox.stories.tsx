import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "./Checkbox";

Checkbox.displayName = "Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Designsystemet/Checkbox",
    component: Checkbox,
    args: {
        disabled: false,
        readOnly: false,
        "data-indeterminate": false,
        required: false,
        error: "",
        variant: undefined,
        position: "start",
        "data-size": "md",
        "data-color": "aibel-blue",
        description: ""
    },
    argTypes: {
        readOnly: { control: { type: "boolean" }, options: [true, false] },
        disabled: { control: { type: "boolean" }, options: [true, false] },
        required: { control: { type: "boolean" }, options: [true, false] },
        checked: { control: { type: "boolean" }, options: [true, false] },
        "data-indeterminate": { control: { type: "boolean" }, options: [true, false] },
        error: { control: { type: "text" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        variant: {
            control: { type: "select" },
            options: ["outline"]
        },
        position: {
            control: { type: "select" },
            options: ["start", "end"]
        }
    }
};

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const ReadOnly: Story = { args: { readOnly: true, checked: true, description: "Description" } };

export const Disabled: Story = { args: { disabled: true, description: "Description" } };

export const Error: Story = { args: { error: "This field is required", description: "Description" } };

export const Indeterminate: Story = { args: { checked: true, "data-indeterminate": true, description: "Description" } };

export default meta;
