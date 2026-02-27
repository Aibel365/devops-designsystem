import type { Meta, StoryObj } from "@storybook/react-vite";

import { Search } from "./Search";

const meta: Meta<typeof Search> = {
    title: "Atoms/Search",
    component: Search
};

type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export default meta;
