import { Meta, StoryObj } from "@storybook/react-vite";
import { CheckboxIcon } from "./CheckboxIcon";

const meta: Meta<typeof CheckboxIcon> = {
    title: "Icons/Icons/CheckboxIcon",
    component: CheckboxIcon,
    args: {
        size: 20,
        color: "#003366"
    }
};

type Story = StoryObj<typeof CheckboxIcon>;

export const Default: Story = {};

export default meta;
