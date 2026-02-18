import { Meta, StoryObj } from "@storybook/react-vite";
import { UnfoldLessIcon } from "./UnfoldLessIcon";

const meta: Meta<typeof UnfoldLessIcon> = {
    title: "Icons/Icons/UnfoldLessIcon",
    component: UnfoldLessIcon,
    args: {
        size: 20,
        color: "#003366"
    }
};

type Story = StoryObj<typeof UnfoldLessIcon>;

export const Default: Story = {};

export default meta;
