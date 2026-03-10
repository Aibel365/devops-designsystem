import type { Meta, StoryObj } from "@storybook/react-vite";

import { Chip } from "./Chip";

const meta: Meta<typeof Chip.Radio> = {
    title: "Designsystemet/Chip",
    component: Chip.Radio,
    subcomponents: {
        Checkbox: Chip.Checkbox,
        Removable: Chip.Removable,
        Button: Chip.Button
    },
    args: {
        children: "Chip text"
    }
};

type Story = StoryObj<typeof Chip.Button>;

export const ChipRadio: Story = {
    name: "Chip.Radio"
};

export const ChipCheckbox: Story = {
    name: "Chip.Checkbox",
    render: () => <Chip.Checkbox>Chip text</Chip.Checkbox>
};

export const ChipRemovable: Story = {
    name: "Chip.Removable",
    render: () => <Chip.Removable>Chip text</Chip.Removable>
};

export const ChipButton: Story = {
    name: "Chip.Button",
    render: () => <Chip.Button>Chip text</Chip.Button>
};

export default meta;
