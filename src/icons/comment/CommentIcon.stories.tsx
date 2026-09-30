import type { Meta, StoryObj } from "@storybook/react-vite";
import { CommentIcon } from "./CommentIcon";

const meta: Meta<typeof CommentIcon> = {
    title: "Icons/CommentIcon",
    component: CommentIcon
};

type Story = StoryObj<typeof CommentIcon>;

export const Default: Story = {};

export default meta;
