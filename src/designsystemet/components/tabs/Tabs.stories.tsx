import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs } from "./Tabs";

Tabs.displayName = "Tabs";

const meta: Meta<typeof Tabs> = {
    title: "Designsystemet/Tabs",
    component: Tabs,
    args: {
        defaultValue: "value1",
        "data-size": "md",
        "data-color": "aibel-bright-blue",
        children: (
            <>
                <Tabs.List>
                    <Tabs.Tab value="value1">Tab 1</Tabs.Tab>
                    <Tabs.Tab value="value2">Tab 2</Tabs.Tab>
                    <Tabs.Tab value="value3">Tab 3</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="value1">content 1</Tabs.Panel>
                <Tabs.Panel value="value2">content 2</Tabs.Panel>
                <Tabs.Panel value="value3">content 3</Tabs.Panel>
            </>
        )
    },
    argTypes: {
        defaultValue: { control: { type: "text" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        children: { control: false, table: { disable: true } },
        value: { control: false },
        onChange: { control: false }
    }
};

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

export const Controlled: Story = {
    args: {
        value: "value1"
    }
};

export default meta;
