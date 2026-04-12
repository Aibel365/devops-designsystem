import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textfield } from "./Textfield";

Textfield.displayName = "Textfield";

const meta: Meta<typeof Textfield> = {
    title: "Designsystemet/Textfield",
    component: Textfield,
    args: {
        label: "Label",
        disabled: false,
        readOnly: false,
        multiple: false,
        required: false,
        counter: 0,
        type: "text",
        size: 18,
        "data-size": "md"
    },
    argTypes: {
        label: { control: { type: "text" } },
        disabled: { control: { type: "radio" }, options: [true, false] },
        readOnly: { control: { type: "radio" }, options: [true, false] },
        multiple: { control: { type: "radio" }, options: [true, false] },
        required: { control: { type: "radio" }, options: [true, false] },
        description: { control: { type: "text" } },
        error: { control: { type: "text" } },
        counter: { control: { type: "number" }, description: "Uses Field.Counter to display a character counter Pass a number to set a limit, or an object to configure the counter." },
        className: { control: { type: "text" } },
        prefix: { control: { type: "text" } },
        suffix: { control: { type: "text" } },
        type: { control: { type: "select" }, options: [] },
        size: { control: { type: "number" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-indeterminate": { control: { type: "boolean" } }
    }
};

type Story = StoryObj<typeof Textfield>;

export const Default: Story = {};
export const Affix: Story = {
    args: {
        prefix: "prefix",
        suffix: "suffix"
    }
};
export const Counter: Story = {
    args: {
        counter: 2,
        value: "Helloo"
    }
};
export const Required: Story = {
    args: {
        required: true
    }
};
export const Error: Story = {
    args: {
        error: "Cannot be empty!"
    }
};

export default meta;
