import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "../typography/heading/Heading";
import { Paragraph } from "../typography/paragraph/Paragraph";
import { Alert } from "./Alert";

Alert.displayName = "Alert";

const meta: Meta<typeof Alert> = {
    title: "Designsystemet/Alert",
    component: Alert,
    args: {
        children: "This is the message inside the Alert",
        "data-size": "md"
    },
    argTypes: {
        "data-color": {
            control: { type: "radio" },
            options: ["info", "success", "warning", "danger"]
        },
        "data-size": {
            control: { type: "radio" },
            options: ["sm", "md", "lg"]
        }
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
                Have you remembered to book a passport appointment?
            </Heading>
            <Paragraph>There are long queues for passport appointments at the moment, so it is a good idea to book well before you travel.</Paragraph>
        </Alert>
    )
};

export default meta;
