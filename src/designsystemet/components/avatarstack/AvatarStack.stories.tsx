import type { Meta, StoryObj } from "@storybook/react-vite";

import { EXPERIMENTAL_AvatarStack } from "./AvatarStack";
import { Avatar } from "../avatar/Avatar";

const meta: Meta<typeof EXPERIMENTAL_AvatarStack> = {
    title: "Designsystemet/AvatarStack",
    component: EXPERIMENTAL_AvatarStack
};

type Story = StoryObj<typeof EXPERIMENTAL_AvatarStack>;

export const Default: Story = {
    render: () => (
        <EXPERIMENTAL_AvatarStack
            aria-label="contributors"
            avatarSize="2rem"
            overlap={40}
        >
            <Avatar aria-label="Person 1">AB</Avatar>
            <Avatar aria-label="Person 2">CD</Avatar>
            <Avatar aria-label="Person 3">EF</Avatar>
        </EXPERIMENTAL_AvatarStack>
    )
};

export default meta;
