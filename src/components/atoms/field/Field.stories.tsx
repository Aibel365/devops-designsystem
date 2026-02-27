import type { Meta, StoryObj } from "@storybook/react-vite";

import { Field } from "./Field";

const meta: Meta<typeof Field> = {
    title: "Atoms/Field",
    component: Field
};

type Story = StoryObj<typeof Field>;

export const Default: Story = {};

export default meta;
