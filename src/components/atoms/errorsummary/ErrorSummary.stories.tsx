import type { Meta, StoryObj } from "@storybook/react-vite";

import { ErrorSummary } from "./ErrorSummary";

const meta: Meta<typeof ErrorSummary> = {
    title: "Atoms/ErrorSummary",
    component: ErrorSummary
};

type Story = StoryObj<typeof ErrorSummary>;

export const Default: Story = {};

export default meta;
