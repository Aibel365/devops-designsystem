import type { Meta, StoryObj } from "@storybook/react-vite";

import { ValidationMessage } from "./ValidationMessage";

const meta: Meta<typeof ValidationMessage> = {
    title: "Designsystemet/Typography/ValidationMessage",
    component: ValidationMessage,
    args: {
        children: "This is a message",
        "data-color": "info",
        "data-size": "md"
    },
    argTypes: {
        "data-color": { control: { type: "radio" }, options: ["info", "success", "warning", "danger"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] }
    }
};

type Story = StoryObj<typeof ValidationMessage>;

export const Default: Story = {};

export const AllTypes: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ValidationMessage data-color="info">This is an informational message.</ValidationMessage>
            <ValidationMessage data-color="success">This is a success message.</ValidationMessage>
            <ValidationMessage data-color="warning">This is a warning message.</ValidationMessage>
            <ValidationMessage data-color="danger">This is an error message.</ValidationMessage>
        </div>
    )
};

export default meta;
