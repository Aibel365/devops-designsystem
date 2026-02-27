import type { Meta, StoryObj } from "@storybook/react-vite";

import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
    title: "Atoms/Heading",
    component: Heading
};

type Story = StoryObj<typeof Heading>;

export const Default: Story = { render: () => <Heading>This is a heading</Heading> };

export default meta;
