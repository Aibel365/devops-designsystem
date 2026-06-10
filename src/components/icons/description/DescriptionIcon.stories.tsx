import type { Meta, StoryObj } from "@storybook/react-vite";
import { DescriptionIcon } from "./DescriptionIcon";

const meta: Meta<typeof DescriptionIcon> = {
    title: "Icons/Icons/DescriptionIcon",
    component: DescriptionIcon
};

type Story = StoryObj<typeof DescriptionIcon>;

export const Default: Story = {};

export default meta;
