import type { Meta, StoryObj } from "@storybook/react-vite";

import { Radio } from "./Radio";

const meta: Meta<typeof Radio> = {
    title: "Designsystemet/Radio",
    component: Radio
};

type Story = StoryObj<typeof Radio>;

export const Default: Story = { render: () => <Radio label="This is a radio" /> };

export default meta;
