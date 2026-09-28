import type { Meta, StoryObj } from "@storybook/react-vite";
import { TemplateIcon } from "./TemplateIcon";

const meta: Meta<typeof TemplateIcon> = {
    title: "Icons/TemplateIcon",
    component: TemplateIcon
};

type Story = StoryObj<typeof TemplateIcon>;

export const Default: Story = {};

export default meta;
