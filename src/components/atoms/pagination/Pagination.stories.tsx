import type { Meta, StoryObj } from "@storybook/react-vite";

import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
    title: "Atoms/Pagination",
    component: Pagination
};

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export default meta;
