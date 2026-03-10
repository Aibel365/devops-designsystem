import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleGroup } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
    title: "Designsystemet/ToggleGroup",
    component: ToggleGroup
};

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {
    render: () => (
        <ToggleGroup
            data-toggle-group="Filter"
            defaultValue="inbox"
        >
            <ToggleGroup.Item value="inbox">Inbox</ToggleGroup.Item>
            <ToggleGroup.Item value="drafts">Drafts</ToggleGroup.Item>
            <ToggleGroup.Item value="archive">Archive</ToggleGroup.Item>
            <ToggleGroup.Item value="sent">Sent</ToggleGroup.Item>
        </ToggleGroup>
    )
};

export default meta;
