import type { Meta, StoryObj } from "@storybook/react-vite";

import { Details } from "./Details";

const meta: Meta<typeof Details> = {
    title: "Designsystemet/Details",
    component: Details
};

type Story = StoryObj<typeof Details>;

export const Default: Story = {
    render: () => (
        <Details>
            <Details.Summary>Details heading text</Details.Summary>
            <Details.Content>Details content</Details.Content>
        </Details>
    )
};

export default meta;
