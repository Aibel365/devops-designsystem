import type { Meta, StoryObj } from "@storybook/react-vite";

import { Fieldset } from "./Fieldset";

const meta: Meta<typeof Fieldset> = {
    title: "Atoms/Fieldset",
    component: Fieldset
};

type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {};

export default meta;
