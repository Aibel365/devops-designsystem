import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
    title: "Designsystemet/Textarea",
    component: Textarea
};

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export default meta;
