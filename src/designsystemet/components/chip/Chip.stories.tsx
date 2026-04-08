import type { Meta, StoryObj } from "@storybook/react-vite";

import { Chip } from "./Chip";

const meta: Meta<typeof Chip.Radio> = {
    title: "Designsystemet/Chip",
    component: Chip.Radio,
    args: {
        children: "Chip text"
    },
    argTypes: {
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["accent", "neutral"] }
    }
};

type Story = StoryObj<typeof Chip.Button>;

export const ChipRadio: Story = {
    args: {
        "data-size": "md",
        "data-color": "accent"
    }
};

export const ChipCheckbox: Story = {
    render: () => <Chip.Checkbox>Chip text</Chip.Checkbox>
};

export const ChipRemovable: Story = {
    render: () => <Chip.Removable>Chip text</Chip.Removable>
};

export const ChipButton: Story = {
    render: () => <Chip.Button>Chip text</Chip.Button>
};

export default meta;
