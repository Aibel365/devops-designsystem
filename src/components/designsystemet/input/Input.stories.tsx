import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    title: "Atoms/Input",
    component: Input
};

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export default meta;
