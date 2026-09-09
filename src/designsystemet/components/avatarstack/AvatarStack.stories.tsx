import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CSSProperties } from "react";
import { Avatar } from "../avatar/Avatar";
import { EXPERIMENTAL_AvatarStack } from "./AvatarStack";

EXPERIMENTAL_AvatarStack.displayName = "AvatarStack";

const avatars = (
    <>
        <li>
            <Avatar aria-label="Person 1"></Avatar>
        </li>
        <li>
            <Avatar aria-label="Person 2"></Avatar>
        </li>
        <li>
            <Avatar aria-label="Person 3"></Avatar>
        </li>
    </>
);
const meta: Meta<typeof EXPERIMENTAL_AvatarStack> = {
    title: "Designsystemet/AvatarStack",
    component: EXPERIMENTAL_AvatarStack,
    args: { children: avatars, expandable: undefined },
    argTypes: {
        children: { control: false, table: { disable: true } },
        expandable: { control: { type: "radio" }, options: [undefined, "fixed", false, true] }
    }
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallSize: Story = {
    args: { style: { "--dsc-avatar-stack-size": "2rem" } as CSSProperties }
};

export const WithGap: Story = {
    args: { style: { "--dsc-avatar-stack-gap": "0.5rem" } as CSSProperties }
};

export const HighOverlap: Story = {
    args: { style: { "--dsc-avatar-stack-overlap": "32px" } as CSSProperties }
};

export const Expandable: Story = {
    args: { expandable: true }
};

export default meta;
