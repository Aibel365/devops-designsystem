import type { Meta, StoryObj } from "@storybook/react-vite";
import { DangerStatusIcon } from "./DangerStatusIcon";

const meta: Meta<typeof DangerStatusIcon> = {
    title: "Icons/Icons/DangerStatusIcon",
    component: DangerStatusIcon
};

type Story = StoryObj<typeof DangerStatusIcon>;

export const Default: Story = {};

export default meta;
