import type { Meta, StoryObj } from "@storybook/react-vite";
import { TrashIcon } from "./TrashIcon";

const meta: Meta<typeof TrashIcon> = {
    title: "Icons/TrashIcon",
    component: TrashIcon
};

type Story = StoryObj<typeof TrashIcon>;

export const Default: Story = {};

export default meta;
