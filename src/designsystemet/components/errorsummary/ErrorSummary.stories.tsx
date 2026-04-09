import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorSummary } from "./ErrorSummary";

const meta: Meta<typeof ErrorSummary> = {
    title: "Designsystemet/ErrorSummary",
    component: ErrorSummary,
    args: {
        children: (
            <ErrorSummary>
                <ErrorSummary.Heading>To proceed, you must correct the following errors:</ErrorSummary.Heading>
                <ErrorSummary.List>
                    <ErrorSummary.Item>
                        <ErrorSummary.Link href="#">Birthdate cannot be after the year 2005</ErrorSummary.Link>
                    </ErrorSummary.Item>
                    <ErrorSummary.Item>
                        <ErrorSummary.Link href="#">Phone number can only contain digits</ErrorSummary.Link>
                    </ErrorSummary.Item>
                    <ErrorSummary.Item>
                        <ErrorSummary.Link href="#">Email must be valid</ErrorSummary.Link>
                    </ErrorSummary.Item>
                </ErrorSummary.List>
            </ErrorSummary>
        ),
        "data-size": "md"
    },
    argTypes: {
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        children: {
            control: false,
            table: { disable: true }
        }
    }
};

type Story = StoryObj<typeof ErrorSummary>;

export const Default: Story = {};

export default meta;
