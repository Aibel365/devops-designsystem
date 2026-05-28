import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkipLink } from "./SkipLink";
import { Paragraph } from "../typography/paragraph/Paragraph";

Paragraph.displayName = "Paragraph";
SkipLink.displayName = "SkipLink";

const meta: Meta<typeof SkipLink> = {
    title: "Designsystemet/SkipLink",
    component: SkipLink,
    args: {
        "data-size": "md",
        "data-color": "aibel-bright-blue",
        children: "Press this link",
        href: "#main-content"
    },
    argTypes: {
        "data-size": { control: { type: "radio" }, options: ["sm", "md", "lg"] },
        "data-color": { control: { type: "radio" }, options: ["aibel-blue", "aibel-bright-blue", "aibel-green", "aibel-neutral"] },
        children: { control: false },
        href: { control: false }
    }
};

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
    render: (args) => (
        <Paragraph>
            To reveal the SkipLink, tab into this example, or click inside the example and press <kbd>Tab</kbd>.<SkipLink {...args} />
        </Paragraph>
    )
};

export default meta;
