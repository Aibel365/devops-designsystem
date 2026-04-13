import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";
import { AddIcon } from "../../../components/icons";

Button.displayName = "Button";

const meta: Meta<typeof Button> = {
    title: "Designsystemet/Button",
    component: Button,
    args: {
        children: "Button text"
    },
    argTypes: {
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "bright-blue", "green", "neutral"] },
        variant: { control: { type: "radio" }, options: ["primary", "secondary", "tertiary"] },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        icon: { control: { type: "boolean" }, options: [true, false] },
        loading: { control: { type: "boolean" }, options: [true, false] }
    }
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: "primary",
        "data-color": "bright-blue",
        icon: false,
        loading: false,
        "data-size": "md"
    }
};

export const WithIcon: Story = {
    args: {
        children: (
            <>
                <AddIcon /> Button text
            </>
        ),
        variant: "primary"
    }
};

export const OnlyIcon: Story = {
    args: {
        children: <AddIcon />,
        variant: "secondary",
        icon: true
    }
};

export const Loading: Story = {
    args: {
        children: "Button text",
        loading: true
    }
};

export default meta;
