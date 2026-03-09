import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
    title: "Atoms/Switch",
    component: Switch
};

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Disabled: StoryObj<typeof Switch> = {
    args: {
        disabled: true
    }
};

export const WithLabel: StoryObj<typeof Switch> = {
    args: {
        label: "Switch Label"
    }
};

export default meta;
