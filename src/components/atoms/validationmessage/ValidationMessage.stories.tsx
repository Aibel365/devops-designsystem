import type { Meta, StoryObj } from "@storybook/react-vite";

import { ValidationMessage } from "./ValidationMessage";

const meta: Meta<typeof ValidationMessage> = {
    title: "Atoms/ValidationMessage",
    component: ValidationMessage
};

type Story = StoryObj<typeof ValidationMessage>;

export const Default: Story = {};

export default meta;
