import type { Meta, StoryObj } from "@storybook/react-vite";

import { EXPERIMENTAL_AvatarStack } from "./AvatarStack";
import { Avatar } from "../avatar/Avatar";

const meta: Meta<typeof EXPERIMENTAL_AvatarStack> = {
    title: "Designsystemet/AvatarStack",
    component: EXPERIMENTAL_AvatarStack,
    argTypes: { avatarSize: { control: "text" }, gap: { control: "text" }, overlap: { control: "number" }, suffix: { control: "text" }, expandable: { control: { type: "boolean" } } }
};

type Story = StoryObj<typeof EXPERIMENTAL_AvatarStack>;

export const Default: Story = {
    render: () => (
        <EXPERIMENTAL_AvatarStack aria-label="contributors">
            <Avatar aria-label="Person 1">AB</Avatar>
            <Avatar aria-label="Person 2">CD</Avatar>
            <Avatar aria-label="Person 3">EF</Avatar>
        </EXPERIMENTAL_AvatarStack>
    )
};

export const SmallSize: Story = {
    render: () => (
        <EXPERIMENTAL_AvatarStack
            aria-label="contributors"
            avatarSize="2rem"
        >
            <Avatar aria-label="Person 1">AB</Avatar>
            <Avatar aria-label="Person 2">CD</Avatar>
            <Avatar aria-label="Person 3">EF</Avatar>
        </EXPERIMENTAL_AvatarStack>
    )
};

export const WithGap: Story = {
    render: () => (
        <EXPERIMENTAL_AvatarStack
            aria-label="contributors"
            gap="0.5rem"
        >
            <Avatar aria-label="Person 1">AB</Avatar>
            <Avatar aria-label="Person 2">CD</Avatar>
            <Avatar aria-label="Person 3">EF</Avatar>
        </EXPERIMENTAL_AvatarStack>
    )
};

export const HighOverlap: Story = {
    render: () => (
        <EXPERIMENTAL_AvatarStack
            aria-label="contributors"
            overlap={70}
        >
            <Avatar aria-label="Person 1">AB</Avatar>
            <Avatar aria-label="Person 2">CD</Avatar>
            <Avatar aria-label="Person 3">EF</Avatar>
        </EXPERIMENTAL_AvatarStack>
    )
};

export const Expandable: Story = {
    render: () => (
        <EXPERIMENTAL_AvatarStack
            aria-label="contributors"
            expandable={true}
        >
            <Avatar aria-label="Person 1">AB</Avatar>
            <Avatar aria-label="Person 2">CD</Avatar>
            <Avatar aria-label="Person 3">EF</Avatar>
        </EXPERIMENTAL_AvatarStack>
    )
};

export default meta;
