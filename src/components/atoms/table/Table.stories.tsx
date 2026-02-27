import type { Meta, StoryObj } from "@storybook/react-vite";

import { Table } from "./Table";

const meta: Meta<typeof Table> = {
    title: "Atoms/Table",
    component: Table
};

type Story = StoryObj<typeof Table>;

export const Default: Story = {};

export default meta;
