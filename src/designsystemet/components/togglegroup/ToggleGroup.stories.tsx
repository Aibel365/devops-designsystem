import type { Meta, StoryObj } from "@storybook/react-vite";

import { ToggleGroup } from "./ToggleGroup";

ToggleGroup.displayName = "ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
    title: "Designsystemet/ToggleGroup",
    component: ToggleGroup,
    args: {
        variant: "primary",
        "data-toggle-group": "filter",
        defaultValue: "inbox",
        "data-size": "md",
        "data-color": "aibel-bright-blue",
        children: (
            <>
                <ToggleGroup.Item value="inbox">Inbox</ToggleGroup.Item>
                <ToggleGroup.Item value="drafts">Drafts</ToggleGroup.Item>
                <ToggleGroup.Item value="archive">Archive</ToggleGroup.Item>
                <ToggleGroup.Item value="sent">Sent</ToggleGroup.Item>
            </>
        )
    },
    argTypes: {
        variant: { control: { type: "radio" }, options: ["primary", "secondary"] },
        "data-toggle-group": { control: { type: "text" } },
        defaultValue: { control: { type: "text" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        children: { control: false, table: { disable: true } },
        value: { control: { type: "text" } },
        onChange: { control: { type: "text" } }
    }
};

type Story = StoryObj<typeof ToggleGroup>;

export const Default: Story = {};

export const Variant: Story = {
    args: {
        variant: "secondary"
    }
};

export const Controlled: Story = {
    args: {
        value: "inbox"
    }
};

export default meta;
