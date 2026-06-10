import type { Meta, StoryObj } from "@storybook/react-vite";
import { PersonIcon } from "./PersonIcon";

const meta: Meta<typeof PersonIcon> = {
    title: "Icons/Icons/PersonIcon",
    component: PersonIcon
};

type Story = StoryObj<typeof PersonIcon>;

export const Default: Story = {};

export default meta;
