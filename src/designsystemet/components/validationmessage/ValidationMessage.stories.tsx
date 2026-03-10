import type { Meta, StoryObj } from "@storybook/react-vite";

import { ValidationMessage } from "./ValidationMessage";

const meta: Meta<typeof ValidationMessage> = {
    title: "Designsystemet/ValidationMessage",
    component: ValidationMessage
};

type Story = StoryObj<typeof ValidationMessage>;

export const Default: Story = {
    render: () => (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <ValidationMessage data-color="danger">This is an error message.</ValidationMessage>

            <ValidationMessage data-color="success">This is a success message.</ValidationMessage>

            <ValidationMessage data-color="info">This is an informational message.</ValidationMessage>

            <ValidationMessage data-color="warning">This is a warning message.</ValidationMessage>
        </div>
    )
};

export default meta;
