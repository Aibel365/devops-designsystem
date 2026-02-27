import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textfield } from "./Textfield";

const meta: Meta<typeof Textfield> = {
    title: "Atoms/Textfield",
    component: Textfield
};

type Story = StoryObj<typeof Textfield>;

export const Default: Story = {};

export default meta;
