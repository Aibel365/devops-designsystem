import type { Meta, StoryObj } from "@storybook/react-vite";

import { EXPERIMENTAL_Suggestion } from "./Suggestion";

const meta: Meta<typeof EXPERIMENTAL_Suggestion> = {
    title: "Atoms/Suggestion",
    component: EXPERIMENTAL_Suggestion
};

type Story = StoryObj<typeof EXPERIMENTAL_Suggestion>;

export const Default: Story = {};

export default meta;
