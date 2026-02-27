import type { Meta, StoryObj } from "@storybook/react-vite";

import { Details } from "./Details";

const meta: Meta<typeof Details> = {
    title: "Atoms/Details",
    component: Details
};

type Story = StoryObj<typeof Details>;

export const Default: Story = {};

export default meta;
