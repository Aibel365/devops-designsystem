import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorSummary } from "./ErrorSummary";

const meta: Meta<typeof ErrorSummary> = {
    title: "Designsystemet/ErrorSummary",
    component: ErrorSummary
};

type Story = StoryObj<typeof ErrorSummary>;

//TODO Something wrong with the styling i think, ErrorSummaryItems does not get dots in front of them like in the examples: https://designsystemet.no/en/components/docs/error-summary/code
export const Default: Story = {
    render: () => (
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
    )
};

export default meta;
