import type { Meta, StoryObj } from "@storybook/react-vite";
import { AibelLogo } from "./AibelLogo";

const meta: Meta<typeof AibelLogo> = {
    title: "Aibel/Logo",
    component: AibelLogo,
    argTypes: {},
    args: {}
};

type Story = StoryObj<typeof AibelLogo>;

export const Default: Story = {};
export default meta;
