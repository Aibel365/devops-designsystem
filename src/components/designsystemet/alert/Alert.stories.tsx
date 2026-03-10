import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert } from "./Alert";
import { Heading } from "../heading/Heading";
import { Paragraph } from "../paragraph/Paragraph";

const meta: Meta<typeof Alert> = {
    title: "Designsystemet/Alert",
    component: Alert,
    args: {
        children: "This is the message inside the Alert"
    }
};

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
    args: {
        "data-color": "info"
    }
};

export const Success: Story = {
    args: {
        "data-color": "success"
    }
};

export const Warning: Story = {
    args: {
        "data-color": "warning"
    }
};

export const Danger: Story = {
    args: {
        "data-color": "danger"
    }
};

export const WithHeading: Story = {
    render: () => (
        <Alert data-color="info">
            <Heading
                level={2}
                data-size="xs"
                style={{
                    marginBottom: "var(--ds-size-2)"
                }}
            >
                Har du husket å bestille passtime?
            </Heading>
            <Paragraph>Det er lange køer for å bestille pass om dagen, det kan være lurt å bestille i god tid før du skal reise.</Paragraph>
        </Alert>
    )
};

export default meta;
