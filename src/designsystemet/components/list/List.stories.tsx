import type { Meta, StoryObj } from "@storybook/react-vite";

import { List, ListItem } from "./List";

const meta: Meta<typeof ListItem> = {
    title: "Designsystemet/List",
    component: ListItem
};

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
    render: () => (
        <List.Unordered>
            <List.Item>Bøyabreen</List.Item>
            <List.Item>Briksdalsbreen</List.Item>
            <List.Item>Nigardsbreen</List.Item>
        </List.Unordered>
    )
};

export const Unordered: Story = {
    render: () => (
        <List.Unordered>
            <List.Item>Bøyabreen</List.Item>
            <List.Item>Briksdalsbreen</List.Item>
            <List.Item>Nigardsbreen</List.Item>
        </List.Unordered>
    )
};

export const Ordered: Story = {
    render: () => (
        <List.Ordered>
            <List.Item>Bøyabreen</List.Item>
            <List.Item>Briksdalsbreen</List.Item>
            <List.Item>Nigardsbreen</List.Item>
        </List.Ordered>
    )
};

export const Nested: Story = {
    render: () => (
        <List.Ordered>
            <List.Item>Bøyabreen</List.Item>
            <List.Unordered>
                <List.Item>Briksdalsbreen</List.Item>
                <List.Item>Nigardsbreen</List.Item>
            </List.Unordered>
        </List.Ordered>
    )
};

export default meta;
