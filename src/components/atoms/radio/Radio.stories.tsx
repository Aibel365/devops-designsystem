import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
    title: "Atoms/Radio",
    component: Radio
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = {};

export default meta;
