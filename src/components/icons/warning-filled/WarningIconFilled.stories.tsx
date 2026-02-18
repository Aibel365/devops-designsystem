import { Meta, StoryObj } from "@storybook/react-vite";
import { WarningIconFilled } from "./WarningIconFilled";

const meta: Meta<typeof WarningIconFilled> = {
    title: "Icons/Icons/WarningIconFilled",
    component: WarningIconFilled,
    args: {
        size: 20,
        color: "#8e9199"
    }
};

type Story = StoryObj<typeof WarningIconFilled>;

export const Default: Story = {};

export default meta;
