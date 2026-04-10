import type { Meta, StoryObj } from "@storybook/react-vite";

import { Search } from "./Search";
import { Field } from "../field/Field";
import { Label } from "../typography/label/Label";

const meta: Meta<typeof Search> = {
    title: "Designsystemet/Search",
    component: Search,
    args: {
        "data-color": "aibel-blue",
        "data-size": "md",
        children: (
            <>
                <Search.Input aria-label="Search" />
                <Search.Clear />
                <Search.Button>Search</Search.Button>
            </>
        )
    },
    argTypes: {
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "bright-blue", "green", "neutral"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        children: { control: false, table: { disable: true } }
    }
};

type Story = StoryObj<typeof Search>;

export const Default: Story = {};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <Search.Input aria-label="Search" />
                <Search.Clear />
            </>
        )
    }
};

export const WithLabel: Story = {
    args: {
        children: (
            <Field>
                <Label>Search for documents</Label>
                <Search>
                    <Search.Input name="doc-search" />
                    <Search.Clear />
                    <Search.Button>Search</Search.Button>
                </Search>
            </Field>
        )
    }
};

export default meta;
