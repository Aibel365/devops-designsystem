import type { Meta, StoryObj } from "@storybook/react-vite";
import { CompletedStatusIcon } from "./CompletedStatusIcon";

const meta: Meta<typeof CompletedStatusIcon> = {
    title: "Icons/Icons/CompletedStatusIcon",
    component: CompletedStatusIcon
};

type Story = StoryObj<typeof CompletedStatusIcon>;

export const Default: Story = {};

export default meta;
