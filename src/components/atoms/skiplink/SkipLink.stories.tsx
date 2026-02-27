import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkipLink } from "./SkipLink";

const meta: Meta<typeof SkipLink> = {
    title: "Atoms/SkipLink",
    component: SkipLink
};

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {};

export default meta;
