import type { Meta, StoryObj } from "@storybook/react-vite";

import { List, ListItem } from "./List";

const meta: Meta<typeof ListItem> = {
    title: "Atoms/List",
    component: ListItem
};

type Story = StoryObj<typeof ListItem>;

//TODO Same issue as errorsummary, listItems does not get a dot in front of them.
export const Default: Story = {
    render: () => (
        <List.Unordered>
            <List.Item>Bøyabreen</List.Item>
            <List.Item>Briksdalsbreen</List.Item>
            <List.Item>Nigardsbreen</List.Item>
        </List.Unordered>
    )
};

export default meta;
