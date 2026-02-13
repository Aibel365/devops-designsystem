import type { Meta, StoryObj } from "@storybook/react-vite";

import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
    title: "Atoms/Alert",
    component: Alert,
    argTypes: {
        heading: { control: "text" }
    },
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
        <Alert
            heading={"This is the heading"}
            headingLevel={3}
            headingSize="md"
        >
            This is the message inside the Alert
        </Alert>
    )
};

export default meta;
