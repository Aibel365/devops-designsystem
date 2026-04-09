import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "Designsystemet/Input",
    component: Input,
    args: {
        readOnly: false,
        disabled: false,
        type: "text",
        name: "Some text...",
        "data-size": "md",
        size: 12
    },
    argTypes: {
        readOnly: { control: { type: "boolean" }, options: [true, false] },
        disabled: { control: { type: "boolean" }, options: [true, false] },
        "aria-invalid": { control: { type: "boolean" }, options: [true, false] },
        type: { control: { type: "select" }, options: ["checkbox", "color", "date", "datetime-local", "email", "file", "hidden", "month", "number", "password", "radio", "search", "tel", "text", "time", "url", "week"] },
        "data-indeterminate": { control: { type: "boolean" }, options: [true, false] },
        name: { control: { type: "text" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        size: { control: { type: "number" }, description: "Adjusts the width of the component" }
    }
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const ReadOnly: Story = {
    args: {
        readOnly: true
    }
};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};

export const Date: Story = {
    args: {
        type: "date"
    }
};

export default meta;
