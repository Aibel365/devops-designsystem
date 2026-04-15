import type { Meta, StoryObj } from "@storybook/react-vite";

import { Spinner } from "./Spinner";

Spinner.displayName = "Spinner";

const meta: Meta<typeof Spinner> = {
    title: "Designsystemet/Spinner",
    component: Spinner,
    args: {
        "data-size": "md"
    },
    argTypes: {
        "data-size": { control: { type: "radio" }, options: ["2xs", "xs", "sm", "md", "lg", "xl"] }
    }
};

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export default meta;
