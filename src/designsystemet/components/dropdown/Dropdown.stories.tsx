import type { Meta, StoryObj } from "@storybook/react-vite";

import { Dropdown } from "./Dropdown";

Dropdown.displayName = "Dropdown";

const meta: Meta<typeof Dropdown> = {
    title: "Designsystemet/Dropdown",
    component: Dropdown,
    args: {
        "data-color": "bright-blue",
        placement: "bottom-end",
        autoPlacement: false,
        "data-size": "md"
    },
    argTypes: {
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "bright-blue", "green", "neutral"] },
        placement: { control: { type: "select" }, options: ["none", "top", "right", "bottom", "left", "top-start", "top-end", "right-start", "right-end", "bottom-start", "bottom-end", "left-start", "left-end"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        open: { control: { type: "boolean" }, options: [true, false] },
        autoPlacement: { control: { type: "boolean" }, options: [true, false] },
        children: {
            control: false,
            table: { disable: true }
        }
    }
};

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    render: (args) => (
        <Dropdown.TriggerContext>
            <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
            <Dropdown {...args}>
                <Dropdown.Heading>First heading</Dropdown.Heading>
                <Dropdown.List>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 1.1</Dropdown.Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 1.2</Dropdown.Button>
                    </Dropdown.Item>
                </Dropdown.List>
                <Dropdown.Heading>Second heading</Dropdown.Heading>
                <Dropdown.List>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 2.1</Dropdown.Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 2.2</Dropdown.Button>
                    </Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
        </Dropdown.TriggerContext>
    )
};

export const PlacedRight: Story = {
    args: {
        placement: "right"
    },
    render: (args) => (
        <Dropdown.TriggerContext>
            <Dropdown.Trigger>Dropdown</Dropdown.Trigger>
            <Dropdown {...args}>
                <Dropdown.Heading>First heading</Dropdown.Heading>
                <Dropdown.List>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 1.1</Dropdown.Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 1.2</Dropdown.Button>
                    </Dropdown.Item>
                </Dropdown.List>
                <Dropdown.Heading>Second heading</Dropdown.Heading>
                <Dropdown.List>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 2.1</Dropdown.Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Dropdown.Button>Button 2.2</Dropdown.Button>
                    </Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
        </Dropdown.TriggerContext>
    )
};

export default meta;
