import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
    title: "Atoms/Spinner",
    component: Spinner
};

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export default meta;
