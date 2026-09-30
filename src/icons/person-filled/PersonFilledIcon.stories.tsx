import type { Meta, StoryObj } from "@storybook/react-vite";
import { PersonFilledIcon } from "./PersonFilledIcon";

const meta: Meta<typeof PersonFilledIcon> = {
    title: "Icons/PersonFilledIcon",
    component: PersonFilledIcon
};

type Story = StoryObj<typeof PersonFilledIcon>;

export const Default: Story = {};

export default meta;
