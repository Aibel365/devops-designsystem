import type { Meta, StoryObj } from "@storybook/react-vite";

import { Link } from "./Link";

const meta: Meta<typeof Link> = {
    title: "Atoms/Link",
    component: Link
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export default meta;
