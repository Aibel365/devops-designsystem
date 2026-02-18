import { Meta, StoryObj } from "@storybook/react-vite";
import { DeleteIcon } from "./DeleteIcon";

const meta: Meta<typeof DeleteIcon> = {
    title: "Icons/Icons/DeleteIcon",
    component: DeleteIcon,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof DeleteIcon>;

export const Default: Story = {};

export default meta;
