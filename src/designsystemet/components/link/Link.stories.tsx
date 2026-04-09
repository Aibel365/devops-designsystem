import type { Meta, StoryObj } from "@storybook/react-vite";

import { Link } from "./Link";
import { Paragraph } from "../typography";
import { AddIcon } from "../../../components/icons";

const meta: Meta<typeof Link> = {
    title: "Designsystemet/Link",
    component: Link,
    args: {
        children: "This is a link",
        href: "https://www.aibel.com"
    },
    argTypes: {
        href: { control: { type: "text" } },
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["accent", "neutral"] }
    }
};

type Story = StoryObj<typeof Link>;

export const Default: Story = {};

export const InText: Story = {
    render: () => (
        <Paragraph>
            Check out our website at <Link href="https://designsystemet.no/?=794">www.Aibel.no</Link>.
        </Paragraph>
    )
};
export const WithIcon: Story = {
    args: {
        children: (
            <>
                <AddIcon /> <span>It's a link</span>
            </>
        )
    }
};

export const MultipleIcons: Story = {
    args: {
        children: (
            <>
                <AddIcon /> <span>It's a link</span> <AddIcon /> <span>with several icons</span> <AddIcon />
            </>
        )
    }
};

export default meta;
