import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "./Textarea";

Textarea.displayName = "Textarea";

const meta: Meta<typeof Textarea> = {
    title: "Designsystemet/Textarea",
    component: Textarea,
    args: {
        disabled: false,
        readOnly: false,
        cols: 20
    },
    argTypes: {
        disabled: { control: { type: "radio" }, options: [true, false] },
        readOnly: { control: { type: "radio" }, options: [true, false] },
        cols: { control: { type: "number" } },
        className: { control: false, table: { disable: true } }
    }
};

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    args: {
        className: "ads:w-full"
    }
};

export default meta;
