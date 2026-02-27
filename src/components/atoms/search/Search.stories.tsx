import type { Meta, StoryObj } from "@storybook/react-vite";

import { Search } from "./Search";
import { Button } from "../button/Button";

const meta: Meta<typeof Search> = {
    title: "Atoms/Search",
    component: Search
};

type Story = StoryObj<typeof Search>;

export const Default: Story = {
    render: () => (
        <Search>
            <Search.Input aria-label="Søk" />
            <Search.Clear />
            <Button>Search</Button>
        </Search>
    )
};

export default meta;
