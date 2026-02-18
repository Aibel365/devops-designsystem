import { Meta, StoryObj } from "@storybook/react-vite";
import { InfoIconFilled } from "./InfoIconFilled";

const meta: Meta<typeof InfoIconFilled> = {
    title: "Icons/Icons/InfoIconFilled",
    component: InfoIconFilled,
    args: {
        size: 20,
        color: "#003366"
    }
};

type Story = StoryObj<typeof InfoIconFilled>;

export const Default: Story = {};

export default meta;
