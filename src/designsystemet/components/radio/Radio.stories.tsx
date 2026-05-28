import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
    title: "Designsystemet/Radio",
    component: Radio,
    args: {
        label: "This is a radio button",
        readOnly: false,
        disabled: false,
        description: "Description",
        "data-size": "md"
    },
    argTypes: {
        label: { control: { type: "text" } },
        readOnly: { control: { type: "boolean" }, options: [true, false] },
        disabled: { control: { type: "boolean" }, options: [true, false] },
        value: { control: { type: "radio" }, options: ["string", "number", "readonly string[]"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-neutral", "aibel-green"] },
        "data-indeterminate": { control: { type: "boolean" }, description: "Indeterminate state for checkbox inputs Only works when used inside Field component", options: [true, false] },
        error: { control: { type: "text" } },
        description: { control: { type: "text" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        variant: { control: { type: "select" }, options: ["outline"] }
    }
};

type Story = StoryObj<typeof Radio>;

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

export const Error: Story = {
    args: {
        error: "Error on this field"
    }
};

export const Inline: Story = {
    render: () => (
        <div className="ads:flex ads:flex-wrap ads:gap-6">
            <Radio
                label="Yes"
                value="Y"
            />
            <Radio
                label="No"
                value="N"
            />
        </div>
    )
};

export const Outline: Story = {
    args: {
        variant: "outline"
    }
};

export default meta;
