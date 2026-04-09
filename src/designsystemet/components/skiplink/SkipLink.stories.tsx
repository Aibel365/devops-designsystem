import type { Meta, StoryObj } from "@storybook/react-vite";

import { SkipLink } from "./SkipLink";
import { Paragraph } from "../typography/paragraph/Paragraph";

const meta: Meta<typeof SkipLink> = {
    title: "Designsystemet/SkipLink",
    component: SkipLink
};

type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
    render: () => (
        <Paragraph>
            To reveal the SkipLink, tab into this example, or click inside the example and press <kbd>Tab</kbd>.<SkipLink href="#main-content">Skip to main content</SkipLink>
        </Paragraph>
    )
};

export default meta;
