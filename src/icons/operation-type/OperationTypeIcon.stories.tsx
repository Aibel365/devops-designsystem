import type { Meta, StoryObj } from "@storybook/react-vite";
import { OperationTypeIcon } from "./OperationTypeIcon";

const meta: Meta<typeof OperationTypeIcon> = {
    title: "Icons/OperationTypeIcon",
    component: OperationTypeIcon
};

type Story = StoryObj<typeof OperationTypeIcon>;

export const Default: Story = {};

export default meta;
