import type { Meta, StoryObj } from "@storybook/react-vite";
import { HomeIcon } from "./HomeIcon";

const meta: Meta<typeof HomeIcon> = {
    title: "Icons/HomeIcon",
    component: HomeIcon
};

type Story = StoryObj<typeof HomeIcon>;

export const Default: Story = {};

export default meta;
